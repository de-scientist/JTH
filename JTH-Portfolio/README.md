# JTH-Portfolio

JTH-Portfolio is a marketing and portfolio website for JTH Graphix Production. It's built with Next.js and a component-driven UI using the shadcn/ui patterns and Tailwind CSS. The site is content-driven using small JSON files in `data/` and static assets in `public/`.

**Quick links**
- **Site config:** [data/site-config.json](data/site-config.json)
- **Main app entry:** [app/page.tsx](app/page.tsx)
- **Layout:** [app/layout.tsx](app/layout.tsx)
- **Components:** [components/](components)

## Features
- Clean, responsive portfolio and services pages
- Component library under `components/ui/` (shadcn + Radix + Tailwind)
- Content stored in JSON files (`data/portfolio.json`, `data/services.json`, `data/testimonials.json`)
- Theme support via `next-themes`

## Tech stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- shadcn/ui + Radix primitives
- TypeScript

## Setup
Prerequisites: Node 18+ and a package manager (pnpm recommended — repo includes `pnpm-lock.yaml`).

Install dependencies:

```bash
pnpm install
# or
npm install
```

Run development server:

```bash
pnpm dev
# or
npm run dev
```

Build for production:

```bash
pnpm build
# or
npm run build
```

Start the production server:

```bash
pnpm start
# or
npm start
```

## Project structure (high level)
- `app/` — Next.js App Router pages and layout
- `components/` — UI components and page-specific component groups
- `components/ui/` — shared UI primitives (shadcn + Radix)
- `data/` — JSON content for portfolio, services, testimonials, and site config
- `public/` — static images and assets
- `styles/` — global CSS and Tailwind entry

## Customizing content
- Edit `data/site-config.json` to change brand, contact and social links.
- Update `data/portfolio.json` and `data/services.json` to change displayed items.
- Replace images in `public/images/` to update visuals.

## Deployment
This app deploys well to Vercel or any platform that supports Next.js. Push to your Git provider and connect the repo to Vercel for automatic builds and previews.

## Notes for contributors
- Follow the component patterns in `components/ui/` when adding new UI primitives.
- Keep content-driven data in `data/` so the UI stays reusable.

If you want, I can also add a short developer guide or scripts for previewing content locally.
