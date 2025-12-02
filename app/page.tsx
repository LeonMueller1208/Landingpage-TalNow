import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-6 lg:px-12 py-6">
        <Logo size="lg" variant="gradient" />
      </header>

      {/* Selection Screen */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 fade-in leading-tight">
            Recruiting ohne{' '}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              BULLSHIT
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 fade-in fade-in-delay-100">
            Wer bist du?
          </p>

          {/* Selection Buttons */}
          <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto fade-in fade-in-delay-200">
            {/* Unternehmen */}
            <Link 
              href="/unternehmen"
              className="group relative p-6 lg:p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="text-4xl mb-3">🏢</div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Ich bin ein Unternehmen
              </h2>
              <p className="text-gray-600 text-base">
                Finde Talente, die wirklich zu euch passen
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-blue-500 font-semibold text-sm group-hover:gap-3 transition-all">
                Los geht's
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Talente */}
            <Link 
              href="/talente"
              className="group relative p-6 lg:p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 bg-white hover:bg-emerald-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/20"
            >
              <div className="text-4xl mb-3">🚀</div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Ich suche einen Job
              </h2>
              <p className="text-gray-600 text-base">
                Finde Jobs, die wirklich zu dir passen
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-emerald-500 font-semibold text-sm group-hover:gap-3 transition-all">
                Los geht's
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="px-6 lg:px-12 py-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TalNow. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-gray-900 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
