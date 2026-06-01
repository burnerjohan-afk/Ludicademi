'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { FAQ as FAQType } from '@/types';

interface FAQProps {
  faqs: FAQType[];
  limit?: number;
  hideTitle?: boolean;
}

export default function FAQ({ faqs, limit, hideTitle = false }: FAQProps) {
  const locale = useLocale() as 'fr' | 'en';
  const [openId, setOpenId] = useState<string | null>(null);

  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const Wrapper = hideTitle ? 'div' : 'section';
  const wrapperClass = hideTitle ? '' : 'py-16 bg-neutral-light';

  return (
    <Wrapper className={wrapperClass}>
      <div className={hideTitle ? '' : 'container mx-auto px-4'}>
        {!hideTitle && (
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-neutral-dark text-spacing-tight">
            FAQ
          </h2>
        )}
        <div className="max-w-3xl mx-auto space-y-4">
          {displayedFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-dark pr-4">
                    {faq.question[locale]}
                  </span>
                  <svg
                    className={`w-5 h-5 text-accent-600 transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer[locale]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

