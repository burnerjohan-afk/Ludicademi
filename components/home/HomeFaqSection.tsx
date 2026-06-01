import Link from 'next/link';
import { FAQ as FAQType } from '@/types';
import FAQ from '@/components/FAQ';
import { getLocalizedPath } from '@/lib/utils';

interface HomeFaqSectionProps {
  title: string;
  viewAllLabel: string;
  faqs: FAQType[];
  locale: 'fr' | 'en';
}

export default function HomeFaqSection({
  title,
  viewAllLabel,
  faqs,
  locale,
}: HomeFaqSectionProps) {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark text-spacing-tight">
          {title}
        </h2>
      </div>
      <FAQ faqs={faqs} limit={3} hideTitle />
      <p className="text-center mt-8">
        <Link
          href={getLocalizedPath('/faq', locale)}
          className="text-accent-600 font-semibold hover:text-accent-700 transition-colors"
        >
          {viewAllLabel} →
        </Link>
      </p>
      </div>
    </section>
  );
}
