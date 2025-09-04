# The Real Geopolitik

A Next.js (App Router) + TypeScript + Tailwind UI scaffold for a premium editorial newspaper / YouTube channel site.

## Run

```powershell
npm install
npm run dev
```

## Edit
- Navigation: `components/SiteHeader.tsx`, `components/editorial/Nav.tsx`
- Colors/tokens: `app/globals.css`, `tailwind.config.ts`
- Mock data: `data/editorialPosts.ts`

## Next steps
- Auth.js + Prisma + Postgres
- Connect a CMS for content
- Image hosting via Cloudinary
- Add shadcn/ui where needed# The Real Geopolitik

A production-grade Next.js 15 (App Router) + TypeScript + Tailwind + shadcn-style UI scaffold for a newspaper / YouTube channel site.

## Run

```bash
npm i
npm run dev
```

## Where to edit

- Navigation: `components/SiteHeader.tsx`
- Colors/Tailwind: `tailwind.config.ts` and `app/globals.css`
- Mock data: `data/*.ts`

## Tech

- Next.js 15 (App Router) + TypeScript
- TailwindCSS (dark mode: media)
- shadcn-style UI primitives in `components/ui/*`
- ESLint + Prettier

## Next steps

- Hook up Auth.js for auth
- Add Prisma + Postgres for persistence
- Use Cloudinary or similar for media
