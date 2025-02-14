# Les cabanes de la Reynie

## Description

Les cabanes de la Reynie is a guest rooms that you can enjoy with an awesome
**Yurt** or a **Hut** in France.

## Website

You can visit the website with this link:
[Les cabanes de la Reynie](https://les-cabanes-de-la-reynie.vercel.app/).

You could find in the website:

- Yurt and Hut's pictures
- Details of each services
- An opening hours
- The location
- Pictures of the landscape
- What to do next to the establishment etc.

To book, you have to sign up in other plaform like Airbnb or other.

The website is responsive and works on **smartphone**, **tablet** and
**desktop**.

You can switch between **French** or **English** languages in the header of the
application.

You can also switch between **Dark** or **Light** mode.

## Techinal details summary

- UI: [React](https://react.dev/)
- Framework: [Next.js](https://nextjs.org/docs) (App directory & Server actions
  with next-safe-action)
- Language: [TypeScript](https://www.typescriptlang.org/fr/docs/)
- Styling: [TailwindCSS](https://tailwindcss.com/)
- Design System & Components: [ShadCN](https://ui.shadcn.com/) /
  [Radix UI](https://www.radix-ui.com/) + [CVA](https://cva.style/docs) + Custom
  component
- ORM: [Prisma](https://www.prisma.io/)
- Database: PostgreSQL with [neon.tech](https://neon.tech/) (connection with
  github account)
- E2E Tests: [Playwright](https://playwright.dev/)
- i18n: [next-intl](https://next-intl-docs.vercel.app/) (FR & EN)
- Authentication: [Auth0](https://auth0.com/) (admin page)
- Upload image: [uploadthing](https://uploadthing.com/) (admin page only)
- Map: [Leaflet](https://leafletjs.com/) + [Mapbox](https://www.mapbox.com/) (a
  **key** for mapbox is mandatory)
- Dark mode: [next-themes](https://github.com/pacocoursey/next-themes)
- Linting: [Eslint](https://eslint.org/)
- Formating: [Prettier](https://prettier.io/)

## Project

### Env file

Before start the project, be sure that you had correctly add all information in
the **.env** file. Otherwise, some features won't work.

### Start development

To start the project, you have to simply use this command below:

```bash
npm run dev
```

### ESLint

ESLint file is in the root of the project (eslintrc.json).

You can run check with this command below:

```bash
npm run lint
```

### Style

If you need to change some colors, this project use **shadcn ui** and
**tailwind** so you can change colors in _src/app/globals.css_ and other
configurations in the **tailwind.config.ts** file.

## Database

PostgreSQL database is deployed on [neon.tech](https://neon.tech/).

To update the database with Prisma, you have to delete the migrations folder and
type in the terminal:

```bash
npx prisma migrate dev
```

**WATCH OUT** this operation can delete all data in the database ! But there's a
seed file in **prisma** folder (seed.ts).

## Hosting

The website is hosting in Vercel (name domaine in coming).

You need to **override** the **Build Command** in Vercel with:

```bash
npm run vercel-build
```

We need to **prisma generate** + **prisma migrate deploy** before the classic
**next build**. You can change it in the package.json. A seed is available with:

```bash
npm run prisma:seed
```

## E2E Tests

The E2E Tests are written with **Playwright**.

To open Playwright UI interface:

```bash
npm run test
```

To open Playwright codegen (click and have code):

```bash
npm run test:write
```

To play all Playwright tests:

```bash
npm run test:run
```

[Made by David Bourrel](https://github.com/davidbourrel).
