'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [defaultSubject, setDefaultSubject] = useState('');

  useEffect(() => {
    if (searchParams.get('subject') === 'quote') {
      setDefaultSubject('quote');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message envoyé avec succès !');
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-dark mb-5 text-spacing-tight">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">{t('subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
            {t('form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
            {t('form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
            {t('form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-neutral-dark mb-2">
            {t('form.subject')}
          </label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue={defaultSubject}
            key={defaultSubject}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent outline-none transition"
          >
            <option value="">{t('form.selectSubject')}</option>
            <option value="info">{t('form.subjectInfo')}</option>
            <option value="quote">{t('form.subjectQuote')}</option>
            <option value="booking">{t('form.subjectBooking')}</option>
            <option value="other">{t('form.subjectOther')}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-2">
            {t('form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition resize-none"
          />
        </div>

        <div className="flex items-start">
          <input type="checkbox" id="privacy" name="privacy" required className="mt-1 mr-2" />
          <label htmlFor="privacy" className="text-sm text-gray-700">
            {t('form.privacy')}
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t('form.sending') : t('form.send')}
        </button>
      </form>
    </div>
  );
}
