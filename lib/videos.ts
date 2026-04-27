export type VideoItem = {
  title: string;
  summary: string;
  context: string;
  status: string;
};

export const videos: VideoItem[] = [
  {
    title: "AI Classroom Sessions",
    summary:
      "Founder-led teaching clips where I explain AI and data science concepts directly to students.",
    context: "Current proof of communication, clarity, and technical seriousness.",
    status: "Footage available to publish",
  },
  {
    title: "AI Awareness Meetups",
    summary:
      "Public-facing sessions designed to make AI feel approachable and ambitious in Haldwani.",
    context: "This work shows local ecosystem building, not just instruction.",
    status: "Media to be added",
  },
  {
    title: "Seminars and Public Talks",
    summary:
      "Seminar-style appearances around AI awareness, opportunity, and long-term technological change.",
    context: "A visible bridge between early-stage founder identity and public thought leadership.",
    status: "Archive in progress",
  },
];
