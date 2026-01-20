import Logo from '@/components/Logo';
import Link from 'next/link';
import NewsletterTalente from '@/components/NewsletterTalente';
import AnimatedSection from '@/components/AnimatedSection';
import ArticleTeaser from '@/components/ArticleTeaser';
import { getArticlesByCategory } from '@/data/articles';

export const metadata = {
  title: 'Für Talente | TalNow',
  description: 'Finde Jobs, die wirklich zu dir passen. Kein Spam, keine Zeitverschwendung.',
};

export default function Talente() {
  const benefits = [
    {
      title: 'Nur passende Jobs',
      description: 'Keine irrelevanten Anfragen mehr. Du siehst nur Stellen, die wirklich zu dir passen.',
    },
    {
      title: 'Ehrliche Matches',
      description: 'Kein Bullshit. Wir zeigen dir, warum ein Job passt – und warum vielleicht nicht.',
    },
    {
      title: 'Culture Fit im Fokus',
      description: 'Finde Teams, die deine Werte teilen. Nicht nur Skills, sondern echte Passung.',
    },
  ];

  const articles = getArticlesByCategory('talente');

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 lg:px-12 py-6 flex justify-between items-center">
        <Link href="/">
          <Logo size="md" variant="gradient" />
        </Link>
        <Link 
          href="/unternehmen"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          Für Unternehmen →
        </Link>
      </header>

      {/* Hero */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-8 fade-in">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-sm font-semibold text-emerald-700">Für Talente</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight text-gray-900 fade-in fade-in-delay-100">
            Finde Jobs, die{' '}
            <span className="text-emerald-500">wirklich passen</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium fade-in fade-in-delay-200">
            Kein Spam. Kein Ghosting. Nur echte Chancen.
          </p>

          <a
            href="#newsletter"
            className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-full text-lg font-bold hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 fade-in fade-in-delay-300"
          >
            Beta-Zugang sichern →
          </a>
        </div>

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex gap-4 items-start group hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm mt-1 group-hover:scale-125 transition-transform">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterTalente />

      {/* Articles */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
                Hilfreiche Artikel für deine Jobsuche
              </h2>
              <p className="text-lg text-gray-600">
                Insights und Tipps für erfolgreiche Bewerbungen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 100}>
                <ArticleTeaser article={article} />
              </AnimatedSection>
            ))}
          </div>

          {/* View All Link */}
          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <Link
                href="/artikel"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group"
              >
                Alle Artikel ansehen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
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

