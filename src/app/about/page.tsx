import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — MockCo',
  description: 'Learn more about MockCo',
};

export default function AboutPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">About MockCo</h1>
        <p className="mt-6 text-lg text-gray-600">
          We help small businesses create professional websites that drive results.
        </p>
      </div>
    </section>
  );
}
