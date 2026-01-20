import { notFound } from 'next/navigation';
import { getArticleBySlug, allArticles } from '@/data/articles';
import ArticleContent from '@/components/ArticleContent';
import Logo from '@/components/Logo';
import Link from 'next/link';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Artikel nicht gefunden | TalNow',
    };
  }

  return {
    title: `${article.title} | TalNow Blog`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

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

      {/* Article Content */}
      <ArticleContent article={article} />

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
