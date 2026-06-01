# Architecture du Site LUDICADEMI

## Vue d'Ensemble

Ce document décrit l'architecture complète du site web LUDICADEMI, conçu avec Next.js 14 (App Router), TypeScript, Tailwind CSS et next-intl pour l'internationalisation.

## Structure des Fichiers

### Configuration Racine

- `package.json` - Dépendances npm
- `tsconfig.json` - Configuration TypeScript
- `tailwind.config.ts` - Configuration Tailwind avec palette de couleurs personnalisée
- `next.config.mjs` - Configuration Next.js avec plugin next-intl
- `middleware.ts` - Middleware pour le routage i18n
- `i18n.ts` - Configuration next-intl

### App Router (`/app`)

```
app/
├── layout.tsx                 # Layout racine minimal
├── globals.css                # Styles globaux Tailwind
└── [locale]/                  # Routes internationalisées
    ├── layout.tsx             # Layout avec Header/Footer
    ├── page.tsx               # Page d'accueil
    ├── excursions/
    │   ├── page.tsx           # Liste des excursions
    │   └── [slug]/
    │       └── page.tsx       # Détail d'une excursion
    ├── stays/
    │   ├── page.tsx           # Liste des séjours
    │   └── [slug]/
    │       └── page.tsx       # Détail d'un séjour
    ├── about/
    │   └── page.tsx           # À propos
    ├── contact/
    │   └── page.tsx           # Contact
    ├── faq/
    │   └── page.tsx           # FAQ
    └── novels/
        └── page.tsx           # Romans
```

### Composants (`/components`)

- `Header.tsx` - En-tête avec navigation et sélecteur de langue
- `Footer.tsx` - Pied de page avec liens
- `Hero.tsx` - Section hero immersive
- `ExcursionCard.tsx` - Carte pour afficher une excursion
- `StayCard.tsx` - Carte pour afficher un séjour
- `FAQ.tsx` - Composant FAQ avec accordéon
- `CTAButton.tsx` - Bouton d'appel à l'action réutilisable
- `FeatureCard.tsx` - Carte de fonctionnalité
- `PromoBanner.tsx` - Bandeau promotionnel

### Données (`/data`)

- `excursions.ts` - Données des excursions (type `Excursion[]`)
- `stays.ts` - Données des séjours (type `Stay[]`)
- `faq.ts` - Données FAQ (type `FAQ[]`)

### Types (`/types`)

- `index.ts` - Types TypeScript pour :
  - `Excursion`
  - `Stay`
  - `FAQ`

### Traductions (`/messages`)

- `fr.json` - Toutes les traductions en français
- `en.json` - Toutes les traductions en anglais

## Palette de Couleurs

Extraite de ludicademi.com et configurée dans `tailwind.config.ts` :

```typescript
primary: {
  400: '#7ED321',  // Vert lime - Couleur principale
  // Gradations de 50 à 950
}
accent: {
  400: '#FF6B35',  // Orange chaud - Couleur d'accent
  // Gradations de 50 à 950
}
neutral: {
  dark: '#1a1a1a',
  light: '#f8f8f8'
}
```

## Internationalisation

### Routage

- Français (défaut) : `/fr/*`
- Anglais : `/en/*`

### Configuration

1. `middleware.ts` - Intercepte les requêtes et redirige vers la locale appropriée
2. `i18n.ts` - Charge les messages de traduction
3. `messages/fr.json` et `messages/en.json` - Fichiers de traduction

### Utilisation dans les Composants

```typescript
// Composant serveur
import { getTranslations } from 'next-intl/server';
const t = await getTranslations('namespace');

// Composant client
import { useTranslations } from 'next-intl';
const t = useTranslations('namespace');
```

## Flux de Données

### Excursions

1. Données définies dans `/data/excursions.ts`
2. Importées dans les pages
3. Affichées via `ExcursionCard` ou page détaillée
4. URLs Regiondo intégrées dans chaque excursion

### Séjours

Même principe que les excursions, avec données dans `/data/stays.ts`

## Composants Clés

### Hero

- Image pleine largeur avec overlay
- Titre, sous-titre, CTA
- Utilise la couleur primaire pour l'overlay

### Cards (ExcursionCard, StayCard)

- Image
- Titre et métadonnées (prix, durée)
- Points forts (3 premiers)
- Boutons CTA (Réserver / En savoir plus)

### Header

- Logo LUDICADÉMI
- Navigation horizontale (desktop) / Menu hamburger (mobile)
- Sélecteur de langue

### Footer

- 3 colonnes : À propos, Liens rapides, Légal
- Copyright

## Pages Principales

### Page d'Accueil

Sections :
1. Hero
2. Features (4 cartes)
3. Excursions phares (2 premières)
4. Séjour immersif phare (premier)
5. Romans
6. À propos

### Page Excursion

- Hero avec image
- Description
- Points forts
- Programme détaillé
- Inclus / Non inclus
- Niveau physique
- CTA Réservation

### Page Séjour

Structure similaire à la page excursion, adaptée pour les séjours multi-jours.

## SEO

- Métadonnées dans `generateMetadata()` de chaque page
- Open Graph tags
- Structure sémantique HTML5
- URLs propres avec slugs
- Images optimisées avec Next/Image

## Responsive Design

- Mobile-first avec Tailwind CSS
- Breakpoints : sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Navigation adaptative (menu hamburger sur mobile)
- Grilles responsives pour les cartes

## Performance

- Next.js App Router avec SSR/SSG
- Images optimisées avec Next/Image (lazy loading)
- Code splitting automatique
- Fonts optimisées (Google Fonts avec preconnect)

## Intégration Regiondo

Les URLs de réservation sont stockées dans :
- `excursion.bookingUrl`
- `stay.bookingUrl`

Les boutons "Réserver" ouvrent ces URLs dans un nouvel onglet.

## Développement

### Commandes

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm start        # Serveur de production
npm run lint     # Linting ESLint
```

### Ajouter une Nouvelle Excursion

1. Ajouter dans `/data/excursions.ts`
2. Remplir tous les champs (FR/EN)
3. Ajouter l'image dans `/public/images/excursions/`
4. Configurer l'URL Regiondo

### Ajouter une Traduction

1. Ajouter la clé dans `/messages/fr.json`
2. Ajouter la même clé dans `/messages/en.json`
3. Utiliser dans les composants avec `useTranslations()` ou `getTranslations()`

## Notes Importantes

- Les images doivent être ajoutées manuellement dans `/public/images/`
- Les URLs Regiondo doivent être mises à jour dans les fichiers de données
- La palette de couleurs doit rester cohérente avec l'identité visuelle existante
- Toutes les nouvelles pages doivent avoir leurs métadonnées SEO

