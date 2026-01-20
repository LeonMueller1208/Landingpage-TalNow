import { allArticles } from '@/data/articles';
import ArticleTeaser from '@/components/ArticleTeaser';
import Logo from '@/components/Logo';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Blog | TalNow',
  description: 'Insights zu modernem Recruiting, Culture Fit und dem Arbeitsmarkt der Zukunft.',
};

export default function ArtikelPage() {
  const talenteArticles = allArticles.filter(a => a.category === 'talente');
  const unternehmenArticles = allArticles.filter(a => a.category === 'unternehmen');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 lg:px-12 py-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Logo size="md" variant="gradient" />
          </Link>
          <div className="flex gap-6">
            <Link 
              href="/talente"
              className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
            >
              Für Talente
            </Link>
            <Link 
              href="/unternehmen"
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              Für Unternehmen
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              TalNow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights zu modernem Recruiting, Culture Fit und dem Arbeitsmarkt der Zukunft.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles for Talente */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              Für <span className="text-emerald-500">Talente</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talenteArticles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 100}>
                <ArticleTeaser article={article} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Articles for Unternehmen */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              Für <span className="text-blue-500">Unternehmen</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unternehmenArticles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 100}>
                <ArticleTeaser article={article} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Bereit für besseres Recruiting?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Sichere dir jetzt deinen Beta-Zugang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/talente#newsletter"
                  className="px-8 py-4 bg-white text-emerald-600 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Als Talent anmelden
                </Link>
                <Link
                  href="/unternehmen#newsletter"
                  className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Als Unternehmen anmelden
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Logo size="sm" variant="gradient" />
            <p className="text-gray-600 mt-2 text-sm">
              © {new Date().getFullYear()} TalNow. Alle Rechte vorbehalten.
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors">
              Datenschutz
            </Link>
            <a href="mailto:info@talnow.net" className="text-gray-600 hover:text-gray-900 transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
