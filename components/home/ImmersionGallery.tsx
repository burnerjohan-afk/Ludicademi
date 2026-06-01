import Image from 'next/image';

interface ImageItem {
  src: string;
  alt: string;
  legend: string;
}

interface ImmersionGalleryProps {
  title: string;
  description: string;
  images: ImageItem[];
}

export default function ImmersionGallery({
  title,
  description,
  images,
}: ImmersionGalleryProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {title}
          </h2>
          <p className="text-lg text-neutral-gray leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-neutral-dark">{image.legend}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
