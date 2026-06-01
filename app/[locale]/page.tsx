import { getTranslations, setRequestLocale } from 'next-intl/server';
import { excursions } from '@/data/excursions';
import { stays } from '@/data/stays';
import { faqs } from '@/data/faq';
import { getAllBlogPosts } from '@/data/blog';
import HeroSection from '@/components/home/HeroSection';
import ImmersionGallery from '@/components/home/ImmersionGallery';
import ExcursionsPreviewSection from '@/components/home/ExcursionsPreviewSection';
import ImmersiveStaySection from '@/components/home/ImmersiveStaySection';
import PillarsSection from '@/components/home/PillarsSection';
import BooksTeaserSection from '@/components/home/BooksTeaserSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';
import VideoSection from '@/components/home/VideoSection';
import JourneySection from '@/components/home/JourneySection';
import BlogTeaserSection from '@/components/home/BlogTeaserSection';
import HomeFaqSection from '@/components/home/HomeFaqSection';
import JsonLd from '@/components/JsonLd';
import { organizationJsonLd } from '@/lib/json-ld';
import { SITE_URL } from '@/lib/site';

const testimonialsData = [
  {
    id: '1',
    name: 'Marie D.',
    location: 'Paris, France',
    rating: 5,
    text: {
      fr: "Une expérience incroyable ! J'ai découvert la Martinique sous un angle totalement différent. Les guides sont passionnés et authentiques. Je recommande vivement.",
      en: 'An incredible experience! I discovered Martinique from a completely different angle. The guides are passionate and authentic. I highly recommend.',
    },
    imageSrc: '/images/home/temoignage-voyageur-1.jpg',
  },
  {
    id: '2',
    name: 'Jean-Pierre L.',
    location: 'Lyon, France',
    rating: 5,
    text: {
      fr: "Séjour immersif de 5 jours qui a dépassé toutes mes attentes. L'immersion culturelle est réelle et les cours de créole sont un vrai plus. Merci LUDICADEMI !",
      en: '5-day immersive stay that exceeded all my expectations. The cultural immersion is real and the Creole lessons are a real plus. Thank you LUDICADEMI!',
    },
    imageSrc: '/images/home/temoignage-voyageur-2.jpg',
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
    imageSrc: '/images/home/temoignage-voyageur-3.jpg',
  },
];

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const title =
    locale === 'fr'
      ? 'LUDICADEMI | Excursions et Séjours Immersifs en Martinique - Immersion Culturelle'
      : 'LUDICADEMI | Excursions and Immersive Stays in Martinique - Cultural Immersion';
  const description =
    locale === 'fr'
      ? 'Découvrez la Martinique autrement avec LUDICADEMI. Excursions authentiques et séjours immersifs pour vivre la culture caribéenne. Récompensé Travel & Hospitality Award.'
      : 'Discover Martinique differently with LUDICADEMI. Authentic excursions and immersive stays to experience Caribbean culture. Awarded Travel & Hospitality Award.';

  return {
    title,
    description,
    keywords:
      locale === 'fr'
        ? 'excursions martinique, séjour immersif martinique, immersion culturelle, voyage culturel martinique, immersion linguistique martinique'
        : 'martinique excursions, immersive stay martinique, cultural immersion, cultural travel martinique, linguistic immersion martinique',
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      images: [{ url: `${SITE_URL}/images/couchédesoleil2.jpg`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        fr: `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`,
      },
    },
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');
  const tExcursions = await getTranslations('excursions');
  const tStays = await getTranslations('stays');
  const localeKey = locale as 'fr' | 'en';

  const cardLabelsExcursions = {
    priceFrom: tExcursions('priceFrom'),
    learnMore: tCommon('learnMore'),
    bookNow: tCommon('bookNow'),
  };

  const cardLabelsStays = {
    priceFrom: tStays('priceFrom'),
    learnMore: tCommon('learnMore'),
    bookNow: tCommon('bookNow'),
    days: tStays('days'),
  };

  const heroData = {
    locale,
    title:
      locale === 'fr'
        ? 'Séjours immersifs et excursions en Martinique'
        : 'Immersive stays and excursions in Martinique',
    subtitle:
      locale === 'fr'
        ? "Découvrez la culture, l'histoire et le patrimoine martiniquais à travers des expériences authentiques et des rencontres inoubliables"
        : "Discover Martinique's culture, history and heritage through authentic experiences and unforgettable encounters",
    primaryCtaLabel: locale === 'fr' ? 'Découvrir les séjours immersifs' : 'Discover immersive stays',
    primaryCtaHref: '/#sejours-immersifs',
    secondaryCtaLabel: locale === 'fr' ? 'Voir les excursions' : 'View excursions',
    secondaryCtaHref: '/excursions',
    tertiaryCtaLabel: t('hero.customStayCta'),
    tertiaryCtaHref: '/#sejour-sur-mesure',
    backgroundImageSrc: '/images/couchédesoleil2.jpg',
  };

  const immersionImages = [
    {
      src: '/images/home/danse.jpeg',
      alt: locale === 'fr' ? 'Danse traditionnelle martiniquaise' : 'Traditional Martinique dance',
      legend: locale === 'fr' ? 'Traditions' : 'Traditions',
    },
    {
      src: '/images/home/grandanse.jpg',
      alt: locale === 'fr' ? 'Grande danse et culture' : 'Great dance and culture',
      legend: locale === 'fr' ? 'Culture' : 'Culture',
    },
    {
      src: '/images/home/cathédrale.jpg',
      alt: locale === 'fr' ? 'Cathédrale et patrimoine' : 'Cathedral and heritage',
      legend: locale === 'fr' ? 'Patrimoine' : 'Heritage',
    },
    {
      src: '/images/home/baie.jpg',
      alt: locale === 'fr' ? 'Baie de Martinique' : 'Martinique bay',
      legend: locale === 'fr' ? 'Nature' : 'Nature',
    },
  ];

  const pillars = [
    {
      imageSrc: '/images/home/danse.jpeg',
      imageAlt: locale === 'fr' ? 'Culture martiniquaise' : 'Martinique culture',
      title: locale === 'fr' ? 'Culture' : 'Culture',
      description:
        locale === 'fr'
          ? "Plongez dans les traditions, les arts et les coutumes qui font l'identité unique de la Martinique"
          : "Dive into the traditions, arts and customs that make Martinique's unique identity",
      slug: 'culture',
    },
    {
      imageSrc: '/images/home/esclave.jpg',
      imageAlt: locale === 'fr' ? 'Histoire de la Martinique' : 'Martinique history',
      title: locale === 'fr' ? 'Histoire' : 'History',
      description:
        locale === 'fr'
          ? "Découvrez l'histoire riche et complexe de l'île, de la période coloniale à aujourd'hui"
          : 'Discover the rich and complex history of the island, from the colonial period to today',
      slug: 'histoire',
    },
    {
      imageSrc: '/images/home/cathédrale.jpg',
      imageAlt: locale === 'fr' ? 'Patrimoine martiniquais' : 'Martinique heritage',
      title: locale === 'fr' ? 'Patrimoine' : 'Heritage',
      description:
        locale === 'fr'
          ? "Explorez les sites historiques, l'architecture créole et les lieux emblématiques"
          : 'Explore historical sites, Creole architecture and emblematic places',
      slug: 'patrimoine',
    },
    {
      imageSrc: '/images/home/bibliotheque.jpeg',
      imageAlt: locale === 'fr' ? 'Langue créole' : 'Creole language',
      title: locale === 'fr' ? 'Langue' : 'Language',
      description:
        locale === 'fr'
          ? 'Apprenez le créole martiniquais et communiquez avec les habitants dans leur langue'
          : 'Learn Martinique Creole and communicate with the inhabitants in their language',
      slug: 'langue',
    },
  ];

  const journeySteps = [
    {
      label: t('journey.excursion.cta'),
      title: t('journey.excursion.title'),
      description: t('journey.excursion.description'),
      href: '/excursions',
      duration: t('journey.excursion.duration'),
    },
    {
      label: t('journey.stay.cta'),
      title: t('journey.stay.title'),
      description: t('journey.stay.description'),
      href: '/stays',
      duration: t('journey.stay.duration'),
    },
    {
      label: t('journey.custom.cta'),
      title: t('journey.custom.title'),
      description: t('journey.custom.description'),
      href: '/#sejour-sur-mesure',
      duration: t('journey.custom.duration'),
    },
  ];

  const blogPosts = getAllBlogPosts().slice(0, 3);

  const testimonials = testimonialsData.map((item) => ({
    ...item,
    text: item.text[localeKey],
  }));

  return (
    <>
      <JsonLd data={organizationJsonLd(localeKey)} />

      <HeroSection {...heroData} />

      <JourneySection
        title={t('journey.title')}
        description={t('journey.description')}
        steps={journeySteps}
        locale={localeKey}
      />

      <VideoSection
        videoSrc="/presmartinique.mp4"
        posterSrc="/images/home/paysage sud.jpg"
        title={locale === 'fr' ? 'Découvrez la Martinique en vidéo' : 'Discover Martinique in video'}
        description={
          locale === 'fr'
            ? "Plongez dans l'atmosphère unique de la Martinique à travers cette vidéo immersive"
            : 'Dive into the unique atmosphere of Martinique through this immersive video'
        }
        playLabel={t('video.play')}
      />

      <ImmersionGallery
        title={
          locale === 'fr'
            ? 'Une immersion qui va bien au-delà de la plage'
            : 'An immersion that goes well beyond the beach'
        }
        description={
          locale === 'fr'
            ? "Notre approche vous plonge dans la culture, l'histoire, le patrimoine et la langue martiniquaise, bien au-delà des clichés touristiques"
            : 'Our approach immerses you in Martinique culture, history, heritage and language, well beyond tourist clichés'
        }
        images={immersionImages}
      />

      <ExcursionsPreviewSection
        title={locale === 'fr' ? 'Excursions en Martinique' : 'Excursions in Martinique'}
        description={
          locale === 'fr'
            ? 'Découvrez la Martinique à travers nos excursions guidées, de la nature préservée aux sites historiques'
            : 'Discover Martinique through our guided excursions, from preserved nature to historical sites'
        }
        viewAllLabel={locale === 'fr' ? 'Voir toutes les excursions' : 'View all excursions'}
        viewAllHref="/excursions"
        excursions={excursions}
        locale={localeKey}
        cardLabels={cardLabelsExcursions}
        maxItems={3}
      />

      <ImmersiveStaySection
        title={locale === 'fr' ? 'Séjours immersifs 2 à 8 jours' : 'Immersive stays 2 to 8 days'}
        description={
          locale === 'fr'
            ? 'Vivez une expérience complète de la culture martiniquaise sur plusieurs jours. Nos séjours immersifs combinent excursions guidées, rencontres avec la communauté locale, cours de créole et découverte approfondie du patrimoine.'
            : 'Experience a complete Martinique culture experience over several days. Our immersive stays combine guided excursions, encounters with the local community, Creole lessons and in-depth discovery of heritage.'
        }
        stays={stays}
        locale={localeKey}
        viewAllLabel={locale === 'fr' ? 'Voir tous les séjours immersifs' : 'View all immersive stays'}
        viewAllHref="/stays"
        cardLabels={cardLabelsStays}
      />

      <PillarsSection
        locale={localeKey}
        title={locale === 'fr' ? "Les piliers de l'immersion LUDICADEMÍ" : 'The pillars of LUDICADEMÍ immersion'}
        pillars={pillars}
        learnMoreLabel={tCommon('learnMore')}
      />

      <BooksTeaserSection
        locale={locale}
        title={locale === 'fr' ? 'Une immersion qui continue dans les romans' : 'An immersion that continues in novels'}
        description={
          locale === 'fr'
            ? 'Prolongez votre expérience martiniquaise avec les romans de PHAYNE ANTON. Chaque histoire vous transporte au cœur des Caraïbes, mêlant fiction et réalité culturelle pour une immersion littéraire complète.'
            : 'Extend your Martinique experience with novels by PHAYNE ANTON. Each story transports you to the heart of the Caribbean, blending fiction and cultural reality for a complete literary immersion.'
        }
        ctaLabel={locale === 'fr' ? 'Découvrir les romans' : 'Discover novels'}
        ctaHref="/novels"
        imageSrc="/images/home/bibliotheque2.jpeg"
        imageAlt={locale === 'fr' ? 'Bibliothèque et romans caribéens' : 'Library and Caribbean novels'}
      />

      <BlogTeaserSection
        title={t('blogTeaser.title')}
        description={t('blogTeaser.description')}
        viewAllLabel={t('blogTeaser.viewAll')}
        posts={blogPosts}
        locale={localeKey}
      />

      <TestimonialsSection
        title={locale === 'fr' ? "Ils ont vécu l'immersion LUDICADEMÍ" : 'They experienced LUDICADEMÍ immersion'}
        proofText={
          locale === 'fr'
            ? '+500 voyageurs accompagnés • Lauréat Travel & Hospitality Award 2022'
            : '+500 travelers accompanied • Travel & Hospitality Award Winner 2022'
        }
        testimonials={testimonials}
      />

      <HomeFaqSection
        title={t('faqTeaser.title')}
        viewAllLabel={t('faqTeaser.viewAll')}
        faqs={faqs}
        locale={localeKey}
      />

      <FinalCtaSection
        locale={locale}
        title={locale === 'fr' ? 'Prêt à vivre une immersion en Martinique ?' : 'Ready to experience an immersion in Martinique?'}
        primaryCtaLabel={t('finalCta.contact')}
        primaryCtaHref="/contact"
        secondaryCtaLabel={t('finalCta.quote')}
        secondaryCtaHref="/contact?subject=quote"
        backgroundImageSrc="/images/home/baie.jpg"
      />
    </>
  );
}
