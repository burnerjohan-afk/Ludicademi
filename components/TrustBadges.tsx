'use client';

import { useTranslations } from 'next-intl';
import { AwardIcon, ExperienceIcon, UsersIcon, StarIcon } from './icons';

export default function TrustBadges() {
  const t = useTranslations('trust');

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Récompense */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-accent-50 rounded-lg">
              <AwardIcon className="w-7 h-7 text-accent-600" />
            </div>
            <div className="font-semibold text-base text-neutral-dark mb-1">
              {t('award')}
            </div>
            <div className="text-xs text-neutral-gray">
              Travel & Hospitality Award
            </div>
          </div>

          {/* Années d'expérience */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-accent-50 rounded-lg">
              <ExperienceIcon className="w-7 h-7 text-accent-600" />
            </div>
            <div className="font-semibold text-base text-neutral-dark mb-1">
              {t('experience')}
            </div>
            <div className="text-xs text-neutral-gray">
              {t('yearsExperience')}
            </div>
          </div>

          {/* Clients accompagnés */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-accent-50 rounded-lg">
              <UsersIcon className="w-7 h-7 text-accent-600" />
            </div>
            <div className="font-semibold text-base text-neutral-dark mb-1">
              {t('clients')}
            </div>
            <div className="text-xs text-neutral-gray">
              {t('clientsServed')}
            </div>
          </div>

          {/* Note moyenne */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-accent-50 rounded-lg">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </div>
            <div className="font-semibold text-base text-neutral-dark mb-1">
              {t('rating')}
            </div>
            <div className="text-xs text-neutral-gray">
              {t('basedOnReviews')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

