export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'talente' | 'unternehmen';
  date: string;
  readTime: string;
  content: ArticleSection[];
  metaDescription: string;
}

export interface ArticleSection {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'callout';
  content: string;
  items?: string[];
}
