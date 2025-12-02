import Logo from '@/components/Logo';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Datenschutz | TalNow',
  description: 'Datenschutzerklärung der TalNow GbR',
};

export default function Datenschutz() {
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
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">
              Datenschutzerklärung
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
              <section className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <p className="text-blue-800">
                  Die vollständige Datenschutzerklärung wird in Kürze hier veröffentlicht.
                </p>
              </section>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-12 pt-8 border-t border-gray-200">
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
          </AnimatedSection>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="px-6 lg:px-12 py-6 border-t border-gray-100 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TalNow. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

