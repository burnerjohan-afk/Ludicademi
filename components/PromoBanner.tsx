'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const STORAGE_KEY = 'ludicademi-promo-dismissed';

interface PromoBannerProps {
  code?: string;
  message?: string;
}

export default function PromoBanner({ code = 'LUV2025', message }: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('common');

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  if (!isVisible) return null;

  const promoMessage = message || `Code promo: ${code} - Découvrez nos offres spéciales`;

  return (
    <div className="bg-accent-600 text-white py-3 relative">
      <div className="container mx-auto px-4 text-center pr-12">
        <p className="font-semibold text-sm">{promoMessage}</p>
      </div>
      <button
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-accent-700 rounded p-1 transition-colors"
        aria-label={t('close')}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
