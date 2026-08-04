import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://brif.one',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
