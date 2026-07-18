---
target: home page /fr
total_score: 22
p0_count: 2
p1_count: 2
timestamp: 2026-07-18T12-23-52Z
slug: src-app-locale-page-tsx
---
Méthode : dual-agent (A : revue design · B : détecteur + preuve navigateur, isolés)

## Design Health Score — 22/40 (Acceptable : améliorations significatives nécessaires)

| # | Heuristique | Score | Issue clé |
|---|-----------|-------|-----------|
| 1 | Visibilité de l'état du système | 2 | État actif de la nav desktop jamais surligné (`DesktopNavbarContent.tsx:9` compare un pathname préfixé locale à des routes non préfixées ; le mobile utilise le bon hook `@/i18n/navigation`) |
| 2 | Correspondance système / monde réel | 2 | Titre d'onglet « Accueil » non localisé sur /en ; « Leadership Team » ; ancre `#our-services` pour « Nos logements » |
| 3 | Contrôle et liberté | 3 | Navigation standard, lightbox, rien de piégeux |
| 4 | Cohérence et standards | 1 | Hiérarchie de titres cassée (cartes en h2 Galada, section finale en h3 Roboto) ; « Sign in »/« Admin » en anglais dans le footer FR |
| 5 | Prévention des erreurs | 2 | 3 liens-pièges dans le footer (socials → google.fr, « L'équipe de direction » → home) |
| 6 | Reconnaissance plutôt que rappel | 3 | Nav claire, sous-menu Logements descriptif |
| 7 | Flexibilité et efficacité | 3 | FR/EN, thème, ancre |
| 8 | Esthétique et minimalisme | 2 | « LOGO », cartes sous voile noir 50 %, zones mortes verticales, texte justifié |
| 9 | Récupération d'erreurs | 2 | Slider vide = section qui disparaît silencieusement |
| 10 | Aide et documentation | 2 | Ni carte, ni prix, ni « comment réserver » sur la home |
| **Total** | | **22/40** | |

## Verdict anti-patterns

**Pas du slop IA — un échafaudage de template jamais débranché, ce qui est pire pour la confiance.** Le fond est authentiquement humain (récit de 2021, « trois hectares de prairie, forêt, potager et mares », vraies photos). Mais la production expose : logo littéral **« LOGO »**, email **`example-les-cabanes-de-la-reynie@hotmail.fr`**, 3 icônes sociales → **google.fr**, « Sign in »/« Admin » dans le footer public, alts « Our fabulous place 0…4 », « L'équipe de direction » (starter kit corporate).

**Scan déterministe** : 1 seul finding — `bounce-easing` sur `HeroBanner.tsx:47` (`animate-bounce` sur la flèche du CTA). Atténué : protégé par `motion-safe:`. Quasi faux positif, mais la flèche qui rebondit reste un tic de tutoriel.

**Convergence A/B** : les deux évaluations ont trouvé indépendamment les placeholders du footer. Le navigateur (B) a photographié une **bande vide de ~350–450 px** sous l'intro que la revue de code (A) explique : l'illustration Storyset est en `hidden xs:block` avec un breakpoint `xs` qui n'existe pas en Tailwind 4 — elle ne s'affiche jamais, mais son conteneur laisse le trou et son lien externe storyset.com reste focusable au clavier.

**Preuves navigateur** : screenshots desktop 1440px et mobile 375px pris sur la prod ; 11 images, 0 alt manquant ; 6 boutons, 0 sans nom accessible ; contrastes AA OK (texte atténué 6,2:1 ; bouton primaire 9,6:1). Overlay visuel non tenté (URL distante).

## Impression générale

L'infrastructure est sérieuse (hreflang, JSON-LD, Suspense + skeleton, design system tenu) et le récit est sincère — mais la page ne convertit vers rien et son footer détruit la confiance qu'elle a mise trois écrans à construire. La plus grande opportunité : transformer la fin de page (aujourd'hui un paragraphe gris justifié sans bouton) en moment de réassurance + action.

## Ce qui marche

1. **Le design system est réellement tenu à l'écran** : une seule couleur saturée (#084944) réservée aux actions, élévation plate, Galada limitée aux titres, header dégradé sur le hero — « la clairière au crépuscule » existe.
2. **La copie est sincère et spécifique** (2021, trois hectares, confins Corrèze/Dordogne) — le ton « posé » du brief, avec une traduction EN de qualité.
3. **Infrastructure soignée** : hreflang/canonical, JSON-LD LodgingBusiness, microdata adresse, skeleton du slider, `motion-safe:`.

## Problèmes prioritaires

1. **[P0] Aucun chemin de réservation.** Le seul CTA de la page est une ancre interne ; pas de lien Airbnb, téléphone/email seulement en footer. La conversion définie dans PRODUCT.md est impossible depuis la home. **Fix** : CTA « Nous contacter pour réserver » (hero + fin de page) en attendant le lien Airbnb ; le remplacer dès qu'il est retrouvé.
2. **[P0] Placeholders de production qui tuent la confiance.** « LOGO », email example-, socials google.fr, Sign in/Admin publics, « L'équipe de direction » → home. **Fix** : wordmark texte, vrai email, supprimer les socials tant qu'aucun compte n'existe, retirer les liens admin du footer.
3. **[P1] Les cartes « Nos logements » cachent leurs photos.** Voile `bg-black/50` permanent + photo intérieure seulement au hover (jamais sur mobile). C'est l'étape décisive « se projeter » et elle viole la Photo-First Rule du propre design system. **Fix** : scrim dégradé bas, label Roboto, léger zoom au hover.
4. **[P1] Le hero ne dit pas ce qu'on vend.** h1 = nom du lieu ; ni « yourte », ni « Corrèze », ni « nature » sans scroller ; alt du hero faux (« Paysage » pour un intérieur) et non localisé. **Fix** : sous-titre « Yourte & cabane en pleine nature corrézienne » + alts corrects.
5. **[P2] Hygiène typo et bilinguisme inachevé.** `text-justify` global (rivières à 375 px), tout le corps en muted, titre d'onglet FR sur /en, alts anglais numérotés, h3 orphelin, nav active cassée (desktop). **Fix** : text-left, hiérarchiser les gris, localiser SEO/alts, promouvoir le h3 final en h2 Galada, corriger le hook usePathname.

## Red flags personas

- **Jordan (novice)** : clique « Plongez dans la nature » en attendant une page, subit un saut d'ancre ; cherche « réserver », ne trouve que « Sign in » → croit qu'il faut un compte. « LOGO » lui fait douter d'être sur le vrai site.
- **Casey (mobile distrait)** : deux cartes noires illisibles ; parallax `bg-fixed` cassé sur iOS ; texte justifié à trous ; aucun bouton d'action persistant — abandonne avant le footer.
- **Couple en repérage (venu d'Airbnb)** : venu vérifier le sérieux. Repart avec : email example-, socials google.fr, pas d'avis, pas de carte, pas de prix, pas de lien retour → « site pas maintenu ». L'inverse exact de l'objectif.

## Observations mineures

- Illustration Storyset jamais affichée (breakpoint `xs` inexistant) mais lien externe focusable dans le tab-order + bande vide résiduelle.
- Lightbox ouverte par onClick sur une image (pas de bouton) : inaccessible au clavier.
- `select-none` sur hero et parallax sans bénéfice.
- Rafale d'exclamations (« …! » ×4) face au ton « posé » revendiqué.
- Le thème clair dans le header public ajoute un choix sans valeur pour l'audience (North Star = crépuscule).

## Questions à se poser

1. Si « rassurer est la conversion », pourquoi exposer la console d'admin et un email example@ à chaque visiteur, tout en cachant le seul geste qui compte (réserver) ?
2. « La nature vend, le site s'efface » — pourquoi la section la plus décisive recouvre-t-elle ses photos d'un voile noir à 50 % ?
3. Que convertit réellement cette home aujourd'hui ? Le scénario de succès finit sur un paragraphe gris sans bouton.
