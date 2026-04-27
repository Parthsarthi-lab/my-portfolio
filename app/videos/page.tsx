import type { Metadata } from "next";
import { videos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Videos and public-facing media from Parthsarthi Joshi across AI sessions, seminars, and awareness initiatives.",
};

export default function VideosPage() {
  return (
    <div className="py-8 md:py-12">
      <section>
        <p className="eyebrow">Videos</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-[color:var(--foreground)] md:text-6xl">
          Talks, classroom sessions, and AI awareness media.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
          This page is meant to hold the strongest current public proof of communication and
          execution: classroom sessions, seminars, and other video-based work.
        </p>
      </section>

      <section className="page-divider mt-10 space-y-8 pt-10">
        {videos.map((video, index) => (
          <div key={video.title} className="timeline-row">
            <div className="timeline-year">{index === 0 ? "Current" : "Archive"}</div>
            <div className="timeline-rail">
              <div className="timeline-dot" />
            </div>
            <article>
              <p className="text-2xl text-[color:var(--foreground)]">{video.title}</p>
              <p className="mt-3 max-w-4xl text-base leading-8 text-[color:var(--muted)]">
                {video.summary}
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground)]">
                {video.context}
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted-soft)]">{video.status}</p>
            </article>
          </div>
        ))}
      </section>
    </div>
  );
}
