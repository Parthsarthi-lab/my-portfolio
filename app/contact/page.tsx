import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Parthsarthi Joshi.",
};

export default function ContactPage() {
  return (
    <div className="py-8 md:py-12">
      <section>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-[color:var(--foreground)] md:text-6xl">
          Contact
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
          For collaborations, videos, projects, speaking, or any serious conversation around
          AI and the work I am building, email is the best way to reach me.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`mailto:${siteConfig.email}`} className="button-primary">
            {siteConfig.email}
          </Link>
        </div>
      </section>
    </div>
  );
}
