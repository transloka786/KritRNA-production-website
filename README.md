# KritRNA - Engineering the Language of Life

A Next.js 14 production-ready biotech website showcasing KritRNA's suppressor tRNA therapeutics and Translation Small-World AI platform.

## Features

- **Dark Cinematic Design**: Gradient backgrounds with neon cyan, yellow, purple accents
- **Fully Responsive**: Optimized for all device sizes
- **Animated UI**: Framer Motion animations throughout
- **Glass Morphism**: Modern glassmorphic cards and components
- **9 Complete Pages**: Home, About, Problem, Technology, Impact, Updates, Partners, Ask, Contact

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui components
- Framer Motion
- Lucide React icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

## Configuration Required

### 1. Add Your Assets

Place your images in `/public/assets/kritrna/`:
- `LOGO.png` - Company logo
- `ribosomei.png` - Ribosome illustration
- `tRNA_blue.png` - Blue tRNA molecule
- `tRNA_red.png` - Red tRNA molecule
- `tRNA_yellow.png` - Yellow tRNA molecule
- `tRNA_green.png` - Green tRNA molecule
- `tRNA_purple.png` - Purple tRNA molecule
- `Picture3.png` - Additional asset

### 2. Replace Staying.fun Iframe

In `/app/technology/page.tsx`, line 112:

```tsx
<iframe
  src="https://staying.fun/YOUR_ACTUAL_SCENE_URL"
  width="100%"
  height="700"
  className="border-0"
  title="Translation Small-World Network"
/>
```

Replace `https://staying.fun/YOUR_ACTUAL_SCENE_URL` with your actual Staying.fun scene URL.

### 3. Add Chatbits Embed

In `/app/ask/page.tsx`, around line 75-85, replace the placeholder div with your Chatbits embed script:

```tsx
<div id="chatbits-widget">
  <script>
    // Paste your Chatbits embed script here
  </script>
</div>
```

## Page Structure

### Home (`/`)
Hero section with orbiting tRNA animations, three principle cards (Patient-First, Programmable Biology, Safety by Design)

### About (`/about`)
Company story with Devanagari "कृ" animation and mission statement

### Problem (`/problem`)
Translation process visualization, India genetics dashboard with metrics

### Technology (`/technology`)
Tabbed interface showing tRNA Design Engine and Translation Small-World AI platform

### Impact (`/impact`)
Global impact metrics, comparison of current vs future state, FAQ accordion

### Updates (`/updates`)
RSS-style news feed with filtering by source (FDA, EMA, Trials, PubMed)

### Partners (`/partners`)
Partner statistics, workflow diagram, collaboration models

### Ask (`/ask`)
Example questions with chatbot integration placeholder

### Contact (`/contact`)
Contact form with collaboration type selection and particle animation background

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

No environment variables required for basic functionality. Add as needed for:
- Form submissions
- Analytics
- Database connections

## Customization

### Colors

Primary colors are defined in `/app/globals.css`:
- Cyan: `#32E2E2`
- Yellow: `#E1FF17`
- Purple: `#C99EED`
- Red: `#FF3B47`
- Blue: `#38B6FF`

### Typography

Using Inter Tight font from Google Fonts. Change in `/app/layout.tsx` if needed.

### Components

Reusable components in `/components/`:
- `Navbar.tsx` - Main navigation
- `Footer.tsx` - Site footer
- `GlassCard.tsx` - Glassmorphic card container
- `MetricTile.tsx` - Animated metric display
- `UpdateCard.tsx` - News update card

## License

All rights reserved © 2025 KritRNA

## Support

For questions or issues, visit the Contact page or reach out to the development team.
