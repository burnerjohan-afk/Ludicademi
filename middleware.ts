import createMiddleware from 'next-intl/middleware';

// Config inline : aucun import depuis i18n/ (compatible Edge Vercel)
export default createMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always',
});

export const config = {
  matcher: [
    '/',
    '/(fr|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
