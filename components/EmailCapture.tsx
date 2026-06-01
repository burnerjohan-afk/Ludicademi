'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function EmailCapture() {
  const t = useTranslations('emailCapture');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement email capture API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-spacing-tight">
            {t('title')}
          </h2>
          <p className="text-lg mb-8 leading-relaxed opacity-95">
            {t('subtitle')}
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  required
                  className="flex-1 px-5 py-3 rounded-lg text-neutral-dark focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? t('submitting') : t('submit')}
                </button>
              </div>
              <p className="text-sm mt-4 opacity-80">
                {t('privacy')}
              </p>
            </form>
          ) : (
            <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-lg font-semibold">{t('success')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

