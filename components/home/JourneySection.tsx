import Link from 'next/link';
import { getLocalizedPath } from '@/lib/utils';

interface JourneyStep {
  label: string;
  title: string;
  description: string;
  href: string;
  duration: string;
}

interface JourneySectionProps {
  title: string;
  description: string;
  steps: JourneyStep[];
  locale: 'fr' | 'en';
}

export default function JourneySection({
  title,
  description,
  steps,
  locale,
}: JourneySectionProps) {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
            {title}
          </h2>
          <p className="text-lg text-neutral-gray leading-relaxed">{description}</p>
        </div>

        <ol className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <li key={step.href} className="relative text-center md:text-left">
              <div className="flex md:flex-col items-center md:items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white font-bold text-lg">
                  {index + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-600 mb-1">
                    {step.duration}
                  </p>
                  <h3 className="text-xl font-display font-semibold text-neutral-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-gray mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <Link
                    href={getLocalizedPath(step.href, locale)}
                    className="text-sm font-semibold text-accent-600 hover:text-accent-700"
                  >
                    {step.label} →
                  </Link>
                </div>
              </div>
              {index < steps.length - 1 && (
                <span
                  className="hidden md:block absolute top-6 left-[calc(100%+0.5rem)] w-8 border-t-2 border-dashed border-accent-200"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
