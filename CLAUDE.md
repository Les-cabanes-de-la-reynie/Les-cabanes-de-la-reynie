# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Les Cabanes de la Reynie" is a bilingual (French/English) Next.js website for a luxury yurt and cabin lodging property in France. French is the default locale.

## Common Commands

```bash
# Development
npm run dev

# Build & lint
npm run build
npm run lint

# E2E tests (requires dev server running)
npm run test          # Playwright UI mode
npm run test:run      # Headless
npm run test:write    # Codegen for new tests (mobile viewport)

# Database
npm run prisma:seed   # Seed database
npx prisma migrate dev  # Run migrations in dev
npx prisma studio       # Database GUI

# Production build (used by Vercel)
npm run vercel-build  # prisma generate + migrate deploy + next build
```

## Architecture

### Directory Structure

```
src/
├── app/
│   ├── [locale]/          # All public pages under locale segment
│   │   └── admin/         # Admin dashboard (auth-protected)
│   ├── api/
│   │   ├── auth/[...all]/ # Better Auth handler
│   │   └── uploadthing/   # Image upload endpoints
│   └── globals.css        # Tailwind v4 + CSS variables for theming
├── features/              # Feature-scoped modules (main business logic)
├── shared/                # Cross-feature utilities, components, lib
└── i18n/                  # next-intl routing, request config, navigation
```

### Feature Module Pattern

Each feature under `src/features/` follows this structure:
```
features/<name>/
├── components/            # React components
├── infrastructure/
│   ├── actions/           # Server actions (next-safe-action)
│   └── queries/           # Data fetching (Prisma)
├── <Name>Schema.ts        # Zod validation schema
├── _types.ts              # TypeScript types
└── _const.ts              # Constants
```

### Server Actions

Server actions use `next-safe-action` wrappers defined in `src/shared/lib/safe-actions.ts`:
- `actionClient` — unauthenticated actions
- `authActionClient` — protected actions (requires Better Auth session)

### Routing & i18n

- URL structure: `/<locale>/...` (e.g., `/fr/logements/cabane`, `/en/accommodations/cabin`)
- Locale-specific path mappings defined in `src/i18n/routing.ts`
- Route constants in `src/shared/_constants/page.ts`
- Use `src/i18n/navigation.ts` exports (`Link`, `redirect`, `useRouter`, `usePathname`) instead of Next.js defaults

### Middleware

`src/proxy.ts` handles:
1. Admin route protection (redirects unauthenticated to `/admin/auth/sign-in`)
2. Redirect authenticated users away from sign-in
3. next-intl locale detection and routing

### Database

Prisma with PostgreSQL (neon.tech). Main models: `Cabin`, `Yurt`, `Address`, `OpeningHours`, `Image`. Auth models (`User`, `Session`, `Account`, `Verification`) managed by Better Auth.

### Key Libraries

| Purpose | Library |
|---|---|
| Styling | Tailwind CSS v4 + ShadCN (new-york style, zinc base) |
| UI components | `src/shared/components/ui/` (ShadCN) |
| Forms | React Hook Form + Zod |
| Auth | Better Auth (email/password) |
| Image uploads | UploadThing |
| Maps | Leaflet + React-Leaflet + Mapbox |
| Toasts | Sonner |

## Environment Variables

Required (see `.env.example`):
```
NEXT_PUBLIC_BASE_URL
NEXT_PUBLIC_MAPBOX_KEY
BETTER_AUTH_SECRET
DATABASE_URL
UPLOADTHING_TOKEN
```

Optional:
```
ENABLE_VISITOR_COUNT
```

## Code Style

Prettier config (`.prettierrc`): no semicolons, single quotes, no trailing commas, 2-space indent, 80 char width. Plugins: `prettier-plugin-tailwindcss`, `prettier-plugin-organize-imports`.

The `cn()` utility for merging Tailwind classes is at `src/shared/utils/tailwind.ts`.

## Testing

E2E only with Playwright. Tests in `e2e/`. Shared utilities in `e2e/commons.ts`. Tests run against `http://localhost:3000` on Desktop Chrome, Mobile Chrome, and Mobile Safari.
