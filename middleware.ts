import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware minimal : uniquement la racine `/`.
 * Matcher restreint pour limiter les risques sur l'Edge Runtime Vercel.
 * Les autres redirections sont dans vercel.json + next.config.mjs.
 */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/fr', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
