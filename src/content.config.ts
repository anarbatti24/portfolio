/**
 * ============================================================================
 *  CONTENT SCHEMAS — the rules your Markdown files must follow
 * ============================================================================
 *
 *  FRAMEWORK FILE. You only need to edit this if you want to invent a brand
 *  new metadata field. Adding projects and experience entries does NOT
 *  require touching this file.
 *
 *  Why it exists: it checks the information at the top of every Markdown file
 *  (the part between the `---` lines). If you mistype a field name or forget
 *  a required one, the build stops with a clear message instead of quietly
 *  publishing a broken page.
 *
 *  Required fields must be present. Optional fields can be left out entirely,
 *  and when they are missing the website simply does not render that part.
 * ============================================================================
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Dates are written as "YYYY-MM" (e.g. "2026-10") or "YYYY-MM-DD".
 * They are stored as plain text to avoid time-zone surprises and are
 * formatted for display by `src/lib/format.ts`.
 */
const dateString = z
  .string()
  .regex(
    /^\d{4}-\d{2}(-\d{2})?$/,
    'Dates must be written as "YYYY-MM" or "YYYY-MM-DD", for example "2026-10".',
  );

const projects = defineCollection({
  // Every .md file in src/content/projects becomes a project page.
  // Files whose name starts with an underscore (such as _TEMPLATE.md)
  // are ignored, so templates and drafts can live alongside real content.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),

  schema: z
    .object({
      /* --- Required ------------------------------------------------ */

      /** Project name, shown as the page heading and in the listing. */
      title: z.string(),

      /** One or two sentences shown in the project listing and previews. */
      shortDescription: z.string(),

      /* --- Optional ------------------------------------------------ */

      /**
       * Free-form grouping such as "Systems", "Embedded", "Web".
       * Any text is allowed so you can add new categories without
       * editing this file.
       */
      category: z.string().optional(),

      /** One of exactly these three values, or leave it out entirely. */
      status: z.enum(['Planned', 'In Progress', 'Completed']).optional(),

      startDate: dateString.optional(),

      /**
       * Leave this out for ongoing work. A project with a start date,
       * no end date, and status "In Progress" displays as "… – Present".
       */
      endDate: dateString.optional(),

      /** Set to true to show this project on the home page. */
      featured: z.boolean().default(false),

      /** Languages, tools, and hardware. Shown as a short list. */
      technologies: z.array(z.string()).default([]),

      githubUrl: z.url().optional(),
      liveUrl: z.url().optional(),

      /**
       * Optional listing image, e.g. "/images/projects/binaro-graph.png".
       * The file must exist in `public/images/projects/`.
       * If you set `image`, you must also set `imageAlt`.
       */
      image: z.string().optional(),
      imageAlt: z.string().optional(),

      /**
       * Controls ordering. Lower numbers appear first, everywhere.
       * Ties are broken alphabetically by title.
       */
      sortOrder: z.number().default(100),

      /** Set to true to keep a project out of the published site. */
      draft: z.boolean().default(false),
    })
    .superRefine((data, ctx) => {
      if (data.image && !data.imageAlt) {
        ctx.addIssue({
          code: 'custom',
          path: ['imageAlt'],
          message:
            'When "image" is set you must also set "imageAlt" describing the image for screen readers.',
        });
      }
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),

  schema: z.object({
    /* --- Required ------------------------------------------------ */

    /** Company, team, club, or program name. */
    organization: z.string(),

    /** Your job or position title. */
    role: z.string(),

    /* --- Optional ------------------------------------------------ */

    /**
     * Recommended, but optional so you are never forced to guess a date.
     * When it is missing, no dates are shown for the entry.
     */
    startDate: dateString.optional(),

    /** Leave this out for a role you currently hold; shows "Present". */
    endDate: dateString.optional(),

    /** City, or something like "Remote". */
    location: z.string().optional(),

    /** One or two sentences summarising the role. */
    description: z.string().optional(),

    technologies: z.array(z.string()).default([]),

    /** Optional link to the organisation or team. */
    url: z.url().optional(),

    /** Lower numbers appear first. Ties fall back to newest start date. */
    sortOrder: z.number().default(100),

    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience };
