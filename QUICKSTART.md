# Guide de Démarrage Rapide - LUDICADEMI

## 🚀 Installation Rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:3000 dans votre navigateur
```

## 📋 Checklist de Configuration

### 1. Images
Ajoutez vos images dans `/public/images/` :
- `/public/images/hero-martinique.jpg` - Image hero de la page d'accueil
- `/public/images/excursions/` - Images des excursions
- `/public/images/stays/` - Images des séjours

### 2. URLs Regiondo
Mettez à jour les URLs de réservation dans :
- `/data/excursions.ts` - Champ `bookingUrl` de chaque excursion
- `/data/stays.ts` - Champ `bookingUrl` de chaque séjour

### 3. Données Excursions/Séjours
Modifiez ou ajoutez des excursions/séjours dans :
- `/data/excursions.ts`
- `/data/stays.ts`

### 4. Traductions
Vérifiez que toutes les traductions sont complètes :
- `/messages/fr.json`
- `/messages/en.json`

## 🎨 Personnalisation Rapide

### Changer les Couleurs
Éditez `/tailwind.config.ts` et modifiez les valeurs dans `theme.extend.colors`.

### Modifier le Bandeau Promotionnel
Éditez `/components/PromoBanner.tsx` pour changer le code promo ou le message.

### Ajouter une Page
1. Créer `/app/[locale]/ma-page/page.tsx`
2. Ajouter les traductions dans `/messages/fr.json` et `/messages/en.json`
3. Ajouter le lien dans `/components/Header.tsx` si nécessaire

## 🔍 Structure des Routes

- `/fr` ou `/en` → Accueil
- `/fr/excursions` → Liste des excursions
- `/fr/excursions/[slug]` → Détail d'une excursion
- `/fr/stays` → Liste des séjours
- `/fr/stays/[slug]` → Détail d'un séjour
- `/fr/about` → À propos
- `/fr/contact` → Contact
- `/fr/faq` → FAQ
- `/fr/novels` → Romans

## 📝 Exemple : Ajouter une Excursion

```typescript
// Dans /data/excursions.ts
{
  id: 'excursion-3',
  title: {
    fr: 'Mon titre français',
    en: 'My English title',
  },
  slug: {
    fr: 'mon-excursion',
    en: 'my-excursion',
  },
  summary: {
    fr: 'Description courte...',
    en: 'Short description...',
  },
  description: {
    fr: 'Description complète...',
    en: 'Full description...',
  },
  duration: '1 jour',
  priceFrom: 100,
  image: '/images/excursions/mon-image.jpg',
  highlights: {
    fr: ['Point 1', 'Point 2'],
    en: ['Point 1', 'Point 2'],
  },
  program: {
    fr: ['Étape 1', 'Étape 2'],
    en: ['Step 1', 'Step 2'],
  },
  included: {
    fr: ['Inclus 1', 'Inclus 2'],
    en: ['Included 1', 'Included 2'],
  },
  notIncluded: {
    fr: ['Non inclus 1'],
    en: ['Not included 1'],
  },
  physicalLevel: {
    fr: 'Facile',
    en: 'Easy',
  },
  bookingUrl: 'https://regiondo.com/excursion-3',
}
```

## 🐛 Dépannage

### Erreur "Cannot find module"
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreur de build TypeScript
Vérifiez que tous les types sont corrects dans `/types/index.ts`

### Images non affichées
Vérifiez que les images sont bien dans `/public/images/` et que les chemins dans les données sont corrects (commencent par `/images/`)

## 📚 Documentation Complète

Consultez :
- `README.md` - Documentation complète
- `ARCHITECTURE.md` - Architecture détaillée

