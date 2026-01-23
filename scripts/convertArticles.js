const mammoth = require('mammoth');
const fs = require('fs').promises;
const path = require('path');

const articleFiles = [
  {
    path: 'Artikel/Bewerber/A01 Studium und Arbeitsalltag.docx',
    id: 'a01',
    slug: 'studium-und-arbeitsalltag',
    category: 'talente',
    date: '2026-01-20',
  },
  {
    path: 'Artikel/Bewerber/A02 Rückmeldungen.docx',
    id: 'a02',
    slug: 'rueckmeldungen-im-bewerbungsprozess',
    category: 'talente',
    date: '2026-01-20',
  },
  {
    path: 'Artikel/Bewerber/A03 Auswahlprozesse.docx',
    id: 'a03',
    slug: 'auswahlprozesse-transparent-gestalten',
    category: 'talente',
    date: '2026-01-20',
  },
  {
    path: 'Artikel/Unternehmen/U01 Mythos Fachkräftemangel.docx',
    id: 'u01',
    slug: 'mythos-fachkraeftemangel',
    category: 'unternehmen',
    date: '2026-01-20',
  },
  {
    path: 'Artikel/Unternehmen/U02 Folgekosten Fehlbesetzung.docx',
    id: 'u02',
    slug: 'folgekosten-fehlbesetzung',
    category: 'unternehmen',
    date: '2026-01-20',
  },
  {
    path: 'Artikel/Unternehmen/U03 Interviews.docx',
    id: 'u03',
    slug: 'interviews-richtig-fuehren',
    category: 'unternehmen',
    date: '2026-01-20',
  },
  {
    path: 'Artikel/Unternehmen/U04 Gen Z am Arbeitsmarkt.docx',
    id: 'u04',
    slug: 'gen-z-am-arbeitsmarkt',
    category: 'unternehmen',
    date: '2026-01-20',
  },
  {
    path: 'Artikel/Unternehmen/U05 Jobtitel-Irrsinn.docx',
    id: 'u05',
    slug: 'jobtitel-irrsinn',
    category: 'unternehmen',
    date: '2026-01-20',
  },
];

async function convertWordToArticle(filePath, metadata) {
  console.log(`\n🔄 Converting: ${filePath}`);
  
  try {
    const buffer = await fs.readFile(filePath);
    const result = await mammoth.convertToHtml({ buffer });
    const html = result.value;
    
    // Parse HTML and extract content
    const parsed = parseHtmlToSections(html);
    
    console.log(`✅ Converted: ${parsed.title || 'Untitled'}`);
    console.log(`   Sections: ${parsed.sections.length}`);
    
    return {
      id: metadata.id,
      slug: metadata.slug,
      title: parsed.title || 'Untitled',
      subtitle: parsed.subtitle || '',
      category: metadata.category,
      date: metadata.date,
      readTime: estimateReadTime(html),
      metaDescription: generateMetaDescription(parsed),
      content: parsed.sections,
    };
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
    return null;
  }
}

