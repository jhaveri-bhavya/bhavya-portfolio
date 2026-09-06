# Bhavya Jhaveri — Portfolio

## About

This repository contains the source for my personal portfolio website. It's a small,
static site covering my background, experience, education, and writing.

## Live site

You can view the website here: **https://jhaveri-bhavya.github.io/bhavya-portfolio/**

## Tech stack

- [Astro](https://astro.build/) — static site framework
- [Tailwind CSS](https://tailwindcss.com/) — styling
- GitHub Pages + GitHub Actions — hosting and deployment

## Running locally

```bash
npm ci --legacy-peer-deps
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the static site to dist/
npm run preview  # preview the production build
```

## Deployment

Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`, which
builds the site and publishes `dist/` to GitHub Pages.
