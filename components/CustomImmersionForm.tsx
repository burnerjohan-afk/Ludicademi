'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { getLocalizedPath } from '@/lib/utils';
import CTAButton from './CTAButton';
import Image from 'next/image';

interface ActivityOption {
  id: string;
  category: string;
  name: {
    fr: string;
    en: string;
  };
  icon: string;
}

const activityOptions: ActivityOption[] = [
  // Patrimoine
  { id: 'heritage-1', category: 'heritage', name: { fr: 'Architecture créole', en: 'Creole architecture' }, icon: '🏛️' },
  { id: 'heritage-2', category: 'heritage', name: { fr: 'Plantations historiques', en: 'Historic plantations' }, icon: '🌾' },
  { id: 'heritage-3', category: 'heritage', name: { fr: 'Sites historiques', en: 'Historical sites' }, icon: '🏰' },
  { id: 'heritage-4', category: 'heritage', name: { fr: 'Musées', en: 'Museums' }, icon: '🎨' },
  { id: 'heritage-5', category: 'heritage', name: { fr: 'Monuments', en: 'Monuments' }, icon: '🗿' },
  
  // Points de vue
  { id: 'viewpoint-1', category: 'viewpoint', name: { fr: 'Vue panoramique', en: 'Panoramic view' }, icon: '⛰️' },
  { id: 'viewpoint-2', category: 'viewpoint', name: { fr: 'Coucher de soleil', en: 'Sunset' }, icon: '🌅' },
  { id: 'viewpoint-3', category: 'viewpoint', name: { fr: 'Points de vue côtiers', en: 'Coastal viewpoints' }, icon: '🌊' },
  { id: 'viewpoint-4', category: 'viewpoint', name: { fr: 'Vue sur la montagne Pelée', en: 'Mount Pelée view' }, icon: '🏔️' },
  
  // Plages
  { id: 'beach-1', category: 'beach', name: { fr: 'Plages de sable blanc', en: 'White sand beaches' }, icon: '🏖️' },
  { id: 'beach-2', category: 'beach', name: { fr: 'Plages sauvages', en: 'Wild beaches' }, icon: '🏝️' },
  { id: 'beach-3', category: 'beach', name: { fr: 'Plages avec snorkeling', en: 'Beaches with snorkeling' }, icon: '🤿' },
  { id: 'beach-4', category: 'beach', name: { fr: 'Plages familiales', en: 'Family beaches' }, icon: '👨‍👩‍👧‍👦' },
  
  // Randonnées
  { id: 'hiking-1', category: 'hiking', name: { fr: 'Randonnée en forêt', en: 'Forest hiking' }, icon: '🌲' },
  { id: 'hiking-2', category: 'hiking', name: { fr: 'Randonnée côtière', en: 'Coastal hiking' }, icon: '🌊' },
  { id: 'hiking-3', category: 'hiking', name: { fr: 'Ascension de la montagne Pelée', en: 'Mount Pelée ascent' }, icon: '⛰️' },
  { id: 'hiking-4', category: 'hiking', name: { fr: 'Randonnée dans la mangrove', en: 'Mangrove hiking' }, icon: '🌿' },
  
  // Musées
  { id: 'museum-1', category: 'museum', name: { fr: 'Musée d\'histoire', en: 'History museum' }, icon: '📚' },
  { id: 'museum-2', category: 'museum', name: { fr: 'Musée d\'art', en: 'Art museum' }, icon: '🎨' },
  { id: 'museum-3', category: 'museum', name: { fr: 'Musée de la canne à sucre', en: 'Sugar cane museum' }, icon: '🌾' },
  { id: 'museum-4', category: 'museum', name: { fr: 'Musée du rhum', en: 'Rum museum' }, icon: '🥃' },
  
  // Activités
  { id: 'activity-1', category: 'activity', name: { fr: 'Cours de créole', en: 'Creole lessons' }, icon: '💬' },
  { id: 'activity-2', category: 'activity', name: { fr: 'Cuisine créole', en: 'Creole cooking' }, icon: '🍳' },
  { id: 'activity-3', category: 'activity', name: { fr: 'Danse traditionnelle', en: 'Traditional dance' }, icon: '💃' },
  { id: 'activity-4', category: 'activity', name: { fr: 'Musique traditionnelle', en: 'Traditional music' }, icon: '🥁' },
  { id: 'activity-5', category: 'activity', name: { fr: 'Rencontre avec les locaux', en: 'Meeting with locals' }, icon: '🤝' },
  { id: 'activity-6', category: 'activity', name: { fr: 'Marché local', en: 'Local market' }, icon: '🛒' },
  { id: 'activity-7', category: 'activity', name: { fr: 'Dégustation de rhum', en: 'Rum tasting' }, icon: '🥃' },
  { id: 'activity-8', category: 'activity', name: { fr: 'Atelier artisanat', en: 'Crafts workshop' }, icon: '🖐️' },
];

