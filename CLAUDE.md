# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Static marketing website for Spiralcon, a geotechnical/environmental drilling company. Built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. No database or CMS — all content lives in TypeScript data files.

### Data layer (`src/data/`)

The three data files are the single source of truth for all site content. Editing them is how you add, update, or remove content — no backend required.

- **`services.ts`** — `Service[]` with slug, title, icon (lucide icon name), category, capabilities, applications, equipment, and `featured` flag. The `Header` component imports this array directly to build the Services dropdown nav.
- **`projects.ts`** — `Project[]` with slug, category, tags, hero/gallery image paths, challenge/solution/outcome narrative, optional stats, and `services: string[]` (array of service slugs). The `featured` flag controls appearance on the homepage. Cross-references to services are by slug string.
- **`clients.ts`** — `Client[]` with sector and `featured` flag controlling homepage display.

Each file exports typed helper functions (`getBySlug`, `getFeatured`, `getByCategory`).

### Routing

| Route | Page file |
|---|---|
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` |
| `/projects` | `src/app/projects/page.tsx` |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` |
| `/clients` | `src/app/clients/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

Dynamic routes use `generateStaticParams()` — they're fully statically generated at build time from the data arrays.

### Component structure

- `src/components/layout/` — `Header` and `Footer`, rendered in `src/app/layout.tsx` wrapping all pages.
- `src/components/home/` — section components composed directly in `src/app/page.tsx` (HeroSlider, ServicesOverview, StatsSection, FeaturedProjects, AboutBanner, ClientsBar).
- `src/components/ui/` — shadcn/ui components (Sheet, Dialog, Badge, Card, etc). Do not hand-edit these; use `npx shadcn add <component>` to add new ones.

### Styling

Tailwind v4 with CSS custom properties defined in `src/app/globals.css`. Use these brand variables instead of raw hex:

| Class | Value |
|---|---|
| `bg-brand-navy` / `text-brand-navy` | `#002B5C` (dark navy) |
| `bg-brand-blue` / `text-brand-blue` | `#0055A5` (primary blue) |
| `hover:bg-brand-light-blue` | `#0080CC` |
| `bg-brand-sky` | `#E8F4FD` (light blue tint) |

Utility classes: `.section-padding` (vertical section spacing), `.container-wide` (max-w-7xl centered with responsive px).

Use `cn()` from `src/lib/utils.ts` for conditional class merging.

### Images

All images served from `/public/images/` with subdirectories `projects/`, `services/`, `clients/`. Paths in data files are root-relative strings (e.g. `/images/projects/metro-rail.jpg`). Images are referenced as CSS `background-image` (not `<Image>`) in hero and gallery sections.

### Key cross-references

- `Service.icon` must match a lucide-react icon name — the service detail page maps these via `iconMap`.
- `Project.services` is `string[]` of service slugs — used by service detail pages to filter related projects and by project detail pages to link to service pages.
- Adding a new service also auto-adds it to the Header dropdown (no extra wiring needed).

### Path alias

`@/*` maps to `src/*` — use `@/components/...`, `@/data/...`, `@/lib/...`.
