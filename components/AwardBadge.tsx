'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/lib/utils';

export default function AwardBadge() {
  const locale = useLocale();

  return (
    <Link
      href={getLocalizedPath('/about#award', locale)}
      className="flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-md border border-accent-200 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <Image
        src="/images/awards.png"
        alt={locale === 'fr' ? 'Travel & Hospitality Award' : 'Travel & Hospitality Award'}
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
      <span className="text-xs font-semibold text-neutral-dark whitespace-nowrap">
        {locale === 'fr' ? 'Award Winner' : 'Award Winner'}
      </span>
    </Link>
  );
}

