import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content", "blogs");

export type BlogFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

function calculateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

function getBlogFiles() {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .sort();
}

function parseBlogFile(fileName: string): BlogPostMeta {
  const fullPath = path.join(blogsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as Partial<BlogFrontmatter>;

  if (
    !frontmatter.title ||
    !frontmatter.description ||
    !frontmatter.publishedAt ||
    !Array.isArray(frontmatter.tags) ||
    typeof frontmatter.featured !== "boolean"
  ) {
    throw new Error(`Invalid frontmatter in ${fileName}`);
  }

  return {
    slug: fileName.replace(/\.mdx$/, ""),
    title: frontmatter.title,
    description: frontmatter.description,
    publishedAt: frontmatter.publishedAt,
    tags: frontmatter.tags,
    featured: frontmatter.featured,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllBlogs() {
  return getBlogFiles()
    .map(parseBlogFile)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getFeaturedBlogs() {
  return getAllBlogs().filter((post) => post.featured);
}

export function getRecentBlogs(limit = 3) {
  return getAllBlogs().slice(0, limit);
}

export function getBlogSlugs() {
  return getAllBlogs().map((post) => post.slug);
}

export function getBlogBySlug(slug: string) {
  return getAllBlogs().find((post) => post.slug === slug) ?? null;
}
