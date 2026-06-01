import { getTranslations } from 'next-intl/server';
import { faqs } from '@/data/faq';
import FAQ from '@/components/FAQ';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: 'FAQ',
    description: 'Questions fréquemment posées',
  };
}

export default async function FAQPage() {
  return <FAQ faqs={faqs} />;
}

