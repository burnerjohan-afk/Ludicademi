import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { getExcursionBySlug } from '@/data/excursions';
import CTAButton from '@/components/CTAButton';
import { getLocalizedPath } from '@/lib/utils';
import JsonLd from '@/components/JsonLd';
import { excursionJsonLd, breadcrumbJsonLd } from '@/lib/json-ld';

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  const { excursions } = await import('@/data/excursions');
  return excursions.map((excursion) => ({
    slug: excursion.slug[locale as 'fr' | 'en'],
  }));
}

export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const excursion = getExcursionBySlug(slug, locale as 'fr' | 'en');
  
  if (!excursion) {
    return {
      title: 'Excursion not found',
    };
  }

  return {
    title: excursion.title[locale as 'fr' | 'en'],
    description: excursion.summary[locale as 'fr' | 'en'],
    openGraph: {
      title: excursion.title[locale as 'fr' | 'en'],
      description: excursion.summary[locale as 'fr' | 'en'],
      images: [excursion.image],
      locale,
      type: 'website',
    },
  };
}

export default async function ExcursionPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('excursions');
  const localeTyped = locale as 'fr' | 'en';
  const excursion = getExcursionBySlug(slug, localeTyped);

  if (!excursion) {
    notFound();
  }

  const title = excursion.title[localeTyped];
  const description = excursion.description[localeTyped];
  const highlights = excursion.highlights[localeTyped];
  const program = excursion.program[localeTyped];
  const included = excursion.included[localeTyped];
  const notIncluded = excursion.notIncluded[localeTyped];
  const physicalLevel = excursion.physicalLevel[localeTyped];

  const slugValue = excursion.slug[localeTyped];

  return (
    <div className="min-h-screen bg-neutral-light">
      <JsonLd
        data={[
          excursionJsonLd(
            {
              title,
              description: excursion.summary[localeTyped],
              image: excursion.image,
              priceFrom: excursion.priceFrom,
              duration: excursion.duration,
              slug: slugValue,
            },
            localeTyped
          ),
          breadcrumbJsonLd([
            { name: locale === 'fr' ? 'Accueil' : 'Home', url: `/${locale}` },
            { name: t('title'), url: `/${locale}/excursions` },
            { name: title, url: `/${locale}/excursions/${slugValue}` },
          ]),
        ]}
      />
      <div className="relative h-96 bg-primary-400 overflow-hidden">
        <Image
          src={excursion.image}
          alt={title}
          fill
          className="object-cover opacity-80"
          style={{ objectPosition: 'center 70%' }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 text-spacing-tight">{title}</h1>
            <div className="flex items-center gap-6 text-lg">
              <span>{excursion.duration}</span>
              <span>•</span>
              <span className="font-semibold text-accent-400">
                {t('priceFrom')} {excursion.priceFrom}€
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-dark mb-5 text-spacing-tight">
              {t('about') || 'À propos'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </section>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-dark mb-6 text-spacing-tight">
                {t('highlights')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-xl shadow-soft"
                  >
                    <span className="text-accent-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Program */}
          {program && program.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-dark mb-6 text-spacing-tight">
                {t('program')}
              </h2>
              <div className="bg-white rounded-xl shadow-soft p-6">
                <ol className="space-y-4">
                  {program.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* Included / Not Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {included && included.length > 0 && (
              <section className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-2xl font-display font-semibold text-neutral-dark mb-4 text-spacing-tight">
                  {t('included')}
                </h2>
                <ul className="space-y-2">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-accent-600 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {notIncluded && notIncluded.length > 0 && (
              <section className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-2xl font-display font-semibold text-neutral-dark mb-4 text-spacing-tight">
                  {t('notIncluded')}
                </h2>
                <ul className="space-y-2">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-gray-400 mr-2">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Physical Level */}
          {physicalLevel && (
            <section className="mb-12 bg-white rounded-xl shadow-soft p-6">
              <h2 className="text-2xl font-display font-semibold text-neutral-dark mb-2 text-spacing-tight">
                {t('physicalLevel')}
              </h2>
              <p className="text-gray-700">{physicalLevel}</p>
            </section>
          )}

          {/* Cancellation Policy */}
          {excursion.cancellationPolicy && (
            <section className="mb-12 bg-blue-50 rounded-xl shadow-soft p-6 border border-blue-100">
              <h2 className="text-2xl font-display font-semibold text-neutral-dark mb-3 text-spacing-tight">
                {t('cancellationPolicy')}
              </h2>
              <p className="text-gray-700 leading-relaxed">{excursion.cancellationPolicy[localeTyped]}</p>
            </section>
          )}

          {/* CTA Booking */}
          <div className="bg-primary-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-spacing-tight">Prêt à partir ?</h2>
            <p className="text-lg mb-6">Réservez votre excursion dès maintenant</p>
            <CTAButton
              href={excursion.bookingUrl}
              variant="secondary"
              className="bg-white text-primary-700 hover:bg-gray-100"
              external
            >
              {t('book')}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

