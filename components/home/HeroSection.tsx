import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/utils';

interface HeroSectionProps {
  locale: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  tertiaryCtaLabel?: string;
  tertiaryCtaHref?: string;
  backgroundImageSrc: string;
}

export default function HeroSection({
  locale,
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  tertiaryCtaLabel,
  tertiaryCtaHref,
  backgroundImageSrc,
}: HeroSectionProps) {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/50 z-10" />
        <Image
          src={backgroundImageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 text-center text-white px-4 container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 drop-shadow-2xl text-spacing-tight max-w-4xl mx-auto text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-2xl font-semibold leading-relaxed text-white bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <Link
            href={getLocalizedPath(primaryCtaHref, locale)}
            className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 text-base"
          >
            {primaryCtaLabel}
          </Link>
          <Link
            href={getLocalizedPath(secondaryCtaHref, locale)}
            className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 text-base"
          >
            {secondaryCtaLabel}
          </Link>
          {tertiaryCtaLabel && tertiaryCtaHref && (
            <Link
              href={getLocalizedPath(tertiaryCtaHref, locale)}
              className="inline-block text-white/90 hover:text-white font-semibold px-4 py-2 underline underline-offset-4 text-base"
            >
              {tertiaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
