import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Parthsarthi Joshi and the direction behind vijAI Robotics.",
};

export default function AboutPage() {
  return (
    <div className="py-8 md:py-12">
      <section>
        <p className="eyebrow">About</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-[color:var(--foreground)] md:text-6xl">
          About Parthsarthi Joshi
        </h1>
        <div className="prose-copy mt-6 max-w-4xl space-y-5">
          <p>{siteConfig.summary}</p>
          <p>{siteConfig.shortBio}</p>
        </div>
      </section>

      <section className="page-divider mt-10 grid gap-6 pt-10 md:grid-cols-2">
        <article className="surface-card rounded-2xl p-6">
          <p className="eyebrow">Quick Notes</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            {siteConfig.quickNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </article>

        <article className="surface-card rounded-2xl p-6">
          <p className="eyebrow">Reading</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-[color:var(--foreground)]">Currently reading</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[color:var(--muted)]">
                {siteConfig.currentReading.map((book) => (
                  <li key={book}>{book}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-[color:var(--foreground)]">Recently read</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[color:var(--muted)]">
                {siteConfig.recentReading.map((book) => (
                  <li key={book}>{book}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
