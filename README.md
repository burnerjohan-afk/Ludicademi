# LUDICADEMI - Site Web

Site web moderne et bilingue (FR/EN) pour LUDICADEMI - Excursions et séjours immersifs en Martinique.

## 🎨 Identité Visuelle

Le site utilise la charte graphique extraite de ludicademi.com :

- **Couleur principale** : Vert lime/vif (`#7ED321`) - couleur dominante
- **Couleur d'accent** : Orange chaud (`#FF6B35`) - pour les CTA et éléments importants
- **Typographie** : 
  - **Titres** : Source Serif Pro (serif, élégant, culturel)
  - **Corps** : Inter (sans-serif, moderne et lisible)

## 🛠 Stack Technique

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** - Configuration avec palette de couleurs personnalisée
- **next-intl** - Internationalisation complète FR/EN
- **Source Serif Pro & Inter** - Google Fonts

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Démarrer le serveur de production
npm start
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
ludicademi-website/
├── app/                      # App Router Next.js
│   ├── [locale]/            # Routes internationalisées
│   │   ├── page.tsx         # Page d'accueil
│   │   ├── excursions/      # Pages excursions
│   │   ├── stays/           # Pages séjours
│   │   ├── about/           # À propos
│   │   ├── contact/         # Contact
│   │   ├── faq/             # FAQ
│   │   └── novels/          # Romans
│   ├── layout.tsx           # Layout racine
│   └── globals.css          # Styles globaux
├── components/               # Composants réutilisables
│   ├── Header.tsx           # Header avec navigation
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Section hero
│   ├── ExcursionCard.tsx    # Carte d'excursion
│   ├── StayCard.tsx         # Carte de séjour
│   ├── FAQ.tsx              # Composant FAQ
│   ├── CTAButton.tsx        # Bouton CTA
│   ├── FeatureCard.tsx      # Carte de fonctionnalité
│   └── PromoBanner.tsx      # Bandeau promotionnel
├── data/                     # Données
│   ├── excursions.ts        # Données des excursions
│   ├── stays.ts             # Données des séjours
│   └── faq.ts               # Données FAQ
├── lib/                      # Utilitaires
│   └── utils.ts             # Fonctions utilitaires
├── messages/                 # Traductions
│   ├── fr.json              # Traductions françaises
│   └── en.json              # Traductions anglaises
├── types/                    # Types TypeScript
│   └── index.ts             # Types pour excursions, séjours, etc.
├── public/                   # Assets statiques
│   └── images/              # Images
├── i18n.ts                   # Configuration i18n
├── middleware.ts             # Middleware Next.js pour i18n
├── tailwind.config.ts        # Configuration Tailwind
└── next.config.mjs           # Configuration Next.js
```

## 🌍 Internationalisation

Le site est entièrement bilingue français/anglais :

- **Français** : `/fr/*` (par défaut)
- **Anglais** : `/en/*`

Les traductions sont gérées via `next-intl` avec des fichiers JSON dans `/messages`.

### Ajouter une traduction

1. Ajouter la clé dans `/messages/fr.json`
2. Ajouter la même clé dans `/messages/en.json`
3. Utiliser `useTranslations('namespace')` dans vos composants

## 🎨 Palette de Couleurs Tailwind

La palette est configurée dans `tailwind.config.ts` :

```typescript
primary: {
  400: '#7ED321',  // Couleur principale (vert lime)
  // ... autres variantes
}
accent: {
  400: '#FF6B35',  // Couleur d'accent (orange)
  // ... autres variantes
}
```

Utilisation dans les composants :
```tsx
<div className="bg-primary-400 text-white">
  <button className="bg-accent-400 hover:bg-accent-500">
    CTA
  </button>
</div>
```

## 📄 Pages Disponibles

### Pages Publiques

- `/fr` ou `/en` - Page d'accueil
- `/fr/excursions` - Liste des excursions
- `/fr/excursions/[slug]` - Détail d'une excursion
- `/fr/stays` - Liste des séjours immersifs
- `/fr/stays/[slug]` - Détail d'un séjour
- `/fr/about` - À propos
- `/fr/contact` - Contact
- `/fr/faq` - FAQ
- `/fr/novels` - Romans

### Sections de la Page d'Accueil

1. **Hero Section** - Image immersive avec CTA
2. **Features** - 4 avantages clés (Authenticité, Culture, Personnalisé, Récompensé)
3. **Excursions Phares** - 2 excursions mises en avant
4. **Séjour Immersif Phare** - Séjour principal
5. **Romans** - Section dédiée aux romans de PHAYNE ANTON
6. **À propos** - Présentation du fondateur

## 📝 Données (Excursions & Séjours)

Les données sont définies dans `/data/excursions.ts` et `/data/stays.ts`.

Chaque excursion/séjour contient :
- Titre (FR/EN)
- Description (FR/EN)
- Prix
- Durée
- Points forts
- Programme détaillé
- Inclus / Non inclus
- Niveau physique (excursions)
- URL de réservation Regiondo

### Ajouter une excursion

```typescript
// Dans /data/excursions.ts
export const excursions: Excursion[] = [
  // ... existantes
  {
    id: 'excursion-3',
    title: { fr: '...', en: '...' },
    // ... autres champs
  }
];
```

## 🔗 Intégration Regiondo

Les URLs de réservation Regiondo sont définies dans chaque excursion/séjour via le champ `bookingUrl`. Les boutons "Réserver" pointent vers ces URLs (ouverture dans un nouvel onglet).

## 📱 Responsive Design

Le site est entièrement responsive avec une approche mobile-first :
- Breakpoints Tailwind : `sm`, `md`, `lg`, `xl`, `2xl`
- Navigation mobile avec menu hamburger
- Grilles adaptatives pour les cartes

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connecter votre repository GitHub
2. Vercel détectera automatiquement Next.js
3. Les variables d'environnement seront configurées automatiquement

### Build Manuel

```bash
npm run build
npm start
```

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env.local` pour les variables d'environnement si nécessaire.

### Modification de la Palette

Pour modifier les couleurs, éditer `tailwind.config.ts` et mettre à jour les valeurs `primary` et `accent`.

## 📚 Composants Principaux

### Header
- Navigation complète
- Sélecteur de langue
- Menu mobile responsive

### Footer
- Liens rapides
- Liens légaux
- Informations de contact

### Hero
- Image pleine largeur
- Overlay avec couleur de la charte
- CTA principal

### Cards (ExcursionCard, StayCard)
- Image
- Titre et prix
- Points forts
- Boutons CTA (Réserver / En savoir plus)

### FAQ
- Accordéon interactif
- Questions/réponses bilingues

## 🎯 SEO

- Métadonnées Open Graph sur chaque page
- Structure sémantique HTML5
- Balises Hn bien hiérarchisées
- Images optimisées avec Next/Image
- URLs propres avec slugs

## 📝 Notes

- Les images doivent être ajoutées dans `/public/images/`
- Les URLs Regiondo doivent être mises à jour dans les données
- Les traductions doivent être complétées pour toutes les nouvelles pages

## 🤝 Contribution

Pour ajouter de nouvelles fonctionnalités :

1. Créer les composants dans `/components`
2. Ajouter les pages dans `/app/[locale]`
3. Mettre à jour les traductions dans `/messages`
4. Ajouter les types TypeScript si nécessaire

---

**LUDICADEMI** - Découvrez la Martinique autrement 🌴
