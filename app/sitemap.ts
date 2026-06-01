import { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { excursions } from '@/data/excursions';
import { stays } from '@/data/stays';
import { getAllBlogPosts } from '@/data/blog';
import { SITE_URL } from '@/lib/site';

const pillars = ['culture', 'histoire', 'patrimoine', 'langue'];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts();
  const entries: MetadataRoute.Sitemap = [];

  const staticPaths = [
    '',
    '/excursions',
    '/stays',
    '/novels',
    '/about',
    '/blog',
    '/faq',
    '/contact',
  ];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    }

    for (const excursion of excursions) {
      entries.push({
        url: `${SITE_URL}/${locale}/excursions/${excursion.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }

    for (const stay of stays) {
      entries.push({
        url: `${SITE_URL}/${locale}/stays/${stay.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }

    for (const post of posts) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${post.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }

    for (const slug of pillars) {
      entries.push({
        url: `${SITE_URL}/${locale}/pillars/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
