import fs from 'fs';
import path from 'path';

export interface ArticleFrontmatter {
  id: string;
  title: string;
  pillar: string;
  date?: string;
  excerpt?: string;
  image?: string;
}

export interface MarkdownArticle extends ArticleFrontmatter {
  content: string;
}

export function parseFrontmatter(fileContent: string): {
  frontmatter: Record<string, unknown>;
  content: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content: fileContent };
  }

  const [, frontmatterStr, content] = match;
  const frontmatter: Record<string, unknown> = {};

  frontmatterStr.split('\n').forEach((line) => {
    const [key, value] = line.split(':').map((s) => s.trim());
    if (key && value) {
      frontmatter[key] = value;
    }
  });

  return { frontmatter, content };
}

export function loadMarkdownArticles(
  dirPath: string
): MarkdownArticle[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith('.md'));

  const articles: MarkdownArticle[] = files.map((file) => {
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, content } = parseFrontmatter(fileContent);

    return {
      id: frontmatter.id as string,
      title: frontmatter.title as string,
      pillar: frontmatter.pillar as string,
      date: (frontmatter.date as string) || undefined,
      excerpt: (frontmatter.excerpt as string) || undefined,
      image: (frontmatter.image as string) || undefined,
      content,
    };
  });

  return articles;
}

export function getArticleByIdFromMarkdown(
  dirPath: string,
  id: string
): MarkdownArticle | undefined {
  const articles = loadMarkdownArticles(dirPath);
  return articles.find((article) => article.id === id);
}
