export type AboutValueIcon = "badge-check" | "rocket" | "lightbulb" | "shield-check";

export type AboutValue = {
  number: string;
  icon: AboutValueIcon;
  title: string;
  description: string;
};

export const aboutServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];

export const aboutValues: AboutValue[] = [
  {
    number: "01",
    icon: "badge-check",
    title: "Excellence",
    description:
      "To deliver meaningful digital experiences that help businesses grow, thrive, and stay future-ready. We combine industry expertise with a human-centric approach to create solutions that stand the test of time.",
  },
  {
    number: "02",
    icon: "rocket",
    title: "Collaboration",
    description:
      "We believe great outcomes are built together, through open communication and shared understanding. Our clients are true partners, and we work side-by-side to turn goals into impactful solutions.",
  },
  {
    number: "03",
    icon: "lightbulb",
    title: "Innovation",
    description:
      "We stay forward-thinking by embracing new ideas, modern tools, and evolving industry trends. Innovation drives our solutions, helping businesses stay competitive and future-ready.",
  },
  {
    number: "04",
    icon: "shield-check",
    title: "Integrity",
    description:
      "We build lasting relationships through transparency, honesty, and dependable communication. Integrity guides every decision we make, ensuring trust and accountability at every step.",
  },
];

export const aboutJourneys = [
  {
    year: "2016",
    title: "The Beginning",
    description:
      "We started as a small team with a big vision: to help businesses grow through thoughtful design and technology.",
  },
  {
    year: "2019 - 2021",
    title: "Expanding Our Capabilities",
    description:
      "As our clients' needs grew, so did our expertise across product design, development, and digital strategy.",
  },
  {
    year: "2021 - 2023",
    title: "Serving Global Clients",
    description:
      "Our work reached international markets, partnering with teams across industries and time zones.",
  },
  {
    year: "2024 - 2025",
    title: "Scaling With Innovation",
    description:
      "We embraced modern technologies, automation, and scalable systems to elevate our services.",
  },
];

export const aboutTeams = [
  { image: "/assets/images/career-section-1.jpg", name: "Amanda Harris", designation: "Founder & Product Strategist" },
  { image: "/assets/images/career-section-2.jpg", name: "Josh Brown", designation: "Senior Full-Stack Developer" },
  { image: "/assets/images/main-banner.jpg", name: "Maria Milevski", designation: "Lead UI/UX Designer" },
  { image: "/assets/images/service-5.jpg", name: "Cynthia Jones", designation: "Brand & Marketing Lead" },
  { image: "/assets/images/service-6.jpg", name: "Manuel Castro", designation: "Automation & Systems Architect" },
  { image: "/assets/images/sticky-notes.jpg", name: "Ethan Horvat", designation: "Project & Client Success Manager" },
];

export const aboutTestimonials = [
  {
    company: "Technocrat Pvt. Ltd.",
    subject: "Execution was smooth, structured, and highly professional.",
    message:
      "The team demonstrated a strong understanding of our requirements from the start. Their ability to translate ideas into a functional and visually refined solution helped us move faster without compromising quality.",
    person_image: "/assets/images/client-3.png",
    name: "Petar Garcia",
    designation: "Product Lead",
  },
  {
    company: "BlueOrbit Solutions",
    subject: "A rare balance of creativity and technical clarity.",
    message:
      "Every design and development decision was backed by logic and user insight. The final outcome aligned perfectly with our business objectives and user expectations.",
    person_image: "/assets/images/client-3.png",
    name: "Sophia Martinez",
    designation: "UX Manager",
  },
];

export const aboutPosts = [
  "/assets/images/career-section-1.jpg",
  "/assets/images/career-section-2.jpg",
  "/assets/images/main-banner.jpg",
  "/assets/images/service-5.jpg",
  "/assets/images/service-6.jpg",
  "/assets/images/sticky-notes.jpg",
];
