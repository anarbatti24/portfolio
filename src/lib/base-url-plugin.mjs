/**
 * FRAMEWORK FILE — you do not need to edit this.
 *
 * WHAT PROBLEM THIS SOLVES
 *
 * When the site is deployed to https://user.github.io/repository/, every local
 * URL needs a "/repository" prefix. Astro adds that prefix automatically to
 * links written inside components, but not to plain Markdown such as:
 *
 *     ![Benchmark graph](/images/projects/benchmark.png)
 *     [See the project page](/projects/my-project/)
 *
 * Without this plugin those would point at the wrong place once deployed.
 *
 * WHAT IT DOES
 *
 * At build time it finds links, images, and media in your Markdown whose path
 * starts with "/" and adds the base path. Links to other websites
 * (https://..., mailto:...) and anchors (#results) are left untouched.
 *
 * The result: you write ordinary Markdown paths starting with "/" and they
 * work both on your computer and on the deployed site.
 */

/** Attributes that can hold a local path, per HTML element. */
const URL_ATTRIBUTES = ['href', 'src', 'poster'];

/**
 * @param {{ base?: string }} options
 * @returns {import('satteri').HastPluginEntry}
 */
export function baseUrlPlugin({ base = '/' } = {}) {
  // "/portfolio/" and "/portfolio" both become "/portfolio"; "/" becomes "".
  const prefix = base.replace(/\/+$/, '');

  // No sub-path means there is nothing to rewrite. Returning null leaves the
  // plugin out of the pipeline entirely.
  if (prefix === '') return null;

  return {
    name: 'astro-markdown-base-url',
    element: {
      filter: ['a', 'img', 'video', 'audio', 'source', 'track', 'embed'],
      visit(node, ctx) {
        for (const attribute of URL_ATTRIBUTES) {
          const value = node.properties?.[attribute];

          const isLocalAbsolutePath =
            typeof value === 'string' &&
            value.startsWith('/') &&
            // Protocol-relative URLs such as //example.com are external.
            !value.startsWith('//') &&
            // Do not prefix twice.
            value !== prefix &&
            !value.startsWith(`${prefix}/`);

          if (isLocalAbsolutePath) {
            ctx.setProperty(node, attribute, prefix + value);
          }
        }
      },
    },
  };
}
