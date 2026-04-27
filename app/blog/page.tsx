import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Blogs and essays from Parthsarthi Joshi on AI, products, robotics, ambition, and long-term thinking.",
};

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <div className="py-8 md:py-12">
      <section>
        <p className="eyebrow">Blogs</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-[color:var(--foreground)] md:text-6xl">
          Writing on AI, ambition, products, and the longer arc of building.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
          This section will become the place where ideas turn into a written public record.
        </p>
      </section>

      <section className="page-divider mt-10 pt-10">
        {posts.length ? (
          <div className="space-y-5">
            {posts.map((post) => (
              <article key={post.slug} className="surface-card rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted-soft)]">
                  {post.publishedAt} | {post.readingTime}
                </p>
                <h2 className="mt-2 text-2xl text-[color:var(--foreground)]">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="surface-card rounded-2xl p-6">
            <p className="text-base leading-8 text-[color:var(--muted)]">
              No essays published yet. Writing will begin here soon.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
