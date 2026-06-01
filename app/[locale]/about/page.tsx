import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import { getLocalizedPath } from '@/lib/utils';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('title'),
    description: t('metaDescription'),
  };
}

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('about');

  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-dark mb-5 text-spacing-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Founder Section */}
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src="/images/phayneanton.jpeg"
                    alt={t('founder.name')}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-dark mb-4 text-spacing-tight">
                  {t('founder.name')}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    {t('founder.bio')}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t('founder.expertise')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Award Section */}
          <div id="award" className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl shadow-soft p-8 md:p-12 mb-8 border border-accent-200 scroll-mt-20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/images/awards.png"
                    alt={locale === 'fr' ? 'Travel & Hospitality Award' : 'Travel & Hospitality Award'}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-dark mb-4 text-spacing-tight">
                  {locale === 'fr' ? 'Travel & Hospitality Award' : 'Travel & Hospitality Award'}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {locale === 'fr'
                    ? 'LUDICADEMI a été récompensé par le prestigieux Travel & Hospitality Award, reconnaissant notre excellence dans le domaine du tourisme culturel et de l\'immersion authentique en Martinique. Cette distinction récompense notre engagement à offrir des expériences uniques qui respectent et valorisent la culture locale, tout en créant des souvenirs inoubliables pour nos voyageurs.'
                    : 'LUDICADEMI has been awarded the prestigious Travel & Hospitality Award, recognizing our excellence in cultural tourism and authentic immersion in Martinique. This distinction rewards our commitment to offering unique experiences that respect and enhance local culture, while creating unforgettable memories for our travelers.'}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {locale === 'fr'
                    ? 'Cet award témoigne de notre expertise, de notre professionnalisme et de notre dévouement à promouvoir un tourisme responsable et respectueux de l\'identité martiniquaise.'
                    : 'This award reflects our expertise, professionalism and dedication to promoting responsible tourism that respects Martinique\'s identity.'}
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-3xl font-display font-semibold text-neutral-dark mb-4 text-spacing-tight">
                {t('mission.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('mission.description')}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-3xl font-display font-semibold text-neutral-dark mb-4 text-spacing-tight">
                {t('values.title')}
              </h2>
              <ul className="space-y-3">
                {['value1', 'value2', 'value3', 'value4'].map((key) => (
                  <li key={key} className="flex items-start text-gray-700">
                    <span className="text-accent-600 mr-3 text-xl">✓</span>
                    <span>{t(`values.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Info */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-3xl font-display font-semibold text-neutral-dark mb-6 text-spacing-tight">
              {t('legal.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-neutral-dark mb-2">{t('legal.company')}</h3>
                <p>LUDICADEMI</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-dark mb-2">{t('legal.siret')}</h3>
                <p>{t('legal.siretValue')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-dark mb-2">{t('legal.address')}</h3>
                <p>Martinique, France</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-dark mb-2">{t('legal.insurance')}</h3>
                <p>{t('legal.insuranceValue')}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <CTAButton href={getLocalizedPath('/contact', locale)} variant="primary" className="mr-4">
              {t('cta.contact')}
            </CTAButton>
            <CTAButton href={getLocalizedPath('/excursions', locale)} variant="outline">
              {t('cta.discover')}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

