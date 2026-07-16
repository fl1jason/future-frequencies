# Future Frequencies

Immersive deep house music experiences. Built with Astro, React, and Three.js.

## Project Structure

```
src/
├── components/          # React components (MagicRings, Hero, etc)
├── layouts/            # Astro layouts (Base)
├── pages/              # Astro pages (index, about, events, etc)
├── styles/             # Global styles and design tokens
├── config/             # Site configuration
├── data/               # Content data (events, journal, etc)
└── utils/              # Helper functions
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens dev server at `http://localhost:4321`

### Build for Production
```bash
npm run build
```
Output goes to `/dist` folder

### Preview Build
```bash
npm preview
```

## Design System & Theming

### Color Variables

All colors are defined as CSS custom properties in `src/styles/tokens.css`. Easy to customize:

```css
:root {
  /* Primary Colors */
  --color-primary: #c1633f;           /* Burnt Copper */
  --color-primary-light: #e08a5e;
  --color-primary-dark: #8a4530;

  /* Background Colors */
  --color-bg-dark: #17140f;           /* Main background */
  --color-bg-darker: #100e0a;         /* Section backgrounds */
  --color-bg-light: #221f1a;

  /* Text Colors */
  --color-text-primary: #f3ede4;      /* Warm white */
  --color-text-secondary: rgba(243, 237, 228, 0.7);
  --color-text-tertiary: rgba(243, 237, 228, 0.5);

  /* Accent Colors */
  --color-accent-warm: #8a8a5e;
  --color-accent-copper: #c1633f;
  --color-accent-sand: #d4a574;
  --color-accent-olive: #5a5a3a;
}
```

### Multiple Themes

The site supports theme switching via `data-theme` attribute on the `<html>` element:

```html
<!-- Default theme (warm/copper) -->
<html data-theme="default">

<!-- Cool theme (blues) -->
<html data-theme="cool">

<!-- Warm theme (golden) -->
<html data-theme="warm">
```

Change themes in components:
```tsx
export default function App() {
  const [theme, setTheme] = useState('default');
  return <html data-theme={theme}>...</html>;
}
```

### Typography Tokens

```css
--font-display: 'League Spartan', sans-serif;  /* Headings */
--font-body: 'Inter', sans-serif;              /* Body text */
--font-mono: ui-monospace, Menlo, monospace;   /* Code/meta */

--text-xs: 11px;
--text-sm: 12px;
--text-base: 14px;
--text-lg: 15px;
/* ... up to --text-7xl: 84px; */

--weight-normal: 400;
--weight-semibold: 600;
--weight-bold: 700;
```

### Spacing Scale

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 12px;
--space-lg: 16px;
--space-xl: 20px;
--space-2xl: 24px;
--space-3xl: 32px;
--space-4xl: 40px;
--space-5xl: 48px;
--space-6xl: 56px;
/* ... up to --space-10xl: 120px; */
```

### Animation Tokens

```css
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 500ms;

--easing-ease-in: cubic-bezier(0.4, 0, 1, 1);
--easing-ease-out: cubic-bezier(0, 0, 0.2, 1);
--easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

Pre-defined animations:
- `ffFade` - Fade in with slide up
- `ffSlideUp` - Slide up from bottom
- `ffSlideDown` - Slide down from top
- `ffPulse` - Pulsing opacity

## Components

### Hero (MagicRings Banner)

The hero section features an interactive Three.js-powered Magic Rings animation:

```tsx
import Hero from '@components/Hero';

<Hero theme="default" />
```

**Props:**
- `theme`: 'default' | 'cool' | 'warm'

**Features:**
- Interactive rings that respond to mouse movement
- Click burst animation
- Animated "Resonance" text overlay
- Responsive on all screen sizes
- Optimized performance with shader-based rendering

### MagicRings (Low-level component)

Direct control over the Magic Rings animation:

```tsx
import MagicRings from '@components/MagicRings';

<MagicRings
  color="#c1633f"
  colorTwo="#f3ede4"
  ringCount={5}
  speed={0.8}
  followMouse={true}
  clickBurst={true}
/>
```

