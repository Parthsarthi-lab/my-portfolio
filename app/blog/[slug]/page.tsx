import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogComponentLoaders } from "@/content/blogs/registry";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

async function getPostModule(slug: string) {
  const loader = blogComponentLoaders[slug];
  return loader ? loader() : null;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [siteConfig.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const postModule = await getPostModule(slug);

  if (!postModule) {
    notFound();
  }

  const Post = postModule.default;

  return (
    <article className="section-card my-8 rounded-[2rem] px-6 py-10 md:my-10 md:px-12 md:py-14">
      <p className="eyebrow">Essay</p>
      <h1 className="serif mt-4 max-w-4xl text-5xl leading-tight md:text-6xl">
        {post.title}
      </h1>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
        <span>{post.publishedAt}</span>
        <span>{post.readingTime}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[color:var(--surface-muted)] px-3 py-1 text-xs text-[color:var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="prose-copy mt-10 max-w-3xl">
        <Post />
      </div>
    </article>
  );
}
