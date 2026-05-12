# Spec: Build (Phase 5)

How the specs above become an actual Next.js site.

---

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- MDX for project case studies
- Deploy on Vercel

---

## Site map

- `/` — homepage
- `/projects/[slug]` — project case study (MDX)
- `/about` — optional, if it earns its place

---

## Homepage sections (top to bottom)

1. **Navbar** — logo/name left, minimal links right
2. **Hero** — central claim + name, one CTA
3. **Featured project** — single large card, full-width treatment
4. **Project grid** — 4–6 supporting projects, uniform cards
5. **Skills** — compact list, no visual bar charts
6. **Footer** — GitHub, LinkedIn, email, resume

## Project page template (MDX)

Follows the case study structure from `spec-proof.md`.

---

## Components to build

- `Navbar`
- `Hero`
- `FeaturedProject`
- `ProjectCard`
- `ProjectGrid`
- `ProjectPage` (MDX layout wrapper)
- `SkillsSection`
- `Footer`

## Tailwind config additions

- Custom colors: `bg`, `primary`, `accent` (see `spec-style.md`)
- Font family: Inter via `next/font`
- Extended spacing if needed

---

## Build order

1. Tailwind config + fonts + base layout
2. Navbar + Footer (scaffolding)
3. Hero
4. FeaturedProject + ProjectCard components
5. Homepage composition
6. MDX setup + one project page end-to-end
7. Remaining project pages
8. Skills section
9. Polish pass (spacing, hover states, one moment of motion)
10. Lighthouse + accessibility pass

---

## Principles applied

- **Maslow (Functional first, then up the stack):**
- **Swiss (execution discipline):**
- **Calibrated restraint:**

---

## Decisions locked

-
-