'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { type Locale } from '@/lib/locales';
import { switchLocalePath } from '@/lib/locale-path';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const targetLocale: Locale = locale === 'fr' ? 'en' : 'fr';
  const href = switchLocalePath(pathname, targetLocale);

  return (
    <Link
      href={href}
      className="text-neutral-gray hover:text-accent-600 transition-colors text-sm font-semibold"
      hrefLang={targetLocale}
    >
      {targetLocale.toUpperCase()}
    </Link>
  );
}
