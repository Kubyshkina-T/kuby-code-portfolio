export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  visual: "travel" | "music" | "workout" | "story";
};

export const projects: Project[] = [
  {
    title: "TravelTrucks",
    description: "A camper rental platform for discovering, comparing and booking the right vehicle for your next adventure.",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    visual: "travel",
  },
  {
    title: "Music Portfolio",
    description: "A bold portfolio experience for a music artist, bringing releases, visuals and upcoming events together.",
    technologies: ["React", "CSS", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    visual: "music",
  },
  {
    title: "AI Workout Planner",
    description: "A smart training assistant that creates personalized workout plans around goals, habits and progress.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    visual: "workout",
  },
  {
    title: "Story Creation Page",
    description: "A focused, distraction-free workspace for drafting, organizing and developing stories with ease.",
    technologies: ["React", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    visual: "story",
  },
];
