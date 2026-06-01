import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface HeroProps {
  image?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({
  image = '/images/hero-martinique.jpg',
  title,
  subtitle,
  ctaText,
  ctaHref,
}: HeroProps) {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  const heroTitle = title || t('title');
  const heroSubtitle = subtitle || t('subtitle');
  const heroCtaText = ctaText || t('cta');
  const heroCtaHref = ctaHref || `/${locale}`;

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-800/50 z-10" />
        <Image
          src={image}
          alt={heroTitle}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 container mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 drop-shadow-2xl text-spacing-tight">
          {heroTitle}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-lg font-light leading-relaxed">
          {heroSubtitle}
        </p>
        {heroCtaHref && (
          <Link
            href={heroCtaHref}
            className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 text-base"
          >
            {heroCtaText}
          </Link>
        )}
      </div>
    </section>
  );
}

