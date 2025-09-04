# The Real Geopolitik

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
