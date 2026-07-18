---
name: Les Cabanes de la Reynie
description: Site vitrine d'hébergements insolites (yourtes et cabanes) en pleine nature corrézienne
colors:
  sapin-nocturne: "#084944"
  sous-bois: "#161D1C"
  brume: "#E4E7E7"
  ombre-profonde: "#0B0E0E"
  lisiere: "#2C3A39"
  mousse: "#2C3A30"
  pierre: "#949E9D"
  ronce: "#293D3C"
  aube: "#F1F4F4"
  encre: "#181B1B"
  terre-brulee: "#732626"
  blanc: "#FFFFFF"
typography:
  display:
    fontFamily: "Galada, cursive"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.3
  headline:
    fontFamily: "Roboto, system-ui, arial"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Roboto, system-ui, arial"
    fontSize: "1.5rem"
    fontWeight: 600
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Roboto, system-ui, arial"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.sapin-nocturne}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.brume}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  card:
    backgroundColor: "{colors.sous-bois}"
    rounded: "{rounded.lg}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.brume}"
    rounded: "{rounded.md}"
    height: "36px"
---

# Design System: Les Cabanes de la Reynie

## 1. Overview

**Creative North Star : « La clairière au crépuscule »**

Le thème sombre par défaut n'est pas un choix cosmétique : c'est la forêt corrézienne à la tombée du jour. L'interface est un écrin vert sombre — calme, silencieux — que les photographies lumineuses (yourtes éclairées, sous-bois, rivières) viennent percer comme des trouées de lumière. Le site s'efface derrière l'image ; l'utilisateur doit se projeter dans le séjour, pas admirer l'interface.

Le système rejette explicitement les codes de plateforme de réservation (grilles de prix, badges promo, urgence artificielle) et le luxe froid déshumanisé. La chaleur vient des photos, de la cursive Galada posée avec parcimonie, et de composants généreux et invitants qui mènent naturellement vers la réservation (lien Airbnb).

**Key Characteristics:**
- Thème sombre par défaut (vert sapin désaturé, teinte 175°), thème clair disponible
- L'image porte la page ; l'UI reste discrète autour
- Une seule couleur de marque (Vert sapin nocturne), pas de palette multicolore
- Profondeur par teintes, quasi aucune ombre
- Composants généreux et invitants : le chemin vers « réserver » est toujours évident

## 2. Colors

Une seule voix : le vert sapin, décliné en teintes sombres désaturées de la même famille (teinte 175°), avec un vert mousse (137°) à peine plus chaud pour les surfaces atténuées.

