import Image from 'next/image';
import { getLocalizedPath } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';

interface BooksTeaserSectionProps {
  locale: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function BooksTeaserSection({
  locale,
  title,
  imageSrc,
  imageAlt,
  description,
  ctaLabel,
  ctaHref,
}: BooksTeaserSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-lg text-neutral-gray leading-relaxed mb-8">{description}</p>
            <CTAButton href={getLocalizedPath(ctaHref, locale)} variant="outline">
              {ctaLabel}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
