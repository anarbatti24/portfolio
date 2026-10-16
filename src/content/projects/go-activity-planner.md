---
title: "Go!"
shortDescription: "A social activity discovery and group-planning application that helps friends find activities, save ideas, vote on plans, and turn them into real outings."
category: "Web"
# Change to "Completed" when you consider the project finished.
status: "In Progress"
# TODO: add the month you started, e.g. "2025-07", then delete this comment.
# startDate: "2025-07"
featured: true
technologies:
  - TypeScript
  - React
  - Vite
  - Tailwind CSS
  - Leaflet
  - Zustand
  - Vercel
  - Google Places API
  - TMDB API
githubUrl: "https://github.com/anarbatti24/Go-"
liveUrl: "https://go-jade-chi.vercel.app/"
sortOrder: 3
draft: false
---

## Overview

Go! combines activity discovery with a group decision-making workflow. Deciding
what to do with a group usually stalls somewhere between "we should do
something" and actually going, and the application is built around that gap.

Users can discover activities and places, save the options they like, create
groups with friends, vote on the possible plans, and then head to the
destination the group chose.

## Motivation and problem

Discovery tools are good at showing options and poor at helping a group commit
to one. Group chats are the opposite: they are where the decision actually
happens, but they have no structure for comparing options. Go! puts both in one
place, so the ideas being voted on are the same ones that were discovered.

## Technical approach

The front end is a TypeScript React application built with Vite and styled with
Tailwind CSS. Client state is held in Zustand, and map-based discovery is
rendered with Leaflet. The application is deployed on Vercel.

Discovery is powered by external APIs rather than a curated database:

- **Google Places** for places and venues.
- **TMDB** for film and show data.

<!-- ==========================================================================
     SECTIONS TO ADD AS YOU WRITE THIS UP

     Left out on purpose so that no empty section appears on the live site.
     Paste a block back in and fill it in when you have the content, then
     delete the surrounding comment markers.

     Nothing below this line is visible on the website.
     ======================================================================= -->

<!-- How the pieces fit together: discovery, saved items, groups, and voting,
     and where each piece of state lives. Worth covering how API requests are
     proxied and how the API keys are kept off the client, which is one of the
     more interesting parts of the design.

## Architecture and implementation

     A diagram works well here. Put the image in public/images/projects/ and
     reference it like this:

![Architecture diagram showing the React client, the API proxy, and the external discovery APIs](/images/projects/go-architecture.png)
-->

<!-- What was hard, and what you traded away. Reasonable things to cover:
     working within external API rate limits and response shapes, deciding what
     stays on the client versus the server, and designing the voting flow:

## Challenges and trade-offs
-->

<!-- How you tested or validated the application — only what you actually did:

## Validation
-->

<!-- The technical lessons, in your own words:

## What I learned
-->

<!-- What you would build next:

## Future improvements
-->
