import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      { source: '/excursions', destination: '/fr/excursions', permanent: false },
      { source: '/excursions/:path*', destination: '/fr/excursions/:path*', permanent: false },
      { source: '/stays', destination: '/fr/stays', permanent: false },
      { source: '/stays/:path*', destination: '/fr/stays/:path*', permanent: false },
      { source: '/contact', destination: '/fr/contact', permanent: false },
      { source: '/blog', destination: '/fr/blog', permanent: false },
      { source: '/blog/:path*', destination: '/fr/blog/:path*', permanent: false },
      { source: '/about', destination: '/fr/about', permanent: false },
      { source: '/faq', destination: '/fr/faq', permanent: false },
      { source: '/novels', destination: '/fr/novels', permanent: false },
      { source: '/pillars/:path*', destination: '/fr/pillars/:path*', permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);

