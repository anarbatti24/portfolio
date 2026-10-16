/**
 * ============================================================================
 *  SITE CONFIGURATION — THE ONE FILE FOR SITE-WIDE INFORMATION
 * ============================================================================
 *
 *  Everything in this file appears somewhere on the website. If you change a
 *  value here, it updates everywhere automatically. You never need to hunt
 *  through the rest of the code to change your email, links, or introduction.
 *
 *  Rules of thumb:
 *    - Text inside "quotes" can be edited freely.
 *    - An empty string ("") means "I don't have this yet". Empty values are
 *      hidden on the site instead of rendering an empty or broken link.
 *    - Keep the commas and the quotes exactly where they are.
 *
 *  After editing, save the file and the dev server reloads automatically.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 *  1. DEPLOYMENT SETTINGS
 *
 *  These two values control where the site lives and how every link, image,
 *  and stylesheet URL is built. They are imported by `astro.config.ts`, so
 *  this is the only place they are written down.
 *
 *  Pick ONE of the three scenarios below and set `url` and `base` to match.
 *
 *  (a) Project repository  ->  https://anarbatti24.github.io/portfolio/
 *        url:  "https://anarbatti24.github.io"
 *        base: "/portfolio"              <- must match the repository name
 *
 *  (b) User site repository named `anarbatti24.github.io`
 *        url:  "https://anarbatti24.github.io"
 *        base: "/"
 *
 *  (c) Custom domain (e.g. aniketarbatti.com)
 *        url:  "https://aniketarbatti.com"
 *        base: "/"
 *      ...and add a file called `public/CNAME` containing just the domain.
 *
 *  Currently configured for scenario (a). See README section J.
 * ------------------------------------------------------------------------ */
export const deployment = {
  /** Full origin of the deployed site, with no trailing slash. */
  url: 'https://anarbatti24.github.io',

  /** Sub-path the site is served from. Use "/" when there is no sub-path. */
  base: '/portfolio',
} as const;

/* ---------------------------------------------------------------------------
 *  2. WHO YOU ARE
 * ------------------------------------------------------------------------ */
export const site = {
  /** Shown in the navigation bar, the page titles, and the footer. */
  name: 'Aniket Arbatti',

  /** One-line descriptor shown under your name on the home page. */
  tagline: 'Computer Engineering Student',

  university: 'Toronto Metropolitan University',
  degree: 'Computer Engineering',

  /**
   * The introduction paragraph on the home page.
   * Keep it to two or three sentences.
   */
  intro:
    "I'm a Computer Engineering student at Toronto Metropolitan University interested in systems programming, software performance, and the intersection of hardware and software. I enjoy understanding how software behaves beneath the abstraction layer and using that understanding to build more efficient systems.",

  /**
   * Used for the browser tab, search results, and link previews.
   * Aim for roughly 150 characters.
   */
  description:
    'Aniket Arbatti — Computer Engineering student at Toronto Metropolitan University working on systems programming, software performance, and embedded systems.',

  /**
   * Technical interests, listed on the home page and the about page.
   * Add, remove, or reorder these freely.
   */
  interests: [
    'Systems programming',
    'High-performance computing and software optimization',
    'C and C++',
    'Linux and performance profiling',
    'Computer architecture',
    'Hardware/software integration',
    'Embedded systems',
    'AI infrastructure and inference engines',
  ],
} as const;

/* ---------------------------------------------------------------------------
 *  3. LINKS
 *
 *  Leave a value as an empty string ("") and its link disappears from the
 *  site. Nothing breaks and no empty button is left behind.
 * ------------------------------------------------------------------------ */
export const links = {
  /** Your email address, without "mailto:". PLACEHOLDER — fill this in. */
  email: '',

  github: 'https://github.com/anarbatti24',

  /** PLACEHOLDER — paste your full LinkedIn profile URL here. */
  linkedin: '',

  /**
   * Path to your resume inside the `public/` folder.
   * The link is only shown when the file actually exists, so it can never
   * become a broken link. See README section G for how to add the PDF.
   */
  resume: '/documents/resume.pdf',
} as const;

/* ---------------------------------------------------------------------------
 *  4. NAVIGATION
 *
 *  The links in the top navigation bar, in order. The resume link is added
 *  automatically at the end when the PDF is present.
 * ------------------------------------------------------------------------ */
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'About', href: '/about/' },
] as const;

/* ---------------------------------------------------------------------------
 *  5. HOME PAGE OPTIONS
 * ------------------------------------------------------------------------ */
export const homepage = {
  /**
   * Maximum number of featured projects shown on the home page.
   * Projects are chosen by `featured: true` and ordered by `sortOrder`.
   */
  maxFeaturedProjects: 4,

  /** Maximum number of experience entries previewed on the home page. */
  maxExperienceEntries: 3,
} as const;
