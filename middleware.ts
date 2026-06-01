import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'en'] as const;
const defaultLocale = 'fr';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_vercel')
  ) {
    return NextResponse.next();
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const suffix = pathname === '/' ? '' : pathname;
  return NextResponse.redirect(new URL(`/${defaultLocale}${suffix}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
