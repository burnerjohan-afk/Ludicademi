import Image from 'next/image';
import Link from 'next/link';
import { Excursion } from '@/types';
import { getLocalizedPath } from '@/lib/utils';
import CTAButton from './CTAButton';

interface ExcursionCardProps {
  excursion: Excursion;
  locale: 'fr' | 'en';
  homeImage?: string;
  labels: {
    priceFrom: string;
    learnMore: string;
    bookNow: string;
  };
}

export default function ExcursionCard({
  excursion,
  locale,
  homeImage,
  labels,
}: ExcursionCardProps) {
  const title = excursion.title[locale];
  const summary = excursion.summary[locale];
  const slug = excursion.slug[locale];

  return (
    <article className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <Link href={getLocalizedPath(`/excursions/${slug}`, locale)}>
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <Image
            src={homeImage || excursion.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Link href={getLocalizedPath(`/excursions/${slug}`, locale)}>
              <h3 className="text-xl font-display font-semibold text-neutral-dark hover:text-accent-600 transition-colors mb-3 text-spacing-tight">
                {title}
              </h3>
            </Link>
            <div className="flex items-center gap-4 text-sm text-neutral-gray">
              <span>{excursion.duration}</span>
              <span>•</span>
              <span className="font-semibold text-accent-600">
                {labels.priceFrom} {excursion.priceFrom}€
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-5 line-clamp-2 leading-relaxed flex-shrink-0">{summary}</p>

        <div className="flex-grow">
          {excursion.highlights && excursion.highlights[locale].length > 0 && (
            <ul className="mb-4 space-y-1">
              {excursion.highlights[locale].slice(0, 3).map((highlight, index) => (
                <li key={index} className="text-sm text-neutral-gray flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-3 mt-auto">
          <CTAButton
            href={getLocalizedPath(`/excursions/${slug}`, locale)}
            variant="outline"
            className="flex-1 text-center"
          >
            {labels.learnMore}
          </CTAButton>
          <CTAButton
            href={excursion.bookingUrl}
            variant="primary"
            className="flex-1 text-center"
            external
          >
            {labels.bookNow}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
