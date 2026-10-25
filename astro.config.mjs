import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jhaveri-bhavya.github.io',
  base: '/bhavya-portfolio/',
  integrations: [tailwind(), mdx()],

  // English keeps the bare base URL (prefixDefaultLocale: false), so every
  // existing link to the site still works. German is served from /de/.
  // Pages live in src/pages/ (en) and src/pages/de/ (de); copy is in
  // src/i18n/ui.ts and picked per page via Astro.currentLocale.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
