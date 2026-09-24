export type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  visualLabel: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Smart Bus Tracking and Management System",
    description:
      "A full-stack transportation project exploring connected, real-time web experiences and operational tools.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Leaflet",
    ],
    visualLabel: "Transit / Real-time",
    featured: true,
    githubUrl: "",
    liveUrl: "",
  },
  {
    number: "02",
    title: "MERN Personal Expense Tracker",
    description:
      "A personal finance application built to practice a complete MERN data flow from interface to database.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    visualLabel: "Finance / MERN",
    featured: false,
    githubUrl: "",
    liveUrl: "",
  },
  {
    number: "03",
    title: "Next.js Blog Platform",
    description:
      "A content platform developed while learning typed Next.js applications, persistence, and authentication concepts.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "JWT"],
    visualLabel: "Publishing / Next.js",
    featured: false,
    githubUrl: "",
    liveUrl: "",
  },
];
