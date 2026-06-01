import { NextRequest, NextResponse } from 'next/server';

const locales = ['fr', 'en'] as const;
const defaultLocale = 'fr';

type Locale = (typeof locales)[number];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase();
    if (preferred === 'en') return 'en';
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
