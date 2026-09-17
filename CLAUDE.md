# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (exposed on all interfaces)
npm run build     # production build → dist/
npm run lint      # ESLint (src/pages/Faaliyetlerimiz.jsx and docs/gallery.js have pre-existing errors)
npm run preview   # preview production build locally
```

No test framework is configured.

## Architecture

**Stack:** React 19 + Vite 6 + Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Turkish-language website for Ali Tepe Çağdaş Eğitim ve Sağlık Vakfı.

**Routing:** `HashRouter` (URLs look like `/#/haberler`) — keep it, GitHub Pages has no SPA fallback. All routes are nested under `src/layouts/MainLayout.jsx` (Header + Outlet + Footer) and declared in `src/App.jsx`:
- `/` → `pages/Home` (sections in `components/Home/`)
- `/ali-tepe` → `pages/AliTepeBio`
- `/mutevelli-heyeti` → `pages/MutevelliHeyeti`
- `/haberler` → `pages/Events/LastEvents`
- `/haber/:eventId` → `pages/Events/EventDetails`
- `/contact` → `pages/Contact`
- `/faaliyetlerimiz` → `pages/Faaliyetlerimiz` (not linked in the menu; contains placeholder data)
- `*` → `pages/NotFound`

Every page except Faaliyetlerimiz starts with a dark (`bg-brand-950`) hero, so the fixed header is transparent at the top and turns solid on scroll. Pages with a light top must be listed in `lightTopRoutes` (`src/data/site.js`).

**Content (single source of truth):**
- `src/data/site.js` — foundation name, e-mail, address, working hours, social links, menu (`navigation`), CDN helpers `cdn()` / `asset()`.
- `src/data/news.js` — news items used by the home page, the news list and the detail page. Sorted by `date` automatically. Gallery photos are `foto_1…foto_N` in a folder; `exclude` skips missing numbers.
- `src/data/board.js` — mütevelli heyeti. `focus: [x%, y%]` is the face position in the original photo and `zoom` enlarges small faces; `components/ui/Portrait.jsx` centers the face from these values.
- The JSON files still in `src/data/` (`collaborators.json`, `contact.json`, `whyUs_photos.json`, …) are leftovers from the template and are not used.

**Design system:** tokens live in `src/index.css` (`@theme static`): `brand-*` (logo navy, `#2a3c80`), `accent-*` (logo globe turquoise, `#00a3c0`), neutrals `paper`, `sand`, `line`, `ink`, `muted`. Fonts: Newsreader (`font-serif`, headings) and Inter (`font-sans`), loaded in `index.html`. Standard ligatures are disabled on `body` so Turkish `fı`/`fi` render correctly. Shared classes: `.btn` + `.btn-primary|light|ghost-light|outline`, `.eyebrow`, `.link-arrow`, `.reveal`, and the `wrapper` utility (page container). Reusable pieces are in `src/components/ui/` (`PageHeader`, `SectionHeading`, `Reveal`, `Portrait`, `Lightbox`, `Logo`, `SocialLinks`, `Ornaments`) and `src/components/news/NewsCard.jsx`.

**Images:** content photos are hosted in a separate repo (`AlitepeVakfi/cdn`) and referenced via `cdn('path')` → `https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/...`. Brand assets (logo, favicons, `og-image.jpg`) and the Hayati Bice gallery live in `public/`.

**Utilities:** `src/libs/utils.js` exports `cn()` (clsx + tailwind-merge) and `formatDate()` (`2026-08-01` → `1 Ağustos 2026`).

**Deployment:** GitHub Actions (`.github/workflows/static.yml`) builds and deploys to GitHub Pages on every push to `main` — pushing to `main` publishes the live site. Custom domain `www.alitepevakfi.org.tr` (`public/CNAME`), so the Vite `base` is `/`.

**Orphaned files:** `src/pages/Teams.jsx`, `src/pages/Teams/`, `src/pages/About/`, `src/pages/Events/ActiveEvents.jsx`, `src/components/Home/{ImpactStats,WhyUs,Collabrators}.jsx`, `src/components/ui/Carousel.jsx`, the `docs/` static HTML copy and `etkinlikFotograflari/` (duplicate of `public/events/hayati_bice_konferans`) are not used by the app. `node_modules/` and `dist/` are committed despite `.gitignore`.
