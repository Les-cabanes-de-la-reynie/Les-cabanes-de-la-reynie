---
version: 1
slug: "src-app-locale-mentions-legales-page-tsx"
primary_target: "src/app/[locale]/mentions-legales/page.tsx"
related_targets: ["src/app/[locale]/conditions-utilisation/page.tsx","src/app/[locale]/confidentialite/page.tsx","src/shared/components/footer/Footer.tsx"]
---

# Legal pages and footer

Scope: three legal documents (mentions légales, conditions d'utilisation, politique de confidentialité), FR and EN, reached from a reworked footer that also carries a discreet owner sign-in link. Mode: Read (documents); the footer is an extension of every page.

Audience: visitors checking who runs the place before booking on Airbnb, foreign tourists reading the EN version, occasionally an authority. Job: find the operator, the host, what happens to their data and how to reach the owner, within seconds. The owner (single admin account, sign-up closed) needs a findable way into the admin.

Truth and constraints: operator identity (name, legal status, SIRET, publication director, registered address) is not supplied yet; each missing field shows a visible "to complete" marker and the PR stays unmerged until filled. Phone and e-mail come from the admin-edited address, whose street stays private. Host: Vercel Inc., which publishes no phone number (its contact page stands in). No claims beyond what the code does (no analytics, no visitor cookies, map tiles from Mapbox, itinerary built in the browser).

## Direction contract

THESIS: the fine print reads like the rest of the clearing, a calm document a visitor can actually scan; it refuses the category default of one grey, justified wall of legalese with no wayfinding.

OWN-WORLD: Source Sans 3 at 17/1.7 in a 68ch column on the sous-bois or aube ground; ink links, always underlined; lichen pill for the current document; definition lists for identity facts; coquelicot dashed marker only for a field still to fill; the footer becomes a forest band that closes the page like the header opens it.

STORY: the visitor sees who runs the site, where it is hosted, that no tracking happens and what their rights are; they leave reassured about how serious the place is, and know how to write to the owner.

FIRST VIEWPORT: desktop: a 15rem sticky rail on the left (the three documents, then "on this page"), the 68ch column on the right with the h1, the update date and a two-line summary. Mobile: the three documents as a wrapping row of pills, then the h1. No hero, no image.

FORM: document page with a side rail, in the established DESIGN.md world (forest band, Source Sans 3, ink). seed: none (pinned) « Retravail également le footer pour mettre les CGU, condition d'utilisation etc. »

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
