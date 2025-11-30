export default function Benefits() {
  const benefits = [
    {
      title: 'Intelligentes Matching',
      description: 'Algorithmus-basiertes Matching auf Basis von Skills, Erfahrung und Culture Fit – nicht nur Lebensläufe.',
    },
    {
      title: 'Keine Zeit verschwenden',
      description: 'Nur Matches, die wirklich passen. Keine endlosen Bewerbungsprozesse oder unpassende Anfragen mehr.',
    },
    {
      title: 'Culture Fit im Fokus',
      description: 'Werte, Arbeitsweise und Team-Kultur werden genauso wichtig wie fachliche Qualifikation.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 items-start group hover:translate-x-2 transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/50">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

