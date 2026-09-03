export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  visual: "travel" | "music" | "workout" | "note" | "animals";
};

export const projects: Project[] = [
  {
    title: "TravelTrucks",
    description: "A camper rental platform for discovering, comparing and booking the right vehicle for your next adventure.",
    technologies: ["Next.js", "TypeScript"],
    liveUrl: "https://travel-trucks-five-rose.vercel.app/",
    githubUrl: "https://github.com/Kubyshkina-T/TravelTrucks",
    visual: "travel",
  },
  {
    title: "Music Portfolio",
    description: "A bold portfolio experience for a music artist, bringing releases, visuals and upcoming events together.",
    technologies: ["Next.js", "TypeScript", "Supabase" ],
    liveUrl: "https://music-portfolio-rose.vercel.app/",
    githubUrl: "https://github.com/Kubyshkina-T/music-portfolio",
    visual: "music",
  },
  {
    title: "AI Workout Planner",
    description: "A smart training assistant that creates personalized workout plans around goals, habits and progress.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    liveUrl: "https://ai-workout-planner-tan.vercel.app/",
    githubUrl: "https://github.com/Kubyshkina-T/ai-workout-planner",
    visual: "workout",
  },
  {
    title: "NoteHub",
    description: "NoteHub is a simple and efficient application designed for managing personal notes.",
    technologies: ["Next.js", "TypeScript"],
    liveUrl: "https://09-auth-eta-ebon.vercel.app/",
    githubUrl: "https://github.com/Kubyshkina-T/09-auth",
    visual: "note",
  },
  {
    title: "Animal Shelter",
    description: "This is a web application created to demonstrate the work of an animal shelter.",
    technologies: ["Vite", "JavaScript", "REST API"],
    liveUrl: "https://illiakumpan.github.io/js-project-7/",
    githubUrl: "https://github.com/Kubyshkina-T/Animal-Shelter-Team-Project-/tree/main/src",
    visual: "animals",
  },
];
