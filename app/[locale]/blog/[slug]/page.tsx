import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  const params: { slug: string; locale: string }[] = [];
  
  posts.forEach((post) => {
    params.push({ slug: post.slug.fr, locale: 'fr' });
    params.push({ slug: post.slug.en, locale: 'en' });
  });
  
  return params;
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const post = getBlogPostBySlug(slug, locale as 'fr' | 'en');
  
  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title[locale as 'fr' | 'en']} - LUDICADEMI Blog`,
    description: post.excerpt[locale as 'fr' | 'en'],
    keywords: post.seoKeywords[locale as 'fr' | 'en'].join(', '),
    openGraph: {
      title: post.title[locale as 'fr' | 'en'],
      description: post.excerpt[locale as 'fr' | 'en'],
      images: [post.image],
      locale,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const post = getBlogPostBySlug(slug, locale as 'fr' | 'en');

  if (!post) {
    notFound();
  }

  const localeKey = locale as 'fr' | 'en';
  const content = post.content[localeKey];
  const lines = content.split('\n');

  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href={getLocalizedPath('/blog', locale)}
            className="inline-flex items-center text-accent-400 hover:text-accent-500 mb-8 transition-colors"
          >
            ← Retour au blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-dark mb-6 text-spacing-tight">
              {post.title[localeKey]}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>Par {post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title[localeKey]}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <article className="bg-white rounded-2xl shadow-soft p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              {lines.map((line, index) => {
                if (line.startsWith('# ')) {
                  return (
                    <h2 key={index} className="text-3xl font-display font-semibold text-neutral-dark mt-8 mb-4 text-spacing-tight">
                      {line.substring(2)}
                    </h2>
                  );
                }
                if (line.startsWith('## ')) {
                  return (
                    <h3 key={index} className="text-2xl font-display font-semibold text-neutral-dark mt-6 mb-3 text-spacing-tight">
                      {line.substring(3)}
                    </h3>
                  );
                }
                if (line.trim() === '') {
                  return <br key={index} />;
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">
                    {line}
                  </p>
                );
              })}
            </div>
          </article>

          {/* CTA Section */}
          <div className="bg-primary-400 rounded-2xl p-8 text-center text-white mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-spacing-tight">
              Prêt à vivre l'expérience ?
            </h2>
            <p className="text-lg mb-6">
              Découvrez nos excursions et séjours immersifs en Martinique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href={getLocalizedPath('/excursions', locale)}
                variant="secondary"
                className="bg-white text-primary-400 hover:bg-gray-100"
              >
                Voir les excursions
              </CTAButton>
              <CTAButton
                href={getLocalizedPath('/stays', locale)}
                variant="secondary"
                className="bg-white text-primary-400 hover:bg-gray-100"
              >
                Voir les séjours
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

