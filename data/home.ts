export type HomeProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  tag: string;
};

export type HomeTestimonial = {
  id: number;
  company: string;
  subject: string;
  message: string;
  person_image: string;
  name: string;
  designation: string;
};

export const homeServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];

export const homeProjects: HomeProject[] = [
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
    title: "NovaCommerce Platform",
    description: "A scalable e-commerce platform built for speed, security, and growth.",
    image: "/assets/images/project-1.jpg",
    url: "/project-details",
    category: "Web Development",
    tag: "+42% conversion",
  },
  {
    id: 6,
    title: "Finly App Redesign",
    description: "A user-focused mobile experience redesigned for clarity and ease of use.",
    image: "/assets/images/project-1.jpg",
    url: "/project-details",
    category: "UX/UI Design",
    tag: "-38% user drop-off",
  },
];

export const homeTestimonials: HomeTestimonial[] = [
  {
    id: 1,
    company: "Technocrat Pvt. Ltd.",
    subject: "Execution was smooth, structured, and highly professional.",
    message:
      "The team demonstrated a strong understanding of our requirements from the start. Their ability to translate ideas into a functional and visually refined solution helped us move faster without compromising quality.",
    person_image: "/assets/images/client-3.png",
    name: "Petar Garcia",
    designation: "Product Lead",
  },
  {
    id: 2,
    company: "BlueOrbit Solutions",
    subject: "A rare balance of creativity and technical clarity.",
    message:
      "Every design and development decision was backed by logic and user insight. The final outcome aligned perfectly with our business objectives and user expectations.",
    person_image: "/assets/images/client-3.png",
    name: "Sophia Martinez",
    designation: "UX Manager",
  },
  {
    id: 3,
    company: "NextWave Digital",
    subject: "They delivered measurable impact, not just deliverables.",
    message:
      "From planning to execution, the process was transparent and result-oriented. We saw noticeable improvements in engagement and conversion within weeks of launch.",
    person_image: "/assets/images/client-3.png",
    name: "Daniel Thompson",
    designation: "Growth Head",
  },
  {
    id: 4,
    company: "BlueOrbit Solutions",
    subject: "A rare balance of creativity and technical clarity.",
    message:
      "Every design and development decision was backed by logic and user insight. The final outcome aligned perfectly with our business objectives and user expectations.",
    person_image: "/assets/images/client-3.png",
    name: "Sophia Martinez",
    designation: "UX Manager",
  },
];

export const homeClientLogos = Array.from({ length: 8 }, () => "/assets/images/logo.svg");
