import { locales, type Locale } from '@/i18n';

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  if (pathWithoutLocale === '/') {
    return `/${targetLocale}`;
  }
  return `/${targetLocale}${pathWithoutLocale}`;
}
