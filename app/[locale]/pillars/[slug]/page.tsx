import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';

interface PillarData {
  slug: {
    fr: string;
    en: string;
  };
  title: {
    fr: string;
    en: string;
  };
  imageSrc: string;
  imageAlt: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  content: {
    fr: string[];
    en: string[];
  };
  highlights: {
    fr: string[];
    en: string[];
  };
}

const pillarsData: Record<string, PillarData> = {
  culture: {
    slug: { fr: 'culture', en: 'culture' },
    title: { fr: 'Culture', en: 'Culture' },
    imageSrc: '/images/home/danse.jpeg',
    imageAlt: { fr: 'Culture martiniquaise', en: 'Martinique culture' },
    description: {
      fr: 'Plongez dans les traditions, les arts et les coutumes qui font l\'identité unique de la Martinique',
      en: 'Dive into the traditions, arts and customs that make Martinique\'s unique identity',
    },
    content: {
      fr: [
        'La culture martiniquaise est un mélange fascinant d\'influences africaines, européennes, indiennes et amérindiennes. Cette richesse se manifeste dans tous les aspects de la vie quotidienne : la musique, la danse, la cuisine, les fêtes traditionnelles et les croyances.',
        'Lors de nos séjours immersifs, vous découvrirez les danses traditionnelles comme le bèlè, le zouk et la biguine. Vous participerez à des ateliers de musique avec des instruments typiques comme le tambour ka, le ti-bwa et le chacha.',
        'La gastronomie créole est un pilier de la culture martiniquaise. Vous apprendrez à préparer des plats emblématiques comme le colombo, l\'accras de morue, le boudin créole et les desserts traditionnels. Chaque recette raconte une histoire, chaque épice transporte une saveur unique.',
        'Les fêtes et célébrations sont des moments privilégiés pour comprendre la culture locale. Le carnaval, les fêtes patronales, les veillées mortuaires (veillées) sont autant d\'occasions de partager et de vivre la culture martiniquaise dans toute son authenticité.',
      ],
      en: [
        'Martinique culture is a fascinating blend of African, European, Indian and Amerindian influences. This richness is manifested in all aspects of daily life: music, dance, cuisine, traditional festivals and beliefs.',
        'During our immersive stays, you will discover traditional dances such as bèlè, zouk and biguine. You will participate in music workshops with typical instruments such as the ka drum, ti-bwa and chacha.',
        'Creole gastronomy is a pillar of Martinique culture. You will learn to prepare emblematic dishes such as colombo, cod accras, Creole boudin and traditional desserts. Each recipe tells a story, each spice carries a unique flavor.',
        'Festivals and celebrations are privileged moments to understand local culture. Carnival, patronal festivals, and mortuary vigils (veillées) are all opportunities to share and experience Martinique culture in all its authenticity.',
      ],
    },
    highlights: {
      fr: [
        'Ateliers de danse traditionnelle (bèlè, zouk)',
        'Initiation aux instruments de musique locaux',
        'Cours de cuisine créole authentique',
        'Participation aux fêtes et célébrations locales',
        'Rencontres avec des artistes et artisans',
      ],
      en: [
        'Traditional dance workshops (bèlè, zouk)',
        'Introduction to local musical instruments',
        'Authentic Creole cooking classes',
        'Participation in local festivals and celebrations',
        'Meetings with artists and craftsmen',
      ],
    },
  },
  histoire: {
    slug: { fr: 'histoire', en: 'histoire' },
    title: { fr: 'Histoire', en: 'History' },
    imageSrc: '/images/home/esclave.jpg',
    imageAlt: { fr: 'Histoire de la Martinique', en: 'Martinique history' },
    description: {
      fr: 'Découvrez l\'histoire riche et complexe de l\'île, de la période coloniale à aujourd\'hui',
      en: 'Discover the rich and complex history of the island, from the colonial period to today',
    },
    content: {
      fr: [
        'L\'histoire de la Martinique est marquée par des périodes complexes et souvent douloureuses. De l\'arrivée des premiers colons français en 1635 à l\'abolition de l\'esclavage en 1848, l\'île a connu des transformations profondes qui ont façonné son identité actuelle.',
        'Les plantations de canne à sucre, de café et de cacao ont été le cœur de l\'économie coloniale. Vous découvrirez les habitations historiques, leurs architectures caractéristiques et les vestiges de cette époque qui témoignent d\'un passé à la fois glorieux et tragique.',
        'L\'esclavage et son abolition ont laissé des traces indélébiles dans la société martiniquaise. Les sites mémoriels, les musées et les lieux de mémoire permettent de comprendre cette période sombre et de rendre hommage aux combats pour la liberté.',
        'L\'histoire contemporaine de la Martinique, de la départementalisation en 1946 à aujourd\'hui, révèle une île en constante évolution, fière de son identité créole et de son appartenance à la France et aux Caraïbes.',
      ],
      en: [
        'The history of Martinique is marked by complex and often painful periods. From the arrival of the first French colonists in 1635 to the abolition of slavery in 1848, the island has undergone profound transformations that have shaped its current identity.',
        'Sugar cane, coffee and cocoa plantations were the heart of the colonial economy. You will discover historic estates, their characteristic architecture and the remains of this era that bear witness to a past that is both glorious and tragic.',
        'Slavery and its abolition have left indelible marks on Martinique society. Memorial sites, museums and places of memory allow us to understand this dark period and pay tribute to the struggles for freedom.',
        'The contemporary history of Martinique, from departmentalization in 1946 to today, reveals an island in constant evolution, proud of its Creole identity and its belonging to both France and the Caribbean.',
      ],
    },
    highlights: {
      fr: [
        'Visite de plantations historiques',
        'Découverte des sites mémoriels de l\'esclavage',
        'Musées d\'histoire et d\'ethnographie',
        'Rencontres avec des historiens locaux',
        'Exploration de l\'architecture coloniale',
      ],
      en: [
        'Visit to historic plantations',
        'Discovery of slavery memorial sites',
        'History and ethnography museums',
        'Meetings with local historians',
        'Exploration of colonial architecture',
      ],
    },
  },
  patrimoine: {
    slug: { fr: 'patrimoine', en: 'patrimoine' },
    title: { fr: 'Patrimoine', en: 'Heritage' },
    imageSrc: '/images/home/cathédrale.jpg',
    imageAlt: { fr: 'Patrimoine martiniquais', en: 'Martinique heritage' },
    description: {
      fr: 'Explorez les sites historiques, l\'architecture créole et les lieux emblématiques',
      en: 'Explore historical sites, Creole architecture and emblematic places',
    },
    content: {
      fr: [
        'Le patrimoine martiniquais est d\'une richesse exceptionnelle, alliant architecture créole, sites naturels classés et monuments historiques. Chaque édifice, chaque lieu raconte une partie de l\'histoire de l\'île.',
        'L\'architecture créole se caractérise par ses maisons colorées aux toits de tôle, ses balcons en dentelle de fer forgé, ses cases traditionnelles et ses grandes demeures coloniales. Fort-de-France, Saint-Pierre et les villages de l\'intérieur offrent des exemples remarquables de ce patrimoine architectural.',
        'Les sites naturels classés, comme la Montagne Pelée, les pitons du Carbet, les mangroves et les plages préservées, font partie intégrante du patrimoine martiniquais. Ces espaces naturels exceptionnels sont protégés et valorisés pour les générations futures.',
        'Les monuments historiques, églises, cathédrales, forts et musées témoignent de l\'évolution de l\'île à travers les siècles. La Savane des Esclaves, le musée de la Pagerie, le fort Desaix sont autant de lieux à découvrir pour comprendre le patrimoine martiniquais.',
      ],
      en: [
        'Martinique heritage is exceptionally rich, combining Creole architecture, classified natural sites and historic monuments. Each building, each place tells part of the island\'s history.',
        'Creole architecture is characterized by colorful houses with sheet metal roofs, lace balconies in wrought iron, traditional cases and large colonial mansions. Fort-de-France, Saint-Pierre and the interior villages offer remarkable examples of this architectural heritage.',
        'Classified natural sites, such as Montagne Pelée, the Carbet peaks, mangroves and preserved beaches, are an integral part of Martinique heritage. These exceptional natural spaces are protected and enhanced for future generations.',
        'Historic monuments, churches, cathedrals, forts and museums bear witness to the island\'s evolution through the centuries. The Savane des Esclaves, the Pagerie museum, Fort Desaix are all places to discover to understand Martinique heritage.',
      ],
    },
    highlights: {
      fr: [
        'Visite de l\'architecture créole',
        'Découverte des sites naturels classés',
        'Exploration des monuments historiques',
        'Rencontres avec des guides du patrimoine',
        'Ateliers sur la préservation du patrimoine',
      ],
      en: [
        'Visit to Creole architecture',
        'Discovery of classified natural sites',
        'Exploration of historic monuments',
        'Meetings with heritage guides',
        'Workshops on heritage preservation',
      ],
    },
  },
  langue: {
    slug: { fr: 'langue', en: 'langue' },
    title: { fr: 'Langue', en: 'Language' },
    imageSrc: '/images/home/bibliotheque.jpeg',
    imageAlt: { fr: 'Langue créole', en: 'Creole language' },
    description: {
      fr: 'Apprenez le créole martiniquais et communiquez avec les habitants dans leur langue',
      en: 'Learn Martinique Creole and communicate with the inhabitants in their language',
    },
    content: {
      fr: [
        'Le créole martiniquais est une langue vivante, riche et expressive, née de la rencontre entre le français, les langues africaines et les langues amérindiennes. C\'est la langue du cœur, celle qui exprime l\'identité créole dans toute sa profondeur.',
        'Apprendre le créole, c\'est s\'ouvrir à une autre façon de penser et de s\'exprimer. C\'est comprendre les nuances, les expressions idiomatiques, les proverbes qui rythment la vie quotidienne des Martiniquais. C\'est aussi découvrir la poésie et la musicalité de cette langue.',
        'Nos cours de créole sont adaptés à tous les niveaux, du débutant à l\'avancé. Vous apprendrez les bases de la conversation, le vocabulaire essentiel, la grammaire créole et les expressions courantes. Les cours sont interactifs et se déroulent dans une atmosphère conviviale.',
        'Parler créole, c\'est créer un lien authentique avec les habitants. C\'est montrer votre intérêt pour leur culture et leur identité. C\'est aussi accéder à une compréhension plus profonde de la société martiniquaise et de ses valeurs.',
      ],
      en: [
        'Martinique Creole is a living, rich and expressive language, born from the meeting between French, African languages and Amerindian languages. It is the language of the heart, the one that expresses Creole identity in all its depth.',
        'Learning Creole means opening up to another way of thinking and expressing oneself. It means understanding the nuances, idiomatic expressions, proverbs that rhythm the daily life of Martinicans. It is also discovering the poetry and musicality of this language.',
        'Our Creole courses are adapted to all levels, from beginner to advanced. You will learn the basics of conversation, essential vocabulary, Creole grammar and common expressions. The courses are interactive and take place in a friendly atmosphere.',
        'Speaking Creole means creating an authentic bond with the inhabitants. It means showing your interest in their culture and identity. It also means accessing a deeper understanding of Martinique society and its values.',
      ],
    },
    highlights: {
      fr: [
        'Cours de créole adaptés à tous les niveaux',
        'Conversation avec des locuteurs natifs',
        'Découverte de la littérature créole',
        'Ateliers d\'expression orale',
        'Immersion linguistique complète',
      ],
      en: [
        'Creole courses adapted to all levels',
        'Conversation with native speakers',
        'Discovery of Creole literature',
        'Oral expression workshops',
        'Complete linguistic immersion',
      ],
    },
  },
};

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const pillar = pillarsData[slug];
  if (!pillar) {
    return {
      title: locale === 'fr' ? 'Pilier non trouvé' : 'Pillar not found',
    };
  }

  const title = locale === 'fr'
    ? `${pillar.title.fr} - Piliers de l'immersion LUDICADEMÍ`
    : `${pillar.title.en} - Pillars of LUDICADEMÍ immersion`;

  return {
    title,
    description: pillar.description[locale as 'fr' | 'en'],
  };
}

export default async function PillarPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const pillar = pillarsData[slug];
  
  if (!pillar) {
    notFound();
  }

  const localeKey = locale as 'fr' | 'en';
  const title = pillar.title[localeKey];
  const description = pillar.description[localeKey];
  const content = pillar.content[localeKey];
  const highlights = pillar.highlights[localeKey];

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={pillar.imageSrc}
          alt={pillar.imageAlt[localeKey]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-spacing-tight drop-shadow-2xl">
              {title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-white drop-shadow-lg font-semibold">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              {content.map((paragraph, index) => (
                <p key={index} className="text-neutral-gray leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-display font-bold text-neutral-dark mb-6 text-spacing-tight">
              {locale === 'fr' ? 'Ce que vous découvrirez' : 'What you will discover'}
            </h2>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-neutral-gray">
                  <span className="text-accent-600 mr-3 mt-1 text-xl">✓</span>
                  <span className="text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <CTAButton
              href={getLocalizedPath('/stays', locale)}
              variant="primary"
              className="text-lg px-8 py-4"
            >
              {locale === 'fr' ? 'Découvrir nos séjours immersifs' : 'Discover our immersive stays'}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

