# IVTSF — International Vanishing Twin Syndrome Foundation

Nonprofit site for families and clinicians affected by Vanishing Twin Syndrome.
Audiences, in the order the Home page addresses them: parents & families,
healthcare providers, educators, potential collaborators, prospective volunteers.

**Live:** https://kirans0615.github.io/International-Vanishing-Twin-Syndrome-Foundation/
**Repo:** `Kirans0615/International-Vanishing-Twin-Syndrome-Foundation` (public)

This is a bereavement resource. Copy is plain, warm and non-euphemistic; grief
responses are treated as varied and all valid. Match that register — no marketing
voice, no urgency devices, no "just" or "simply".

---

## Stack

Vite 8 + React 19 + TypeScript + Tailwind v4 + react-router-dom + lucide-react.
No component library. No test suite.

- `npm run dev` · `npm run build` · `npm run lint` · `npm run preview`
- Deploy is automatic: GitHub Actions on push to `main` → GitHub Pages.

## Two deployment tripwires

**1. `HashRouter`, not `BrowserRouter`.** `src/main.tsx` uses `HashRouter`, so
live URLs look like `/#/about`. This is deliberate — it is what makes deep links
work on GitHub Pages without a 404.html shim. Do not "fix" it to `BrowserRouter`.

**2. `base` path.** `vite.config.ts` sets
`base: '/International-Vanishing-Twin-Syndrome-Foundation/'`. Any asset
referenced by a bare path works in dev and **breaks in production**. Prefix with
`import.meta.env.BASE_URL`. There is already a commit fixing exactly this bug
for `Z.jpeg`; do not reintroduce it.

## Architecture

- `src/App.tsx` — all 26 routes, flat. Adding a page means: create it under
  `src/pages/`, add the `<Route>`, and add it to `NAV_ITEMS`.
- `src/data/navigation.ts` — **single source of truth for nav.** `NAV_ITEMS`
  drives the navbar, the dropdowns and `getBreadcrumbs()`. A route not listed
  here has no breadcrumb trail.
- `src/pages/` — four groups: `about/`, `vts/`, `knowledge/` (plus
  `knowledge/partners/`), and top-level pages.
- `src/components/` — layout chrome and effects. `Navbar.tsx` (535 lines) is the
  most complex: multi-level dropdowns driven by `NAV_ITEMS`.

## Design system

Tokens live in `@theme` in `src/index.css` — never hard-code these hexes:

| Token | Value | Use |
|---|---|---|
| `ivtsf-purple-deep / royal / violet` | `#4A1A8C` `#6B2DB5` `#8B3FD4` | primary brand |
| `ivtsf-blue-bright / sky` | `#4DB8E8` `#87CEEB` | accents, focus rings |
| `ivtsf-magenta / magenta-deep` | `#C2408C` `#9B2D6E` | emphasis |
| `ivtsf-dark / dark-mid / dark-card` | `#0D0520` `#1A0A3D` `#2D1060` | dark sections |
| `ivtsf-bg / surface` | `#FAF8FF` `#F0EBF8` | light sections |

Type: **Lora** serif for all headings (set globally on `h1`–`h5`), **Inter** for
body, **DM Mono** for data/stat chips.

Motion: reveal-on-scroll via `useReveal()` from `src/hooks/useInView.ts` plus the
`.reveal` / `.reveal-left` / `.reveal-right` classes and `.reveal-delay-1..4`.
Named keyframes live in `index.css` under a `prefers-reduced-motion:
no-preference` guard, with a global reduced-motion killswitch at the bottom.
There is also a `@media print` block that hides chrome — the checklist and
provider-reference pages are meant to be printable, so keep them that way.

## Media

**All video and imagery is remote**, on a Higgsfield CloudFront CDN, mapped in
`src/assets/higgsfield.ts` (`HIGGSFIELD.videos`, `HIGGSFIELD.images`,
`BUTTERFLY_VIDEOS`, `FALLBACKS`). Never inline a CDN URL in a page — add it to
that map.

Use `<HiggsVideo>` / `<HiggsImage>` rather than raw tags: they fade in on load
and fall back to a `FALLBACKS` gradient if the CDN fails, so a dead URL degrades
gracefully instead of showing a black box. Partner logos and headshots in
`public/` are the exception — those are local.

## Repo health (known, not urgent)

- **`.git` is ~193MB against 568K of source.** An `.npm-cache/` directory and two
  ~20MB MP4s were committed and later deleted; they persist in history. Fixing
  needs a history rewrite — coordinate before doing it, since the repo is public.
  `.gitignore` does **not** currently list `.npm-cache/`.
- **`npm run lint` fails with 6 pre-existing errors** — setState-in-effect in
  `CustomCursor`, `Navbar`, `ScrollButterfly`; an impure call during render in
  `ScrollButterfly:50`; and `cond ? a.delete() : a.add()` used as a statement in
  `PrenatalChecklist:98` and `PrenatalProviderReference:156`. Build is unaffected.
- **Four components are unreferenced:** `CustomCursor`, `AnimatedSection`,
  `KnowledgeSubNav`, `CountUp`. Confirm before deleting — `CountUp` in particular
  looks like it was meant for the stats band.
- **Bundle is 552KB (150KB gzipped) in one chunk.** Vite warns. Route-level
  `React.lazy` would be the fix if it matters.
- `README.md` is still the untouched Vite template.
