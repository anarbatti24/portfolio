---
title: "High-Performance Analysis of Binaro"
shortDescription: "A C++ project focused on analyzing and improving the performance of a 10×10 Binaro puzzle solver on Linux."
category: "Performance"
status: "In Progress"
# TODO: add the month you started, e.g. "2025-06", then delete this comment.
# startDate: "2025-06"
featured: true
technologies:
  - C++
  - Linux
  - perf
  - Make
  - Shell script
githubUrl: "https://github.com/anarbatti24/High-Performance-Analysis-of-Binaro"
sortOrder: 1
draft: false
---

## Overview

**The detailed version with measurements, images and profiling methodology is on my dedicated GitHub for the project, please visit that!**

Binaro (also known as Takuzu) is a logic puzzle played on a 10×10 grid of ones
and zeros. This project is a C++ solver for it, written less to solve the
puzzle than to study what makes a program fast on real hardware.

The work is organised as a series of solver versions. Each version changes one
aspect of the implementation: the data representation, the memory layout, the
algorithm and is then measured under the same conditions, so the effect of
that change can be attributed to the change itself.

## Motivation and problem

I became interested in high-performance computing and wanted a problem small
enough to understand completely but large enough to stress the memory
hierarchy. Solving a large batch of puzzles fits that: the logic is simple, the
working set can be made larger than cache, and the runtime is dominated by how
the data is laid out rather than by any single clever trick.

## Technical approach

The areas I have been working through:

- **Data representation.** How a grid, and a line within a grid, are stored,
  and how much memory each puzzle occupies.
- **Bitwise operations and bitmasks.** Representing lines as bits so that rule
  checks become arithmetic on words instead of loops over cells.
- **Memory layout and cache behaviour.** Reducing the total footprint of the
  puzzle set so that more of it fits in cache, and measuring the effect.
- **Measurement.** Benchmarking with Linux performance tooling under
  controlled conditions rather than relying on wall-clock timing alone.

## Future work

Further versions are planned to explore additional directions, including
parallelism across the independent puzzles.

<!-- ==========================================================================
     SECTIONS TO ADD AS YOU WRITE THIS UP

     These are left out on purpose: an empty heading would show up as a blank
     section on the live site. When you have the content, paste the block you
     want back in and fill it in. Delete each block once it is written.

     Nothing below this line is visible on the website.
     ======================================================================= -->

<!-- Describe each solver version and what it changed:

## Implementation comparison

### v1 — baseline

### v2 —

### v3 —
-->

<!-- Describe your benchmarking setup, so a reader can judge the numbers. Your
     repository's Information.txt already records the run conditions (number of
     trials, compiler flags, CPU pinning, frequency policy) — summarise them:

## Methodology
-->

<!-- Your measured results. Fill the table in from Information.txt. Add or
     remove rows and columns as needed, and delete any metric you did not
     measure. Keep the | characters in every row:

## Results and benchmarks

| Version | Change | Avg. time per puzzle | LLC load misses |
| --- | --- | --- | --- |
| v1 | Baseline implementation | | |
| v2 | | | |
| v3 | | | |
-->

<!-- Your benchmark graph. First copy the image file into
     public/images/projects/, then paste this line in and fix the filename and
     the description:

![Average solve time per puzzle for solver versions v1, v2, and v3](/images/projects/binaro-version-comparison.png)
-->

<!-- Profiling output and cache-miss measurements. Screenshots go in
     public/images/projects/ and are referenced the same way as the graph:

## Profiling
-->

<!-- The technical lessons, in your own words:

## What I learned
-->
