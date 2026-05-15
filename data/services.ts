export type ServiceItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  heroImage?: string;
  overviewImage?: string;
  overview?: string;
  offerings?: Array<{
    title: string;
    description: string;
    icon: "user-search" | "layout-panel-left" | "pen-tool" | "workflow" | "layers" | "monitor-smartphone";
  }>;
  problems?: string[];
  impact?: string[];
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
    slug: "web-development",
    title: "Web Development",
    description:
      "Build fast, secure, and scalable websites tailored to your business needs. From landing pages to enterprise platforms, we deliver performance and reliability.",
    image: "/assets/images/service-5.jpg",
    heroImage: "/assets/images/service-5.jpg",
    overviewImage: "/assets/images/service-6.jpg",
    features: [
      "Responsive & mobile-first build",
      "SEO-friendly architecture",
      "Fast loading & optimized performance",
      "Scalable backend solutions",
    ],
    overview: "Our Web Development service creates fast, secure, and scalable digital solutions tailored to your business goals. From concept to deployment, we build websites and applications that drive measurable results.",
    offerings: [
      {
        title: "Frontend Development",
        description: "Modern, responsive interfaces built with React, Next.js, and Vue. Performance-optimized for speed and accessibility.",
        icon: "layout-panel-left",
      },
      {
        title: "Backend Solutions",
        description: "Scalable server architecture, APIs, and databases designed for reliability and growth.",
        icon: "workflow",
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast load times, SEO optimization, and Core Web Vitals excellence.",
        icon: "monitor-smartphone",
      },
    ],
    problems: [
      "Slow websites losing customers to competitors",
      "Poor mobile experience hurting conversions",
      "Outdated architecture limiting scalability",
      "Difficulty maintaining and updating legacy code",
      "Security vulnerabilities exposing data",
    ],
    impact: [
      "3x faster load times with optimized architecture",
      "40% increase in conversion rates",
      "Mobile-first design reaching more users",
      "Reduced hosting and maintenance costs",
      "Improved SEO rankings and visibility",
    ],
  },
  {
    id: 2,
    slug: "ui-ux-design",
    title: "UI / UX Design",
    description:
      "Create intuitive, user-centered interfaces that elevate engagement and help businesses deliver seamless digital experiences.",
    image: "/assets/images/service-6.jpg",
    heroImage: "/assets/images/service-6.jpg",
    overviewImage: "/assets/images/service-5.jpg",
    features: [
      "User research & strategy",
      "Wireframing & prototyping",
      "High-fidelity visual design",
      "Design system development",
    ],
    overview: "We create intuitive, user-centered interfaces that balance aesthetics and usability. Our UX/UI Design service combines research, strategy, and visual design to craft digital products that drive engagement and measurable business impact.",
    offerings: [
      {
        title: "User Research",
        description: "Deep dive into user behaviors, needs, and pain points through interviews, surveys, and usability studies.",
        icon: "user-search",
      },
      {
        title: "Wireframing & Prototyping",
        description: "Validate ideas early with low-fidelity wireframes and interactive prototypes before development.",
        icon: "layout-panel-left",
      },
      {
        title: "High-Fidelity UI Design",
        description: "Every screen crafted with attention to detail, ensuring modern, accessible, and intuitive experiences.",
        icon: "pen-tool",
      },
    ],
    problems: [
      "Confusing interfaces driving users away",
      "High support costs due to poor usability",
      "Inconsistent design across products",
      "Lack of design guidelines slowing teams",
      "Poor accessibility limiting audience reach",
    ],
    impact: [
      "50% reduction in user support tickets",
      "Higher user retention and satisfaction",
      "Faster task completion times",
      "Improved conversion rates",
      "Consistent brand experience",
    ],
  },
  {
    id: 3,
    slug: "branding-identity",
    title: "Branding & Identity",
    description:
      "Craft a strong visual identity that reflects your brand's values and personality. Logos, colors, typography, and full brand systems included.",
    image: "/assets/images/project-1.jpg",
    heroImage: "/assets/images/project-1.jpg",
    overviewImage: "/assets/images/service-5.jpg",
    features: [
      "Logo & brand mark design",
      "Color & typography system",
      "Brand guidelines",
      "Visual identity assets",
    ],
    overview: "Your brand identity is your first impression. We create cohesive, memorable visual identities that communicate your values, differentiate you from competitors, and resonate with your target audience.",
    offerings: [
      {
        title: "Logo Design",
        description: "Distinctive, scalable logos that work across all media and stand the test of time.",
        icon: "pen-tool",
      },
      {
        title: "Brand Guidelines",
        description: "Comprehensive brand documentation ensuring consistency across all touchpoints.",
        icon: "layers",
      },
      {
        title: "Visual System",
        description: "Color palettes, typography, imagery style, and design elements that define your brand.",
        icon: "layout-panel-left",
      },
    ],
    problems: [
      "Weak or inconsistent brand identity",
      "Difficult to communicate brand values",
      "Logo lacking differentiation",
      "No cohesive visual guidelines",
      "Brand inconsistency across channels",
    ],
    impact: [
      "2x increase in brand recognition",
      "Stronger emotional connection with customers",
      "Professional, cohesive brand presence",
      "Clear team guidance on brand usage",
      "Competitive advantage in market",
    ],
  },
  {
    id: 4,
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Reach the right audience with data-driven strategies that drive measurable results. SEO, paid campaigns, content marketing, and analytics support.",
    image: "/assets/images/career-section-1.jpg",
    heroImage: "/assets/images/career-section-1.jpg",
    overviewImage: "/assets/images/service-5.jpg",
    features: [
      "SEO and content strategy",
      "Paid acquisition campaigns",
      "Social media growth",
      "Analytics and performance reporting",
    ],
    overview: "Our Digital Marketing service combines strategy, creativity, and analytics to drive qualified leads and measurable growth. From SEO to paid ads, we optimize every channel for maximum ROI.",
    offerings: [
      {
        title: "SEO Strategy",
        description: "Organic growth through keyword research, content optimization, and technical SEO improvements.",
        icon: "workflow",
      },
      {
        title: "Paid Advertising",
        description: "High-ROI campaigns on Google Ads, Meta, LinkedIn, and other platforms with continuous optimization.",
        icon: "monitor-smartphone",
      },
      {
        title: "Content Marketing",
        description: "Compelling blog posts, videos, and resources that attract, engage, and convert your audience.",
        icon: "pen-tool",
      },
    ],
    problems: [
      "Low organic traffic and visibility",
      "High customer acquisition costs",
      "Poor conversion rates on ads",
      "Difficulty measuring ROI",
      "Inconsistent lead quality",
    ],
    impact: [
      "3x increase in organic traffic",
      "40% reduction in CAC",
      "Higher conversion rates",
      "Clear ROI tracking",
      "Consistent qualified leads",
    ],
  },
  {
    id: 5,
    slug: "automation-integrations",
    title: "Automation & Integrations",
    description:
      "Transform ideas into fully functional digital products with end-to-end development. We ensure seamless workflows, efficient builds, and scalability.",
    image: "/assets/images/career-section-2.jpg",
    heroImage: "/assets/images/career-section-2.jpg",
    overviewImage: "/assets/images/service-6.jpg",
    features: [
      "Workflow automation",
      "Third-party integrations",
      "Process optimization",
      "Reduced manual workload",
    ],
    overview: "Automate repetitive tasks and integrate your tools seamlessly. Our Automation & Integrations service eliminates manual work, reduces errors, and creates efficient workflows that scale with your business.",
    offerings: [
      {
        title: "Workflow Automation",
        description: "Automate repetitive tasks like data entry, reporting, and approvals using no-code and custom solutions.",
        icon: "workflow",
      },
      {
        title: "API Integrations",
        description: "Connect your tools and systems with custom APIs and integration platforms for seamless data flow.",
        icon: "layers",
      },
      {
        title: "Process Optimization",
        description: "Streamline operations by identifying bottlenecks and implementing efficient automation solutions.",
        icon: "monitor-smartphone",
      },
    ],
    problems: [
      "Manual processes wasting time and resources",
      "Data silos between disconnected systems",
      "High error rates in manual work",
      "Difficulty scaling operations",
      "Integration costs with multiple vendors",
    ],
    impact: [
      "70% reduction in manual work",
      "Fewer errors and rework",
      "Faster process execution",
      "Improved team productivity",
      "Scalable, maintainable systems",
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesItems.find((service) => service.slug === slug);
}

export function getServiceSlugs(): string[] {
  return servicesItems.map((service) => service.slug);
}

// ─── Service Navigation ────────────────────────────────────────────────────────
// Single source of truth for service navigation with title and slug pairs
export const serviceNav = servicesItems.map((service) => ({
  title: service.title,
  slug: service.slug,
}));
