import { SITE_NAME, SITE_URL } from './site';

export function organizationJsonLd(locale: 'fr' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    description:
      locale === 'fr'
        ? 'Excursions authentiques et séjours immersifs en Martinique'
        : 'Authentic excursions and immersive stays in Martinique',
    areaServed: {
      '@type': 'Place',
      name: 'Martinique',
    },
    award: 'Travel & Hospitality Award 2022',
  };
}

export function excursionJsonLd(
  excursion: {
    title: string;
    description: string;
    image: string;
    priceFrom: number;
    duration: string;
    slug: string;
  },
  locale: 'fr' | 'en'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: excursion.title,
    description: excursion.description,
    image: excursion.image.startsWith('http')
      ? excursion.image
      : `${SITE_URL}${excursion.image}`,
    url: `${SITE_URL}/${locale}/excursions/${excursion.slug}`,
    provider: {
      '@type': 'TravelAgency',
      name: SITE_NAME,
      url: `${SITE_URL}/${locale}`,
    },
    offers: {
      '@type': 'Offer',
      price: excursion.priceFrom,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    touristType: locale === 'fr' ? 'Voyageurs culturels' : 'Cultural travelers',
    itinerary: {
      '@type': 'ItemList',
      description: excursion.duration,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
