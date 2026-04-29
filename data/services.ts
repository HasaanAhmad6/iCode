export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const servicesServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];

export const servicesItems: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Build fast, secure, and scalable websites tailored to your business needs. From landing pages to enterprise platforms, we deliver performance and reliability.",
    image: "/assets/images/service-5.jpg",
    features: [
      "Responsive & mobile-first build",
      "SEO-friendly architecture",
      "Fast loading & optimized performance",
      "Scalable backend solutions",
    ],
  },
  {
    id: 2,
    title: "UI / UX Design",
    description:
      "Reach the right audience with data-driven strategies that drive measurable results. SEO, paid campaigns, content marketing, and analytics support.",
    image: "/assets/images/service-6.jpg",
    features: [
      "SEO & content strategy",
      "Paid advertising campaigns",
      "Social media marketing",
      "Performance analytics",
    ],
  },
  {
    id: 3,
    title: "Branding & Identity",
    description:
      "Craft a strong visual identity that reflects your brand’s values and personality. Logos, colors, typography, and full brand systems included.",
    image: "/assets/images/project-1.jpg",
    features: [
      "Logo & brand mark design",
      "Color & typography system",
      "Brand guidelines",
      "Visual identity assets",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Reach the right audience with data-driven strategies that drive measurable results. SEO, paid campaigns, content marketing, and analytics support.",
    image: "/assets/images/career-section-1.jpg",
    features: [
      "SEO and content strategy",
      "Paid acquisition campaigns",
      "Social media growth",
      "Analytics and performance reporting",
    ],
  },
  {
    id: 5,
    title: "Automation & Integrations",
    description:
      "Transform ideas into fully functional digital products with end-to-end development. We ensure seamless workflows, efficient builds, and scalability.",
    image: "/assets/images/career-section-2.jpg",
    features: [
      "Workflow automation",
      "Third-party integrations",
      "Process optimization",
      "Reduced manual workload",
    ],
  },
];
