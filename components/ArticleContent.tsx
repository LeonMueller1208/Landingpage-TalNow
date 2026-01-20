'use client';

import { Article, ArticleSection } from '@/data/articles';
import AnimatedSection from './AnimatedSection';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const renderSection = (section: ArticleSection, index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
            {section.content}
          </h2>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
            {section.content}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-6">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${
                  article.category === 'talente' 
                    ? 'from-emerald-400 to-emerald-600' 
                    : 'from-blue-400 to-blue-600'
                } flex items-center justify-center text-white text-sm font-bold mt-0.5`}>
                  ✓
                </span>
                <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className={`border-l-4 ${
            article.category === 'talente' ? 'border-emerald-500' : 'border-blue-500'
          } pl-6 py-4 my-8 italic text-xl text-gray-800`}>
            "{section.content}"
          </blockquote>
        );
      
      case 'callout':
        return (
          <div key={index} className={`p-6 rounded-2xl ${
            article.category === 'talente' 
              ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-500' 
              : 'bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500'
          } my-8`}>
            <p className="text-lg font-medium text-gray-900 leading-relaxed">
              {section.content}
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <AnimatedSection>
        <a 
          href={`/${article.category}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Zurück zu {article.category === 'talente' ? 'Talente' : 'Unternehmen'}
        </a>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              article.category === 'talente' 
                ? 'bg-emerald-100 text-emerald-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {article.category === 'talente' ? 'Für Talente' : 'Für Unternehmen'}
            </span>
            <span className="text-gray-500">{article.readTime}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">
              {new Date(article.date).toLocaleDateString('de-DE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {article.subtitle}
          </p>
        </div>
      </AnimatedSection>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="prose prose-lg max-w-none">
          {article.content.map((section, index) => renderSection(section, index))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className={`p-6 rounded-2xl ${
            article.category === 'talente' 
              ? 'bg-emerald-50' 
              : 'bg-blue-50'
          } text-center`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Bereit für den nächsten Schritt?
            </h3>
            <p className="text-gray-700 mb-6">
              {article.category === 'talente' 
                ? 'Sichere dir deinen Beta-Zugang und finde Jobs, die wirklich zu dir passen.' 
                : 'Sichere dir deinen Beta-Zugang und finde Talente, die zu eurem Team passen.'}
            </p>
            <a
              href={`/${article.category}#newsletter`}
              className={`inline-block px-8 py-4 ${
                article.category === 'talente' 
                  ? 'bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-500/30' 
                  : 'bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500/30'
              } text-white rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              Beta-Zugang sichern →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
