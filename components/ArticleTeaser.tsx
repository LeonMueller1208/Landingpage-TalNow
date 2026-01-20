import Link from 'next/link';
import { Article } from '@/data/articles';

interface ArticleTeaserProps {
  article: Article;
}

export default function ArticleTeaser({ article }: ArticleTeaserProps) {
  const categoryColor = article.category === 'talente' ? 'emerald' : 'blue';
  
  return (
    <Link href={`/artikel/${article.slug}`}>
      <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100">
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            article.category === 'talente' 
              ? 'bg-emerald-100 text-emerald-700' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            {article.category === 'talente' ? 'Für Talente' : 'Für Unternehmen'}
          </span>
          <span className="text-sm text-gray-500">{article.readTime}</span>
        </div>

        {/* Title & Subtitle */}
        <h3 className={`text-2xl font-bold text-gray-900 mb-2 group-hover:text-${categoryColor}-600 transition-colors`}>
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.subtitle}
        </p>

        {/* Read More */}
        <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:gap-3 gap-2 transition-all">
          Artikel lesen
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
