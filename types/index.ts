export interface Excursion {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  slug: {
    fr: string;
    en: string;
  };
  summary: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  duration: string; // Format: "1 jour" ou "Demi-journée"
  priceFrom: number;
  image: string;
  highlights: {
    fr: string[];
    en: string[];
  };
  program: {
    fr: string[];
    en: string[];
  };
  included: {
    fr: string[];
    en: string[];
  };
  notIncluded: {
    fr: string[];
    en: string[];
  };
  physicalLevel: {
    fr: string;
    en: string;
  };
  cancellationPolicy: {
    fr: string;
    en: string;
  };
  bookingUrl: string; // URL Regiondo
}

export interface Stay {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  slug: {
    fr: string;
    en: string;
  };
  summary: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  days: number;
  priceFrom: number;
  image: string;
  highlights: {
    fr: string[];
    en: string[];
  };
  program: {
    fr: string[];
    en: string[];
  };
  included: {
    fr: string[];
    en: string[];
  };
  notIncluded: {
    fr: string[];
    en: string[];
  };
  cancellationPolicy: {
    fr: string;
    en: string;
  };
  bookingUrl: string; // URL Regiondo
}

export interface FAQ {
  id: string;
  question: {
    fr: string;
    en: string;
  };
  answer: {
    fr: string;
    en: string;
  };
}

export interface BlogPost {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  slug: {
    fr: string;
    en: string;
  };
  excerpt: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  image: string;
  author: string;
  date: string;
  category: {
    fr: string;
    en: string;
  };
  seoKeywords: {
    fr: string[];
    en: string[];
  };
}

export interface Novel {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  image: string;
  summary: {
    fr: string;
    en: string;
  };
  purchaseUrl?: string;
}
