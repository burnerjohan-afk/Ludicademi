import Image from 'next/image';
import { getLocalizedPath } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';

interface FinalCtaSectionProps {
  locale: string;
  title: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  backgroundImageSrc?: string;
}

export default function FinalCtaSection({
  locale,
  title,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  backgroundImageSrc,
}: FinalCtaSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-accent-50 to-accent-100 relative overflow-hidden">
      {backgroundImageSrc && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={backgroundImageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-6 text-spacing-tight">
            {title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href={getLocalizedPath(primaryCtaHref, locale)} variant="primary">
              {primaryCtaLabel}
            </CTAButton>
            <CTAButton href={getLocalizedPath(secondaryCtaHref, locale)} variant="outline">
              {secondaryCtaLabel}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
