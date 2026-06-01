import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
  type,
  onClick,
}: CTAButtonProps) {
  const baseClasses = 'inline-block font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg';
  
  const variantClasses = {
    primary: 'bg-accent-600 hover:bg-accent-700 text-white',
    secondary: 'bg-primary-700 hover:bg-primary-800 text-white',
    outline: 'border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white bg-transparent',
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  // Si c'est un bouton de formulaire
  if (type) {
    return (
      <button type={type} onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href || '#'} className={classes}>
      {children}
    </Link>
  );
}

