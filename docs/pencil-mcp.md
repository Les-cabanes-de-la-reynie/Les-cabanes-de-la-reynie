# Pencil.dev MCP — Documentation

## Présentation

[Pencil.dev](https://pencil.dev) est un canvas de design AI-native. Son intégration MCP permet à Claude Code de créer, modifier et inspecter des designs `.pen` directement depuis le terminal, sans quitter le flux de développement.

---

## Prérequis

1. **Extension VS Code** : `highagency.pencildev` installée via le marketplace VS Code
2. **Claude Code** configuré avec le fichier `.mcp.json` à la racine du projet

Le serveur MCP est **bundlé avec l'extension VS Code** — il n'existe pas de package npm public. Le binaire est automatiquement disponible après installation de l'extension.

---

## Configuration

Le serveur est déclaré dans `.mcp.json` à la racine du projet :

```json
{
  "mcpServers": {
    "pencil": {
      "command": "C:\\Users\\<USERNAME>\\.vscode\\extensions\\highagency.pencildev-<VERSION>\\out\\mcp-server-windows-x64.exe",
      "args": ["--app", "visual_studio_code"]
    }
  }
}
```

### Trouver le chemin du binaire

```bash
# Windows PowerShell
ls $env:USERPROFILE\.vscode\extensions\ | Where-Object { $_ -like "highagency.pencildev*" }
```

Le binaire se trouve dans `<dossier-extension>\out\mcp-server-windows-x64.exe`.

### Vérifier la connexion

Dans Claude Code :
```
/mcp
```
`pencil` doit apparaître comme `connected`.

---

## Outils MCP disponibles

| Outil | Description |
|-------|-------------|
| `get_editor_state` | Retourne l'état actuel du canvas (fichier ouvert, sélection) |
| `get_screenshot` | Capture le canvas en PNG (base64) |
| `batch_design` | Crée ou modifie des nœuds de design en lot |
| `batch_get` | Récupère les propriétés de nœuds existants |
| `open_document` | Ouvre un fichier `.pen` dans l'éditeur |
| `snapshot_layout` | Capture la structure de layout du canvas |
| `find_empty_space_on_canvas` | Trouve un espace libre pour placer un nouveau composant |
| `get_style_guide` | Récupère les styles globaux (couleurs, typographie) |
| `get_style_guide_tags` | Liste les tags du style guide |
| `get_variables` | Récupère les variables de design (tokens) |
| `set_variables` | Met à jour les variables de design |
| `search_all_unique_properties` | Recherche des propriétés uniques dans tous les nœuds |
| `replace_all_matching_properties` | Remplace une propriété sur tous les nœuds correspondants |
| `export_nodes` | Exporte des nœuds en SVG ou PNG |
| `get_guidelines` | Récupère les guides d'alignement du canvas |

---

## Exemples d'usage

### Inspecter le design actuel

```
Prends un screenshot du canvas Pencil ouvert et décris la mise en page.
```

### Créer un composant de carte

```
Crée un composant Card dans Pencil avec :
- Un titre en Inter 20px bold
- Un sous-titre en Inter 14px #6B7280
- Un fond blanc avec border-radius 12px et shadow légère
- Padding 24px
```

### Synchroniser les tokens de design avec le code

```
Récupère les variables de design Pencil (couleurs, spacing, typographie)
et vérifie qu'elles correspondent aux tokens dans src/shared/_constants/.
```

### Générer un wireframe de page

```
Ouvre le fichier designs/homepage.pen et crée un wireframe pour
la section hero avec le texte et CTA du projet Les Cabanes de la Reynie.
```

---

## Workflow design → code (Next.js)

```
1. Design dans Pencil
   └─ Créer/modifier le composant dans le canvas .pen

2. Inspection via MCP
   └─ batch_get : extraire couleurs, espacements, tailles
   └─ get_screenshot : visualiser le rendu final

3. Implémentation dans Next.js
   └─ Traduire les valeurs en Tailwind classes / CSS variables
   └─ Créer le composant React dans src/features/ ou src/shared/

4. Validation
   └─ Comparer screenshot Pencil vs rendu navigateur
   └─ Ajuster jusqu'à correspondance pixel-perfect
```

---

## Fichiers de design

Stocker les fichiers `.pen` dans le dossier `designs/` à la racine du projet :

```
designs/
├── components/
│   ├── card.pen
│   ├── navbar.pen
│   └── hero.pen
├── pages/
│   ├── homepage.pen
│   └── admin.pen
└── style-guide.pen
```

---

## Mise à jour du chemin MCP

Lors d'une mise à jour de l'extension Pencil, mettre à jour la version dans `.mcp.json` :

```bash
# Trouver la nouvelle version
ls ~/.vscode/extensions/ | grep pencildev
# Exemple output : highagency.pencildev-0.7.0

# Mettre à jour .mcp.json avec la nouvelle version
```

---

## Ressources

- Site officiel : https://pencil.dev
- Extension VS Code : chercher `Pencil.dev` dans le marketplace VS Code (`highagency.pencildev`)
