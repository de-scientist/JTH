# JTH Graphix Production — Portfolio Website

[![Version](https://img.shields.io/badge/Version-0.1.0-blue)](https://github.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.0-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![pnpm](https://img.shields.io/badge/Package_Manager-pnpm-blue?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)

A **production-ready portfolio and business website** for **JTH Graphix Production**, a Nairobi-based creative agency specializing in graphic design, branding, digital marketing, web design, and creative skills training. The site serves as a full marketing and lead-generation platform.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Pages & Routes](#pages--routes)
- [Tech Stack](#tech-stack)
- [Architecture & Patterns](#architecture--patterns)
- [Project Structure](#project-structure)
- [Service Catalog](#service-catalog)
- [Getting Started](#getting-started)
- [Content Management](#content-management)
- [Customization](#customization)
- [Deployment](#deployment)
- [CI/CD](#cicd)
- [Contributing](#contributing)

---

## Project Overview

JTH-Portfolio is a **fully static, content-driven website** built entirely with modern frontend technologies. It showcases the agency's work, services, and expertise while providing multiple avenues for potential clients to get in touch. The site follows a **content-first architecture** — all text, images, and structured data are stored as editable JSON files in the `data/` directory, completely decoupled from the UI components. This means anyone can update the site content without touching React code.

The website includes a comprehensive service catalog of 18 services across 5 categories, a filterable portfolio gallery with lightbox detail views, an animated testimonial carousel, a multi-field contact form with service selection, WhatsApp integration for instant communication, a blog section, and a pricing page — all wrapped in a polished, responsive design with dark/light theme support.

---

## Features

### Visual & UX
- **Responsive Design** — Mobile-first layouts with breakpoints at `sm:`, `md:`, `lg:`, `xl:` using Tailwind CSS
- **Dark / Light Theme** — System-aware theme switching via `next-themes` with a manual toggle and smooth CSS transitions
- **Scroll-Triggered Animations** — Framer Motion-powered fade-in, slide-in, scale, and stagger animations across all sections
- **Animated Stats Counters** — Number counters (e.g., "100+ Projects") that animate on scroll into view
- **Glassmorphism Navbar** — Fixed navigation bar with scroll-aware glass effect and backdrop blur
- **Gradient Brand Identity** — Consistent blue-to-orange gradient (`#004AAD` to `#FF7A1A`) used throughout as the primary visual treatment

### Interactive Components
- **Floating WhatsApp Button** — Persistent CTA button on all pages that opens WhatsApp with a pre-filled message
- **Testimonial Carousel** — Auto-rotating (5-second interval) carousel with manual navigation dots
- **Portfolio Lightbox** — Modal detail view for portfolio items with project information and CTA buttons
- **Service Image Galleries** — Embla Carousel image sliders on each service detail page
- **FAQ Accordion** — Expandable Q&A sections on service detail pages using Radix Accordion
- **Contact Form** — Multi-field form with service selection dropdown, simulated submission with success feedback
- **Mobile Hamburger Menu** — Animated slide-in navigation menu for mobile devices

### Business Functionality
- **Full Service Catalog** — 18 services across 5 categories with dedicated detail pages
- **Filterable Portfolio** — Gallery with 8 category filters (Branding, Digital Marketing, Flyers, Logos, Posters, Social Media, Web Design, Other)
- **SEO Metadata** — Per-page Next.js Metadata API with Open Graph and Twitter Card support
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
| `/services/[slug]` | **Service Detail** | Dynamic pages for all 18 services — includes hero section, image gallery (Embla carousel), features list, deliverables, use cases, FAQ accordion, and related services |
| `/services-pricing` | **Pricing** | Pricing overview with priced services, custom-quote services, and coming-soon indicators |
| `/portfolio` | **Portfolio** | Filterable masonry gallery with 8 categories; clicking an item opens a lightbox modal with full project case study details |
| `/testimonials` | **Testimonials** | Client testimonials with star ratings, a featured testimonial highlight, trust-building statistics, and navigation filters |
| `/contact` | **Contact** | Contact information (phone, email, location), social media links, business hours, and an inquiry form with service selection |

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
├── services.json         # Full service catalog (18 services with features, deliverables, FAQs)
├── portfolio.json        # Portfolio items (24 items with images, categories, case studies)
├── testimonials.json     # Client testimonials (8 entries with ratings and quotes)
├── services-pricing.json # Pricing page content and pricing factors
├── home-services.json    # Service cards featured on the homepage
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
- **Custom Utility Classes** — `text-gradient`, `bg-gradient-brand`, `glass`, `glass-nav`, `card-premium`, `glow-blue`, `glow-orange` for consistent branded effects
- **No CSS Modules or styled-components** — All styling is utility-based with Tailwind

### Key Design Decisions

- **No backend or database** — Fully static site, no API routes, no server-side data fetching
- **No state management library** — Component-local state with `useState`/`useEffect` suffices
- **`next.config.mjs` has `images.unoptimized: true`** — Likely to avoid Vercel's image optimization limits
- **`generateStaticParams()`** — Service detail pages are pre-rendered at build time from `services.json`
- **Accessibility** — `aria-label`, `aria-live`, `role` attributes, semantic HTML, and `sr-only` classes

---

## Project Structure

```
├── app/                          # Next.js App Router (pages & layouts)
│   ├── globals.css               # Tailwind v4 + theme CSS variables + custom utilities
│   ├── layout.tsx                # Root layout: Navbar, Footer, ThemeProvider, Analytics
│   ├── page.tsx                  # Homepage (assembles 9 section components)
│   ├── about/page.tsx            # About Us page
│   ├── contact/page.tsx          # Contact page with form
│   ├── portfolio/page.tsx        # Portfolio gallery page
│   ├── services/page.tsx         # Services listing page
│   ├── services/[slug]/page.tsx  # Dynamic service detail pages (18 total)
│   ├── services-pricing/page.tsx # Pricing overview page
│   └── testimonials/page.tsx     # Testimonials page
│
├── components/                   # React components
│   ├── ui/                       # 58 shadcn/ui primitives (Button, Card, Dialog, etc.)
│   ├── home/                     # Homepage sections (Hero, Stats, Services, Portfolio, etc.)
│   ├── about/                    # About page component
│   ├── contact/                  # Contact form component
│   ├── portfolio/                # Portfolio gallery + lightbox component
│   ├── services/                 # Services grid, detail, and CTA components
│   ├── testimonials/             # Testimonials content component
│   ├── navbar.tsx                # Main navigation bar (glass effect, mobile menu)
│   ├── footer.tsx                # Site footer with newsletter signup
│   ├── theme-provider.tsx        # next-themes provider wrapper
│   ├── theme-toggle.tsx          # Dark/light mode toggle button
│   └── whatsapp-button.tsx       # Floating WhatsApp CTA button
│
├── data/                         # Editable JSON content files
│   ├── blog.json
│   ├── home-services.json
│   ├── portfolio.json
│   ├── services.json
│   ├── services-pricing.json
│   ├── site-config.json
│   └── testimonials.json
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Mobile breakpoint detection
│   └── use-toast.ts              # Toast notification hook
│
├── lib/                          # Utilities and shared code
│   ├── utils.ts                  # cn() — clsx + tailwind-merge utility
│   └── animations.ts             # Centralized Framer Motion animation variants
│
├── public/                       # Static assets
│   ├── images/                   # Logo, portfolio, service, blog, and placeholder images
│   ├── icon.svg                  # SVG favicon
│   └── icon.png                  # PNG favicon
│
├── styles/                       # Additional global styles
│   └── globals.css
│
├── .github/workflows/ci.yml      # GitHub Actions CI pipeline
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── postcss.config.mjs            # PostCSS with Tailwind plugin
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── pnpm-lock.yaml or package-lock.json  # Dependency lock files
```

---

## Service Catalog

The agency offers **18 services** organized into **5 categories**:

| Category | Services |
|---|---|
| **Design** | Flyer Design, Poster Design, Brochure Design, Banner Design, Premium Printing |
| **Branding** | Logo Design, Branding & Visual Identity, Business Profile Design, Business Card Design, Corporate Branding Materials |
| **Digital** | Social Media Graphics, Social Media Management, Event & Publicity Graphics |
| **Web** | Website Design |
| **Training** | Virtual Training Sessions, Recorded Courses, Institutional Training, Design Skill Training, Digital Skills Workshops |

Each service has a dedicated detail page (`/services/[slug]`) with:
- A hero section with service title and description
- An image gallery using Embla Carousel
- A features/benefits list
- Deliverables section
- Use cases or target audience
- FAQ accordion with common questions
- Links to related services
- Call-to-action buttons (WhatsApp and Contact)

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
| `services.json` | Add/edit/remove services, their descriptions, features, deliverables, FAQs, and images |
| `portfolio.json` | Add/edit portfolio projects with images, categories, descriptions, and case study details |
| `testimonials.json` | Add/edit client testimonials with names, ratings, quotes, and images |
| `services-pricing.json` | Update pricing information and pricing factors |
| `home-services.json` | Edit the service cards featured on the homepage |
| `blog.json` | Add/edit blog posts with titles, excerpts, content, authors, and publish dates |

### Adding New Images

Place images in `public/images/` and reference them in the JSON files using the path format `/images/your-file.png`.

---

## Customization

### Brand Colors

Brand colors are defined as CSS custom properties in `app/globals.css`:

```css
--color-primary: #004AAD;     /* JTH Blue */
--color-secondary: #FF7A1A;   /* JTH Orange */
--color-gradient: linear-gradient(135deg, #004AAD, #FF7A1A);
```

### Theme (Dark / Light)

The theme system uses `next-themes` with CSS variables. Dark mode variables are defined under `.dark` selectors in `globals.css`. The toggle component is at `components/theme-toggle.tsx`.

### Typography

The site uses Tailwind's default font system with `Inter` as the primary sans-serif font. Customize by modifying the `font-family` in `globals.css`.

### Adding New Pages

1. Create a new directory under `app/` with a `page.tsx` file (e.g., `app/faq/page.tsx`)
2. Add the route to the navigation in `data/site-config.json`
3. Create components in `components/` as needed
4. The Navbar and Footer are automatically included via the root layout

---

## Deployment

### Recommended: Vercel

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel automatically detects Next.js and uses the correct build settings
4. Environment variables (if any) can be configured in the Vercel dashboard

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

## Contributing

- Follow the component patterns established in `components/ui/` for consistency
- Keep page content in `data/` JSON files — avoid hardcoding text in components
- Use the centralized animation variants from `lib/animations.ts` rather than inline Framer Motion definitions
- Use the `cn()` utility from `lib/utils.ts` for conditional Tailwind class merging
- Ensure new components are accessible (ARIA attributes, keyboard navigation, semantic HTML)
- Run `pnpm lint` before committing to catch code quality issues
- Test responsive behavior across mobile, tablet, and desktop breakpoints
