---
name: Les Cabanes de la Reynie
description: Site vitrine d'hébergements insolites (yourtes et cabanes) en pleine nature corrézienne
colors:
  sapin: "#1B5C4A"
  sapin-survol: "#326C5C"
  sapin-clair: "#22745C"
  sapin-clair-survol: "#38826C"
  foret: "#173F33"
  sauge: "#9FD0B4"
  sous-bois: "#151B17"
  sous-bois-carte: "#1A221D"
  ombre-profonde: "#0F1411"
  lichen: "#223027"
  ronce: "#2A362F"
  brume: "#E6ECE8"
  pierre: "#A5B3AA"
  aube: "#F1F6F3"
  aube-carte: "#E5EEE8"
  rosee: "#DAE6DE"
  givre: "#CFDCD3"
  encre: "#19211C"
  schiste: "#4B5A50"
  coquelicot: "#A21A1B"
  coquelicot-clair: "#F87966"
  blanc: "#FFFFFF"
typography:
  display:
    fontFamily: "Source Sans 3, system-ui, arial"
    fontSize: "clamp(2.75rem, 1.5rem + 4.2vw, 4.75rem)"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Source Sans 3, system-ui, arial"
    fontSize: "clamp(2.5rem, 1.75rem + 2.6vw, 3.75rem)"
    fontWeight: 650
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Source Sans 3, system-ui, arial"
    fontSize: "clamp(1.625rem, 1.3rem + 1.1vw, 2.25rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.018em"
  subtitle:
    fontFamily: "Source Sans 3, system-ui, arial"
    fontSize: "1.5rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Source Sans 3, system-ui, arial"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Source Sans 3, system-ui, arial"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Source Sans 3, system-ui, arial"
    fontSize: "0.9375rem"
    fontWeight: 600
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.sapin-clair}"
    textColor: "{colors.blanc}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.sapin-clair-survol}"
  button-primary-light:
    backgroundColor: "{colors.sapin}"
    textColor: "{colors.blanc}"
  button-primary-light-hover:
    backgroundColor: "{colors.sapin-survol}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.brume}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 20px"
    height: "44px"
  header:
    backgroundColor: "{colors.foret}"
    textColor: "{colors.blanc}"
    height: "72px"
  nav-item-active:
    backgroundColor: "rgba(255, 255, 255, 0.12)"
    textColor: "{colors.blanc}"
    rounded: "{rounded.md}"
    height: "40px"
  photo-card:
    rounded: "{rounded.xl}"
  amenity-tile:
    backgroundColor: "{colors.lichen}"
    textColor: "{colors.brume}"
    rounded: "{rounded.xl}"
    padding: "20px 12px"
  highlight:
    backgroundColor: "color-mix(in oklch, #9FD0B4 18%, transparent)"
    textColor: "{colors.brume}"
    padding: "0.1em 0.45em"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.brume}"
    rounded: "{rounded.md}"
    height: "36px"
---

# Design System: Les Cabanes de la Reynie

## 1. Overview

**Creative North Star : « La clairière au crépuscule »**

Le thème sombre par défaut n'est pas un choix cosmétique : c'est la forêt corrézienne à la tombée du jour, un sous-bois de mousse dont le vert ne crie jamais. L'interface est un écrin calme que les photographies lumineuses (yourte éclairée, prairie dans la brume, cabane sous les arbres) viennent percer comme des trouées de lumière. Le site s'efface derrière l'image ; le visiteur doit se projeter dans le séjour, pas admirer l'interface.

Le système rejette les codes des plateformes de réservation (grilles de prix, badges promo, urgence artificielle) et le luxe froid déshumanisé. La chaleur vient des photos, d'une seule voix typographique lisible et posée, et d'un mouvement discret qui fait respirer les images. La personnalité manuscrite ne vit plus que dans le logo : un emblème illustré, la clairière au crépuscule avec la yourte et la cabane éclairées.

