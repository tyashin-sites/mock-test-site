export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold">Build Your Dream Website</h1>
        <p className="mt-6 text-lg text-gray-500">Create stunning websites in minutes.</p>
        <a
          href="/contact"
          className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
