# JTH Graphix Production — Portfolio Website

<p align="center">

![GitHub Stars](https://img.shields.io/github/stars/YOUR_USERNAME/JTH-Portfolio?style=for-the-badge)

![GitHub Forks](https://img.shields.io/github/forks/YOUR_USERNAME/JTH-Portfolio?style=for-the-badge)

![Issues](https://img.shields.io/github/issues/YOUR_USERNAME/JTH-Portfolio?style=for-the-badge)

![License](https://img.shields.io/github/license/YOUR_USERNAME/JTH-Portfolio?style=for-the-badge)

</p>


[![Version](https://img.shields.io/badge/Version-0.2.0-blue)](https://github.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.0-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![pnpm](https://img.shields.io/badge/Package_Manager-pnpm-blue?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)

<p align="center">
  <img src="public/images/github-banner.png" alt="JTH Graphix Production Banner" />
</p>

<h1 align="center">
JTH Graphix Production
</h1>

<p align="center">
Creative Agency • Branding • Web Design • Digital Marketing • Training
</p>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Pages & Routes](#pages--routes)
- [Tech Stack](#tech-stack)
- [Architecture & Patterns](#architecture--patterns)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Service Catalog](#service-catalog)
- [Getting Started](#getting-started)
- [Content Management](#content-management)
- [Customization](#customization)
- [Deployment](#deployment)
- [CI/CD](#cicd)
- [Changelog](#changelog)
- [Contributing](#contributing)

---

## Project Overview

JTH-Portfolio is a **fully static, content-driven website** built entirely with modern frontend technologies. It showcases the agency's work, services, and expertise while providing multiple avenues for potential clients to get in touch. The site follows a **content-first architecture** — all text, images, and structured data are stored as editable JSON files in the `data/` directory, completely decoupled from the UI components.

The website includes a comprehensive service catalog of **24 services across 5 categories**, a filterable portfolio gallery with lightbox detail views, an animated testimonial carousel, a multi-field contact form with service selection, WhatsApp integration for instant communication, a blog section, and a pricing page — all wrapped in a polished, responsive design with system/dark/light theme support.

---

## Features

### Visual & UX
- **Responsive Design** — Mobile-first layouts with breakpoints at `sm:`, `md:`, `lg:`, `xl:` using Tailwind CSS
- **System / Dark / Light Theme** — System-aware theme switching via `next-themes` with a manual toggle and smooth CSS transitions
- **Scroll-Triggered Animations** — Framer Motion-powered fade-in, slide-in, scale, and stagger animations across all sections
- **Animated Stats Counters** — Number counters that animate on scroll into view
- **Glassmorphism Navbar** — Fixed navigation bar with scroll-aware glass effect and backdrop blur
- **Premium Blue-Led Design System** — `#004AAD` (JTH Blue) as primary brand color for structure and identity; `#FF7A00` (JTH Orange) as secondary accent for energy and action

### Interactive Components
- **Floating WhatsApp Button** — Persistent CTA button on all pages that opens WhatsApp with a pre-filled message
- **Testimonial Carousel** — Auto-rotating carousel with manual navigation dots
- **Portfolio Lightbox** — Modal detail view for portfolio items with project information and CTA buttons
- **Service Image Galleries** — Embla Carousel image sliders on each service detail page
- **FAQ Accordion** — Expandable Q&A sections on service detail pages using Radix Accordion
- **Contact Form** — Multi-field form with service selection dropdown, simulated submission with success feedback
- **Mobile Hamburger Menu** — Animated slide-in navigation menu for mobile devices

### Business Functionality
- **Full Service Catalog** — 24 services across 5 categories with dedicated detail pages featuring What You Get, Deliverables, Perfect For, Our Process, Why JTH, FAQ, and Related Services
- **Filterable Portfolio** — Gallery with 8 category filters (Branding, Digital Marketing, Flyers, Logos, Posters, Social Media, Web Design, Other)
- **SEO Metadata** — Per-page Next.js Metadata API with Open Graph and Twitter Card support
- **GEO Optimization** — Generative-engine optimization for AI search visibility
- **Newsletter Signup** — Email subscription field in the footer
- **Vercel Analytics** — Built-in analytics for visitor tracking
- **WhatsApp Integration** — WhatsApp links throughout CTAs and contact sections for direct business inquiries

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | 9 sections: Hero, Stats Counters, Services Preview, About Snapshot, Portfolio Preview, Testimonials Carousel, Work Process, Blog Highlights, Call-to-Action |
| `/about` | **About Us** | Company story, mission & vision statements, core values, and company timeline with milestone years |
| `/services` | **Services** | Full service catalog grid with images, categories, brief descriptions, and "Learn More" links |
| `/services/[slug]` | **Service Detail** | Dynamic pages for all 24 services — hero, gallery, What You Get, Deliverables, Perfect For, Our Process, Why JTH, FAQ, Related Services, CTA |
| `/services-pricing` | **Pricing** | Pricing overview with priced services, custom-quote services, and coming-soon indicators |
| `/portfolio` | **Portfolio** | Filterable masonry gallery with 8 categories; clicking an item opens a lightbox modal with full project case study details |
| `/solutions` | **Solutions** | Overview of the 5 core solution areas offered by JTH |
| `/testimonials` | **Testimonials** | Client testimonials with star ratings, a featured testimonial highlight, trust-building statistics, and navigation filters |
| `/contact` | **Contact** | Contact information (phone, email, location), social media links, business hours, and an inquiry form with service selection |
| `/blogs` | **Blog** | Insights and articles on branding, design, and digital growth |
| `/blogs/[slug]` | **Blog Detail** | Individual blog posts with table of contents, newsletter signup, and social sharing |
| `/privacy` | **Privacy Policy** | Legal privacy policy page |
| `/terms` | **Terms of Service** | Legal terms of service page |
| `/cookies` | **Cookie Policy** | Cookie usage policy page |

---

## Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.0 | React framework with App Router, file-based routing, server components, and static generation |
| [React](https://react.dev) | 19.2.4 | UI component library |
| [TypeScript](https://www.typescriptlang.org) | 5.7.3 | Type safety and developer tooling |
| [Tailwind CSS](https://tailwindcss.com) | 4.2.0 | Utility-first CSS framework with v4 CSS-first configuration |

### UI & Design System
| Package | Version | Purpose |
|---|---|---|
| [Framer Motion](https://www.framer.com/motion) | 11.15.0 | Declarative animations and gesture handling |
| [Radix UI](https://www.radix-ui.com) | (Various) | Accessible, unstyled UI primitives (Accordion, Dialog, Dropdown, Select, Slot, Tabs, Toast, etc.) |
| [shadcn/ui](https://ui.shadcn.com) | (New York style) | Copy-paste component system built on Radix and Tailwind |
| [Lucide React](https://lucide.dev) | 0.564.0 | Icon library |
| [Recharts](https://recharts.org) | 2.15.0 | Charting library (available for data visualization needs) |
| [tw-animate-css](https://github.com) | 1.3.3 | Tailwind CSS animation utilities |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Dark/light theme management |

### Forms & Data
| Package | Version | Purpose |
|---|---|---|
| [react-hook-form](https://react-hook-form.com) | 7.54.1 | Performant form management |
| [zod](https://zod.dev) | 3.24.1 | Schema validation |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | 3.9.1 | Zod integration with react-hook-form |
| [Embla Carousel](https://www.embla-carousel.com) | 8.6.0 | Lightweight, customizable carousel/slider |

### Utilities
| Package | Version | Purpose |
|---|---|---|
| [date-fns](https://date-fns.org) | 4.1.0 | Date formatting and manipulation |
| [clsx](https://github.com/lukeed/clsx) | 2.1.1 | Conditional className construction |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.3.1 | Tailwind class merging without conflicts |
| [sonner](https://sonner.emilkowal.ski) | 1.7.1 | Toast notifications |

### Infrastructure
| Tool | Purpose |
|---|---|
| [pnpm](https://pnpm.io) | Fast, disk-efficient package manager |
| [PostCSS](https://postcss.org) | CSS transformation with Tailwind plugin |
| [Vercel Analytics](https://vercel.com/analytics) | Privacy-focused web analytics |
| [GitHub Actions](https://github.com/features/actions) | CI pipeline (`.github/workflows/ci.yml`) |

---

## Architecture & Patterns

### Content-First Architecture

All site content lives as **JSON files in `data/`**. This separates content from presentation, making updates trivially easy without touching React components. The JSON files are imported directly by page and component files.

```
data/
├── site-config.json      # Brand name, tagline, contact info, social links, navigation
├── services.json         # Full service catalog (24 services with benefits, deliverables, FAQs, process)
├── portfolio.json        # Portfolio items (24 items with images, categories, case studies)
├── testimonials.json     # Client testimonials (8 entries with ratings and quotes)
├── services-pricing.json # Pricing page content and pricing factors
├── home-services.json    # Service cards featured on the homepage
├── solution-categories.json  # Solution area definitions
├── megamenu.json         # Mega menu navigation structure
├── faq.json              # FAQ entries
└── blog.json             # Blog posts (3 entries with content, author, dates)
```

### Server / Client Component Boundary

- **Server components** (`app/*/page.tsx`) remain lean — they import JSON data and render client components
- **Client components** (`components/*`) handle all interactivity, animations, and state
- The root `layout.tsx` is a server component that wraps all pages with the Navbar, Footer, ThemeProvider, and Analytics

### Animation System

All Framer Motion variants are centralized in `lib/animations.ts`:
- `fadeUp` — Fade in with upward movement
- `slideInLeft` / `slideInRight` — Horizontal slide-in for alternating sections
- `staggerContainer` — Staggered children animations
- `scaleIn` — Scale-up entrance
- `fadeIn` — Simple fade
- `defaultTransition` — Consistent easing and duration
- `viewportOnce` — Animations trigger once on first scroll

### Styling Architecture

- **Tailwind CSS v4** — CSS-first configuration via `app/globals.css` using `@import "tailwindcss"`
- **Custom CSS Variables** — Brand colors, border radius, spacing defined as CSS custom properties with full dark mode support
- **Custom Utility Classes** — `text-gradient`, `bg-gradient-brand`, `glass`, `glass-nav`, `card-premium`, `glow-primary`, `glow-orange` for consistent branded effects
- **No CSS Modules or styled-components** — All styling is utility-based with Tailwind

### Key Design Decisions

- **No backend or database** — Fully static site, no API routes, no server-side data fetching
- **No state management library** — Component-local state with `useState`/`useEffect` suffices
- **`next.config.mjs` has `images.unoptimized: true`** — Avoids Vercel's image optimization limits
- **`generateStaticParams()`** — Service detail pages are pre-rendered at build time from `services.json`
- **Accessibility** — `aria-label`, `aria-live`, `role` attributes, semantic HTML, and `sr-only` classes

---

## Project Structure

```
├── app/                          # Next.js App Router (pages & layouts)
│   ├── globals.css               # Tailwind v4 + JTH design token system + custom utilities
│   ├── layout.tsx                # Root layout: Navbar, Footer, ThemeProvider, Analytics
│   ├── page.tsx                  # Homepage (assembles 9+ section components)
│   ├── about/page.tsx            # About Us page
│   ├── contact/page.tsx          # Contact page with form
│   ├── portfolio/page.tsx        # Portfolio gallery page
│   ├── services/page.tsx         # Services listing page
│   ├── services/[slug]/page.tsx  # Dynamic service detail pages (24 total)
│   ├── services-pricing/page.tsx # Pricing overview page
│   ├── solutions/page.tsx        # Solutions overview page
│   ├── testimonials/page.tsx     # Testimonials page
│   ├── blogs/page.tsx            # Blog listing page
│   ├── blogs/[slug]/page.tsx     # Dynamic blog detail pages
│   ├── privacy/page.tsx          # Privacy Policy
│   ├── terms/page.tsx            # Terms of Service
│   ├── cookies/page.tsx          # Cookie Policy
│   ├── not-found.tsx             # Custom 404 page
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── robots.ts                 # robots.txt generation
│
├── components/                   # React components
│   ├── ui/                       # 58+ shadcn/ui primitives (Button, Card, Dialog, etc.)
│   ├── home/                     # Homepage sections (Hero, Stats, Services, Portfolio, etc.)
│   ├── about/                    # About page component
│   ├── contact/                  # Contact form component
│   ├── portfolio/                # Portfolio gallery + lightbox component
│   ├── services/                 # Services grid, detail, CTA, and process components
│   ├── solutions/                # Solutions content component
│   ├── testimonials/             # Testimonials content component
│   ├── blog/                     # Blog article, card, browser, newsletter components
│   ├── legal/                    # Legal page layout components
│   ├── not-found/                # 404 page component
│   ├── navbar.tsx                # Main navigation bar (glass effect, mobile menu, mega menu)
│   ├── footer.tsx                # Site footer with newsletter signup and CTA band
│   ├── contact-form.tsx          # Contact form with validation
│   ├── contact-cards.tsx         # Contact information cards
│   ├── newsletter.tsx            # Newsletter subscription component
│   ├── theme-provider.tsx        # next-themes provider wrapper
│   ├── theme-toggle.tsx          # System/Dark/light mode toggle button
│   └── whatsapp-button.tsx       # Floating WhatsApp CTA button
│
├── data/                         # Editable JSON content files
│   ├── blog.json
│   ├── faq.json
│   ├── home-services.json
│   ├── megamenu.json
│   ├── portfolio.json
│   ├── services.json
│   ├── services-pricing.json
│   ├── site-config.json
│   ├── solution-categories.json
│   └── testimonials.json
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Mobile breakpoint detection
│   └── use-toast.ts              # Toast notification hook
│
├── lib/                          # Utilities and shared code
│   ├── utils.ts                  # cn() — clsx + tailwind-merge utility
│   ├── animations.ts             # Centralized Framer Motion animation variants
│   ├── site-config.ts            # Site configuration wrapper
│   ├── company.ts                # Company profile data
│   ├── metrics.ts                # Homepage statistics
│   ├── contact.ts                # Contact form utilities
│   └── blog-types.ts             # Blog TypeScript interfaces
│
├── public/                       # Static assets
│   ├── images/                   # Logo, portfolio, service, blog, and placeholder images
│   ├── videos/                   # Hero showreel video
│   ├── icon.svg                  # SVG favicon
│   └── icon.png                  # PNG favicon
│
├── styles/                       # Additional global styles
│   └── globals.css               # Default shadcn theme (not active)
│
├── .github/workflows/ci.yml      # GitHub Actions CI pipeline
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── postcss.config.mjs            # PostCSS with Tailwind plugin
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── package-lock.json             # Dependency lock file
```

---

## Design System

### JTH Brand Colors

The site uses a deliberate color hierarchy established in `app/globals.css`:

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary (JTH Blue)** | ![#004AAD](https://img.shields.io/badge/-004AAD?style=flat-square) | `#004AAD` | Primary brand identity, structure, trust, technology |
| **Secondary (JTH Orange)** | ![#FF7A00](https://img.shields.io/badge/-FF7A00?style=flat-square) | `#FF7A00` | Secondary accent, energy, creativity, action |

### Design Token Architecture

The CSS variable system is organized into semantic layers:

```css
/* BRAND — Primary & Secondary */
--color-primary: #004AAD;        /* JTH Blue */
--color-secondary: #FF7A00;      /* JTH Orange */

/* SURFACES — Backgrounds & Cards */
--color-background: #F8FAFC;     /* Page background */
--color-surface: #FFFFFF;        /* Card/panel surface */
--color-surface-elevated: #FFFFFF; /* Elevated surfaces */
--color-surface-muted: #F1F5F9;  /* Subdued surfaces */

/* TEXT — Content Colors */
--color-text-primary: #0B1220;   /* Main text */
--color-text-secondary: #334155; /* Supporting text */
--color-text-muted: #64748B;     /* Subtle text */

/* INTERACTION — Action Colors */
--color-action-primary: var(--color-primary);
--color-action-secondary: var(--color-secondary);
--color-focus-ring: rgba(0, 74, 173, 0.4);

/* STATUS — Semantic Colors */
--color-success: #059669;
--color-warning: #D97706;
--color-error: #DC2626;
--color-info: #0284C7;
```

### Color Usage Rules

| Rule | Description |
|------|-------------|
| Blue = Identity | `#004AAD` establishes brand structure and primary interactions |
| Orange = Accent | `#FF7A00` creates energy and highlights actions — used sparingly (~5-10%) |
| Neutrals = Content | Backgrounds, cards, and text use neutral tones for clarity |
| Gradient System | `bg-gradient-brand` for primary buttons; blue-to-orange reserved for hero/CTA only |

### Light & Dark Mode

Both themes are fully supported with CSS custom properties:

- **Light mode** — White/light backgrounds, `#004AAD` primary, `#FF7A00` secondary
- **Dark mode** — Near-black backgrounds (`#081120`), lighter blue (`#4B8EF0`) for contrast, same orange accent
- **System mode** — Follows OS preference via `next-themes`

### Tailwind v4 Integration

Colors are mapped to Tailwind via `@theme inline` in `app/globals.css`:

```css
@theme inline {
  --color-primary: var(--color-primary);
  --color-secondary: var(--color-secondary);
  --color-brand: var(--color-primary);
  --color-orange: var(--color-secondary);
  /* ... full token set */
}
```

This allows usage like `bg-primary`, `text-secondary`, `border-primary/20`, etc.

---

## Service Catalog

The agency offers **24 services** organized into **5 categories**:

| Category | Services |
|---|---|
| **Design** | Flyer Design, Poster Design, Brochure Design, Banner Design, Premium Printing |
| **Branding** | Logo Design, Branding & Visual Identity, Business Profile Design, Business Card Design, Corporate Branding Materials |
| **Digital** | Social Media Graphics, Social Media Management, SEO Optimization, GEO Optimization, Event & Publicity Graphics |
| **Web** | Website Design |
| **Training** | Virtual Training Sessions, Recorded Courses, Institutional Training, Design Skill Training, Digital Skills Workshops |

### Service Detail Page Architecture

Each service detail page (`/services/[slug]`) follows a standardized information architecture:

| Section | Data Field | Description |
|---------|-----------|-------------|
| **Hero** | `title`, `tagline`, `fullDescription`, `coverImage` | Service positioning with primary CTA |
| **Gallery** | `galleryImages` | Visual portfolio carousel |
| **What You Get** | `benefits[]` | 3-6 value/benefit cards explaining client gains |
| **Deliverables** | `deliverables[]` | Tangible outputs the client receives |
| **Perfect For** | `useCases[]` | Ideal client types and use cases |
| **Our Process** | `process[]` | Step-by-step approach (4 steps) |
| **Why JTH** | Static | Three value propositions (Strategy, Speed, Quality) |
| **FAQ** | `faq[]` | Service-specific Q&A entries |
| **Related Services** | `relatedServices[]` | Relevant JTH service links |
| **CTA** | `ctaPrimary`, `ctaSecondary` | Conversion-focused call to action |

### Service Data Model

Every service in `data/services.json` follows this structure:

```json
{
  "id": "string",
  "slug": "string",
  "title": "string",
  "tagline": "string",
  "shortDescription": "string",
  "fullDescription": "string",
  "category": "Design|Branding|Digital|Web|Training",
  "coverImage": "/images/...",
  "galleryImages": ["/images/..."],
  "benefits": ["string", ...],
  "deliverables": ["string", ...],
  "useCases": ["string", ...],
  "process": ["string", ...],
  "faq": [{ "q": "string", "a": "string" }, ...],
  "relatedServices": ["slug", ...],
  "ctaPrimary": "string",
  "ctaSecondary": "string",
  "badge": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "icon": "string"
}
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** (preferred), npm, or yarn

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server with hot reload
pnpm dev
# → http://localhost:3000
```

### Production Build

```bash
# Build for production
pnpm build

# Start the production server
pnpm start
```

### Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `next dev` | Start development server with Turbopack |
| `build` | `next build` | Build for production |
| `start` | `next start` | Start production server |
| `lint` | `next lint` | Run ESLint on the codebase |

---

## Content Management

This project uses a **content-first approach** — all editable content is stored in plain JSON files. No CMS or database is required.

### Updating Content

Edit the JSON files in `data/`:

| File | What to Update |
|---|---|
| `site-config.json` | Brand name, tagline, description, phone, email, location, social media links, navigation items |
| `services.json` | Add/edit/remove services with benefits, deliverables, use cases, process, FAQs, and images |
| `portfolio.json` | Add/edit portfolio projects with images, categories, descriptions, and case study details |
| `testimonials.json` | Add/edit client testimonials with names, ratings, quotes, and images |
| `services-pricing.json` | Update pricing information and pricing factors |
| `home-services.json` | Edit the service cards featured on the homepage |
| `solution-categories.json` | Edit the 5 core solution areas |
| `megamenu.json` | Edit the mega menu navigation structure |
| `faq.json` | Edit FAQ entries |
| `blog.json` | Add/edit blog posts with titles, excerpts, content, authors, and publish dates |

### Adding New Images

Place images in `public/images/` and reference them in the JSON files using the path format `/images/your-file.png`.

### Adding a New Service

1. Add the service entry to `data/services.json` following the existing schema
2. Place service images in `public/images/services/[service-slug]/`
3. Run `pnpm build` to generate the static page
4. The service automatically appears in the services grid and navigation

---

## Customization

### Brand Colors

Brand colors are defined as CSS custom properties in `app/globals.css`:

```css
:root {
  --color-primary: #004AAD;       /* JTH Blue — primary brand */
  --color-primary-dark: #003380;
  --color-primary-light: #1A6FE3;
  --color-secondary: #FF7A00;     /* JTH Orange — secondary accent */
  --color-secondary-dark: #CC6200;
  --color-secondary-light: #FF8F1F;
}
```

### Theme (Dark / Light)

The theme system uses `next-themes` with CSS variables. Dark mode variables are defined under `.dark` selectors in `globals.css`. The toggle component is at `components/theme-toggle.tsx`.

### Typography

The site uses two custom fonts:
- **Inter** — Primary sans-serif for body text
- **Sora** — Display font for headings and large text

Customize by modifying the `--font-sans` and `--font-display` variables in `globals.css`.

### Adding New Pages

1. Create a new directory under `app/` with a `page.tsx` file (e.g., `app/faq/page.tsx`)
2. Add the route to the navigation in `data/site-config.json` or `data/megamenu.json`
3. Create components in `components/` as needed
4. The Navbar and Footer are automatically included via the root layout

---

## Deployment

### Recommended: Vercel

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel automatically detects Next.js and uses the correct build settings
4. Environment variables (if any) can be configured in the Vercel dashboard

## Live Website

| Version | Link |
|----------|------|
| Production | https://jthgraphixproduction.com |
| Preview | https://jthgraphix.vercel.app |

## Preview

| Home | Services |
|------|----------|
| ![](public/images/home.png) | ![](public/images/services.png) |

| Portfolio | Contact |
|------------|----------|
| ![](public/images/portfolio.png) | ![](public/images/contact.png) |

## Performance

| Metric | Score |
|---------|------:|
| Performance | 98 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Design Philosophy

The website was designed around five principles:

- **Simplicity** — Every element serves a purpose
- **Accessibility** — Usable by everyone, regardless of ability
- **Scalability** — Content-first architecture grows without code changes
- **Performance** — Fast loading on all devices and networks
- **Beautiful Interactions** — Thoughtful motion that enhances, never distracts

Every component exists to improve communication rather than distract from it.

## Why this Project?

JTH Graphix Production needed more than a brochure website.

The goal was to create a platform that:

- generates leads
- showcases creative work
- markets services
- supports future online learning
- scales without a backend
- remains easy to update through JSON content

This project demonstrates how modern frontend technologies can deliver a premium business website without the complexity of a traditional CMS.

## Developer Experience

- TypeScript
- ESLint
- Reusable Components
- JSON-driven Content
- Dark Mode
- Responsive Design
- Static Generation
- Modular Architecture
- Centralized Animation System
- Semantic CSS Variables

## Roadmap

- [ ] Admin Dashboard
- [ ] CMS Integration
- [ ] AI Chat Assistant
- [ ] Payment Integration
- [ ] Booking System
- [ ] Email Automation
- [ ] Analytics Dashboard
- [ ] Client Portal

**Build settings (auto-detected):**
- Framework: Next.js
- Build command: `next build`
- Output directory: `.next`
- Install command: `pnpm install` (or `npm install`)

### Other Hosting

Any platform that supports Next.js static export or Node.js hosting:
- **Netlify** — Use `@netlify/plugin-nextjs`
- **AWS Amplify** — Native Next.js support
- **Self-hosted** — Use `next start` behind a reverse proxy

---

## CI/CD

A GitHub Actions workflow is configured at `.github/workflows/ci.yml` for automated builds on push and pull requests. To enable automated Vercel deployments from CI:

1. Generate a Vercel token from [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Add it as a repository secret named `VERCEL_TOKEN`
3. The workflow will handle building and deploying to Vercel on pushes to the main branch

---

## Changelog

### v0.2.0 (Latest)

#### Design System Refinement
- Established `#004AAD` (JTH Blue) as the primary brand color across the entire site
- Established `#FF7A00` (JTH Orange) as the secondary accent for energy and action
- Redistributed orange from dominant section backgrounds to strategic micro-accents
- Converted the footer CTA band from orange to a premium blue gradient
- Updated all primary CTA buttons to blue with appropriate hover/focus states
- Refined newsletter subscribe buttons from orange to blue
- Updated footer column heading accent bars, contact icons, and focus rings to blue
- Reduced ambient glow intensities for a more restrained, premium feel
- Enhanced CTA glow values (increased blue, decreased orange) for better visual hierarchy
- Full light mode and dark mode token sets aligned to the new hierarchy

#### Service Detail Pages Overhaul
- **Root Cause Fixed**: Services had empty arrays (`[]`) for `benefits`, `deliverables`, `useCases`, and `process` fields, causing sections to render headings with no content beneath
- **Root Cause Fixed**: The `Service` interface was incomplete — missing `process`, `faq`, `tagline`, `relatedServices`, `ctaPrimary`, `ctaSecondary` fields
- **Root Cause Fixed**: The "What You Get" section used a confusing fallback chain (`features ?? benefits ?? deliverables`) that returned empty arrays instead of falling through
- **Root Cause Fixed**: FAQ section used hardcoded data instead of `service.faq`
- Standardized service data model across all 24 services with consistent field naming
- Completed benefits, deliverables, use cases, process steps, and FAQs for every service
- All content is service-specific — no generic filler
- Added "Our Process" section with numbered step cards and connecting gradient line
- Added "Why JTH" section with three value propositions (Strategy-Led Design, Fast Reliable Delivery, Quality You Can Trust)
- Added empty-state protection — sections only render when they have content
- Used service-specific CTA button labels (`ctaPrimary`, `ctaSecondary`)
- Improved hero section to display `tagline` as a highlighted subtitle
- Removed `as any` type casts from service grid component
- TypeScript passes clean, build succeeds with all 24 service slugs statically generated

#### Services Updated (24 total)
`flyer-design`, `poster-design`, `logo-design`, `branding-identity`, `business-profile-design`, `business-card-design`, `brochure-design`, `social-media-graphics`, `social-media-management`, `seo-optimization`, `geo-optimization`, `website-design`, `banner-design`, `event-publicity-graphics`, `corporate-branding-materials`, `premium-printing`, `virtual-training-sessions`, `recorded-courses`, `institutional-training`, `design-skill-training`, `digital-skills-workshops`

### v0.1.0 (Initial)

- Initial release with Next.js 16, React 19, Tailwind CSS v4, TypeScript 5.7
- 18 services, portfolio gallery, testimonials, blog, contact form
- System/dark/light theme support
- Responsive design with mobile-first approach
- Static generation with `generateStaticParams`
- Content-first architecture with JSON data files

---

## Contributing

- Follow the component patterns established in `components/ui/` for consistency
- Keep page content in `data/` JSON files — avoid hardcoding text in components
- Use the centralized animation variants from `lib/animations.ts` rather than inline Framer Motion definitions
- Use the `cn()` utility from `lib/utils.ts` for conditional Tailwind class merging
- Ensure new components are accessible (ARIA attributes, keyboard navigation, semantic HTML)
- Run `pnpm lint` before committing to catch code quality issues
- Test responsive behavior across mobile, tablet, and desktop breakpoints
- All service content must be service-specific — no generic filler

---

## Contact

Mark Kinyanjui Gitau

Website:
https://jthgraphixproduction.com

Portfolio:
https://descientist.vercel.app

Email:
jthgraphixproduction@gmail.com

GitHub:
https://github.com/yourusername

---

<div align="center">

# Built with love

by

## Mark Kinyanjui Gitau

*"Learn. Earn. Return. Iterate."*

If you enjoyed this project, consider starring the repository.

</div>
