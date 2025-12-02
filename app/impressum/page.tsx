import Logo from '@/components/Logo';
import Link from 'next/link';

export const metadata = {
  title: 'Impressum | TalNow',
  description: 'Impressum der TalNow GbR',
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-6 lg:px-12 py-6 border-b border-gray-100">
        <Link href="/">
          <Logo size="md" variant="gradient" />
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 fade-in">
            Impressum
          </h1>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed fade-in fade-in-delay-100">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  TalNow GbR <span className="text-gray-500 font-normal">(in Gründung)</span>
                </h2>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Vertreten durch die Gesellschafter:
                </h3>
                <p>Johan Klee</p>
                <p>Leon Müller</p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Anschrift:
                </h3>
                <p>Sommerweg 13</p>
                <p>34266 Niestetal</p>
                <p>Deutschland</p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  E-Mail:
                </h3>
                <p>
                  <a 
                    href="mailto:info@talnow.net" 
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    info@talnow.net
                  </a>
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hinweis zum Entwicklungsstand:
                </h3>
                <p>
                  TalNow befindet sich in der Konzept-, Entwicklungs- und Testphase. 
                  Es werden keine entgeltlichen Dienstleistungen angeboten.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV:
                </h3>
                <p>Alexander Hartmann</p>
              </section>
            </div>

          <div className="mt-12 pt-8 border-t border-gray-200 fade-in fade-in-delay-200">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="px-6 lg:px-12 py-6 border-t border-gray-100 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TalNow. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

