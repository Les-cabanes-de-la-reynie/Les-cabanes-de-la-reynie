---
version: 1
slug: "src-app-locale-page-tsx"
primary_target: "src/app/[locale]/page.tsx"
related_targets: ["src/app/[locale]/logements/yourte/page.tsx","src/app/[locale]/logements/cabane/page.tsx","src/app/[locale]/activites/page.tsx","src/app/[locale]/nous-trouver/page.tsx"]
---

# Site public — refonte « Sapin × Cabane »

Scope: every public page (home, yurt, cabin, activities index and details, find-us) plus the shared chrome (header, footer). Mode: Persuade (home, stays) with Read passages (stories, activities). Audience, job and proof: see PRODUCT.md. Constraints from the owner: stay very close to the current identity; priorities are reading comfort and "lack of life"; the old font and the mixed greens felt odd; style + small composition tweaks only, no section recomposition.

Chosen in a live prototype round (Actuel / Sapin / Carnet / Cabane): typography of Sapin, everything else from Cabane.

## Direction contract

THESIS: A forest-cabin site that reads like a calm, well-set notebook: one sturdy humanist sans carries every word, the photos carry the colour and the motion. Refuses the booking-platform kit (badges, shouted greens) and the shadcn-default look.

OWN-WORLD: Moss family only (hue ~140–165°): page #f1f6f3 / #151b17, deep forest header band #173f33 in both themes, sapin #1b5c4a / #22745c for actions only, sage ink #1b5c4a / #9fd0b4 for links and icons. Source Sans 3 for all text, Galada kept only in the logo. Soft 10–18px radii, tinted tiles without borders, highlights as soft pills, no shadows.

STORY: The visitor sees the place first, reads short stories in a comfortable 68ch column, recognises the yurt and the cabin through photo cards, and leaves for Airbnb through one obvious sapin button.

FIRST VIEWPORT: Home: full-bleed yurt interior photo, centred title in Source Sans 3 semibold (display size), subtitle, sapin "Réserver sur Airbnb" button plus outline "Plongez dans la nature"; on desktop the header floats transparent over the photo on a dark top gradient (solid forest band on every other page and on mobile), with a white translucent pill on the active item. Stay pages: photo half / text half, title, description, price, booking button.

FORM: Refinement of the incumbent world, position 1 of 1. seed: none (pinned) — "J'aime bien les polices du Sapin mais les couleurs etc. de la Cabane, on peut partir sur ça". Signature motion: the hero settles (image 1.08→1, text rises in sequence) and photos develop with a clip-path reveal as they scroll into view; the home photo band drifts in parallax. Press feedback scale 0.97 on controls and 0.99 on large photo cards (a 3% shrink on a full-width photo reads as a jump), hover only on fine pointers, everything off under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
