import { getAllBlogPosts } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/utils';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === 'fr' 
    ? 'Blog - LUDICADEMI | Articles sur la Martinique et l\'immersion culturelle'
    : 'Blog - LUDICADEMI | Articles about Martinique and cultural immersion';
  const description = locale === 'fr'
    ? 'Découvrez nos articles sur la Martinique, l\'immersion culturelle, les excursions authentiques et les séjours immersifs. Guide complet pour voyager autrement.'
    : 'Discover our articles about Martinique, cultural immersion, authentic excursions and immersive stays. Complete guide to travel differently.';
  
  return {
    title,
    description,
    keywords: locale === 'fr'
      ? 'blog martinique, immersion culturelle, excursions martinique, séjour immersif, voyage culturel martinique'
      : 'martinique blog, cultural immersion, martinique excursions, immersive stay, cultural travel martinique',
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
    },
  };
}

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const posts = getAllBlogPosts();
  const localeKey = locale as 'fr' | 'en';

  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-dark mb-5 text-spacing-tight">
            Blog
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Découvrez nos articles sur la Martinique, l'immersion culturelle et les voyages authentiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href={getLocalizedPath(`/blog/${post.slug[localeKey]}`, locale)}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title[localeKey]}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-primary-400 font-semibold">
                    {post.category[localeKey]}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">
                    {new Date(post.date).toLocaleDateString(localeKey === 'fr' ? 'fr-FR' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <Link href={getLocalizedPath(`/blog/${post.slug[localeKey]}`, locale)}>
                  <h2 className="text-2xl font-display font-semibold text-neutral-dark mb-3 hover:text-accent-400 transition-colors text-spacing-tight">
                    {post.title[localeKey]}
                  </h2>
                </Link>

                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt[localeKey]}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{post.author}</span>
                  <Link
                    href={getLocalizedPath(`/blog/${post.slug[localeKey]}`, locale)}
                    className="text-accent-400 hover:text-accent-500 font-semibold text-sm transition-colors"
                  >
                    Lire la suite →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

