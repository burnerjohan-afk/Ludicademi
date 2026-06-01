import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';
import { getLocalizedPath } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';

interface BlogTeaserSectionProps {
  title: string;
  description: string;
  viewAllLabel: string;
  posts: BlogPost[];
  locale: 'fr' | 'en';
}

export default function BlogTeaserSection({
  title,
  description,
  viewAllLabel,
  posts,
  locale,
}: BlogTeaserSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {title}
          </h2>
          <p className="text-lg text-neutral-gray leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <Link href={getLocalizedPath(`/blog/${post.slug[locale]}`, locale)}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title[locale]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link href={getLocalizedPath(`/blog/${post.slug[locale]}`, locale)}>
                  <h3 className="text-lg font-display font-semibold text-neutral-dark hover:text-accent-600 transition-colors mb-2 line-clamp-2">
                    {post.title[locale]}
                  </h3>
                </Link>
                <p className="text-sm text-neutral-gray line-clamp-3 mb-4">
                  {post.excerpt[locale]}
                </p>
                <Link
                  href={getLocalizedPath(`/blog/${post.slug[locale]}`, locale)}
                  className="text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  {locale === 'fr' ? 'Lire l\'article →' : 'Read article →'}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <CTAButton href={getLocalizedPath('/blog', locale)} variant="outline">
            {viewAllLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
