# syntax=docker/dockerfile:1

# ---------- Stage 1: build the static site ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies from the lockfile (reproducible, no surprise updates)
# @astrojs/tailwind@5 predates its astro@6 peer range, so allow the known-good tree
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Build
COPY . .
RUN npm run build

# ---------- Stage 2: serve with nginx ----------
FROM nginx:1.27-alpine AS runtime

# Astro is configured with base: '/bhavya-portfolio', so serve the build there
COPY --from=build /app/dist /usr/share/nginx/html/bhavya-portfolio
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
# Use 127.0.0.1, not localhost: nginx.conf only has `listen 80` (IPv4), while
# `localhost` resolves to ::1 first inside the container, so the check would
# fail with "connection refused" even though the site is being served fine.
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://127.0.0.1/bhavya-portfolio/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
