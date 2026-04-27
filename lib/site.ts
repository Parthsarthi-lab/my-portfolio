export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Parthsarthi Joshi",
  role: "Founder, vijAI Robotics",
  headline:
    "I am an 18-year-old founder building toward serious work in AI, products, and robotics.",
  description:
    "Personal website of Parthsarthi Joshi, founder of vijAI Robotics, sharing long-term ambition across AI, videos, projects, and future writing.",
  keywords: [
    "Parthsarthi Joshi",
    "vijAI Robotics",
    "AI",
    "robotics",
    "projects",
    "videos",
    "blogs",
  ],
  summary:
    "I am from Haldwani, Uttarakhand, and I am building a founder journey around AI research, products, and robotics. vijAI Robotics is the long-term vehicle. Right now, this site is the simplest public record of who I am, what I am building, and where I am going.",
  shortBio:
    "I have worked on generating awareness about AI in my tier town through meetups, seminars, and classroom sessions, but my ambition goes much further: I want to build at the level of research, products, and robotics.",
  location: "Haldwani, Uttarakhand, India",
  email: "parthsarthi@vijairobotics.com",
  url: "https://parthsarthi.vijairobotics.com",
  heroQuote:
    "I am interested in building things that move intelligence from theory into the real world.",
  socialLinks: [
    { label: "Email", href: "mailto:parthsarthi@vijairobotics.com" },
    { label: "vijAI Robotics", href: "/projects" },
    { label: "Haldwani", href: "https://maps.google.com/?q=Haldwani" },
  ] satisfies SocialLink[],
  quickNotes: [
    "Inspired by Dr. A.P.J. Abdul Kalam's Reignited Mind.",
    "Currently thinking about AI research, products, robotics, and long-horizon company building.",
    "I also play guitar.",
  ],
  currentReading: [
    "Discovery of India",
    "Gaban",
    "Indian Ideas of Freedom",
    "Unequal",
    "Autobiography of a Yogi",
  ],
  recentReading: [
    "Nexus",
    "The Killing Floor",
    "The Innovation Secrets of Steve Jobs",
    "Elon Musk",
  ],
  ctas: {
    primary: {
      label: "View Projects",
      href: "/projects",
    },
    secondary: {
      label: "Watch Videos",
      href: "/videos",
    },
  },
};

export const navItems = [
  { label: "Blogs", href: "/blog" },
  { label: "Videos", href: "/videos" },
  { label: "Projects", href: "/projects" },
];
