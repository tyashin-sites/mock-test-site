import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — MockCo',
  description: 'Get in touch with MockCo',
};

export default function ContactPage() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </section>
  );
}
