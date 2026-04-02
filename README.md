<!-- Updated README: professional summary, badges, and repo stats -->
# JTH-Portfolio

[![Version](https://img.shields.io/badge/Version-0.1.0-blue)](https://github.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.0-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/Package%20Manager-pnpm-blue?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![Private](https://img.shields.io/badge/Private-true-lightgrey)]()

Professional portfolio and marketing website for JTH Graphix Production. Built with Next.js (App Router), TypeScript, Tailwind CSS and a component-driven UI inspired by shadcn/ui and Radix primitives.

**Project stats**

- **Components:** 75
- **Pages / Routes:** 9
- **Images & assets:** 237

These numbers come from the repository layout and give a quick sense of scale — components are modular and content is stored as JSON under `data/`.

**Quick links**

- Site config: [data/site-config.json](data/site-config.json)
- Main entry: [app/page.tsx](app/page.tsx)
- Layout: [app/layout.tsx](app/layout.tsx)
- Components directory: [components/](components)

**Why this repo**

- Clean, responsive portfolio with reusable UI primitives.
- Content-first approach: editable JSON under `data/` keeps the UI flexible.
- Easy to deploy to Vercel or any Next.js-compatible host.

**Tech stack**

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Radix primitives + shadcn-style component patterns

**Local development**

Prerequisites: Node 18+ and a package manager (pnpm recommended — this repo includes `pnpm-lock.yaml`).

Install dependencies:

```bash
pnpm install
# or
npm install
```

Run development server (hot reload):

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

Start production server:

```bash
pnpm start
# or
npm start
```

**Project structure (high level)**

- `app/` — Next.js App Router pages and route-level layouts
- `components/` — page components and shared UI primitives
- `components/ui/` — design-system primitives and shadcn-style components
- `data/` — content JSON (portfolio, services, testimonials, site-config)
- `public/` — static images and assets
- `styles/` — global CSS & Tailwind

**Content & customization**

- Edit `data/site-config.json` to update brand, contact and social links.
- Update `data/portfolio.json` / `data/services.json` to change displayed items.
- Replace images in `public/images/` to refresh visuals.

**Deployment**

- Recommended: Vercel — connect the repo for automatic builds & previews.
- CI: add a `VERCEL_TOKEN` secret to enable automated deployments from workflows.

**Contributing / notes for developers**

- Follow patterns in `components/ui/` to keep components consistent.
- Keep page content in `data/` for separation of content and presentation.
- Run `pnpm lint` to check the codebase before committing.

If you'd like, I can also add:

- a `CONTRIBUTING.md` and PR template,
- a small developer guide for the component library,
- or a GitHub Actions workflow for linting and preview deploys.

---

_Maintained by JTH Graphix Production — for questions or customization requests, update `data/site-config.json` or open an issue._