### Primary
- **Vert sapin nocturne** (#084944 / hsl(175 80% 16%)) : LA couleur de marque. Boutons primaires, focus rings, liens actifs. C'est la seule couleur saturée du système — sa rareté fait sa force.

### Neutral
- **Sous-bois** (#161D1C / hsl(175 13% 10%)) : fond principal et cartes du thème sombre.
- **Ombre profonde** (#0B0E0E / hsl(175 13% 5%)) : popovers et surfaces surélevées (plus sombre = plus proche, logique inversée assumée).
- **Brume** (#E4E7E7 / hsl(175 5% 90%)) : texte principal sur fond sombre.
- **Pierre** (#949E9D / hsl(175 5% 60%)) : texte secondaire/atténué sur fond sombre.
- **Lisière** (#2C3A39 / hsl(175 13% 20%)) : surfaces secondaires (boutons secondary).
- **Mousse** (#2C3A30 / hsl(137 13% 20%)) : surfaces muted/accent — la seule entorse à la teinte 175, un vert légèrement plus végétal.
- **Ronce** (#293D3C / hsl(175 20% 20%)) : bordures du thème sombre.
- **Aube** (#F1F4F4 / hsl(175 13% 95%)) et **Encre** (#181B1B / hsl(175 5% 10%)) : fond et texte du thème clair.
- **Terre brûlée** (#732626 / hsl(0 50% 30%)) : erreurs et actions destructives uniquement.

### Named Rules
**The One Green Rule.** Le Vert sapin nocturne est la seule couleur saturée autorisée. Toute nouvelle teinte doit rester dans la famille 137–175° désaturée. Introduire un accent orange, bleu ou violet est interdit.

**The Photo-First Rule.** La couleur vient des photographies. Si une section semble terne sans image, la réponse est une meilleure image, pas une nouvelle couleur d'interface.

## 3. Typography

**Display Font:** Galada (cursive ; fallback cursive, system-ui)
**Body Font:** Roboto (400, 700 ; fallback system-ui, arial)

**Character:** Roboto porte l'information avec neutralité et lisibilité ; Galada apporte la touche chaleureuse et artisanale — une écriture manuscrite posée comme une enseigne en bois, réservée aux titres de section (h2).

### Hierarchy
- **Headline / h1** (Roboto 500, 2.25rem → 3rem en lg, tracking -0.025em, `text-balance`) : titre de page, souvent posé sur la photo du hero.
- **Display / h2** (Galada 400, 1.875rem, `text-balance`) : titres de section — le seul emploi de la cursive.
- **Title / h3–h4** (Roboto 600, 1.5rem / 1.25rem, tracking -0.025em) : sous-sections et cartes.
- **Body** (Roboto 400, 1rem, line-height 1.5) : paragraphes, limités à ~65–75ch.

### Named Rules
**The Galada Rule.** La cursive est un condiment, pas un plat : uniquement les h2 de section. Jamais en body, jamais en bouton, jamais en navigation.

## 4. Elevation

Système plat : la profondeur s'exprime par les teintes (fond `Sous-bois`, popover `Ombre profonde` plus sombre, surfaces secondaires `Lisière` plus claires) et des bordures fines de 1px (`Ronce`). Les seules ombres sont le `shadow-xs` par défaut des composants shadcn — imperceptible et c'est voulu.

### Named Rules
**The Flat Forest Rule.** Pas d'ombres portées décoratives. Une surface se détache par sa teinte et sa bordure, jamais par un halo. Si un composant a besoin d'une ombre pour se détacher, c'est sa teinte qui est fausse.

## 5. Components

Généreux et invitants : tout le site est un chemin calme vers le bouton de réservation. Les composants ne se font jamais remarquer aux dépens des photos, mais les affordances (boutons, liens) restent évidentes.

### Buttons
- **Shape:** coins doucement arrondis (6px), hauteur 36px (h-9), padding 8px 16px
- **Primary:** fond Vert sapin nocturne, texte blanc ; hover : opacité 90%
- **Hover / Focus:** transitions couleur/ombre ; focus visible : ring 3px en Vert sapin à 50%
- **Outline / Ghost / Secondary:** bordure `input` + fond transparent / fond transparent / fond Lisière — pour les actions secondaires

### Cards / Containers
- **Corner Style:** 8px (`rounded-lg`)
- **Background:** Sous-bois (sombre) / hsl(175 13% 90%) (clair)
- **Shadow Strategy:** aucune — voir The Flat Forest Rule
- **Border:** 1px Ronce quand nécessaire
- **Internal Padding:** 16–24px

### Inputs / Fields
- **Style:** fond transparent, bordure 1px, coins 6px, hauteur 36px
- **Focus:** ring 3px Vert sapin à 50% + bordure ring
- **Error:** bordure et ring Terre brûlée

### Navigation
- Header sticky 4.5rem, fond `primary` ; sur la home en haut de page (desktop) : dégradé transparent depuis le noir 80% pour laisser respirer le hero. Liens Roboto, états sobres.

### Signature : le slider photo
Carrousel Embla plein cadre (images `h-60`, coins 8px) + lightbox plein écran. C'est le composant de conviction : il doit toujours recevoir les meilleures photos et rester fluide.

## 6. Do's and Don'ts

### Do:
- **Do** laisser les photographies porter les pages ; l'UI est un écrin (« La clairière au crépuscule »).
- **Do** réserver le Vert sapin nocturne (#084944) aux actions et au focus — sa rareté guide l'œil vers « réserver ».
- **Do** utiliser Galada uniquement sur les h2 de section.
- **Do** garantir un contraste AA (4.5:1) pour le corps de texte, sur les deux thèmes.
- **Do** fournir une alternative `prefers-reduced-motion` à toute animation.

### Don't:
- **Don't** ressembler à « une plateforme de réservation » : pas de grilles de prix agressives, badges promo, compteurs d'urgence (anti-référence PRODUCT.md).
- **Don't** ressembler à « un resort de luxe froid » : pas de minimalisme distant ni de photos déshumanisées (anti-référence PRODUCT.md).
- **Don't** introduire de nouvelles couleurs saturées hors de la famille verte 137–175°.
- **Don't** ajouter d'ombres portées décoratives — la profondeur passe par les teintes.
- **Don't** utiliser de `border-left` coloré épais, de texte en dégradé, ni de glassmorphism décoratif.
