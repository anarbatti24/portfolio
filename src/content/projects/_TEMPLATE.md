---
# ============================================================================
#  PROJECT TEMPLATE — copy this file to add a new project.
#
#  HOW TO USE IT
#    1. Make a copy of this file in this same folder
#       (src/content/projects/).
#    2. Rename the copy using lowercase words and hyphens, ending in .md,
#       for example:  cache-aware-matrix-multiply.md
#       The file name becomes the web address:
#         /projects/cache-aware-matrix-multiply/
#    3. Fill in the fields below, between the two --- lines.
#    4. Write the write-up underneath.
#    5. Save. The project appears in the listing automatically.
#
#  IMPORTANT
#    - Files whose name starts with an underscore (like this one) are
#      ignored, so this template never shows up on the website.
#    - Lines starting with # are notes to yourself. They are ignored.
#      You can delete them.
#    - Keep the quotes around text. Keep the two-space indentation in lists.
# ============================================================================

# --- REQUIRED ---------------------------------------------------------------

title: "My New Project"
shortDescription: "One or two sentences explaining what this is, shown in the project list."

# --- OPTIONAL: delete any line you do not need ------------------------------

# Free-form grouping, e.g. "Systems", "Embedded", "Web", "Performance".
category: "Systems"

# Must be exactly one of: "Planned", "In Progress", "Completed".
status: "In Progress"

# Dates are written as "YYYY-MM". Leave endDate out while work continues.
startDate: "2026-10"
# endDate: "2027-02"

# true  -> also shown on the home page
# false -> only on the projects page
featured: false

# Languages, tools, and hardware. Keep the "  - " indentation.
technologies:
  - C++
  - Linux

# Full URLs, or delete the line if there is none.
githubUrl: "https://github.com/anarbatti24/my-new-project"
# liveUrl: "https://example.com"

# Optional image shown at the top of the project page and nowhere else.
# Put the file in public/images/projects/ first.
# If you set image, you MUST also set imageAlt.
# image: "/images/projects/my-new-project-diagram.png"
# imageAlt: "Block diagram of the system showing the parser feeding the solver"

# Lower numbers appear first in every list. 1 is the top of the page.
sortOrder: 100

# Set to true to hide the project from the website while you draft it.
draft: false
---

<!--
  Everything below is ordinary Markdown. Use as many or as few sections as
  the project deserves — nothing here is required, and the page only shows
  what you actually write. Delete any heading you do not use.

  Useful Markdown:
    ## Heading            ### Smaller heading
    **bold**              *italic*
    - bullet list         1. numbered list
    [link text](https://example.com)
    ![alt text](/images/projects/filename.png)
    `inline code`
    | table | header |    (see the Results section below)
-->

## Overview

What the project does, and the short version of why it exists.

## Motivation and problem

What problem you were trying to solve, or what you were curious about.

## Goals and constraints

What you set out to achieve, and what limits you were working within
(hardware, time, language, interfaces you had to match).

## Technical approach

How you implemented it and the decisions you made along the way.

## Architecture and implementation

The structure of the system. This is a good place for a diagram:

![Describe the diagram here for screen readers](/images/projects/example-diagram.png)

And for code, which is syntax-highlighted automatically:

```cpp
// Use the language name after the three backticks: cpp, c, python, bash, ts
int example(int x) {
    return x * 2;
}
```

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

## Future improvements

What you would do next.
