# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
# Development
npm run dev           # Start dev server
npm run build         # Production build
npm run lint          # ESLint check

# Database
npm run prisma:seed   # Seed the database
npm run db:studio     # Open Prisma Studio GUI

# E2E Tests (Playwright)
npm run test          # Open Playwright UI (interactive)
npm run test:run      # Run all tests headlessly (CI)
npm run test:write    # Record new tests via codegen
```

Vercel production build runs: `prisma generate` → `prisma migrate deploy` → `next build`.

## Architecture

**Les Cabanes de la Reynie** is a bilingual (FR/EN) accommodation website for Yurts and Cabins, with a built-in admin panel.

### Key Tech

- **Next.js 16** (App Router, React Server Components, React 19 + Compiler)
- **Tailwind CSS 4** + **shadcn/ui** (New York style, Radix UI primitives)
- **Prisma 7** ORM → PostgreSQL on Neon.tech
- **Better Auth 1.4** for authentication
- **next-intl 4** for i18n (French default, English)
- **next-safe-action 8** for type-safe, Zod-validated server actions
- **Uploadthing 7** for image uploads
- **Playwright** for E2E testing

### Directory Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-scoped routes (FR/EN)
│   │   ├── admin/         # Admin panel (auth-gated)
│   │   └── ...            # Public pages
│   └── api/               # API routes (auth, uploadthing)
├── features/              # Feature modules (each owns its components + infrastructure)
│   ├── accommodations/
│   │   ├── cabin/
│   │   └── yurt/
│   ├── auth/
│   ├── openingHours/
│   └── ...
└── shared/
    ├── components/ui/     # shadcn/ui components
    ├── lib/               # Core singletons: prisma.ts, auth.ts, safe-actions.ts, env.ts
    └── providers/         # React context providers

messages/                  # i18n JSON files (fr.json, en.json)
e2e/                       # Playwright specs
prisma/                    # schema.prisma, migrations/, seed.ts
```

### Feature Module Pattern

Each feature under `src/features/` follows this structure:
```
features/<name>/
├── components/       # React components (UI)
└── infrastructure/   # Server actions & queries (data access)
```

### Server Actions

Actions use `next-safe-action` with Zod input validation:
- `actionClient` — public actions (`src/shared/lib/safe-actions.ts`)
- `authActionClient` — requires authenticated session

### Environment Variables

Validated at startup via `src/shared/lib/env.ts` (Zod + @t3-oss/env-nextjs). Always import `env` from there, never `process.env` directly.

| Variable | Side |
|---|---|
| `DATABASE_URL` | Server |
| `DIRECT_DATABASE_URL` | Server (migrations) |
| `BETTER_AUTH_SECRET` | Server |
| `UPLOADTHING_TOKEN` | Server |
| `NEXT_PUBLIC_BASE_URL` | Client |
| `NEXT_PUBLIC_MAPBOX_KEY` | Client |

### i18n Routing

Routes use a `[locale]` dynamic segment. Locale-aware path aliases are defined in `src/i18n/routing.ts`. Use `next-intl` hooks/utilities for all translations and navigation.

### E2E Tests

Tests in `e2e/*.spec.ts` use `data-testid` selectors. The Playwright config auto-starts the dev server and runs against Desktop Chrome, Mobile Chrome (Pixel 5), and Mobile Safari (iPhone 12).
