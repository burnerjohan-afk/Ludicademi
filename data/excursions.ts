import { Excursion } from '@/types';

export const excursions: Excursion[] = [
  {
    id: 'excursion-1',
    title: {
      fr: 'Découverte culturelle du Nord',
      en: 'Northern Cultural Discovery',
    },
    slug: {
      fr: 'decouverte-culturelle-nord',
      en: 'northern-cultural-discovery',
    },
    summary: {
      fr: 'Plongez dans l\'histoire et la culture du Nord de la Martinique',
      en: 'Dive into the history and culture of Northern Martinique',
    },
    description: {
      fr: 'Une journée complète pour découvrir les trésors culturels du Nord de la Martinique, de ses plantations historiques à ses villages authentiques.',
      en: 'A full day to discover the cultural treasures of Northern Martinique, from its historic plantations to its authentic villages.',
    },
    duration: '1 jour',
    priceFrom: 120,
    image: '/images/home/mornevert.jpeg',
    highlights: {
      fr: [
        'Visite de plantations historiques',
        'Rencontre avec les artisans locaux',
        'Découverte de la gastronomie créole',
        'Paysages époustouflants',
      ],
      en: [
        'Visit historic plantations',
        'Meet local artisans',
        'Discover Creole gastronomy',
        'Stunning landscapes',
      ],
    },
    program: {
      fr: [
        '08h00 - Départ depuis Fort-de-France',
        '09h30 - Visite d\'une plantation de canne à sucre',
        '12h00 - Déjeuner dans un restaurant créole authentique',
        '14h00 - Découverte des villages du Nord',
        '16h00 - Rencontre avec un artisan local',
        '18h00 - Retour à Fort-de-France',
      ],
      en: [
        '08:00 - Departure from Fort-de-France',
        '09:30 - Visit to a sugar cane plantation',
        '12:00 - Lunch at an authentic Creole restaurant',
        '14:00 - Discovery of Northern villages',
        '16:00 - Meeting with a local artisan',
        '18:00 - Return to Fort-de-France',
      ],
    },
    included: {
      fr: [
        'Transport aller-retour',
        'Guide expert',
        'Déjeuner',
        'Toutes les entrées',
      ],
      en: [
        'Round-trip transportation',
        'Expert guide',
        'Lunch',
        'All entries',
      ],
    },
    notIncluded: {
      fr: ['Boissons supplémentaires', 'Achats personnels'],
      en: ['Additional drinks', 'Personal purchases'],
    },
    physicalLevel: {
      fr: 'Facile - Accessible à tous',
      en: 'Easy - Accessible to all',
    },
    cancellationPolicy: {
      fr: 'Annulation gratuite jusqu\'à 48h avant le départ. Remboursement complet ou report possible.',
      en: 'Free cancellation up to 48 hours before departure. Full refund or rescheduling possible.',
    },
    bookingUrl: 'https://regiondo.com/excursion-1',
  },
  {
    id: 'excursion-2',
    title: {
      fr: 'Immersion nature au Sud',
      en: 'Southern Nature Immersion',
    },
    slug: {
      fr: 'immersion-nature-sud',
      en: 'southern-nature-immersion',
    },
    summary: {
      fr: 'Explorez les réserves naturelles et les plages sauvages du Sud',
      en: 'Explore the nature reserves and wild beaches of the South',
    },
    description: {
      fr: 'Demi-journée pour découvrir les richesses naturelles du Sud de la Martinique, ses mangroves, ses plages et sa faune exceptionnelle.',
      en: 'Half-day to discover the natural riches of Southern Martinique, its mangroves, beaches and exceptional wildlife.',
    },
    duration: 'Demi-journée',
    priceFrom: 75,
    image: '/images/home/paysagesud2.jpg',
    highlights: {
      fr: [
        'Randonnée dans la mangrove',
        'Observation de la faune',
        'Plages sauvages préservées',
        'Guide naturaliste',
      ],
      en: [
        'Mangrove hiking',
        'Wildlife observation',
        'Preserved wild beaches',
        'Naturalist guide',
      ],
    },
    program: {
      fr: [
        '08h00 - Départ',
        '09h00 - Randonnée guidée dans la mangrove',
        '11h00 - Observation de la faune',
        '12h30 - Temps libre sur la plage',
        '14h30 - Retour',
      ],
      en: [
        '08:00 - Departure',
        '09:00 - Guided mangrove hike',
        '11:00 - Wildlife observation',
        '12:30 - Free time on the beach',
        '14:30 - Return',
      ],
    },
    included: {
      fr: ['Transport', 'Guide naturaliste', 'Matériel d\'observation'],
      en: ['Transportation', 'Naturalist guide', 'Observation equipment'],
    },
    notIncluded: {
      fr: ['Déjeuner', 'Boissons'],
      en: ['Lunch', 'Drinks'],
    },
    physicalLevel: {
      fr: 'Modéré - Marche de 3-4km',
      en: 'Moderate - 3-4km walk',
    },
    cancellationPolicy: {
      fr: 'Annulation gratuite jusqu\'à 48h avant le départ. Remboursement complet ou report possible.',
      en: 'Free cancellation up to 48 hours before departure. Full refund or rescheduling possible.',
    },
    bookingUrl: 'https://regiondo.com/excursion-2',
  },
  {
    id: 'excursion-3',
    title: {
      fr: 'Découverte du patrimoine martiniquais',
      en: 'Martinique Heritage Discovery',
    },
    slug: {
      fr: 'decouverte-patrimoine-martiniquais',
      en: 'martinique-heritage-discovery',
    },
    summary: {
      fr: 'Explorez le riche patrimoine historique et culturel de la Martinique',
      en: 'Explore the rich historical and cultural heritage of Martinique',
    },
    description: {
      fr: 'Une journée immersive pour découvrir les sites patrimoniaux emblématiques de la Martinique, de l\'époque coloniale à nos jours, à travers des visites guidées et des rencontres authentiques.',
      en: 'An immersive day to discover the emblematic heritage sites of Martinique, from the colonial era to the present day, through guided tours and authentic encounters.',
    },
    duration: '1 jour',
    priceFrom: 130,
    image: '/images/home/chaine.jpeg',
    highlights: {
      fr: [
        'Visite de sites historiques majeurs',
        'Découverte de l\'architecture coloniale',
        'Rencontre avec des historiens locaux',
        'Exploration du patrimoine immatériel',
      ],
      en: [
        'Visit to major historical sites',
        'Discovery of colonial architecture',
        'Meeting with local historians',
        'Exploration of intangible heritage',
      ],
    },
    program: {
      fr: [
        '08h30 - Départ depuis Fort-de-France',
        '09h30 - Visite de la Savane des Esclaves',
        '11h00 - Découverte des habitations coloniales',
        '12h30 - Déjeuner traditionnel créole',
        '14h30 - Visite de sites patrimoniaux classés',
        '16h00 - Rencontre avec un historien local',
        '17h30 - Retour à Fort-de-France',
      ],
      en: [
        '08:30 - Departure from Fort-de-France',
        '09:30 - Visit to the Savane des Esclaves',
        '11:00 - Discovery of colonial estates',
        '12:30 - Traditional Creole lunch',
        '14:30 - Visit to classified heritage sites',
        '16:00 - Meeting with a local historian',
        '17:30 - Return to Fort-de-France',
      ],
    },
    included: {
      fr: [
        'Transport aller-retour',
        'Guide expert en patrimoine',
        'Déjeuner traditionnel',
        'Toutes les entrées aux sites',
      ],
      en: [
        'Round-trip transportation',
        'Heritage expert guide',
        'Traditional lunch',
        'All site entries',
      ],
    },
    notIncluded: {
      fr: ['Boissons supplémentaires', 'Achats souvenirs'],
      en: ['Additional drinks', 'Souvenir purchases'],
    },
    physicalLevel: {
      fr: 'Facile - Accessible à tous',
      en: 'Easy - Accessible to all',
    },
    cancellationPolicy: {
      fr: 'Annulation gratuite jusqu\'à 48h avant le départ. Remboursement complet ou report possible.',
      en: 'Free cancellation up to 48 hours before departure. Full refund or rescheduling possible.',
    },
    bookingUrl: 'https://regiondo.com/excursion-3',
  },
];

export function getExcursionById(id: string): Excursion | undefined {
  return excursions.find((excursion) => excursion.id === id);
}

export function getExcursionBySlug(slug: string, locale: 'fr' | 'en'): Excursion | undefined {
  return excursions.find((excursion) => excursion.slug[locale] === slug);
}

