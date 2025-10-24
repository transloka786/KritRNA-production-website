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

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
# OpenAI API for chatbot
OPENAI_API_KEY=your_openai_api_key_here

# SMTP Configuration for contact form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Contact form settings
CONTACT_TO=trnaativetransloka@gmail.com
CONTACT_FROM="KritRNA Website <no-reply@kritrna.ai>"
```

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

#### New Asset Folders:
- `/public/assets/problem-video/` - Put `problem_explainer.mp4` here
- `/public/assets/problem-carousel/` - Put slides `s01.png` through `s08.png` here
- `/public/assets/icons/` - Clean SVGs for site-wide icons
- `/public/assets/about/trna-clover/` - tRNA cloverleaf explainer sprites
- `/public/assets/tech/flow/` - Technology flow diagram icons

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

The Ask page now features a native multi-language chatbot powered by OpenAI. Configure your `OPENAI_API_KEY` in `.env.local`.

### 4. Contact Form Setup

The contact form now sends emails via Nodemailer. Configure SMTP settings in `.env.local`.

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
Multi-language AI chatbot with scoped responses about KritRNA, tRNA biology, and India's rare disease landscape

### About Me (`/about-me`)
Founder profile with LinkedIn/Scholar links and partnership opportunities
### Contact (`/contact`)
Functional contact form with email delivery via Nodemailer

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

### Configuration

- **Phone Number**: Edit `lib/config.ts` → `ORG_PHONE`
- **Problem Video**: Place `problem_explainer.mp4` in `/public/assets/problem-video/`
- **Carousel Slides**: Add `sNN.png` files in `/public/assets/problem-carousel/`
- **Chatbot Languages**: Configure in `lib/i18n.ts`
- **India Map Data**: Edit `data/india_rare_diseases.json` → `state_metrics.data[]`

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

### New Components
- `Icon.tsx` - SVG icon mapping system
- `Carousel.tsx` - Problem page carousel
- `FootnoteModal.tsx` - Citation modal system
- `SmallWorldGraph.tsx` - Interactive translation network
- `TRNAEngineFlow.tsx` - Animated pipeline visualization
- `IndiaMap.tsx` - Interactive India choropleth
- `PopoverTile.tsx` - Enhanced partner tiles
- `ChatWidget.tsx` - Multi-language chat interface

### Data Files
- `data/ptc_diseases.json` - PTC disease information with citations
- `data/india_rare_diseases.json` - India rare disease landscape data
- `data/translation_factors.json` - Translation biology factors for Small-World model

## License

All rights reserved © 2025 KritRNA

## Support

For questions or issues:
- Use the multi-language chatbot on the Ask page
- Submit the contact form
- Email: trnaativetransloka@gmail.com
- Call: +49-000-0000000 (update in `lib/config.ts`)
