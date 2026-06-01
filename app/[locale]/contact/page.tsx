import { Suspense } from 'react';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <div className="container mx-auto px-4">
        <Suspense fallback={<div className="max-w-2xl mx-auto h-96 animate-pulse bg-white rounded-2xl" />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
