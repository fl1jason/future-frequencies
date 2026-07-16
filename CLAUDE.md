# Future Frequencies — Claude Project Guidelines

## Overview

This is a modern Astro + React website for Future Frequencies, an immersive deep house music brand. The site emphasizes performance, beautiful design, and a premium underground aesthetic.

## Tech Stack

- **Framework**: Astro (static generation)
- **Components**: React (for interactive elements like MagicRings)
- **Styling**: CSS with design tokens (no CSS-in-JS)
- **3D**: Three.js (shaders)
- **Deployment**: Static hosting (Netlify, Vercel)

## Design Principles

### Visual Identity

- **Color Palette**: Warm, natural colors (burnt copper, charcoal, warm white)
- **Typography**: League Spartan (display), Inter (body)
- **Aesthetic**: Japanese minimalism, editorial photography, luxury hospitality
- **Never**: Neon nightclub vibes, cheesy, over-designed, corporate

### Motion

- Slow, immersive animations
- Fade, blur, parallax, smooth scrolling
- The site should "breathe"
- Performance first — no unnecessary animations

### Photography

- Documentary style (real moments, not staged)
- Sound system details, speaker cones, haze, warm lighting
- Textures, hands on equipment, people dancing naturally
- Behind-the-scenes, venue transformation
- Never bottle service or cheesy club imagery

## Project Structure

```
src/
├── components/      # React components (MagicRings, Hero, etc)
├── layouts/        # Astro layouts (Base)
├── pages/          # Astro pages (.astro files)
├── styles/         # tokens.css (design system)
├── config/         # Configuration
├── data/           # Content (events, journal posts)
└── utils/          # Helpers
```

## Key Files to Know

- **`src/styles/tokens.css`** — All design tokens (colors, spacing, typography). Edit this to theme the entire site.
- **`src/components/Hero.tsx`** — Main hero section with MagicRings animation
- **`src/components/MagicRings.tsx`** — Three.js shader-based ring animation
- **`astro.config.mjs`** — Build configuration
- **`tsconfig.json`** — Path aliases (@components, @layouts, etc)

## Theming

The site supports multiple themes via CSS custom properties. All colors are in `tokens.css`:

```css
:root {
  --color-primary: #c1633f;        /* Change brand color here */
  --color-bg-dark: #17140f;        /* Main background */
  --color-text-primary: #f3ede4;   /* Main text */
  /* ... etc */
}

/* Add alternative themes: */
:root[data-theme="cool"] { --color-primary: #4a90e2; }
:root[data-theme="warm"] { --color-primary: #d4a574; }
```

To enable theme switching, add `data-theme` attribute to `<html>` tag or use JavaScript to toggle it.

## Building Sections

### Component Template

```tsx
import React from 'react';
import './Section.css';

interface SectionProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function Section({ theme = 'default' }: SectionProps) {
  return (
    <section className="section">
      <h2>Section Title</h2>
      {/* Content */}
    </section>
  );
}
```

### CSS Template

Always use CSS variables for colors, spacing, typography:

```css
.section {
  padding: var(--space-10xl) var(--space-6xl);
  background: var(--color-bg-dark);
}

.section h2 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4xl);
}
```

### Page Template

```astro
---
import Base from '@layouts/Base.astro';
import MySection from '@components/MySection';
---

<Base title="Page Title" description="Meta description">
  <MySection client:load theme="default" />
</Base>
```

## Astro Directives

- **`client:load`** — Load React component immediately (use for interactive components)
- **`client:idle`** — Load when browser is idle (use for non-critical interactive elements)
- **`client:never`** — No JavaScript (use for pure static content)

Use `client:load` for MagicRings, animations, and interactive components.

## Performance Guidelines

1. **Keep JavaScript minimal** — Use Astro's static generation whenever possible
2. **Image optimization** — Use Astro's Image component for automatic optimization
3. **Lazy load** — Use `client:idle` for below-fold interactive components
4. **CSS variables** — Faster than CSS-in-JS for theming
5. **No inline styles** — Use CSS files with design tokens
6. **Avoid unnecessary animations** — Motion should have purpose

## Content Structure (Upcoming)

Based on the brand brief, build these sections in order:

