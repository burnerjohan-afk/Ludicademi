import { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-300 border border-gray-100">
      {icon && (
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-accent-50 rounded-full">
            <div className="text-accent-600">
              {icon}
            </div>
          </div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-neutral-dark mb-3 text-spacing-tight">
        {title}
      </h3>
      <p className="text-neutral-gray leading-relaxed text-sm">{description}</p>
    </div>
  );
}

