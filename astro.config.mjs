import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jhaveri-bhavya.github.io',
  base: '/bhavya-portfolio',
  integrations: [tailwind()],
});
