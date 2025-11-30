export default function Article() {
  return (
    <section id="article" className="py-20 lg:py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Article Header */}
        <div className="mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Die 7 größten Fails im Recruiting 2024
          </h2>
          <p className="text-xl text-gray-600">
            Warum 80% aller Bewerbungen scheitern, bevor sie gelesen werden.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Das Recruiting-System ist kaputt. 80% aller Bewerbungen scheitern, bevor sie überhaupt gelesen werden. Hier sind die größten Probleme:
            </p>

            <div className="space-y-6 my-10">
              {[
                {
                  title: '1. Der Lebenslauf-Fetisch',
                  description: 'Unternehmen verlangen perfekte Lebensläufe, ignorieren aber komplett den Culture Fit.'
                },
                {
                  title: '2. "Culture Fit" als Buzzword',
                  description: 'Jeder redet davon, niemand misst ihn wirklich. Stattdessen: Bauchgefühl.'
                },
                {
                  title: '3. Endlose Bewerbungsprozesse',
                  description: '5 Interview-Runden, 3 Wochen Wartezeit, dann eine Absage.'
                },
                {
                  title: '4. Null Transparenz',
                  description: 'Niemand weiß, warum Absagen kommen oder Kandidaten abspringen.'
                },
                {
                  title: '5. Über- und Unterqualifikation',
                  description: 'Beides führt zur Absage, obwohl die Person perfekt passen könnte.'
                },
                {
                  title: '6. Ghosting auf beiden Seiten',
                  description: 'Niemand respektiert die Zeit des anderen.'
                },
                {
                  title: '7. Keine Daten, nur Bauchgefühl',
                  description: 'Recruiting-Entscheidungen ohne echte Daten oder Analyse.'
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 group hover:translate-x-2 transition-all duration-300 fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-emerald-500/40">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border-l-4 border-blue-500 hover:border-l-8 hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Die Lösung?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ein System basierend auf echten Daten. Ein Algorithmus, der Culture Fit genauso wichtig nimmt wie Skills. 
                Eine Plattform, die Zeit spart und nur Matches zeigt, die wirklich passen.
              </p>
              <p className="text-lg font-bold text-gray-900 mt-3">
                Genau das ist TalNow.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center fade-in fade-in-delay-200">
            <a
              href="#newsletter"
              className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
            >
              Beta-Zugang sichern →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

