import Image from 'next/image';
import { StarIcon } from '@/components/icons';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  imageSrc: string;
}

interface TestimonialsSectionProps {
  title: string;
  proofText?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  title,
  proofText,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {title}
          </h2>
          {proofText && (
            <p className="text-lg text-accent-600 font-semibold mb-8">{proofText}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
              <p className="text-neutral-gray mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold text-neutral-dark mb-1">{testimonial.name}</div>
                  <div className="text-sm text-neutral-gray">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
