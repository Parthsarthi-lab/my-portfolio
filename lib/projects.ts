export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  year: string;
  status: string;
  featured: boolean;
  links: ProjectLink[];
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    slug: "founder-platform-and-thesis",
    title: "Founder Platform and Thesis",
    summary:
      "A high-trust public surface for establishing founder identity, communicating long-range thinking, and compounding credibility before traditional milestones fully arrive.",
    impact:
      "This site is part signal, part archive, part positioning system. It creates a coherent frame for future research notes, product launches, robotics work, and institutional relationships.",
    stack: ["Brand system", "Writing infrastructure", "Next.js", "Founder positioning"],
    year: "2026",
    status: "Active",
    featured: true,
    links: [{ label: "Read About", href: "/about" }],
    caseStudy:
      "The goal is not to pretend the empire already exists. The goal is to make the ambition legible enough that future work has a serious place to land.",
  },
  {
    slug: "ai-awareness-network-haldwani",
    title: "AI Awareness Network in Haldwani",
    summary:
      "Early founder-led efforts to make AI a visible local conversation through meetups, seminars, and public-facing awareness initiatives.",
    impact:
      "This is less about being an educator brand and more about creating an environment where technical ambition can take root in a tier town.",
    stack: ["Meetups", "Seminars", "Public speaking", "AI awareness"],
    year: "2026",
    status: "Ongoing",
    featured: true,
    links: [{ label: "Get in Touch", href: "/contact" }],
  },
  {
    slug: "vijai-robotics-long-horizon-build",
    title: "vijAI Robotics Long-Horizon Build",
    summary:
      "The earliest visible phase of a company intended to move toward meaningful work in AI research, intelligent products, and robotics.",
    impact:
      "Today this is a direction under construction. The point is to lay identity, thinking, and early execution foundations that can later scale into harder technical work.",
    stack: ["Founder strategy", "AI", "Products", "Robotics"],
    year: "2026",
    status: "In formation",
    featured: false,
    links: [{ label: "Mission", href: "/about" }],
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
