const features = [
  { title: 'Fast', description: 'Lightning-fast performance.' },
  { title: 'Beautiful', description: 'Stunning designs out of the box.' },
  { title: 'Simple', description: 'No coding required.' },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-lg">
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
