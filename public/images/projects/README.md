# Project images

Put every project screenshot, benchmark graph, architecture diagram, and
photograph in **this folder**.

## How to use an image

1. Copy the file here. Use a descriptive, lowercase, hyphenated filename:

   ```
   binaro-version-comparison.png
   metrocketry-power-board.jpg
   go-architecture.png
   ```

2. Reference it from a project Markdown file using a path that starts with
   `/images/projects/`:

   ```markdown
   ![Average solve time per puzzle for v1, v2, and v3](/images/projects/binaro-version-comparison.png)
   ```

   The text in the square brackets is the **alt text**. Describe what the image
   shows, as if explaining it to someone who cannot see it. Do not write
   "image of" or "screenshot of".

3. Save and check it in the browser at <http://localhost:4321>.

You never need to edit any website code to add an image. The `/images/...`
path is rewritten automatically at build time so it also works once the site is
deployed under a GitHub Pages sub-path.

## Keep files reasonably small

Large images make the page slow to load. Before copying a file here:

- Screenshots and diagrams: save as **PNG**, ideally under ~300 KB.
- Photographs: save as **JPEG**, ideally under ~500 KB, no wider than 1600 px.

This README file is ignored by the website and is only here as a reminder.
