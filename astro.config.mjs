import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://brif.one',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Unlisted staff-only page (see its own file for why) — kept out of
      // the sitemap on top of not being linked anywhere on the site.
      filter: (page) => !page.includes('/personnel/'),
    }),
  ],
});
