# Frontend Tech Stack for Ceevee

* **Status:** accepted
* **Date:** 2026-02-27

## Context and Problem Statement

The Ceevee project aims to serve as both a personal CV and an interactive portfolio. It needs to correctly visualize professional data while demonstrating modern coding practices and frontend skills. What technologies should form the frontend foundation of the project to ensure high performance, good SEO, a modern developer experience, and impressive aesthetics?

## Considered Options

* **Option 1:** Next.js (React), TypeScript, Tailwind CSS, MDX
* **Option 2:** Astro, TypeScript, Tailwind CSS, Markdown
* **Option 3:** Vue/Nuxt.js, TypeScript, Tailwind CSS

## Decision Outcome

Chosen option: "**Option 1: Next.js (React), TypeScript, Tailwind CSS, MDX**", because it provides a highly prevalent, modern standard in web development. Next.js offers excellent performance and SEO out of the box, TypeScript ensures type safety demonstrating professional standards, and Tailwind CSS coupled with Framer Motion (React ecosystem) allows for rapid UI development with rich, interactive animations. MDX allows for easy management of CV content.

### Positive Consequences

* Showcases modern, in-demand enterprise skills (React, Next.js, TypeScript).
* Rich ecosystem for UI components and complex animations (Framer Motion).
* Excellent developer experience and type safety.
* Strong SEO and performance capabilities through Server-Side Rendering (SSR) or Static Site Generation (SSG).

### Negative Consequences

* Steeper learning curve and potentially more boilerplate compared to simpler static site generators.
* Overkill for a strictly static CV, but justified by the portfolio/showcase aspect of the project.
