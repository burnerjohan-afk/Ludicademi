import Image from 'next/image';

interface HeroImageSectionProps {
  imageSrc: string;
  imageAlt: string;
}

export default function HeroImageSection({
  imageSrc,
  imageAlt,
}: HeroImageSectionProps) {
  return (
    <section className="relative w-full h-[55vh] min-h-[400px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}

