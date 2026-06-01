'use client';

import { useTranslations, useLocale } from 'next-intl';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: {
    fr: string;
    en: string;
  };
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie D.',
    location: 'Paris, France',
    rating: 5,
    text: {
      fr: 'Une expérience incroyable ! J\'ai découvert la Martinique sous un angle totalement différent. Les guides sont passionnés et authentiques. Je recommande vivement.',
      en: 'An incredible experience! I discovered Martinique from a completely different angle. The guides are passionate and authentic. I highly recommend.',
    },
    date: '2024-03-15',
  },
  {
    id: '2',
    name: 'Jean-Pierre L.',
    location: 'Lyon, France',
    rating: 5,
    text: {
      fr: 'Séjour immersif de 5 jours qui a dépassé toutes mes attentes. L\'immersion culturelle est réelle et les cours de créole sont un vrai plus. Merci LUDICADEMI !',
      en: '5-day immersive stay that exceeded all my expectations. The cultural immersion is real and the Creole lessons are a real plus. Thank you LUDICADEMI!',
    },
    date: '2024-02-28',
  },
  {
    id: '3',
    name: 'Sophie M.',
    location: 'Montréal, Canada',
    rating: 5,
    text: {
      fr: 'Excursion parfaitement organisée, guide expert et rencontres authentiques avec la population locale. Une belle découverte de la culture martiniquaise.',
      en: 'Perfectly organized excursion, expert guide and authentic encounters with the local population. A beautiful discovery of Martinique culture.',
    },
    date: '2024-01-20',
  },
];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale() as 'fr' | 'en';

  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-premium transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text[locale]}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-neutral-dark mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date(testimonial.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

