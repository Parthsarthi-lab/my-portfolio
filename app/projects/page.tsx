import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and current build threads from Parthsarthi Joshi and the early visible arc of vijAI Robotics.",
};

export default function ProjectsPage() {
  return (
    <div className="py-8 md:py-12">
      <section>
        <p className="eyebrow">Projects</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-[color:var(--foreground)] md:text-6xl">
          Current projects, build threads, and the early visible shape of the mission.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
          These are not polished case studies yet. They are the active strands of work that
          currently define the public edge of my founder journey.
        </p>
      </section>

      <section className="page-divider mt-10 space-y-8 pt-10">
        {projects.map((project, index) => (
          <div key={project.slug} className="timeline-row">
            <div className="timeline-year">{index === 0 ? "Current" : project.year}</div>
            <div className="timeline-rail">
              <div className="timeline-dot" />
            </div>
            <article>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-2xl text-[color:var(--foreground)]">{project.title}</p>
                <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-[color:var(--muted-soft)]">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 max-w-4xl text-base leading-8 text-[color:var(--muted)]">
                {project.summary}
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground)]">
                {project.impact}
              </p>
              {project.caseStudy ? (
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {project.caseStudy}
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-[color:var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Link key={link.label} href={link.href} className="button-secondary">
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        ))}
      </section>
    </div>
  );
}
