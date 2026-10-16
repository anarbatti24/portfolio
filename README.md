# Personal Portfolio Website

A static portfolio website for **Aniket Arbatti**, built with
[Astro](https://astro.build/) and deployed to GitHub Pages.

The whole point of how this site is built: **to add or change content, you edit
Markdown files, not website code.** Adding a project means creating one
Markdown file. The project list, the home page's featured section, and the
project's own page are all generated from that file automatically.

This README is written for someone who does not know HTML or CSS. Follow the
steps literally and you will be fine.

---

## Contents

- [A. How to run the website](#a-how-to-run-the-website)
- [B. How to add a project](#b-how-to-add-a-project)
- [C. How to edit a project](#c-how-to-edit-a-project)
- [D. How to add images](#d-how-to-add-images)
- [E. How to feature a project on the home page](#e-how-to-feature-a-project-on-the-home-page)
- [F. How to reorder projects](#f-how-to-reorder-projects)
- [G. How to update the resume](#g-how-to-update-the-resume)
- [H. How to update contact information and links](#h-how-to-update-contact-information-and-links)
- [I. How to add experience](#i-how-to-add-experience)
- [J. How to deploy to GitHub Pages](#j-how-to-deploy-to-github-pages)
- [K. Common problems](#k-common-problems)
- [L. What you can safely edit](#l-what-you-can-safely-edit)
- [M. Example templates](#m-example-templates)
- [Project schema reference](#project-schema-reference)
- [Experience schema reference](#experience-schema-reference)
- [Directory structure](#directory-structure)

---

## A. How to run the website

You need [Node.js](https://nodejs.org/) version 22 or newer. Check what you
have with `node --version`.

**First time only** — install the dependencies. Run this inside the `Website`
folder:

```bash
npm install
```

**Every time you want to work on the site** — start the development server:

```bash
npm run dev
```

Then open this address in your browser:

**<http://localhost:4321/portfolio>**

> **Important:** note the `/portfolio` on the end. Because the site is
> configured to be published at `https://anarbatti24.github.io/portfolio/`, the
> development server also serves it under `/portfolio`. Plain
> `http://localhost:4321/` will show a 404 page. The exact address is always
> printed in the terminal when the server starts, so you can copy it from
> there.

While the server is running, any file you save is picked up immediately and the
browser refreshes itself. You do not need to restart it when you add a project.

Press `Ctrl + C` in the terminal to stop the server.

### All available commands

| Command | What it does |
| --- | --- |
| `npm install` | Installs dependencies. Run once, and again if you ever delete `node_modules`. |
| `npm run dev` | Starts the local development server at <http://localhost:4321/portfolio>. |
| `npm run build` | Builds the real, publishable site into the `dist/` folder. Fails loudly if content has a mistake. |
| `npm run preview` | Serves the built `dist/` folder, so you can check the real build before pushing. Run `npm run build` first. |
| `npm run check` | Checks the code and content for type errors. Optional, but a quick way to catch mistakes. |

**Good habit before pushing:** run `npm run build`. If it finishes with
`Complete!` your content is valid. If it stops with an error, read
[section K](#k-common-problems).

---

## B. How to add a project

Seven steps, no code.

### 1. Create the Markdown file

Go to the folder `src/content/projects/`. **Make a copy of `_TEMPLATE.md`** in
that same folder.

### 2. Name the file

Rename your copy using lowercase words separated by hyphens, ending in `.md`:

```
cache-aware-matrix-multiply.md
```

**The file name becomes the web address**, so this file would be published at:

```
/projects/cache-aware-matrix-multiply/
```

Avoid spaces, capital letters, and accents in the file name. Do not start the
name with an underscore — files starting with `_` are deliberately ignored by
the website (that is how `_TEMPLATE.md` stays off the site).

### 3. Fill in the metadata

The top of the file, between the two `---` lines, is the **metadata** (also
called frontmatter). It looks like this:

```yaml
---
title: "Cache-Aware Matrix Multiply"
shortDescription: "A C++ experiment in blocking matrix multiplication for the L1 cache."
category: "Performance"
status: "In Progress"
startDate: "2026-10"
featured: false
technologies:
  - C++
  - Linux
githubUrl: "https://github.com/anarbatti24/cache-aware-matrix-multiply"
sortOrder: 6
draft: false
---
```

Rules:

- Only `title` and `shortDescription` are **required**. Delete any other line
  you do not need — missing fields are simply not shown on the site, and never
  leave an empty space or a broken link behind.
- Keep the `"` quotes around text.
- Keep the two-space indentation under `technologies:`.
- `status` must be exactly one of `"Planned"`, `"In Progress"`, or
  `"Completed"`.
- Dates are written as `"YYYY-MM"`, for example `"2026-10"`.
- Lines starting with `#` are notes to yourself and are ignored. Delete them
  freely.

The full list of fields is in the
[project schema reference](#project-schema-reference) below.

### 4. Write the project description

Everything below the closing `---` is the body of the page, written in ordinary
Markdown:

```markdown
## Overview

What the project does, and why I built it.

## Technical approach

How I implemented it, and the decisions I made.

- A bullet point
- Another bullet point

## Results

| Version | Time | Notes |
| --- | --- | --- |
| v1 | 29 us | baseline |
| v2 | 10 us | packed representation |
```

**Sections are not fixed.** Use whatever headings suit the project — a
performance write-up, an embedded project, and a web application should not be
forced into the same shape. Only what you actually write appears on the page.

One thing to avoid: do not leave a heading with nothing underneath it, because
it shows up as a blank section. If you want to reserve a section for later,
wrap it in a Markdown comment so it stays invisible until you are ready:

```markdown
<!-- To be written:

## Results and benchmarks
-->
```

The initial project files in this repository already use that technique, so you
can see it in context.

Everything ordinary Markdown supports works: headings, paragraphs, **bold**,
*italic*, bullet lists, numbered lists, links, images, tables, block quotes,
and code blocks. Code blocks get syntax highlighting if you name the language:

````markdown
```cpp
int main() { return 0; }
```
````

Long code lines and wide tables scroll inside their own box, so they will not
break the layout on a phone.

### 5. Add images (optional)

See [section D](#d-how-to-add-images).

### 6. Preview it

With `npm run dev` running, open <http://localhost:4321/portfolio/projects>.
Your project appears in the list automatically. Click it to see its page.

### 7. Publish it

```bash
git add .
git commit -m "Add cache-aware matrix multiply project"
git push
```

GitHub rebuilds and republishes the site automatically, usually within a couple
of minutes. See [section J](#j-how-to-deploy-to-github-pages).

---

## C. How to edit a project

Everything about a project lives in its one Markdown file in
`src/content/projects/`. Open that file and change it:

| What you want to change | Where to change it |
| --- | --- |
| Title | `title` in the metadata |
| Listing description | `shortDescription` in the metadata |
| Technologies | the `technologies` list in the metadata |
| Status label | `status` in the metadata |
| GitHub link | `githubUrl` in the metadata |
| Live demo link | `liveUrl` in the metadata |
| Dates | `startDate` and `endDate` in the metadata |
| Category | `category` in the metadata |
| Position in the list | `sortOrder` in the metadata ([section F](#f-how-to-reorder-projects)) |
| Shown on the home page | `featured` in the metadata ([section E](#e-how-to-feature-a-project-on-the-home-page)) |
| The write-up itself | the Markdown underneath the metadata |
| Its web address | the file name |

To **remove a link**, delete that whole line. The link then disappears from the
site rather than becoming an empty or broken link.

To **hide a project temporarily** without deleting it, set `draft: true`. It
vanishes from the projects page and the home page, and no page is generated for
it. Set it back to `false` to bring it back.

> **Note on changing a file name:** the web address changes with it, so any
> link you have shared to the old address will stop working.

---

## D. How to add images

### 1. Put the file in the right folder

All project images go in:

```
public/images/projects/
```

Use a descriptive, lowercase, hyphenated filename, for example
`binaro-version-comparison.png` or `metrocketry-power-board.jpg`.

### 2. Reference it from your Markdown

Inside the body of a project file, write a line like this:

```markdown
![Average solve time per puzzle for solver versions v1, v2, and v3](/images/projects/binaro-version-comparison.png)
```

The structure is:

```
![alt text](/images/projects/your-filename.png)
```

Note the path **starts with `/images/projects/`** — not `public/`. The
`public` folder is the root of the website, so it is not part of the address.

### 3. Write good alt text

The text in square brackets is the **alt text**: what a screen reader announces
and what shows if the image fails to load. Describe what the image *shows*:

- Good: `![Block diagram of the flight computer showing the 3.3 V and 5 V rails](...)`
- Poor: `![diagram](...)`
- Poor: `![screenshot of my project](...)`

### 4. Optional: a thumbnail / lead image for the project

Separately from images in the body, you can set **one** image in the metadata:

```yaml
image: "/images/projects/binaro-version-comparison.png"
imageAlt: "Average solve time per puzzle for solver versions v1, v2, and v3"
```

This one image is used in two places:

- As a **small thumbnail** beside the project's row on the Projects page and in
  the home page's featured section.
- As a **full-width lead image** at the top of the project's own page.

Pick an image that reads well small — a clear graph or a clean photo works; a
dense screenshot of text does not. Any shape works: thumbnails are cropped to a
consistent rectangle automatically, so you do not need to resize anything.

Projects without an `image` simply have no thumbnail. No placeholder box is
drawn, so a list where only some projects have images still looks tidy. This is
worth knowing because a planned project may never have one.

If you set `image` you **must** also set `imageAlt`. The build will stop with a
clear message if you forget, which is deliberate — it keeps the site accessible.

### 5. Check that it works

With `npm run dev` running, open the project page in your browser. If the image
is missing, see "Broken image paths" in [section K](#k-common-problems).

### Why paths work after deployment

The site is published under a sub-path (`/portfolio/`), so a raw
`/images/...` link would point at the wrong place once deployed. A small
build-time plugin (`src/lib/base-url-plugin.mjs`) rewrites these paths for you,
which is why you can write plain `/images/projects/...` in Markdown and it
works both locally and live. You never need to think about it.

### Keep images reasonably small

Large images make pages slow. Before copying a file in:

- Screenshots and diagrams: **PNG**, ideally under ~300 KB.
- Photographs: **JPEG**, ideally under ~500 KB and no wider than 1600 px.

---

## E. How to feature a project on the home page

Open the project's Markdown file and set:

```yaml
featured: true
```

That is the only change needed. The home page reads the project collection and
shows the featured ones; nothing is duplicated, so you never have to write a
project's details twice.

**How featured projects are chosen and ordered:**

1. Only projects with `featured: true` are eligible.
2. Projects with `draft: true` are excluded.
3. They are ordered by `sortOrder`, lowest number first.
4. If two have the same `sortOrder`, they are ordered alphabetically by title.
5. At most **4** are shown. That limit is `maxFeaturedProjects` in
   `src/config/site.ts` if you ever want to change it.

Setting `featured: false` removes it from the home page. It stays on the
projects page.

---

## F. How to reorder projects

Ordering is controlled entirely by the `sortOrder` number in each project's
metadata.

```yaml
sortOrder: 1
```

**Lower numbers appear first.** `sortOrder: 1` is at the top of the page.

This applies everywhere at once: the projects page and the home page's featured
section use the same order. If two projects have the same number, they are
ordered alphabetically by title, so the order never changes unpredictably
between builds.

If you leave `sortOrder` out, it defaults to `100`, which puts the project after
everything numbered below 100.

**Example.** To move a project to the top, give it `sortOrder: 1` and bump the
one that was first to `2`. The current projects use 1, 2, 3, 4, 5.

> **Tip:** if you expect to reorder a lot, number your projects 10, 20, 30, 40
> instead of 1, 2, 3, 4. Then you can slot a new project in between two others
> by giving it 25, without renumbering anything.

---

## G. How to update the resume

Put your PDF here, with exactly this name:

```
public/documents/resume.pdf
```

To replace it later, overwrite that file with the new PDF, keeping the same
name. Then commit and push:

```bash
git add public/documents/resume.pdf
git commit -m "Update resume"
git push
```

No code changes are needed. The "Resume" links in the navigation bar, on the
home page, and in the footer all point at this one path.

**The resume links only appear when the file exists.** Until you add
`resume.pdf`, the site leaves those links out entirely rather than showing a
download that leads nowhere. So right now there is no resume link on the site —
adding the file is all it takes to make it appear.

If you ever want a different filename, change `resume` in `src/config/site.ts`
to match.

---

## H. How to update contact information and links

Everything site-wide lives in **one file**:

```
src/config/site.ts
```

Open it and you will find clearly commented sections for:

- Your name, tagline, university, and degree.
- The introduction paragraph on the home page.
- The meta description used by search engines and link previews.
- Your technical interests list.
- Your email, GitHub, and LinkedIn links, and the resume path.
- The navigation bar items.
- The site URL and base path for deployment.

Change a value there and it updates everywhere on the site.

### Two placeholders you still need to fill in

These were left empty because real values were not provided:

```ts
email: '',      // <- add your email address, without "mailto:"
linkedin: '',   // <- add your full LinkedIn profile URL
```

**An empty string means "I don't have this yet", and the link is hidden.** So
the site is correct right now — there is simply no email or LinkedIn link
anywhere on it. Fill them in like this:

```ts
email: 'you@example.com',
linkedin: 'https://www.linkedin.com/in/your-profile/',
```

Keep the quotes and the trailing comma.

---

## I. How to add experience

Experience entries work exactly like projects, in a separate folder:

```
src/content/experience/
```

1. Copy `_TEMPLATE.md` from that folder.
2. Rename it, for example `acme-software-intern.md`.
3. Fill in the metadata and write the body.
4. Save. It appears on the Experience page automatically.

Only `organization` and `role` are required. The full list is in the
[experience schema reference](#experience-schema-reference).

**Ongoing roles:** leave `endDate` out entirely and the site shows
`January 2026 – Present` automatically. Do not type "Present" yourself.

**Ordering** uses `sortOrder`, lowest first, exactly like projects. Ties fall
back to the most recent `startDate`.

The three most recent entries are also previewed on the home page. That limit
is `maxExperienceEntries` in `src/config/site.ts`.

Experience entries do not get their own pages — they all appear on the
Experience page. If a role involves technical work worth a full write-up, add a
project file as well and link between them, the way the MetRocketry entries do.
Keep the project page about the engineering and the experience entry about the
role and responsibilities, so the two do not repeat each other.

---

## J. How to deploy to GitHub Pages

This publishes the site at `https://anarbatti24.github.io/portfolio/` for free.
You only do steps 1–4 once.

### Step 1: Create the GitHub repository

1. Go to <https://github.com/new>.
2. Set **Repository name** to `portfolio`.
3. Choose **Public** (GitHub Pages requires this on free accounts).
4. Do **not** tick "Add a README file" — this project already has one.
5. Click **Create repository**.

> **If you name the repository something other than `portfolio`,** you must
> update the base path — see step 2.

### Step 2: Check the site URL and base path

Open `src/config/site.ts` and look at the `deployment` block near the top:

```ts
export const deployment = {
  url: 'https://anarbatti24.github.io',
  base: '/portfolio',
};
```

- `url` is your GitHub username site: `https://YOUR-USERNAME.github.io`.
- `base` must be a `/` followed by **the exact repository name**.

So if you call the repository `my-site`, set `base: '/my-site'`. Getting this
wrong is the single most common cause of a deployed site with no styling and
broken links.

Two other situations:

- **Repository named `anarbatti24.github.io`** (published at the root): set
  `base: '/'`.
- **Custom domain** (e.g. `aniketarbatti.com`): set
  `url: 'https://aniketarbatti.com'` and `base: '/'`, create a file called
  `public/CNAME` containing just the domain name on one line, and set the
  domain under **Settings → Pages → Custom domain**.

After changing these values, run `npm run build` to confirm it still builds.

### Step 3: Push the code

In the `Website` folder:

```bash
git remote add origin https://github.com/anarbatti24/portfolio.git
git branch -M main
git push -u origin main
```

(The repository has already been initialised and committed locally, so there is
nothing to create first. If `git remote add` says the remote already exists,
use `git remote set-url origin <url>` instead.)

### Step 4: Turn on GitHub Pages

1. In your repository on github.com, go to **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

That is all — do not pick "Deploy from a branch". The workflow file at
`.github/workflows/deploy.yml` handles the rest.

### Step 5: Watch the deployment

1. Click the **Actions** tab in your repository.
2. You should see a run called "Deploy to GitHub Pages".
3. A green tick means it published. A red cross means it failed — click it and
   read the log; the failing step is usually "Build the site", and the error is
   the same one you would see locally from `npm run build`.

### Step 6: Verify the live site

Open <https://anarbatti24.github.io/portfolio/> and check:

- The page has its styling (not plain black text on white).
- The navigation links work.
- A project page opens.
- Any images you added appear.

The first deployment can take a few minutes to become reachable.

### Publishing changes from then on

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Every push to `main` republishes the site automatically.

---

## K. Common problems

### "Invalid Markdown metadata" / the build complains about YAML

The metadata between the `---` lines is sensitive to formatting. Check:

- Both `---` lines are present, and the opening one is the very first line.
- Text values are wrapped in `"` quotes.
- There is a **space after every colon**: `title: "My Project"`, not
  `title:"My Project"`.
- List items are indented by exactly two spaces and start with `- `.
- You have not used a tab character for indentation; use spaces.

### Schema validation errors

An error like this means a field has the wrong value:

```
[InvalidContentEntryDataError] projects → my-project data does not match collection schema.

  status: Invalid option: expected one of "Planned"|"In Progress"|"Completed"
  sortOrder: Expected type "number", received "string"
```

Read it literally — it names the file, the field, and what was wrong. Common
causes:

| Message | Fix |
| --- | --- |
| `status: Invalid option` | Use exactly `"Planned"`, `"In Progress"`, or `"Completed"`. |
| `sortOrder: Expected type "number"` | Write `sortOrder: 6`, not `sortOrder: "6"`. Numbers have no quotes. |
| `featured: Expected type "boolean"` | Write `featured: true`, not `featured: "true"`. |
| `Dates must be written as "YYYY-MM"` | Write `"2026-10"`, not `"Oct 2026"` or `"2026"`. |
| `githubUrl: Invalid URL` | Include `https://` at the front. |
| `When "image" is set you must also set "imageAlt"` | Add an `imageAlt` line describing the image. |
| `title: Required` / `Invalid input` | A required field is missing — `title` and `shortDescription` are required. |

This is the schema doing its job: it catches the mistake during the build, so a
broken page is never published.

### Broken image paths

An image shows as a broken icon or does not appear:

1. Confirm the file really is in `public/images/projects/`.
2. Confirm the **filename matches exactly**, including capital letters and the
   extension. `Graph.PNG` and `graph.png` are different files.
3. Confirm your Markdown path starts with `/images/projects/` — with a leading
   slash, and **without** `public`.
4. Restart `npm run dev` if you added the file while the server was running.

### Missing dependencies

Errors such as `Cannot find module` or `astro: command not found`:

```bash
npm install
```

If that does not fix it, delete and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Failed production builds

Run the build locally to see the real error:

```bash
npm run build
```

Read the first error, not the last — later errors are often consequences of the
first. The message names the file. Nearly all content-related failures are the
schema or YAML problems above.

### Incorrect GitHub Pages base path

**Symptom:** the deployed site loads as unstyled text, and links 404, even
though it works locally.

**Cause:** `base` in `src/config/site.ts` does not match the repository name.

**Fix:** set `base` to `/` plus the exact repository name (see step 2 of
[section J](#j-how-to-deploy-to-github-pages)), then commit and push.

### Links that work locally but fail after deployment

This is the same base-path problem. When writing links inside Markdown, always
start site-internal links with `/`:

```markdown
[See the MetRocketry project](/projects/metrocketry-avionics/)
```

The base path is added automatically at build time. Do **not** write
`/portfolio/projects/...` yourself — that would end up as
`/portfolio/portfolio/...`.

### The local site shows a 404 at `http://localhost:4321/`

That is expected. Use **<http://localhost:4321/portfolio>**, the address printed
in the terminal. See [section A](#a-how-to-run-the-website).

### A project is not appearing

1. Is its filename starting with `_`? Those are ignored on purpose.
2. Does it have `draft: true`? Set it to `false`.
3. Does the file end in `.md`?
4. Is it in `src/content/projects/`?

---

## L. What you can safely edit

### Edit freely — this is your content

| Path | What it is |
| --- | --- |
| `src/content/projects/*.md` | One file per project. Add, edit, rename, delete. |
| `src/content/experience/*.md` | One file per role. |
| `src/pages/about.md` | The About page text, in plain Markdown. |
| `public/images/projects/` | Your images. |
| `public/documents/resume.pdf` | Your resume. |

You cannot break the website by changing the words in these files. The worst
that happens is a build error that names the mistake.

### Edit occasionally — site-wide settings

| Path | What it is |
| --- | --- |
| `src/config/site.ts` | Name, intro, interests, email, social links, resume path, navigation, site URL, base path. |

This is a code file, so keep the quotes, commas, and brackets intact. Change
only the values inside the quotes.

### Leave alone unless you want to change the design

| Path | What it is |
| --- | --- |
| `src/components/` | Reusable pieces: the header, footer, project rows, status labels. |
| `src/layouts/` | Page shells: `BaseLayout` for every page, `ProjectLayout` for project pages. |
| `src/pages/` (except `about.md`) | The routes. `projects/[...slug].astro` generates all project pages. |
| `src/content.config.ts` | The metadata rules. Only edit to invent a new field. |
| `src/lib/` | Small helpers for sorting, date formatting, and URLs. |
| `src/styles/` | The CSS. Colours and spacing live in `tokens.css` if you want to adjust the look. |
| `astro.config.ts` | Framework configuration. Reads the URL and base path from `src/config/site.ts`. |
| `.github/workflows/deploy.yml` | The automatic deployment. |
| `package.json`, `tsconfig.json` | Dependencies and compiler settings. |

If you want to restyle the site, the gentlest place to start is
`src/styles/tokens.css`, which defines every colour, font, and spacing value in
one place.

---

## M. Example templates

Both templates already exist in the repository, ready to copy:

- `src/content/projects/_TEMPLATE.md`
- `src/content/experience/_TEMPLATE.md`

They are reproduced here for reference.

### New project template

```markdown
---
title: "My New Project"
shortDescription: "One or two sentences explaining what this is, shown in the project list."
category: "Systems"
status: "In Progress"
startDate: "2026-10"
featured: false
technologies:
  - C++
  - Linux
githubUrl: "https://github.com/anarbatti24/my-new-project"
sortOrder: 100
draft: false
---

## Overview

What the project does, and the short version of why it exists.

## Motivation and problem

What problem you were trying to solve, or what you were curious about.

## Technical approach

How you implemented it and the decisions you made along the way.

## Challenges and trade-offs

What was hard, what you tried that did not work, and what you traded away.

## Results and benchmarks

Only numbers you have actually measured.

| Version | Metric | Result |
| --- | --- | --- |
| v1 | | |
| v2 | | |

## What I learned

The technical lessons worth keeping.
```

Optional lines you can add to the metadata:

```yaml
endDate: "2027-02"
liveUrl: "https://example.com"
image: "/images/projects/my-new-project-diagram.png"
imageAlt: "Block diagram of the system showing the parser feeding the solver"
```

### New experience entry template

```markdown
---
organization: "Organization Name"
role: "Your Job Title"
startDate: "2026-01"
location: "Toronto, ON"
description: "A short summary of what the role involved."
technologies:
  - Example Tool
sortOrder: 100
draft: false
---

- What you were responsible for.
- What you built, supported, or led.
- Anything measurable you can honestly state.
```

Add `endDate: "2026-08"` when the role ends. Leave it out while it is ongoing
and the site shows "Present".

---

## Project schema reference

Fields for files in `src/content/projects/`. Defined in `src/content.config.ts`.

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `title` | text | **yes** | — | Page heading and listing title. |
| `shortDescription` | text | **yes** | — | Shown in the listing and used as the page's meta description. |
| `category` | text | no | — | Free-form, e.g. `"Systems"`, `"Embedded"`, `"Web"`. Any value is allowed. |
| `status` | text | no | — | Exactly `"Planned"`, `"In Progress"`, or `"Completed"`. |
| `startDate` | text | no | — | `"YYYY-MM"`, e.g. `"2026-10"`. |
| `endDate` | text | no | — | `"YYYY-MM"`. Leave out for ongoing work. |
| `featured` | true/false | no | `false` | `true` makes it eligible for the home page. |
| `technologies` | list of text | no | empty | Hidden entirely when empty. |
| `githubUrl` | URL | no | — | Must include `https://`. |
| `liveUrl` | URL | no | — | Must include `https://`. |
| `image` | text | no | — | e.g. `"/images/projects/graph.png"`. Used as the listing thumbnail and the lead image. Requires `imageAlt`. |
| `imageAlt` | text | no | — | Description of the image for screen readers. |
| `sortOrder` | number | no | `100` | Lower appears first. No quotes. |
| `draft` | true/false | no | `false` | `true` hides the project from the site. |

**Dates displayed:** `startDate` and `endDate` become
"October 2026 – February 2027". With a `startDate`, no `endDate`, and
`status: "In Progress"`, it becomes "October 2026 – Present". With neither, no
dates are shown.

## Experience schema reference

Fields for files in `src/content/experience/`.

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `organization` | text | **yes** | — | Company, team, club, or program. |
| `role` | text | **yes** | — | Your position title. |
| `startDate` | text | no | — | `"YYYY-MM"`. Recommended. |
| `endDate` | text | no | — | Leave out for current roles; shows "Present". |
| `location` | text | no | — | e.g. `"Toronto, ON"`. |
| `description` | text | no | — | One or two sentence summary. |
| `technologies` | list of text | no | empty | Hidden when empty. |
| `url` | URL | no | — | Link to the organisation. |
| `sortOrder` | number | no | `100` | Lower appears first. |
| `draft` | true/false | no | `false` | `true` hides the entry. |

---

## Directory structure

```
Website/
├── .github/workflows/deploy.yml   Automatic deployment to GitHub Pages
├── astro.config.ts                Framework config (reads src/config/site.ts)
├── package.json                   Dependencies and the npm commands
├── README.md                      This guide
│
├── public/                        Files copied to the site as-is
│   ├── favicon.svg                The small icon in the browser tab
│   ├── documents/
│   │   └── resume.pdf             YOUR RESUME GOES HERE
│   └── images/
│       └── projects/              YOUR PROJECT IMAGES GO HERE
│
└── src/
    ├── config/
    │   └── site.ts                ALL SITE-WIDE SETTINGS (name, links, URL)
    │
    ├── content/                   ALL YOUR CONTENT
    │   ├── projects/              One .md file per project
    │   │   └── _TEMPLATE.md         Copy this to add a project
    │   └── experience/            One .md file per role
    │       └── _TEMPLATE.md         Copy this to add a role
    │
    ├── content.config.ts          The metadata rules for the two collections
    │
    ├── components/                Reusable UI pieces
    │   ├── Header.astro             Name + navigation bar
    │   ├── Footer.astro             Footer links
    │   ├── ProjectRow.astro         One row in a project list
    │   ├── ProjectMeta.astro        Status, category, dates, links
    │   ├── ExperienceEntry.astro    One experience entry
    │   ├── StatusLabel.astro        The small status label
    │   └── TechList.astro           The technology list
    │
    ├── layouts/
    │   ├── BaseLayout.astro         Shared page shell and <head> metadata
    │   ├── ProjectLayout.astro      Shared project page layout
    │   └── MarkdownPage.astro       Layout for simple pages like About
    │
    ├── pages/                     One file per web address
    │   ├── index.astro              Home page
    │   ├── projects/index.astro     The projects listing
    │   ├── projects/[...slug].astro Generates every project page
    │   ├── experience.astro         The experience page
    │   ├── about.md                 The About page (plain Markdown)
    │   └── 404.astro                Page-not-found page
    │
    ├── lib/                       Small helpers
    │   ├── content.ts               Reads and sorts the collections
    │   ├── format.ts                Turns "2026-10" into "October 2026"
    │   ├── url.ts                   Builds correct URLs under the base path
    │   └── base-url-plugin.mjs      Fixes Markdown paths for the base path
    │
    └── styles/
        ├── global.css               Imports the files below
        ├── tokens.css               Colours, fonts, spacing
        ├── base.css                 Plain HTML element defaults
        ├── layout.css               Container, header, footer
        ├── components.css           Project rows, labels, entries
        └── prose.css                Everything written in Markdown
```

### Why it is built this way

- **Content is separate from presentation.** Projects and experience live in
  Markdown files under `src/content/`. The pages read those collections, so a
  new file shows up on the listing, on the home page if featured, and at its own
  URL, with no code change.
- **No information is written twice.** The home page pulls featured projects
  from the same files as the projects page.
- **Mistakes are caught at build time.** The schemas in `content.config.ts`
  validate every Markdown file, so a typo fails the build instead of publishing
  a broken page.
- **One configuration file.** `src/config/site.ts` holds every site-wide value,
  including the deployment URL and base path, which `astro.config.ts` imports.

---

## Technical notes

- **Framework:** Astro 7, static output. No React, Vue, database, or backend.
- **JavaScript shipped to the browser: none.** The built site is HTML and one
  CSS file, which is why it loads quickly.
- **Dependencies:** `astro`, `@astrojs/sitemap` (generates `sitemap-index.xml`),
  and `@astrojs/markdown-satteri` (the Markdown processor, used so the
  base-path plugin can run). `@astrojs/check` and `typescript` are development
  only.
- **Accessibility:** semantic HTML, a skip-to-content link, visible keyboard
  focus outlines, one `<h1>` per page with no skipped heading levels, alt text
  required when a lead image is set, text contrast of at least 6:1 against the
  background, and `prefers-reduced-motion` respected.
- **SEO:** per-page titles and meta descriptions, canonical URLs, Open Graph and
  Twitter card metadata, a generated sitemap, and a favicon.
