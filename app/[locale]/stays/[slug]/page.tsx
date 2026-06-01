import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { getStayBySlug } from '@/data/stays';
import CTAButton from '@/components/CTAButton';
import { getLocalizedPath } from '@/lib/utils';

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  const { stays } = await import('@/data/stays');
  return stays.map((stay) => ({
    slug: stay.slug[locale as 'fr' | 'en'],
  }));
}

export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const stay = getStayBySlug(slug, locale as 'fr' | 'en');
  
  if (!stay) {
    return {
      title: 'Stay not found',
    };
  }

  return {
    title: stay.title[locale as 'fr' | 'en'],
    description: stay.summary[locale as 'fr' | 'en'],
    openGraph: {
      title: stay.title[locale as 'fr' | 'en'],
      description: stay.summary[locale as 'fr' | 'en'],
      images: [stay.image],
      locale,
      type: 'website',
    },
  };
}

export default async function StayPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const t = await getTranslations('stays');
  const localeTyped = locale as 'fr' | 'en';
  const stay = getStayBySlug(slug, localeTyped);

  if (!stay) {
    notFound();
  }

  const title = stay.title[localeTyped];
  const description = stay.description[localeTyped];
  const highlights = stay.highlights[localeTyped];
  const program = stay.program[localeTyped];
  const included = stay.included[localeTyped];
  const notIncluded = stay.notIncluded[localeTyped];

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Image */}
      <div className="relative h-96 bg-primary-400">
        <Image
          src="/images/home/immersion.jpg"
          alt={title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 text-spacing-tight">{title}</h1>
            <div className="flex items-center gap-6 text-lg">
              <span>{stay.days} {t('days')}</span>
              <span>•</span>
              <span className="font-semibold text-accent-400">
                {t('priceFrom')} {stay.priceFrom}€
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
            <div className="mb-6">
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/home/immersion2.jpg"
                  alt={localeTyped === 'fr' ? 'Immersion culturelle en Martinique' : 'Cultural immersion in Martinique'}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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

          {/* Cancellation Policy */}
          {stay.cancellationPolicy && (
            <section className="mb-12 bg-blue-50 rounded-xl shadow-soft p-6 border border-blue-100">
              <h2 className="text-2xl font-display font-semibold text-neutral-dark mb-3 text-spacing-tight">
                {t('cancellationPolicy')}
              </h2>
              <p className="text-gray-700 leading-relaxed">{stay.cancellationPolicy[localeTyped]}</p>
            </section>
          )}

          {/* CTA Booking */}
          <div className="bg-primary-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-spacing-tight">Prêt à partir ?</h2>
            <p className="text-lg mb-6">Réservez votre séjour dès maintenant</p>
            <CTAButton
              href={stay.bookingUrl}
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

