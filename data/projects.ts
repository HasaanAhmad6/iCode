export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  tag: string;
};

export const projectsServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];

export const projectsList: ProjectItem[] = [
  {
    id: 1,
    title: "NovaCommerce Platform",
    description: "A scalable e-commerce platform built for speed, security, and growth.",
    image: "/assets/images/project-1.jpg",
    url: "/project-details",
    category: "Web Development",
    tag: "+42% conversion",
  },
  {
    id: 2,
    title: "Finly App Redesign",
    description: "A user-focused mobile experience redesigned for clarity and ease of use.",
    image: "/assets/images/project-1.jpg",
    url: "/project-details",
    category: "UX/UI Design",
    tag: "-38% user drop-off",
  },
  {
    id: 3,
    title: "Bloomly Brand Identity",
    description: "A modern visual identity crafted to reflect trust and innovation.",
    image: "/assets/images/project-1.jpg",
    url: "/project-details",
    category: "Branding",
    tag: "2x brand recall",
  },
  {
    id: 4,
    title: "GrowFast Campaign",
    description: "A performance-driven digital campaign optimized for qualified leads.",
    image: "/assets/images/project-1.jpg",
    url: "/project-details",
    category: "Digital Marketing",
    tag: "+61% lead growth",
  },
  {
    id: 5,
    title: "Pulse SaaS Product",
    description: "An end-to-end SaaS product designed and developed from idea to launch.",
    image: "/assets/images/project-1.jpg",
    url: "/project-details",
    category: "Product Development",
    tag: "Launched in 90 days",
  },
  {
    id: 6,
    title: "AutoFlow Operations System",
    description: "Automated internal workflows to eliminate manual processes and delays.",
    image: "/assets/images/project-1.jpg",
    url: "/project-details",
    category: "Automation",
    tag: "-55% operational time",
  },
];

export const projectsCategories = ["All", ...new Set(projectsList.map((project) => project.category))];
