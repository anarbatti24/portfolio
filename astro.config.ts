// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

import { deployment } from './src/config/site';
import { baseUrlPlugin } from './src/lib/base-url-plugin.mjs';

/**
 * FRAMEWORK FILE — you normally do not need to edit this.
 *
 * The site URL and base path come from `src/config/site.ts`, so change them
 * there (not here) when you set up or move the GitHub Pages repository.
 */
export default defineConfig({
  site: deployment.url,
  base: deployment.base,

  // Build plain static HTML files that any static host can serve.
  output: 'static',
  trailingSlash: 'ignore',

  integrations: [sitemap()],

  markdown: {
    // Sätteri is Astro's built-in Markdown processor. The one plugin added
    // here keeps absolute paths written in Markdown (such as
    // /images/projects/graph.png) working when the site is served from a
    // sub-path like /portfolio/.
    processor: satteri({
      hastPlugins: [baseUrlPlugin({ base: deployment.base })],
    }),
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },
});