**All Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | string | #fc42ff | First ring color |
| colorTwo | string | #42fcff | Second ring color |
| ringCount | number | 6 | Number of rings (1-10) |
| speed | number | 1 | Animation speed multiplier |
| attenuation | number | 10 | Glow falloff intensity |
| lineThickness | number | 2 | Ring thickness |
| baseRadius | number | 0.35 | Inner ring radius |
| radiusStep | number | 0.1 | Space between rings |
| scaleRate | number | 0.1 | Ring expansion speed |
| opacity | number | 1 | Overall opacity (0-1) |
| blur | number | 0 | Blur effect (px) |
| noiseAmount | number | 0.1 | Film grain intensity |
| rotation | number | 0 | Static rotation (degrees) |
| ringGap | number | 1.5 | Angular cutaway per ring |
| fadeIn | number | 0.7 | Fade-in duration |
| fadeOut | number | 0.5 | Fade-out start time |
| followMouse | boolean | false | Mouse tracking |
| mouseInfluence | number | 0.2 | Mouse tracking strength |
| parallax | number | 0.05 | Depth effect |
| clickBurst | boolean | false | Click animation |

## Building New Sections

### Create a New Component

1. Create file: `src/components/MySection.tsx`
```tsx
import React from 'react';
import './MySection.css';

interface MySectionProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function MySection({ theme = 'default' }: MySectionProps) {
  return (
    <section className="my-section">
      {/* Content */}
    </section>
  );
}
```

2. Create styles: `src/components/MySection.css`
```css
.my-section {
  padding: var(--space-10xl) var(--space-6xl);
  background: var(--color-bg-dark);
}
```

3. Import and use in pages:
```astro
---
import MySection from '@components/MySection';
---

<Base title="Page Title">
  <MySection client:load theme="default" />
</Base>
```

### Using Design Tokens in Components

```css
.component {
  /* Typography */
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  
  /* Colors */
  color: var(--color-text-primary);
  background: var(--color-bg-dark);
  border: 1px solid var(--color-border-light);
  
  /* Spacing */
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
  gap: var(--space-md);
  
  /* Animations */
  animation: ffFade var(--duration-base) var(--easing-ease-out);
  transition: color var(--duration-base) var(--easing-ease-out);
}
```

## Image & Video Optimization

### Images

```astro
---
import { Image } from 'astro:assets';
import heroImage from '@assets/hero.jpg';
---

<Image 
  src={heroImage} 
  alt="Description"
  width={1200}
  height={800}
/>
```

### Videos

```astro
<video autoplay muted loop playsinline>
  <source src="/videos/hero.webm" type="video/webm" />
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

## Performance

- **Static generation**: Pages are pre-built for maximum speed
- **Code splitting**: Large libraries (Three.js) are split into separate chunks
- **Image optimization**: Automatic WebP conversion, responsive sizes
- **Minimal JavaScript**: Only interactive components load JS (MagicRings)
- **CSS variables**: No runtime overhead for theming

## Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest (12+)
- Mobile: iOS Safari 12+, Chrome Mobile

## Customization Tips

### Change Brand Colors

Edit `src/styles/tokens.css`:
```css
:root {
  --color-primary: #your-color;
  --color-primary-light: #lighter-variant;
  --color-primary-dark: #darker-variant;
}
```

### Adjust Typography Scale

Modify font sizes in `tokens.css`:
```css
--text-7xl: 96px;  /* Make larger */
```

### Add New Theme

Create new CSS rule:
```css
:root[data-theme="neon"] {
  --color-primary: #ff00ff;
  --color-primary-light: #ff66ff;
  --color-bg-dark: #0a0a0a;
  /* ... */
}
```

## Content Structure

Upcoming sections to build:
- [ ] Autumn Series (Events with chapter switcher)
- [ ] Philosophy (4 pillars)
- [ ] About (Founder story)
- [ ] The Experience (Deep dive)
- [ ] Sound System (Authority page)
- [ ] Events (Individual event pages)
- [ ] Gallery (Photography)
- [ ] Journal (Articles)
- [ ] Newsletter (Subscribe form)
- [ ] Contact (Booking inquiries)

## Deployment

### Build
```bash
npm run build
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## Resources

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [Magic Rings Animation](https://reactbits.dev/animations/magic-rings)
