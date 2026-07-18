---
target: home page /fr (re-critique)
total_score: 26
p0_count: 1
p1_count: 2
timestamp: 2026-07-18T16-37-27Z
slug: src-app-locale-page-tsx
---
Méthode : dual-agent (A : revue design · B : détecteur + navigateur, isolés) — re-critique après les passes confiance/réservation/SEO.

## Design Health Score — 26/40 (Acceptable, en net progrès : baseline 22/40)

| # | Heuristique | Score | Constat clé |
|---|---|---|---|
| 1 | Visibilité de l'état | 3 | Nav active OK, loaders, icônes lien-externe ; le pager ne dit pas où on est |
| 2 | Correspondance monde réel | 3 | Copy naturelle ; « Tarif moyen : 199€ » sans unité |
| 3 | Contrôle et liberté | 3 | Rien de piégeux |
| 4 | Cohérence et standards | 2 | 3 vocabulaires pour « aller voir une page » : photo-cards / boutons outline nus / ruban incliné |
| 5 | Prévention des erreurs | 2 | Le CTA cabane réserve l'annonce de la yourte, sans avertissement |
| 6 | Reconnaissance vs rappel | 2 | « Activité suivante » et « Découvrir les activités » = navigation mystère, zéro aperçu |
| 7 | Flexibilité | 2 | Un seul chemin, correct pour une vitrine |
| 8 | Esthétique et minimalisme | 3 | Écrin sombre tenu ; photos dupliquées slider/cards, vides à 1440, pages activités squelettiques |
| 9 | Récupération d'erreurs | 2 | error/not-found présents, rien de contextuel |
| 10 | Aide | 2 | BookingSection explique bien le parcours ; email placeholder au moment du repli |
| **Total** | | **26/40** | |

## Verdict anti-patterns

Pas de slop classique (aucun finding détecteur, pas de dégradés/eyebrows/glassmorphism ; One Green Rule et Galada Rule tenues, photos authentiques des logements). Les tells restants : **composants shadcn laissés bruts** — les liens de navigation croisée sont des `buttonVariants outline` nus de 36 px (le « c'est moche » du propriétaire est fondé) ; **photos stock non locales** sur les pages activités (paysages alpins impossibles en Corrèze — faille d'authenticité pour un site qui promet « le lieu tel qu'il est ») ; ruban incliné des ActivityCard qui recouvre la photo au hover.

Convergence A/B : détecteur 0 finding ✓ ; base a11y excellente (0 alt manquant, 0 bouton sans nom, focus visibles, pas d'overflow 375, `/en` 100 % anglais). B a attrapé ce que A n'a pas vu : « Développé parDavid Bourrel » (espace manquant, 2 locales) et l'absence totale de h2 sur les pages activités (h1 → h3 footer).

## Ce qui marche

1. « La clairière au crépuscule » est réellement tenue — identité reconnaissable, zéro template.
2. Le chemin de réservation existe et sa copy transforme la délégation à Airbnb en argument (avis voyageurs).
3. **Le bon modèle est déjà dans le code** : AccommodationsCard (photo pleine carte, crossfade, label sur dégradé) est exactement l'affordance que les liens laids devraient adopter.

## Problèmes prioritaires

1. **[P0 — connu/reporté par le propriétaire]** Email placeholder `example-…@hotmail.fr` en prod dans le footer (semé par prisma/seed.ts, affiché par Address.tsx). Décision actuelle : l'adresse n'existe pas encore. Risque acté : la dissonance de confiance en toute fin de parcours. Garde-fou proposé : validation refusant `example-` côté admin.
2. **[P1] Liens de navigation croisée = boutons outline nus** (« Découvrir les activités » home, « Découvrez aussi la cabane/yourte », ActivityPager). Fix : réutiliser le vocabulaire AccommodationsCard — cross-link logement en photo-card pleine largeur ; teaser photo « Les activités autour » sur la home ; pager en mini-cards photo avec le vrai titre de destination (règle aussi l'heuristique 6).
3. **[P1] Le CTA cabane réserve la yourte** sans le dire. Tant que l'annonce cabane manque : CTA contact ou libellé explicite.
4. **[P2] Pages activités squelettiques** : hero stock 75vh + 3 lignes + pager + footer ; photos non locales ; index sans hero ni intro ; aucun h2. Fix : photos régionales réelles, hero 40-50vh, contenu enrichi (ou fusion en une seule page riche).
5. **[P2] La home montre 2× les mêmes photos** (slider « découvrir » puis cards logements). Différencier les rôles : le slider montre l'expérience, les cards les logements.

## Red flags personas

- **Jordan** : croit que la page activité a raté son chargement (3 lignes sous 75vh) ; ne clique pas un « Suivant » aveugle ; prend la barre cross-link pour un séparateur.
- **Casey (mobile)** : cibles 36 px < 44 pt ; pager qui wrappe en 2 lignes déséquilibrées sur /activites/2.
- **Couple en repérage** : photos alpines « pas d'ici » → doute sur le reste ; email example- ; bouton cabane qui ouvre la yourte ; tarif sans unité → retour sur Airbnb pour comprendre.

## Observations mineures

« Développé parDavid Bourrel » (espace, 2 locales) · ArrowBigDown pleine vs icônes filaires partout · tiers droit vide de « Nos logements » à 1440 · trait type scrollbar sous les sliders · hover ActivityCard qui masque la photo · pas de h2 sur les pages activités · anomalie navigateur non reproduite (une navigation spontanée /en→/fr consignée par B).

## Questions à se poser

- Si chaque lien interne montrait la photo de sa destination, resterait-il un seul bouton texte sur ce site ?
- Trois routes activités de 3 lignes, paginées — servent-elles le visiteur ou le sitemap ?
- Les avis Airbnb sont la seule preuve sociale ; pourquoi aucune phrase d'avis citée sur la home ?
- Que verrait un Corrézien sur les pages activités qu'il reconnaîtrait comme chez lui ? (Aujourd'hui : rien.)
