import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { stays } from '@/data/stays';
import StayCard from '@/components/StayCard';
import CustomImmersionForm from '@/components/CustomImmersionForm';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'stays' });
  const title = locale === 'fr'
    ? 'Séjours Immersifs Martinique | Immersion Culturelle Complète - LUDICADEMI'
    : 'Immersive Stays Martinique | Complete Cultural Immersion - LUDICADEMI';
  const description = locale === 'fr'
    ? 'Séjours immersifs en Martinique avec cours de créole, rencontres locales et découverte authentique de la culture. Expérience transformante garantie.'
    : 'Immersive stays in Martinique with Creole lessons, local encounters and authentic cultural discovery. Guaranteed transformative experience.';

  return {
    title,
    description,
    keywords: locale === 'fr'
      ? 'séjour immersif martinique, immersion linguistique martinique, cours créole, voyage culturel martinique, séjour culturel'
      : 'immersive stay martinique, linguistic immersion martinique, creole lessons, cultural travel martinique, cultural stay',
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
    },
  };
}

export default async function StaysPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('stays');
  const tCommon = await getTranslations('common');
  const localeKey = locale as 'fr' | 'en';
  const cardLabels = {
    priceFrom: t('priceFrom'),
    learnMore: tCommon('learnMore'),
    bookNow: tCommon('bookNow'),
    days: t('days'),
  };

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/images/home/immersion2.jpg"
          alt={locale === 'fr' ? 'Immersion culturelle en Martinique' : 'Cultural immersion in Martinique'}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 text-spacing-tight drop-shadow-2xl">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-white drop-shadow-lg font-semibold">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Custom Immersion Section */}
          <CustomImmersionForm />

          {/* Existing Stays */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-dark mb-8 text-center text-spacing-tight">
              {locale === 'fr' ? 'Nos séjours immersifs' : 'Our immersive stays'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {stays.map((stay) => (
                <StayCard key={stay.id} stay={stay} locale={localeKey} labels={cardLabels} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