function parseHtmlToSections(html) {
  const sections = [];
  let title = '';
  let subtitle = '';
  
  // Remove LinkedIn-Funnel section (everything after it)
  const linkedinIndex = html.indexOf('LINKEDIN-FUNNEL');
  if (linkedinIndex !== -1) {
    html = html.substring(0, linkedinIndex);
  }
  
  // Remove empty paragraphs and clean up
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/<p><strong>\s*<\/strong><\/p>/g, '');
  
  // Extract title (first h1 or strong paragraph)
  const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>|<p><strong>(.*?)<\/strong><\/p>/);
  if (titleMatch) {
    title = stripHtml(titleMatch[1] || titleMatch[2]);
    html = html.replace(titleMatch[0], '');
  }
  
  // Extract subtitle (second strong paragraph or first regular paragraph)
  const subtitleMatch = html.match(/<p><strong>(.*?)<\/strong><\/p>|<p>(.*?)<\/p>/);
  if (subtitleMatch && (subtitleMatch[1] || subtitleMatch[2])) {
    subtitle = stripHtml(subtitleMatch[1] || subtitleMatch[2]);
    if (subtitle.length < 200) {
      html = html.replace(subtitleMatch[0], '');
    } else {
      subtitle = '';
    }
  }
  
  // Split by headings and paragraphs
  const parts = html.split(/(<h[1-6][^>]*>.*?<\/h[1-6]>|<ul>.*?<\/ul>|<ol>.*?<\/ol>|<p>.*?<\/p>)/s);
  
  for (const part of parts) {
    if (!part || !part.trim()) continue;
    
    // Headings
    if (part.match(/<h[2-6][^>]*>/)) {
      const content = stripHtml(part);
      if (content) {
        sections.push({ type: 'heading', content });
      }
    }
    // Lists
    else if (part.match(/<[uo]l>/)) {
      const items = [...part.matchAll(/<li[^>]*>(.*?)<\/li>/gs)]
        .map(m => stripHtml(m[1]))
        .filter(item => item.trim());
      
      if (items.length > 0) {
        sections.push({ type: 'list', content: '', items });
      }
    }
    // Paragraphs
    else if (part.match(/<p>/)) {
      const content = stripHtml(part);
      if (content && content.length > 10) {
        // Check if it looks like a quote (starts with " or »)
        if (content.match(/^["»„]/)) {
          sections.push({ type: 'quote', content: content.replace(/^["»„]|["«"]$/g, '').trim() });
        }
        // Check if it looks like a callout (contains "TalNow" or starts with special markers)
        else if (content.includes('TalNow') && content.length < 300) {
          sections.push({ type: 'callout', content });
        }
        // Check if it's likely a heading (short, ends with colon or is in title case, doesn't end with period)
        else if (
          content.length < 150 && 
          (content.match(/:\s*$/) || 
           (!content.match(/[.!?]\s*$/) && content.length < 80) ||
           content.match(/^(Einleitung|Fazit|Zusammenfassung|Stand der Forschung|Implikation|Fragestellung|Methodik|Ergebnisse|Warum|Was|Wie)\b/))
        ) {
          sections.push({ type: 'heading', content: content.replace(/:\s*$/, '') });
        }
        else {
          sections.push({ type: 'paragraph', content });
        }
      }
    }
  }
  
  return { title, subtitle, sections };
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function estimateReadTime(html) {
  const text = stripHtml(html);
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / 200); // Average reading speed
  return `${minutes} Min. Lesezeit`;
}

function generateMetaDescription(parsed) {
  const firstParagraph = parsed.sections.find(s => s.type === 'paragraph');
  if (firstParagraph && firstParagraph.content) {
    return firstParagraph.content.substring(0, 155) + '...';
  }
  return parsed.subtitle || 'Ein Artikel von TalNow';
}

function generateTypeScriptFile(articles, category) {
  const categoryName = category === 'talente' ? 'talente' : 'unternehmen';
  const categoryLabel = category === 'talente' ? 'Talente' : 'Unternehmen';
  
  let content = `import { Article } from './types';\n\n`;
  content += `export const ${categoryName}Articles: Article[] = [\n`;
  
  articles.forEach((article, index) => {
    content += `  {\n`;
    content += `    id: '${article.id}',\n`;
    content += `    slug: '${article.slug}',\n`;
    content += `    title: ${JSON.stringify(article.title)},\n`;
    content += `    subtitle: ${JSON.stringify(article.subtitle)},\n`;
    content += `    category: '${article.category}',\n`;
    content += `    date: '${article.date}',\n`;
    content += `    readTime: '${article.readTime}',\n`;
    content += `    metaDescription: ${JSON.stringify(article.metaDescription)},\n`;
    content += `    content: [\n`;
    
    article.content.forEach((section, sIndex) => {
      content += `      {\n`;
      content += `        type: '${section.type}',\n`;
      content += `        content: ${JSON.stringify(section.content)}`;
      
      if (section.items && section.items.length > 0) {
        content += `,\n        items: [\n`;
        section.items.forEach((item, iIndex) => {
          content += `          ${JSON.stringify(item)}`;
          if (iIndex < section.items.length - 1) content += ',';
          content += '\n';
        });
        content += `        ]`;
      }
      
      content += `\n      }`;
      if (sIndex < article.content.length - 1) content += ',';
      content += '\n';
    });
    
    content += `    ]\n`;
    content += `  }`;
    if (index < articles.length - 1) content += ',';
    content += '\n';
  });
  
  content += `];\n`;
  
  return content;
}

async function main() {
  console.log('🚀 Starting automatic article conversion...\n');
  
  const talenteArticles = [];
  const unternehmenArticles = [];
  
  for (const file of articleFiles) {
    const article = await convertWordToArticle(file.path, file);
    if (article) {
      if (file.category === 'talente') {
        talenteArticles.push(article);
      } else {
        unternehmenArticles.push(article);
      }
    }
  }
  
  console.log('\n📝 Generating TypeScript files...');
  
  // Generate talente.ts
  const talenteContent = generateTypeScriptFile(talenteArticles, 'talente');
  await fs.writeFile('data/articles/talente.ts', talenteContent, 'utf-8');
  console.log(`✅ Generated: data/articles/talente.ts (${talenteArticles.length} articles)`);
  
  // Generate unternehmen.ts
  const unternehmenContent = generateTypeScriptFile(unternehmenArticles, 'unternehmen');
  await fs.writeFile('data/articles/unternehmen.ts', unternehmenContent, 'utf-8');
  console.log(`✅ Generated: data/articles/unternehmen.ts (${unternehmenArticles.length} articles)`);
  
  console.log('\n✨ Done! All articles converted successfully!');
  console.log(`\n📊 Summary:`);
  console.log(`   - Talente articles: ${talenteArticles.length}`);
  console.log(`   - Unternehmen articles: ${unternehmenArticles.length}`);
  console.log(`   - Total sections: ${[...talenteArticles, ...unternehmenArticles].reduce((sum, a) => sum + a.content.length, 0)}`);
}

main().catch(console.error);
