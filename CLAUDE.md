# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (exposed on all interfaces)
npm run build     # production build → dist/
npm run lint      # ESLint
npm run preview   # preview production build locally
```

No test framework is configured.

## Architecture

**Stack:** React 19 + Vite 6 + Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Turkish-language foundation website for Ali Tepe Vakfı.

**Routing:** All routes are nested under `src/layouts/MainLayout.jsx` (Header + Outlet + Footer). Routes are declared in `src/App.jsx`. Adding a new page means creating the component and adding a `<Route>` there.

**Active routes:**
- `/` → `pages/Home`
- `/ali-tepe` → `pages/AliTepeBio`
- `/mutevelli-heyeti` → `pages/MutevelliHeyeti`
- `/faaliyetlerimiz` → `pages/Faaliyetlerimiz`
- `/contact` → `pages/Contact`
- `/etkinlikler` → `pages/Events/LastEvents`
- `/etkinlik/:eventId` → `pages/Events/EventDetails`

**Content management:** Most site-wide text (name, tagline, contact info, social links, image paths) lives in `src/data/siteContent.json`. Events list is in `src/data/events.json`. However, `EventDetails.jsx` currently has its event data hardcoded — it does not read from `events.json`.

**Images/CDN:** Static assets are hosted in a separate GitHub repo (`AlitepeVakfi/cdn`) and referenced via `https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/...`. Updating images means pushing to that CDN repo, not this one.

**Utilities:** `src/libs/utils.js` exports `cn()` (clsx + tailwind-merge) for conditional class merging.

**Deployment:** GitHub Actions (`.github/workflows/static.yml`) builds and deploys to GitHub Pages on every push to `main`. The Vite `base` is `/alitepe_vakfi_site/` in production and `/` in dev — this is handled automatically in `vite.config.js`.

**Orphaned files:** `src/pages/Teams.jsx`, `src/pages/About/`, `src/pages/Teams/`, and `src/pages/Events/ActiveEvents.jsx` exist but are not wired to any route.
