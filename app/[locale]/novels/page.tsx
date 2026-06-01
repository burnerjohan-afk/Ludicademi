import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { novels } from '@/data/novels';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: 'Romans caribéens',
    description: 'Découvrez les romans de PHAYNE ANTON',
  };
}

export default async function NovelsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('home.novels');
  const localeKey = locale as 'fr' | 'en';

  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-dark mb-5 text-spacing-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-700 mb-3 leading-relaxed">{t('subtitle')}</p>
          <p className="text-gray-700 leading-relaxed">{t('description')}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/phayneanton.jpeg"
                  alt="PHAYNE ANTON"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-dark mb-5 text-spacing-tight">
                PHAYNE ANTON
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              {locale === 'fr'
                ? 'Plongez dans l\'univers littéraire des Caraïbes avec les romans de PHAYNE ANTON. Ces récits vous transportent au cœur de la culture caribéenne, prolongeant l\'immersion vécue lors de vos excursions et séjours. Chaque roman est une invitation à découvrir les histoires, les traditions et l\'âme de la Martinique à travers la fiction.'
                : 'Dive into the literary universe of the Caribbean with novels by PHAYNE ANTON. These stories transport you to the heart of Caribbean culture, extending the immersion experienced during your excursions and stays. Each novel is an invitation to discover the stories, traditions and soul of Martinique through fiction.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {novels.map((novel) => (
              <div
                key={novel.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={novel.image}
                    alt={novel.title[localeKey]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  {novel.title[localeKey] && (
                    <h3 className="text-2xl font-display font-semibold text-neutral-dark mb-4 text-spacing-tight">
                      {novel.title[localeKey]}
                    </h3>
                  )}
                  <p className="text-gray-700 leading-relaxed">
                    {novel.summary[localeKey]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

