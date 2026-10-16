---
title: "Inference Engine"
shortDescription: "A planned project: building an inference engine from the ground up to study how model execution maps onto hardware."
category: "Systems"
status: "Planned"
featured: false
# No technologies listed yet — they will be decided as the project is scoped.
technologies: []
sortOrder: 5
draft: false
---

## Status

**This project has not been started.** Nothing has been implemented,
optimized, or benchmarked yet. This page exists so that the plan is written
down, and it will be updated as the work actually happens.

## Why I want to build it

AI infrastructure is where a lot of the interesting performance engineering is
happening: the work sits directly on top of the memory hierarchy, the
instruction set, and the accelerator. Writing an inference engine rather than
using one is the most direct way I can think of to understand that layer — how
a model's execution is scheduled, where the time and the memory actually go,
and which implementation decisions matter.

<!-- ==========================================================================
     HOW TO UPDATE THIS PAGE AS THE PROJECT PROGRESSES

       1. Change `status` in the metadata above from "Planned" to
          "In Progress", and later to "Completed".
       2. Add `startDate` when you begin, and `githubUrl` once the repository
          exists.
       3. Set `featured: true` if you want it on the home page.
       4. Replace the "Status" section above with a real Overview.
       5. Paste in the section blocks below as you have content for them.

     Nothing below this line is visible on the website.
     ======================================================================= -->

<!-- Narrow the scope down as you plan. Things worth deciding and recording:
     which model or model family you target first; whether you write a CPU
     backend, a GPU backend, or both; which operations you implement yourself
     versus call into; and what "done" looks like for a first version.

## Intended scope
-->

<!-- Concrete, checkable goals. Avoid performance targets until you have a
     baseline to compare against:

## Goals
-->
