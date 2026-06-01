import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Exclure API, assets Next/Vercel et fichiers statiques (favicon, images, etc.)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
