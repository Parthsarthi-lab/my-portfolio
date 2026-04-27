import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getRecentBlogs } from "@/lib/blogs";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { videos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal website of Parthsarthi Joshi with writing, videos, and projects around AI, products, and robotics.",
};

export default function Home() {
  const recentPosts = getRecentBlogs(2);

  return (
    <div className="py-8 md:py-12">
      <section className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
        <div className="flex justify-center md:justify-end">
          <Image
            src="/parth_profile.jpg"
            alt="Portrait of Parthsarthi Joshi"
            width={300}
            height={300}
            className="profile-image h-[260px] w-[260px] md:h-[300px] md:w-[300px]"
            priority
          />
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight text-[color:var(--foreground)] md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-xl text-[color:var(--foreground)] md:text-2xl">
            {siteConfig.role}
          </p>
          <p className="mt-5 max-w-2xl text-xl leading-9 text-[color:var(--muted)]">
            {siteConfig.heroQuote}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
            {siteConfig.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="button-secondary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-divider mt-12 pt-10">
        <div className="space-y-12">
          <div className="timeline-row">
            <div className="timeline-year">2026</div>
            <div className="timeline-rail">
              <div className="timeline-dot" />
            </div>
            <div className="inline-links">
              <p className="text-2xl text-[color:var(--foreground)]">Videos</p>
              <p className="prose-copy mt-3 max-w-4xl">
                I share AI-related work through classroom sessions, public seminars, and
                local awareness initiatives. The <Link href="/videos">Videos page</Link> is
                where this media will live as the archive grows.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year">2026</div>
            <div className="timeline-rail">
              <div className="timeline-dot" />
            </div>
            <div className="inline-links">
              <p className="text-2xl text-[color:var(--foreground)]">Projects</p>
              <p className="prose-copy mt-3 max-w-4xl">
                I am building `vijAI Robotics` as a long-term vehicle for work in AI,
                products, and robotics. The <Link href="/projects">Projects page</Link> holds
                the visible pieces of that journey right now.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year">Soon</div>
            <div className="timeline-rail">
              <div className="timeline-dot" />
            </div>
            <div className="inline-links">
              <p className="text-2xl text-[color:var(--foreground)]">Blogs</p>
              <p className="prose-copy mt-3 max-w-4xl">
                I will begin writing on AI, products, robotics, ambition, and the ideas
                shaping my long-term work. Those essays will appear on the{" "}
                <Link href="/blog">Blogs page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-divider mt-12 grid gap-6 pt-10 md:grid-cols-3">
        <article className="surface-card rounded-2xl p-6">
          <p className="eyebrow">Current Direction</p>
          <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
            {siteConfig.headline}
          </p>
        </article>

        <article className="surface-card rounded-2xl p-6">
          <p className="eyebrow">Selected Reading</p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--muted)]">
            {siteConfig.currentReading.slice(0, 3).map((book) => (
              <li key={book}>{book}</li>
            ))}
          </ul>
        </article>

        <article className="surface-card rounded-2xl p-6">
          <p className="eyebrow">Quick Links</p>
          <div className="mt-4 space-y-3 text-sm">
            <Link href="/videos" className="block text-[color:var(--link)] underline underline-offset-4">
              View videos
            </Link>
            <Link href="/projects" className="block text-[color:var(--link)] underline underline-offset-4">
              View projects
            </Link>
            <Link href="/blog" className="block text-[color:var(--link)] underline underline-offset-4">
              View blogs
            </Link>
          </div>
        </article>
      </section>

      <section className="page-divider mt-12 grid gap-6 pt-10 md:grid-cols-2">
        <article className="surface-card rounded-2xl p-6">
          <p className="eyebrow">Recent Video Themes</p>
          <div className="mt-4 space-y-4">
            {videos.slice(0, 2).map((video) => (
              <div key={video.title}>
                <p className="text-lg text-[color:var(--foreground)]">{video.title}</p>
                <p className="mt-1 text-sm leading-7 text-[color:var(--muted)]">
                  {video.summary}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card rounded-2xl p-6">
          <p className="eyebrow">Recent Project Threads</p>
          <div className="mt-4 space-y-4">
            {projects.slice(0, 2).map((project) => (
              <div key={project.slug}>
                <p className="text-lg text-[color:var(--foreground)]">{project.title}</p>
                <p className="mt-1 text-sm leading-7 text-[color:var(--muted)]">
                  {project.summary}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {recentPosts.length ? (
        <section className="page-divider mt-12 pt-10">
          <p className="eyebrow">Latest Blogs</p>
          <div className="mt-6 grid gap-4">
            {recentPosts.map((post) => (
              <article key={post.slug} className="surface-card rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted-soft)]">
                  {post.publishedAt}
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
        </section>
      ) : null}
    </div>
  );
}
