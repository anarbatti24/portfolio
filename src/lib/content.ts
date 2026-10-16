/**
 * FRAMEWORK FILE — you do not need to edit this.
 *
 * Reads the Markdown files in `src/content/` and puts them in order. Every
 * page uses these functions, which is why adding a Markdown file is enough to
 * make a project appear in the listing, on the home page, and at its own URL.
 *
 * ORDERING RULES (documented in README sections E and F):
 *   Projects   — `sortOrder` ascending (lower number first), then title A→Z.
 *   Experience — `sortOrder` ascending, then most recent start date first.
 *
 * Anything marked `draft: true` is left out of the published site.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Experience = CollectionEntry<'experience'>;

/** All published projects, in display order. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  return projects.sort((a, b) => {
    if (a.data.sortOrder !== b.data.sortOrder) {
      return a.data.sortOrder - b.data.sortOrder;
    }
    return a.data.title.localeCompare(b.data.title);
  });
}

/** Published projects with `featured: true`, in the same order. */
export async function getFeaturedProjects(limit?: number): Promise<Project[]> {
  const featured = (await getProjects()).filter(({ data }) => data.featured);
  return typeof limit === 'number' ? featured.slice(0, limit) : featured;
}

/** All published experience entries, in display order. */
export async function getExperience(limit?: number): Promise<Experience[]> {
  const entries = await getCollection('experience', ({ data }) => !data.draft);

  const sorted = entries.sort((a, b) => {
    if (a.data.sortOrder !== b.data.sortOrder) {
      return a.data.sortOrder - b.data.sortOrder;
    }
    return (b.data.startDate ?? '').localeCompare(a.data.startDate ?? '');
  });

  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}

/**
 * A project counts as ongoing when it has not finished and is still being
 * worked on. Used to decide whether to print "– Present".
 */
export function isOngoing(project: Project): boolean {
  return project.data.status === 'In Progress' && !project.data.endDate;
}