export default function CustomImmersionForm() {
  const locale = useLocale() as 'fr' | 'en';
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfDays: '',
    numberOfPeople: '',
    period: '',
    budget: '',
    additionalInfo: '',
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: 'heritage', name: { fr: 'Patrimoine', en: 'Heritage' } },
    { id: 'viewpoint', name: { fr: 'Points de vue', en: 'Viewpoints' } },
    { id: 'beach', name: { fr: 'Plages', en: 'Beaches' } },
    { id: 'hiking', name: { fr: 'Randonnées', en: 'Hiking' } },
    { id: 'museum', name: { fr: 'Musées', en: 'Museums' } },
    { id: 'activity', name: { fr: 'Activités', en: 'Activities' } },
  ];

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedActivityNames = selectedActivities
      .map((id) => {
        const activity = activityOptions.find((opt) => opt.id === id);
        return activity ? activity.name[locale] : '';
      })
      .filter(Boolean)
      .join(', ');

    const message = locale === 'fr'
      ? `Demande d'immersion sur mesure\n\nÉléments sélectionnés: ${selectedActivityNames}\nNombre de jours: ${formData.numberOfDays}\nNombre de personnes: ${formData.numberOfPeople}\nPériode: ${formData.period}\nBudget: ${formData.budget}€\n\nInformations complémentaires:\n${formData.additionalInfo}`
      : `Custom immersion request\n\nSelected items: ${selectedActivityNames}\nNumber of days: ${formData.numberOfDays}\nNumber of people: ${formData.numberOfPeople}\nPeriod: ${formData.period}\nBudget: ${formData.budget}€\n\nAdditional information:\n${formData.additionalInfo}`;

    const contactUrl = getLocalizedPath('/contact', locale) + 
      `?subject=${encodeURIComponent(locale === 'fr' ? 'Immersion sur mesure' : 'Custom immersion')}` +
      `&name=${encodeURIComponent(formData.name)}` +
      `&email=${encodeURIComponent(formData.email)}` +
      `&phone=${encodeURIComponent(formData.phone)}` +
      `&message=${encodeURIComponent(message)}`;
    
    window.location.href = contactUrl;
  };

  if (!isExpanded) {
    return (
      <div className="h-full flex flex-col relative bg-gradient-to-br from-accent-50 via-white to-primary-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-200/20 rounded-full blur-3xl -ml-24 -mb-24" />
        
        {/* Image en haut comme les autres cartes */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <Image
            src="/images/home/immersion.jpg"
            alt={locale === 'fr' ? 'Séjour sur mesure' : 'Custom stay'}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {/* Contenu */}
        <div className="relative z-10 p-6 flex flex-col flex-grow">
          <div className="flex-1">
            <h2 className="text-xl font-display font-semibold text-neutral-dark mb-3 text-spacing-tight">
              {locale === 'fr' ? 'Créez votre séjour sur mesure' : 'Create your custom stay'}
            </h2>
            <p className="text-gray-700 mb-5 line-clamp-2 leading-relaxed">
              {locale === 'fr'
                ? 'Personnalisez votre expérience en choisissant les éléments qui vous intéressent : patrimoine, plages, randonnées, musées, activités...'
                : 'Customize your experience by choosing the elements that interest you: heritage, beaches, hiking, museums, activities...'}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-accent-100 rounded-full text-xs font-semibold text-accent-700">
                🏛️ {locale === 'fr' ? 'Patrimoine' : 'Heritage'}
              </span>
              <span className="px-3 py-1 bg-accent-100 rounded-full text-xs font-semibold text-accent-700">
                🏖️ {locale === 'fr' ? 'Plages' : 'Beaches'}
              </span>
              <span className="px-3 py-1 bg-accent-100 rounded-full text-xs font-semibold text-accent-700">
                ⛰️ {locale === 'fr' ? 'Randonnées' : 'Hiking'}
              </span>
              <span className="px-3 py-1 bg-accent-100 rounded-full text-xs font-semibold text-accent-700">
                🎨 {locale === 'fr' ? 'Activités' : 'Activities'}
              </span>
            </div>
          </div>
          
          <div className="flex gap-3 mt-auto">
            <CTAButton
              type="button"
              onClick={() => setIsExpanded(true)}
              variant="primary"
              className="flex-1 text-center"
            >
              {locale === 'fr' ? 'Commencer' : 'Get started'}
            </CTAButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark text-spacing-tight mb-2">
            {locale === 'fr' ? 'Séjour sur mesure' : 'Custom stay'}
          </h2>
          <p className="text-neutral-gray text-sm">
            {locale === 'fr' ? 'Personnalisez chaque détail de votre expérience' : 'Customize every detail of your experience'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="text-gray-400 hover:text-gray-600 text-3xl hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
          aria-label={locale === 'fr' ? 'Fermer' : 'Close'}
        >
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Activity Selection */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-neutral-dark text-spacing-tight">
              {locale === 'fr' ? 'Sélectionnez vos centres d\'intérêt' : 'Select your interests'}
            </h3>
          </div>
          
          {categories.map((category, categoryIndex) => {
            const categoryActivities = activityOptions.filter(
              (opt) => opt.category === category.id
            );
            if (categoryActivities.length === 0) return null;

            return (
              <div key={category.id} className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="text-lg font-bold text-neutral-dark">
                    {category.name[locale]}
                  </h4>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {categoryActivities.length}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {categoryActivities.map((activity) => {
                    const isSelected = selectedActivities.includes(activity.id);
                    return (
                      <button
                        key={activity.id}
                        type="button"
                        onClick={() => toggleActivity(activity.id)}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 text-left overflow-hidden ${
                          isSelected
                            ? 'border-accent-600 bg-gradient-to-br from-accent-50 to-accent-100 text-accent-800 shadow-md scale-105'
                            : 'border-gray-200 bg-white hover:border-accent-400 hover:bg-accent-50/50 text-gray-700 hover:shadow-md hover:scale-[1.02]'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-accent-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                            {activity.icon}
                          </span>
                          <span className="text-sm font-semibold">{activity.name[locale]}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {selectedActivities.length > 0 && (
            <div className="mt-6 p-5 bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl border-2 border-accent-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-accent-800 font-bold text-lg">
                      {selectedActivities.length} {locale === 'fr' ? 'élément(s) sélectionné(s)' : 'item(s) selected'}
                    </p>
                    <p className="text-accent-700 text-sm">
                      {locale === 'fr' ? 'Continuez pour compléter votre demande' : 'Continue to complete your request'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Form Details */}
        <div className="border-t-2 border-gray-200 pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-neutral-dark text-spacing-tight">
              {locale === 'fr' ? 'Vos informations' : 'Your information'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                {locale === 'fr' ? 'Nom complet' : 'Full name'} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-600 focus:border-accent-600 transition-all duration-200 hover:border-gray-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                {locale === 'fr' ? 'Email' : 'Email'} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-600 focus:border-accent-600 transition-all duration-200 hover:border-gray-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                {locale === 'fr' ? 'Téléphone' : 'Phone'}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-600 focus:border-accent-600 transition-all duration-200 hover:border-gray-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                {locale === 'fr' ? 'Nombre de jours' : 'Number of days'}
              </label>
              <input
                type="number"
                min="1"
                value={formData.numberOfDays}
                onChange={(e) => setFormData({ ...formData, numberOfDays: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-600 focus:border-accent-600 transition-all duration-200 hover:border-gray-300"
                placeholder={locale === 'fr' ? 'Ex: 5' : 'Ex: 5'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                {locale === 'fr' ? 'Nombre de personnes' : 'Number of people'}
              </label>
              <input
                type="number"
                min="1"
                value={formData.numberOfPeople}
                onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-600 focus:border-accent-600 transition-all duration-200 hover:border-gray-300"
                placeholder={locale === 'fr' ? 'Ex: 2' : 'Ex: 2'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                {locale === 'fr' ? 'Période souhaitée' : 'Desired period'}
              </label>
              <input
                type="text"
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-600 focus:border-accent-600 transition-all duration-200 hover:border-gray-300"
                placeholder={locale === 'fr' ? 'Ex: Janvier 2024, ou dates précises' : 'Ex: January 2024, or specific dates'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                {locale === 'fr' ? 'Budget approximatif (€)' : 'Approximate budget (€)'}
              </label>
              <input
                type="number"
                min="0"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-600 focus:border-accent-600 transition-all duration-200 hover:border-gray-300"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-semibold text-neutral-dark mb-2">
              {locale === 'fr' ? 'Informations complémentaires' : 'Additional information'}
            </label>
            <textarea
              rows={4}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-600 focus:border-accent-600 transition-all duration-200 hover:border-gray-300 resize-none"
              placeholder={locale === 'fr' ? 'Dites-nous en plus sur vos envies, vos préférences, vos attentes...' : 'Tell us more about your desires, preferences, expectations...'}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-gray-200">
          <CTAButton
            type="submit"
            variant="primary"
            className="flex-1 text-lg py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {locale === 'fr' ? 'Demander un devis personnalisé' : 'Request a personalized quote'}
          </CTAButton>
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold"
          >
            {locale === 'fr' ? 'Annuler' : 'Cancel'}
          </button>
        </div>
      </form>
    </div>
  );
}

