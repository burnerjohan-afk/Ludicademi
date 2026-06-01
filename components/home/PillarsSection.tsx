import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/utils';

interface Pillar {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  slug: string;
}

interface PillarsSectionProps {
  locale: 'fr' | 'en';
  title: string;
  pillars: Pillar[];
  learnMoreLabel: string;
}

export default function PillarsSection({
  locale,
  title,
  pillars,
  learnMoreLabel,
}: PillarsSectionProps) {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={getLocalizedPath(`/pillars/${pillar.slug}`, locale)}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent-300 group cursor-pointer"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={pillar.imageSrc}
                  alt={pillar.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-dark mb-3 text-spacing-tight group-hover:text-accent-600 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-gray leading-relaxed">{pillar.description}</p>
              <div className="mt-4 text-accent-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {learnMoreLabel} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
