import { Excursion } from '@/types';
import ExcursionCard from '@/components/ExcursionCard';
import CTAButton from '@/components/CTAButton';
import { getLocalizedPath } from '@/lib/utils';

interface ExcursionsPreviewSectionProps {
  title: string;
  description: string;
  excursions: Excursion[];
  locale: 'fr' | 'en';
  viewAllLabel: string;
  viewAllHref: string;
  cardLabels: {
    priceFrom: string;
    learnMore: string;
    bookNow: string;
  };
  maxItems?: number;
}

export default function ExcursionsPreviewSection({
  title,
  description,
  excursions,
  locale,
  viewAllLabel,
  viewAllHref,
  cardLabels,
  maxItems = 3,
}: ExcursionsPreviewSectionProps) {
  const displayedExcursions = excursions.slice(0, maxItems);

  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {title}
          </h2>
          <p className="text-lg text-neutral-gray leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedExcursions.map((excursion) => {
            const homeImage =
              excursion.id === 'excursion-2' ? '/images/home/paysage sud.jpg' : undefined;
            return (
              <ExcursionCard
                key={excursion.id}
                excursion={excursion}
                locale={locale}
                homeImage={homeImage}
                labels={cardLabels}
              />
            );
          })}
        </div>

        <div className="text-center">
          <CTAButton href={getLocalizedPath(viewAllHref, locale)} variant="primary">
            {viewAllLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
