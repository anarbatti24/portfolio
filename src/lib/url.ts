/**
 * FRAMEWORK FILE — you do not need to edit this.
 *
 * Helpers for building URLs that are correct both on your computer and when
 * the site is deployed under a sub-path such as /portfolio/.
 */
import { existsSync } from 'node:fs';
import path from 'node:path';

/**
 * Turns a site-root path into a URL that includes the configured base path.
 *
 *   url('/projects/')  ->  '/projects/'            (local, base "/")
 *   url('/projects/')  ->  '/portfolio/projects/'  (deployed, base "/portfolio")
 */
export function url(pathname = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const suffix = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${suffix}`;
}

/** Builds the URL of a project detail page from its file name (its id). */
export function projectUrl(id: string): string {
  return url(`/projects/${id}/`);
}

/**
 * Checks whether a file exists inside the `public/` folder.
 *
 * Used so that optional downloads (such as the resume) are only linked when
 * the file is actually there. This runs at build time only.
 */
export function publicFileExists(pathname: string): boolean {
  const relative = pathname.replace(/^\/+/, '');
  return existsSync(path.join(process.cwd(), 'public', relative));
}