**Key Characteristics:**
- Thème sombre par défaut (sous-bois mousse #151B17), thème clair disponible (aube #F1F6F3)
- Une seule famille de verts mousse-sapin, de 140° à 165° de teinte ; le sapin est réservé aux actions
- Une seule police pour tout le texte : Source Sans 3 ; colonne de lecture de 68 caractères
- L'image porte la page ; l'interface reste plate (aucune ombre sur les surfaces posées)
- Un mouvement unique et discret : le hero se pose, les photos se révèlent au défilement, la bande photo dérive en parallaxe — tout s'éteint en mouvement réduit

## 2. Colors

Une seule voix : la famille mousse-sapin, déclinée en fonds désaturés, un vert sapin pour agir, et une encre sauge pour tout ce qui doit se lire sur fond sombre.

### Primary
- **Sapin** (#1B5C4A, thème clair) et **Sapin clair** (#22745C, thème sombre) : uniquement les actions — bouton de réservation, boutons pleins, anneau de focus. Survol éclairci : #326C5C / #38826C. Texte blanc dessus (contraste 7,8:1 et 5,6:1).

### Secondary
- **Forêt** (#173F33) : les bandeaux du header et du pied de page, identiques dans les deux thèmes, et le fond de l'icône d'application. Sur l'accueil en haut de page (ordinateur), le header devient transparent sur la photo avec un dégradé sombre.

### Tertiary
- **Sauge** (#9FD0B4, thème sombre) et **Sapin** (#1B5C4A, thème clair), exposés en token `--ink` : liens, icônes, petits filets d'accent, puces de liste, ligne du jour dans les horaires, surlignages (à 16–18 % d'opacité).

### Neutral
- **Sous-bois** (#151B17) : fond du thème sombre. **Sous-bois carte** (#1A221D) : cartes. **Ombre profonde** (#0F1411) : popovers et popup de carte.
- **Lichen** (#223027) : tuiles d'infos pratiques et survols (accent sombre). **Ronce** (#2A362F) : filets et bordures sombres.
- **Brume** (#E6ECE8) : texte principal sombre. **Pierre** (#A5B3AA) : texte secondaire sombre.
- **Aube** (#F1F6F3) : fond du thème clair. **Aube carte** (#E5EEE8), **Rosée** (#DAE6DE, tuiles et survols), **Givre** (#CFDCD3, bordures).
- **Encre** (#19211C) : texte principal clair. **Schiste** (#4B5A50) : texte secondaire clair.
- **Coquelicot** (#A21A1B, thème clair) et **Coquelicot clair** (#F87966, thème sombre) : erreurs et actions destructives uniquement, toujours accompagnés d'une icône et d'un texte.

### Named Rules
**The One Forest Rule.** Une seule famille de verts mousse-sapin (teintes 140–165°). Aucun autre ton saturé, nulle part : même le marqueur de la carte est sapin. Introduire un orange, un bleu ou le rouge d'un marqueur par défaut est interdit.

**The Ink Rule.** Le sapin des boutons n'est jamais une couleur de texte sur fond sombre (il y tombait à 1,67:1). Liens, icônes et accents passent toujours par `--ink` : sauge en sombre, sapin en clair.

**The Photo-First Rule.** La couleur vient des photographies. Si une section semble terne sans image, la réponse est une meilleure image, pas une nouvelle couleur d'interface.

**The Never-Alone Rule.** Une couleur ne porte jamais seule une information. Une erreur a son icône et son message, l'élément actif un fond plus clair, le jour courant une graisse, un lien dans un texte son soulignement. Le coquelicot a été choisi pour rester distinct du sapin et du texte en protanopie comme en deutéranopie, et lisible à 6:1 sur le fond sombre.

## 3. Typography

**Body & Display Font:** Source Sans 3 (variable ; fallback system-ui, arial)
**Logo:** image illustrée (emblème) avec ses capitales Source Sans 3 SemiBold et Galada intégrées, jamais composé en texte

**Character:** Source Sans 3 est une humaniste calme, très lisible en clair comme en sombre ; elle porte titres, récits et interface d'une seule voix. Les titres sont en 650, légèrement resserrés. La touche manuscrite de Galada ne survit que dans le mot-symbole du logo ; la police Galada n'est plus chargée.

### Hierarchy
- **Display** (650, clamp 2.75rem → 4.75rem, interligne 1.04, -0.025em) : le nom du lieu sur le hero de l'accueil.
- **Headline / h1** (650, clamp 2.5rem → 3.75rem, interligne 1.06, -0.025em) : titres de page ; sur les heros d'activités, clamp 2rem → 3.25rem limité à 24 caractères par ligne.
- **Title / h2** (650, clamp 1.625rem → 2.25rem, interligne 1.15, -0.018em, `text-balance`) : titres de section.
- **Subtitle / h3** (600, 1.5rem, -0.01em) : sous-sections et légendes de cartes (1.25rem sur les cartes photo).
- **Lead** (400, clamp 1.125rem → 1.3125rem, interligne 1.5) : sous-titre du hero.
- **Body** (400, 1.0625rem, interligne 1.7, `text-pretty`) : paragraphes, limités à 68 caractères.
- **Label** (600, 0.9375rem) : boutons, navigation, libellés de tuiles.

### Named Rules
**The One Voice Rule.** Source Sans 3 porte chaque mot du site. La personnalité manuscrite vit dans le logo, jamais en texte courant, en titre ou en bouton.

**The Measure Rule.** Un paragraphe ne dépasse jamais 68 caractères ; les blocs de récit sont des colonnes de 68ch centrées sur l'axe du hero.

## 4. Layout

Conteneur de 80rem maximum (`max-w-7xl`), marges de 24px (mobile) et 32px (tablette et plus), sections espacées de 40–48px verticalement ; plus d'espace au-dessus d'un titre qu'en dessous. Les récits (bienvenue, havre de paix, séjour gourmand, corps des activités) sont des colonnes de 68ch centrées. Grilles : logements en mosaïque deux colonnes, activités sur trois colonnes, infos pratiques en 2 / 3 / 4 colonnes, navigation entre activités sur deux colonnes. Points de rupture : 768px (`md`) et 1024px (`lg`, bascule vers la navigation de bureau). Header collant de 72px.

## 5. Elevation & Depth

Système plat : la profondeur passe par les teintes (fond sous-bois, cartes un ton plus clair, popovers un ton plus sombre) et par des filets de 1px. Aucune ombre sur les surfaces posées — boutons, cartes et tuiles n'en ont plus. Seules les couches qui flottent au-dessus de la page (menus déroulants, panneau mobile, lightbox) gardent l'ombre courte de shadcn pour se détacher.

### Named Rules
**The Flat Forest Rule.** Une surface posée se détache par sa teinte, jamais par un halo. Si un composant a besoin d'une ombre pour exister, c'est sa teinte qui est fausse.

## 6. Shapes

Rayon de base 12px. Boutons et champs : 10px. Cartes : 12px. Cartes photo, tuiles et cadre des horaires : 16px. Pastilles pleines (élément actif de la navigation : 10px ; flèches du carousel : cercle complet). Surlignages : 0.4em. Pas d'angle vif sur une surface interactive.

## 7. Components

Tout le site est un chemin calme vers le bouton de réservation : les composants ne se font jamais remarquer aux dépens des photos, mais chaque affordance reste évidente, au doigt comme au clavier.

### Buttons
- **Shape:** 44px de haut (`h-11`), padding 8px 20px, rayon 10px, libellé 15px semi-gras.
- **Primary:** fond sapin (sapin clair en sombre), texte blanc ; survol éclairci (#326C5C / #38826C) ; aucune ombre.
- **Press:** `scale(0.97)` en 150ms avec la courbe `cubic-bezier(0.23, 1, 0.32, 1)`, coupé en mouvement réduit.
- **Outline / Ghost:** bordure `input` sur fond transparent / fond transparent, survol lichen. Les flèches du carousel sont des cercles contour de 44px, discrets pour laisser le vert au bouton de réservation.
- **Focus:** anneau de 3px en `--ring` (sauge en sombre).

### Cards / Containers
- **Cartes photo** (logements, activités, navigation entre activités) : rayon 16px, sans bordure, légende sur dégradé noir 70–80 % en bas, flèche qui glisse au survol ; image qui zoome à 1.04 en 700ms au survol (pointeur fin uniquement) ; pression à 0.99.
- **Tuiles d'infos pratiques** : fond lichen / rosée sans bordure, rayon 16px, icône lucide en contour 40px (trait 1.5) à l'encre, libellé 15px.
- **Horaires** : tableau encadré (bordure 1px, rayon 16px), filets fins, en-têtes en texte secondaire, chiffres tabulaires, jour courant sur teinte encre à 16 % en semi-gras.

### Inputs / Fields
- **Style:** fond transparent, bordure 1px `input`, rayon 10px, hauteur 36px.
- **Focus:** anneau 3px `--ring` + bordure ring.
- **Error:** bordure et libellé coquelicot, message précédé d'une icône d'alerte.

### Navigation
- Header collant de 72px sur bandeau forêt, logo de 56px de haut à gauche (48px sur téléphone).
- Liens 15px blancs ; élément actif sur pastille blanche à 12 %, survol à 8 %.
- Sur l'accueil en haut de page (ordinateur), le bandeau devient transparent sur un dégradé noir pour laisser respirer le hero.
- Mobile : bouton burger transparent bordé de blanc à 25 %, panneau latéral sur fond carte.

### Pied de page
- Bandeau forêt qui referme chaque page comme le header l'ouvre, sur le même axe : logo de 56px et accroche à gauche, puis « Découvrir », « Informations légales » et « Contact » (quatre colonnes en bureau, trois en tablette, une sur téléphone).
- Titres de colonne 16px semi-gras blancs ; liens 15px blancs à 80 % sur des rangées de 32px, soulignés au survol ; coordonnées précédées d'une icône contour et soulignées.
- Barre basse sous un filet blanc à 10 % : copyright à gauche, « Espace propriétaire » à droite (cadenas, blanc à 70 %, sans préchargement, `rel="nofollow"`). Sur téléphone, le copyright s'empile sans séparateurs.

### Logo
- **Emblème** : un médaillon cerclé d'un anneau crème épais, cadré en gros plan sur la clairière au crépuscule : la grande yourte en toile noisette à la porte éclairée occupe le cœur du cercle et se découpe à contre-jour (une toile crème se perdait dans le soleil), la cabane à la fenêtre allumée à sa droite, le soleil couchant derrière, deux sapins aux bords. Peu d'éléments et beaucoup de contraste, pour rester lisible à 48px ; un léger grain lui donne sa matière d'image.
- **Mot-symbole** : « LES CABANES » en capitales Source Sans 3 SemiBold espacées, « de la Reynie » en Galada, à droite de l'emblème.
- **Déclinaisons** : images raster, crème sur fond sombre et forêt sur fond clair (`src/assets/logo/logo-on-dark.webp`, `logo-on-light.webp`) ; le header garde la version crème, le menu mobile suit le thème. Kit complet dans `public/brand/` (emblème, horizontal et empilé, deux tons).
- **Favicon et icônes** : une tuile carrée arrondie, plus lisible qu'un cercle en 16px : la yourte noisette et sa porte orange à contre-jour devant le soleil, sur un ciel sapin qui se réchauffe vers l'horizon, sans grain ni anneau (`public/favicon.ico` 16/32/48 rendus nativement, `src/app/icon.png`) ; l'icône d'écran d'accueil en est la version pleine surface, qu'iOS arrondit lui-même (`src/app/apple-icon.png`).

### Signature : le hero et les photos vivantes
- Photo plein cadre, voile noir à 30 %, titre display centré, sous-titre lead, bouton de réservation puis bouton contour « Plongez dans la nature ».
- À l'arrivée, l'image se pose (`scale` 1.08 → 1 en 1.8s) et le texte monte en séquence (0, 120, 260ms ; départ à 40 % d'opacité, jamais invisible).
- Au défilement, les cartes photo se révèlent (`clip-path` du bas vers le haut) et la bande photo de l'accueil dérive en parallaxe.
- Tout cela repose sur des timelines `view()` (avec `overflow: clip`, jamais `hidden`, autour) et s'éteint sous `prefers-reduced-motion`. Les contenus restent visibles là où ces animations ne sont pas prises en charge.

### Pages légales
- Mentions légales, conditions d'utilisation et politique de confidentialité, en français et en anglais ; la version anglaise précise sous la date que la version française fait foi.
- Bureau : rail collant de 15rem à gauche (les trois documents, puis « Sur cette page »), colonne de 68ch à droite, sans image. Téléphone : les documents en pastilles qui passent à la ligne, puis le titre.
- Document courant sur pastille lichen (rosée en clair), en semi-gras, avec `aria-current="page"`. Titres de section à l'échelle h3 (24px, 600). Faits d'identité en liste de définitions, colonne des termes de 11rem.
- Avant la mise en ligne seulement, un champ légal vide affiche « À compléter » : cadre pointillé coquelicot, icône d'alerte et texte.

### Page introuvable
Les adresses inconnues renvoient un vrai 404 et affichent la page du site (header, pied de page, bouton de retour), en français ou en anglais.

## 8. Do's and Don'ts

### Do:
- **Do** laisser les photographies porter les pages ; l'interface est un écrin (« La clairière au crépuscule »).
- **Do** réserver le vert sapin aux actions — sa rareté guide l'œil vers « réserver ».
- **Do** passer par `--ink` pour tout lien, icône ou accent posé sur une surface.
- **Do** composer tout texte en Source Sans 3 et tenir les paragraphes à 68 caractères.
- **Do** garantir un contraste AA (4.5:1) pour le corps de texte, dans les deux thèmes.
- **Do** doubler chaque couleur d'état d'une icône, d'un texte ou d'une forme, pour qu'un visiteur daltonien lise la même chose.
- **Do** fournir une alternative `prefers-reduced-motion` à toute animation et réserver les survols aux pointeurs fins.

### Don't:
- **Don't** ressembler à « une plateforme de réservation » : pas de grilles de prix agressives, badges promo, compteurs d'urgence (anti-référence PRODUCT.md).
- **Don't** ressembler à « un resort de luxe froid » : pas de minimalisme distant ni de photos déshumanisées (anti-référence PRODUCT.md).
- **Don't** introduire de couleur saturée hors de la famille mousse-sapin (140–165°), le coquelicot des erreurs excepté, ni utiliser le sapin des boutons comme couleur de texte sur fond sombre.
- **Don't** signaler un état, une erreur ou un lien par la seule couleur.
- **Don't** composer du texte en Galada : la cursive n'existe que dans le logo.
- **Don't** ajouter d'ombres portées sur les surfaces posées — la profondeur passe par les teintes.
- **Don't** utiliser de `border-left` coloré épais, de texte en dégradé, de ruban incliné ni de glassmorphism décoratif.
