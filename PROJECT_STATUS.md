# resonance — Project Status

**Last Updated**: 2026-07-21  
**Repository**: https://github.com/fl1jason/future-frequencies.git  
**Live Site**: https://www.resonanceevents.co.uk  
**Deployment**: Render (auto-deploys on git push)

---

## Current Status

### ✅ Completed Features

#### Core Site Structure
- [x] Astro + React setup with static generation
- [x] Responsive design (mobile-first, breakpoints at 768px and 480px)
- [x] Mobile navigation with hamburger menu
- [x] Sticky navbar with "resonance" branding
- [x] Footer with location and social links

#### Pages Built (14 total)
1. **Homepage** (`/`) — Hero with MagicRings animation, Autumn Series, Philosophy, About, Journal preview, Newsletter signup
2. **Events** (`/events`) — Featured next event + 3 other events grid with "Book Tickets" and "Find out more" CTAs
3. **Event Details** (`/events/{id}`) — Individual event pages (EQUINOX, HALLOWEEN, RESONANCE, CONVERGENCE) with venue info, FAQ, ticketing links
4. **Journal** (`/journal`) — Article listing with category filtering
5. **Journal Articles** (`/journal/{id}`) — Individual article pages with related articles sidebar
6. **Our Story** (`/story`) — Company story with video placeholder, key values sidebar
7. **Articles** — 6 pre-populated journal articles:
   - sound-matters
   - behind-booth
   - building-systems
   - atmosphere-design
   - community-stories
   - music-discovery

#### SEO & Structured Data
- [x] **Sitemap**: Auto-generated via `@astrojs/sitemap`
  - `sitemap-index.xml` (index file)
  - `sitemap-0.xml` (all 14 pages)
- [x] **Schema Markup**:
  - Organization schema on homepage
  - Event schema on each event detail page
  - Properly formatted JSON-LD
  - Detectable by Google's Rich Snippet tester
- [x] **Heading Hierarchy**:
  - All pages have proper h1/h2 structure
  - Hero: h1
  - EventsPage: h1 for "Four Chapters", h2 for sections
  - JournalPage: h1 for "Recent thinking"
  - ArticleDetail: h1 for article title, h3 for sidebars
  - OurStory: h1 for main title, h2 for 6 story sections

#### Branding
- [x] **Rebrand to "resonance"** (completed 2026-07-21)
  - Updated navbar logo
  - Updated all page titles
  - Updated footer
  - Updated schema markup
  - Updated story content and about section

#### Design System
- [x] CSS custom properties (`src/styles/tokens.css`)
  - Color palette (burnt copper primary, charcoal, warm white)
  - Typography (League Spartan display, Inter body)
  - Spacing scale
  - Animation/easing variables
- [x] Responsive layouts with CSS Grid
- [x] No Tailwind, no CSS-in-JS — pure CSS with design tokens

#### Components Built
- `Hero.tsx` — MagicRings animation with "Designed To Be Felt" title
- `MagicRings.tsx` — Three.js shader-based ring animation
- `Navbar.tsx` — Sticky nav with mobile menu
- `EventsPage.tsx` — Events listing with featured next event
- `EventDetails.tsx` — Individual event detail page
- `JournalPage.tsx` — Journal article listing
- `ArticleDetail.tsx` — Individual article page
- `OurStory.tsx` — Company story page
- `About.tsx` — About section
- `Philosophy.tsx` — Philosophy section
- `AutumnSeries.tsx` — Autumn Series section
- `Newsletter.tsx` — Newsletter signup
- `Footer.tsx` — Footer with branding and links

#### Content Management
- [x] Markdown-based journal articles (`src/content/journal/`)
  - YAML frontmatter (id, title, pillar, date, excerpt, image)
  - Full markdown body content
  - Utility functions for parsing (`src/utils/markdown.ts`)
- [x] Events data (`src/data/events.ts`) with 4 events
- [x] Journal articles data (`src/data/journal.ts`) with 6 articles

#### Deployment
- [x] Render deployment via `render.yaml`
  - Auto-deploys on git push to main
  - Build command: `npm install && npm run build`
  - Start command: `npm run start` (astro preview --host)
  - Static publish path: `./dist`
  - SPA fallback to /index.html
- [x] Custom domain setup
  - Domain: resonanceevents.co.uk
  - Vite allowed hosts configured

#### Build & Performance
- [x] Production build working (`npm run build`)
- [x] Development server working (`npm run dev`)
- [x] All 14 pages generate static HTML
- [x] Sitemap auto-generated at build time
- [x] Images optimized via Astro Image component
- [x] No console errors or build warnings

---

## Project Structure

