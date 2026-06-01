'use client';

import { getLocalizedPath } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';
import StayCard from '@/components/StayCard';
import CustomImmersionForm from '@/components/CustomImmersionForm';
import { Stay } from '@/types';

interface ImmersiveStaySectionProps {
  title: string;
  description: string;
  stays: Stay[];
  locale: 'fr' | 'en';
  viewAllLabel: string;
  viewAllHref: string;
  cardLabels: {
    priceFrom: string;
    learnMore: string;
    bookNow: string;
    days: string;
  };
}

export default function ImmersiveStaySection({
  title,
  description,
  stays,
  locale,
  viewAllLabel,
  viewAllHref,
  cardLabels,
}: ImmersiveStaySectionProps) {
  return (
    <section className="py-16 bg-white" id="sejours-immersifs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {title}
          </h2>
          <p className="text-lg text-neutral-gray leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} locale={locale} labels={cardLabels} />
          ))}

          <div className="h-full" id="sejour-sur-mesure">
            <CustomImmersionForm />
          </div>
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
