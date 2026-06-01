import { Stay } from '@/types';

export const stays: Stay[] = [
  {
    id: 'stay-1',
    title: {
      fr: 'Séjour Immersif Complet - Culture et Patrimoine',
      en: 'Complete Immersive Stay - Culture and Heritage',
    },
    slug: {
      fr: 'sejour-immersif-culture-patrimoine',
      en: 'immersive-stay-culture-heritage',
    },
    summary: {
      fr: 'Un séjour de 5 jours pour une immersion totale dans la culture martiniquaise',
      en: 'A 5-day stay for total immersion in Martinique culture',
    },
    description: {
      fr: 'Plongez au cœur de la Martinique avec ce séjour complet qui combine excursions, rencontres culturelles, cours de créole et découverte du patrimoine local.',
      en: 'Dive into the heart of Martinique with this complete stay that combines excursions, cultural encounters, Creole lessons and discovery of local heritage.',
    },
    days: 5,
    priceFrom: 850,
    image: '/images/home/esclave2.jpeg',
    highlights: {
      fr: [
        'Excursions quotidiennes guidées',
        'Cours de créole martiniquais',
        'Rencontres avec la communauté locale',
        'Hébergement en gîte authentique',
        'Repas traditionnels inclus',
        'Découverte du patrimoine historique',
      ],
      en: [
        'Daily guided excursions',
        'Martinique Creole lessons',
        'Meetings with local community',
        'Authentic guesthouse accommodation',
        'Traditional meals included',
        'Historical heritage discovery',
      ],
    },
    program: {
      fr: [
        'Jour 1 : Accueil et introduction à la culture martiniquaise',
        'Jour 2 : Excursion Nord - Plantations et histoire',
        'Jour 3 : Immersion linguistique et cours de créole',
        'Jour 4 : Rencontres locales et artisanat',
        'Jour 5 : Patrimoine culturel et départ',
      ],
      en: [
        'Day 1: Welcome and introduction to Martinique culture',
        'Day 2: Northern excursion - Plantations and history',
        'Day 3: Linguistic immersion and Creole lessons',
        'Day 4: Local encounters and crafts',
        'Day 5: Cultural heritage and departure',
      ],
    },
    included: {
      fr: [
        'Hébergement 4 nuits',
        'Tous les petits-déjeuners',
        'Déjeuners traditionnels',
        'Excursions guidées',
        'Cours de créole',
        'Transport sur place',
      ],
      en: [
        '4-night accommodation',
        'All breakfasts',
        'Traditional lunches',
        'Guided excursions',
        'Creole lessons',
        'Local transportation',
      ],
    },
    notIncluded: {
      fr: ['Dîners', 'Billets d\'avion', 'Assurances'],
      en: ['Dinners', 'Flight tickets', 'Insurance'],
    },
    cancellationPolicy: {
      fr: 'Annulation gratuite jusqu\'à 7 jours avant l\'arrivée. Remboursement complet ou report possible.',
      en: 'Free cancellation up to 7 days before arrival. Full refund or rescheduling possible.',
    },
    bookingUrl: 'https://regiondo.com/stay-1',
  },
  {
    id: 'stay-2',
    title: {
      fr: 'À l\'intérieur des terres - Randonnées immersives',
      en: 'Inland - Immersive Hiking',
    },
    slug: {
      fr: 'interieur-terres-randonnees',
      en: 'inland-hiking',
    },
    summary: {
      fr: 'Un séjour de 4 jours dédié à la découverte de l\'intérieur des terres martiniquaises à travers la randonnée',
      en: 'A 4-day stay dedicated to discovering the interior of Martinique through hiking',
    },
    description: {
      fr: 'Explorez les terres intérieures de la Martinique à travers des randonnées guidées. Découvrez les forêts tropicales, les cascades cachées, les pitons volcaniques et la biodiversité exceptionnelle de l\'île, tout en rencontrant les communautés locales des hauteurs.',
      en: 'Explore the interior lands of Martinique through guided hikes. Discover tropical forests, hidden waterfalls, volcanic peaks and the island\'s exceptional biodiversity, while meeting local communities in the highlands.',
    },
    days: 4,
    priceFrom: 720,
    image: '/images/randonnée.jpg',
    highlights: {
      fr: [
        'Randonnées quotidiennes guidées par un expert',
        'Découverte de la flore et faune endémiques',
        'Visite de cascades et sites naturels secrets',
        'Rencontres avec les habitants des hauteurs',
        'Hébergement en gîte de montagne',
        'Repas locaux avec produits du terroir',
      ],
      en: [
        'Daily guided hikes with an expert',
        'Discovery of endemic flora and fauna',
        'Visit to waterfalls and secret natural sites',
        'Meetings with highland residents',
        'Mountain guesthouse accommodation',
        'Local meals with regional products',
      ],
    },
    program: {
      fr: [
        'Jour 1 : Accueil et randonnée d\'initiation - Forêt tropicale',
        'Jour 2 : Ascension du Mont Pelée ou randonnée vers les cascades',
        'Jour 3 : Découverte de la Trace des Jésuites et rencontre avec les locaux',
        'Jour 4 : Randonnée matinale et départ',
      ],
      en: [
        'Day 1: Welcome and initiation hike - Tropical forest',
        'Day 2: Ascent of Mont Pelée or hike to waterfalls',
        'Day 3: Discovery of the Trace des Jésuites and meeting with locals',
        'Day 4: Morning hike and departure',
      ],
    },
    included: {
      fr: [
        'Hébergement 3 nuits en gîte de montagne',
        'Tous les petits-déjeuners',
        'Déjeuners pique-nique et repas traditionnels',
        'Guide randonnée expert',
        'Transport vers les départs de randonnées',
        'Matériel de randonnée (bâtons, gourdes)',
      ],
      en: [
        '3-night mountain guesthouse accommodation',
        'All breakfasts',
        'Picnic lunches and traditional meals',
        'Expert hiking guide',
        'Transportation to hike starting points',
        'Hiking equipment (poles, water bottles)',
      ],
    },
    notIncluded: {
      fr: ['Dîners', 'Billets d\'avion', 'Assurances', 'Chaussures de randonnée'],
      en: ['Dinners', 'Flight tickets', 'Insurance', 'Hiking boots'],
    },
    cancellationPolicy: {
      fr: 'Annulation gratuite jusqu\'à 7 jours avant l\'arrivée. Remboursement complet ou report possible.',
      en: 'Free cancellation up to 7 days before arrival. Full refund or rescheduling possible.',
    },
    bookingUrl: 'https://regiondo.com/stay-2',
  },
];

export function getStayById(id: string): Stay | undefined {
  return stays.find((stay) => stay.id === id);
}

export function getStayBySlug(slug: string, locale: 'fr' | 'en'): Stay | undefined {
  return stays.find((stay) => stay.slug[locale] === slug);
}

