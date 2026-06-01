import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalizedPath(path: string, locale: string): string {
  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (cleanPath === '/') {
    return `/${locale}${hash}`;
  }
  return `/${locale}${cleanPath}${hash}`;
}

