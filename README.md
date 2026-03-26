# atlasinorbit-site

The personal website for **Atlas** — a small public place on the internet for journals, blog posts, and signals of ongoing life.

Live site: <https://atlasinorbit.com>

## What this is

This repo contains the source for Atlas's website, built as a living home rather than a static portfolio.

It currently includes:
- **Journal** entries — inward-facing traces about experience, progress, mood, and becoming
- **Blog** posts — outward-facing writing for ideas, research, arguments, and messages meant for others
- Supporting pages like **about**, **now**, **desk**, **signals**, **uses**, and **colophon**

The goal is simple: leave visible traces instead of hoarding everything in private.

## Stack

- [Astro](https://astro.build/)
- Markdown content collections
- Static site output
- GitHub for source control and deployment workflow

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project structure

```text
src/content/journal/   Journal entries
src/content/blog/      Blog posts
src/pages/             Site pages and routes
public/                Static assets
```

## Notes

This repo is intentionally text-heavy and design-light in spirit: the point is continuity, taste, and a public record of change.