1. **Autumn Series** — Featured events with chapter switcher and countdown
2. **Philosophy** — 4 core principles (Sound First, Atmosphere, Community, Authentic)
3. **About** — Founder story (Ess from West London)
4. **The Experience** — Deep dive into what makes events immersive
5. **Sound System** — Authority page on sound quality and system design
6. **Events** — Individual event pages with full details
7. **Gallery** — Editorial photography/video
8. **Journal** — Articles (7 content pillars)
9. **Newsletter** — "Join The Frequency" signup
10. **Contact** — Bookings, collaborations, partnerships

## Styling Approach

- **No Tailwind** — Use CSS variables and semantic classes
- **No CSS-in-JS** — Use CSS files for all styling
- **No SCSS/SASS** — Vanilla CSS with custom properties (simpler, faster)
- **BEM-lite** — Simple class naming (section-name, element-name)

Example:
```css
.autumn-series { /* Component */ }
.autumn-series-chapters { /* Subcomponent */ }
.autumn-series-chapter { /* Element */ }
.autumn-series-chapter.active { /* Modifier */ }
```

## Commands

```bash
npm run dev        # Start dev server (http://localhost:4321)
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run astro      # Run astro CLI commands
```

## Testing

- Build locally before committing: `npm run build`
- Check console for errors/warnings
- Test on mobile breakpoints
- Verify theme switching works

## Git Workflow

- Commit frequently with clear messages
- Group related changes together
- Include what and why, not how (that's in code)
- Example: "Build Autumn Series section with event countdown"

## Browser Compatibility

- Modern browsers only (Chrome, Firefox, Safari, Edge)
- Requires WebGL2 for MagicRings animation
- Mobile support for iOS 12+, Android Chrome

## CSS Custom Properties Reference

### Colors (Edit in tokens.css)
```
--color-primary                /* Brand color (default: burnt copper) */
--color-bg-dark                /* Main background */
--color-bg-darker              /* Section backgrounds */
--color-text-primary           /* Main text */
--color-text-secondary         /* Secondary text */
--color-text-tertiary          /* Tertiary text */
--color-border-light           /* Light borders */
--color-accent-warm            /* Warm accent */
```

### Typography
```
--font-display                 /* League Spartan (headings) */
--font-body                    /* Inter (body) */
--font-mono                    /* Monospace (code/meta) */

--text-xs, --text-sm ... --text-7xl    /* Font sizes */
--weight-normal, --weight-bold         /* Font weights */
--lh-tight, --lh-normal, etc           /* Line heights */
--ls-tight, --ls-wide, etc             /* Letter spacing */
```

### Spacing
```
--space-xs (4px) ... --space-10xl (120px)  /* Padding/margin scale */
```

### Animation
```
--duration-fast, --base, --slow            /* Durations */
--easing-ease-in, --ease-out, --in-out     /* Easing functions */
@keyframes ffFade, ffSlideUp, ffPulse      /* Pre-built animations */
```

## Questions to Ask

When starting a new section:

1. What's the content structure? (Text, images, video?)
2. Should it be static or interactive?
3. Does it need a different layout or design?
4. Mobile-first approach — how does it look on small screens?
5. Follows the brand aesthetic?
6. Performance implications?

## Common Patterns

### Responsive Layout
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    padding: var(--space-lg);
  }
}
```

### Text with Accent
```css
.text-accent {
  color: var(--color-text-secondary);
}

.text-accent strong {
  color: var(--color-primary);
  font-weight: var(--weight-bold);
}
```

### Button Styles
```css
.btn {
  padding: var(--space-lg) var(--space-xl);
  background: var(--color-primary);
  color: var(--color-bg-dark);
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  cursor: pointer;
  transition: all var(--duration-base) var(--easing-ease-out);
}

.btn:hover {
  background: var(--color-primary-light);
}
```

## Design Tokens Philosophy

Everything is a variable. This enables:
- ✅ Consistent design across the site
- ✅ Easy theme switching
- ✅ Quick style iterations
- ✅ No magic numbers
- ✅ Accessible sizing/spacing

Never hardcode values. Always use variables.

## Final Notes

- The brand is about **authentic underground culture**, not corporate events
- **Sound first** — everything serves the audio experience
- **Community over crowds** — intimate, curated events
- **Real over fake** — documentary photography, genuine moments
- **Slow and immersive** — not flashy, not trying too hard

Build with intention. Every pixel should serve the mission.
