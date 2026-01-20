import { talenteArticles } from './talente';
import { unternehmenArticles } from './unternehmen';
import { Article } from './types';

export const allArticles: Article[] = [
  ...talenteArticles,
  ...unternehmenArticles
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: 'talente' | 'unternehmen'): Article[] {
  return allArticles.filter(article => article.category === category);
}

export { talenteArticles, unternehmenArticles };
export type { Article, ArticleSection } from './types';
