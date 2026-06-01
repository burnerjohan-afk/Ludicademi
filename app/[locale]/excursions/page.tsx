import { getTranslations, setRequestLocale } from 'next-intl/server';
import { excursions } from '@/data/excursions';
import ExcursionCard from '@/components/ExcursionCard';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'excursions' });
  const title = locale === 'fr'
    ? 'Excursions Martinique | Découvrez la Martinique autrement - LUDICADEMI'
    : 'Martinique Excursions | Discover Martinique differently - LUDICADEMI';
  const description = locale === 'fr'
    ? 'Découvrez nos excursions authentiques en Martinique. Immersion culturelle, visites guidées, découverte du patrimoine. Réservez votre expérience unique.'
    : 'Discover our authentic excursions in Martinique. Cultural immersion, guided tours, heritage discovery. Book your unique experience.';

  return {
    title,
    description,
    keywords: locale === 'fr'
      ? 'excursions martinique, voyage culturel martinique, immersion culturelle, visites guidées martinique, découverte martinique'
      : 'martinique excursions, cultural travel martinique, cultural immersion, guided tours martinique, discover martinique',
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
    },
  };
}

export default async function ExcursionsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('excursions');
  const tCommon = await getTranslations('common');
  const localeKey = locale as 'fr' | 'en';
  const cardLabels = {
    priceFrom: t('priceFrom'),
    learnMore: tCommon('learnMore'),
    bookNow: tCommon('bookNow'),
  };

  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-dark mb-5 text-spacing-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excursions.map((excursion) => (
            <ExcursionCard
              key={excursion.id}
              excursion={excursion}
              locale={localeKey}
              labels={cardLabels}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

