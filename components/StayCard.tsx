import Image from 'next/image';
import Link from 'next/link';
import { Stay } from '@/types';
import { getLocalizedPath } from '@/lib/utils';
import CTAButton from './CTAButton';

interface StayCardProps {
  stay: Stay;
  locale: 'fr' | 'en';
  labels: {
    priceFrom: string;
    learnMore: string;
    bookNow: string;
    days: string;
  };
}

export default function StayCard({ stay, locale, labels }: StayCardProps) {
  const title = stay.title[locale];
  const summary = stay.summary[locale];
  const slug = stay.slug[locale];

  return (
    <article className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <Link href={getLocalizedPath(`/stays/${slug}`, locale)}>
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <Image
            src={stay.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <Link href={getLocalizedPath(`/stays/${slug}`, locale)}>
          <h3 className="text-xl font-display font-semibold text-neutral-dark hover:text-accent-600 transition-colors mb-3 text-spacing-tight">
            {title}
          </h3>
        </Link>
        <div className="flex items-center gap-4 text-sm text-neutral-gray mb-4">
          <span>
            {stay.days} {labels.days}
          </span>
          <span>•</span>
          <span className="font-semibold text-accent-600">
            {labels.priceFrom} {stay.priceFrom}€
          </span>
        </div>

        <p className="text-gray-700 mb-5 line-clamp-3 leading-relaxed flex-grow">{summary}</p>

        <div className="flex gap-3 mt-auto">
          <CTAButton
            href={getLocalizedPath(`/stays/${slug}`, locale)}
            variant="outline"
            className="flex-1 text-center"
          >
            {labels.learnMore}
          </CTAButton>
          <CTAButton
            href={stay.bookingUrl}
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