```
src/
├── components/           # React components
│   ├── Hero.tsx
│   ├── MagicRings.tsx
│   ├── Navbar.tsx
│   ├── EventsPage.tsx
│   ├── EventDetails.tsx
│   ├── JournalPage.tsx
│   ├── ArticleDetail.tsx
│   ├── OurStory.tsx
│   ├── About.tsx
│   ├── Philosophy.tsx
│   ├── AutumnSeries.tsx
│   ├── Newsletter.tsx
│   ├── Footer.tsx
│   └── *.css (component styles)
├── layouts/
│   └── Base.astro        # Main layout
├── pages/
│   ├── index.astro       # Homepage
│   ├── events.astro      # Events listing
│   ├── events/[eventId].astro    # Event detail
│   ├── journal.astro     # Journal listing
│   ├── journal/[id].astro        # Article detail
│   └── story.astro       # Our Story page
├── content/
│   └── journal/          # Markdown articles
├── data/
│   ├── events.ts         # Events data
│   ├── journal.ts        # Journal articles data
│   └── navigation.ts     # Nav links
├── utils/
│   └── markdown.ts       # Markdown parsing
├── assets/
│   └── images/           # Event and article images
├── styles/
│   └── tokens.css        # Design system
└── config/
    └── (astro/typescript configs)

dist/                      # Build output (static HTML)
├── index.html
├── events/
├── journal/
├── sitemap-index.xml
├── sitemap-0.xml
└── _astro/ (assets)
```

---

## Tech Stack

- **Framework**: Astro 7.1.0 (static site generation)
- **Components**: React 19.2.7 (interactive elements)
- **Styling**: CSS with design tokens (no CSS-in-JS, no Tailwind)
- **3D**: Three.js 0.185.1 (MagicRings animation)
- **Build**: Vite + Rolldown
- **Deployment**: Render
- **Node**: 20+
- **Package Manager**: npm

---

## Recent Changes

### Rebrand to "resonance" (2026-07-21)
- Changed main brand/logo from "FUTURE FREQUENCIES" to "resonance"
- Updated 12 files across components, pages, data, and schemas
- All page titles now show "resonance — [Page]"
- Footer and copyright updated
- Organization schema updated
- Event schema organizer updated
- Story content and About section updated

### Added Structured Data (2026-07-21)
- Organization schema on homepage
- Event schema on each event detail page
- JSON-LD formatted, detectable by Google's Rich Snippet tester

### Added Sitemap (2026-07-18)
- Integrated `@astrojs/sitemap`
- Auto-generates `sitemap-index.xml` and `sitemap-0.xml`
- Includes all 14 pages
- Accessible at `https://www.resonanceevents.co.uk/sitemap-index.xml`

### Verified SEO (2026-07-18)
- All pages have proper h1/h2 heading hierarchy
- Sitemap includes all routes
- Schema markup verified in built HTML

---

## Key Files Reference

- **`src/styles/tokens.css`** — Design system (colors, spacing, typography)
- **`src/components/Hero.tsx`** — Main hero section with animation
- **`src/components/MagicRings.tsx`** — Three.js ring animation
- **`src/layouts/Base.astro`** — Base layout with navbar
- **`astro.config.mjs`** — Astro config with sitemap integration
- **`render.yaml`** — Render deployment config
- **`package.json`** — Dependencies and scripts
- **`.github/workflows/deploy.yml`** — GitHub Pages workflow (not currently used)

---

## Known Issues & TODOs

### Current Limitations
- Event URLs in data use hash URLs (#events/equinox) — could be updated to proper absolute URLs
- OMNOM Birmingham venue details are hardcoded — could be moved to event data
- Newsletter signup not connected to backend
- Philosophy and Contact pages are placeholder links
- Social media links in footer are placeholder links

### Possible Future Enhancements
- Add robots.txt with sitemap reference
- Create human-readable sitemap page at `/sitemap`
- Submit sitemap to Google Search Console (manual step)
- Add more journal articles from markdown files
- Create dedicated Contact page
- Wire up newsletter signup to email service
- Add more event images and venue photos
- Create FAQPage schema for event FAQs
- Add BreadcrumbList schema for navigation
- Consider adding LocalBusiness schema for venue details

---

## Deployment Checklist

- [x] Git repository initialized and pushed to GitHub
- [x] Render app created and connected to GitHub
- [x] Custom domain configured (resonanceevents.co.uk)
- [x] Vite allowed hosts configured for custom domain
- [x] Build and start commands configured
- [x] Static publish path set to ./dist
- [x] SPA fallback configured
- [x] Auto-deploy on git push working

---

## Commands

```bash
npm run dev        # Start development server (localhost:4321)
npm run build      # Build for production (creates dist/)
npm run preview    # Preview production build locally
npm run start      # Start preview server (used by Render)
npm run astro      # Run astro CLI commands
```

---

## Git Workflow

1. Create feature branch or work on main
2. Make changes and test locally (`npm run dev`)
3. Build to verify no errors (`npm run build`)
4. Stage changes (`git add`)
5. Commit with descriptive message
6. Push to origin main
7. Render auto-deploys (2-3 minutes)
8. Verify changes live at https://www.resonanceevents.co.uk

---

## Contact & Notes

- **Brand**: resonance — Immersive deep house music experiences
- **Location**: Birmingham, UK (OMNOM venue)
- **Founded by**: Soundman from West London
- **Core Values**: Sound First, Authentic Community, Intentional Curation
- **Philosophy**: Underground culture, genuine connection, precision sound design

---

## Next Session Checklist

To resume work:
1. Pull latest changes: `git pull origin main`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Check https://www.resonanceevents.co.uk for any live issues
5. Review any new feature requests or bug reports
6. See "Possible Future Enhancements" section above for next tasks

---

*This file serves as a snapshot of project state. Update it whenever significant progress is made or major decisions are documented.*
