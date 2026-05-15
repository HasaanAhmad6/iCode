export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author_name: string;
  author_image: string;
  date: string;
  readTime?: string;
  heroImage?: string;
  inlineImage?: string;
  takeaways?: string[];
  overview?: string;
};

export const blogServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];

export const blogFeaturedPost = {
  title: "5 Ways to improve operational efficiency in 2025",
  description: "A practical guide to streamlining workflows and boosting team productivity.",
  category: "Digital Transformation",
  image: "/assets/images/main-banner.jpg",
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "5-ways-to-improve-operational-efficiency-in-2025",
    title: "5 Ways to improve operational efficiency in 2025",
    description:
      "Practical steps companies can take to streamline processes and reduce inefficiencies.",
    image: "/assets/images/main-banner.jpg",
    category: "Digital Transformation",
    author_name: "Matthew Brown",
    author_image: "/assets/images/client-3.png",
    date: "May 7, 2025",
    readTime: "5 min read",
    heroImage: "/assets/images/main-banner.jpg",
    inlineImage: "/assets/images/project-1.jpg",
    overview: "As businesses enter 2025, the pressure to operate faster, leaner, and more intelligently continues to rise. Companies that thrive this year are streamlining operations, automating repetitive tasks, and using data to make smarter decisions.",
    takeaways: [
      "Automating manual tasks saves teams hundreds of hours annually.",
      "Real-time data helps businesses make faster, more accurate decisions.",
      "Cloud adoption remains a top driver of cost savings and performance improvements.",
      "AI and analytics help identify and resolve operational bottlenecks earlier.",
      "Collaboration tools and robust workflows significantly enhance team productivity.",
    ],
  },
  {
    id: 2,
    slug: "building-customer-centric-business-strategy",
    title: "Building a Customer-Centric Business Strategy",
    description:
      "A practical overview of aligning products, services, and processes around customer needs and expectations.",
    image: "/assets/images/main-banner.jpg",
    category: "Business Strategy",
    author_name: "Kenneth Brown",
    author_image: "/assets/images/client-3.png",
    date: "May 7, 2025",
    readTime: "6 min read",
    heroImage: "/assets/images/main-banner.jpg",
    inlineImage: "/assets/images/project-1.jpg",
    overview: "In today's competitive market, businesses that prioritize customer needs win. A customer-centric strategy aligns every team—product, marketing, sales, and support—around solving customer problems and delivering exceptional value.",
    takeaways: [
      "Customer feedback should drive product roadmaps and feature priorities.",
      "Alignment across teams creates seamless customer experiences.",
      "Data-driven personalization increases customer lifetime value.",
      "Transparency and responsiveness build customer loyalty.",
      "Investing in customer success directly impacts business growth.",
    ],
  },
  {
    id: 3,
    slug: "role-of-data-analytics-in-smarter-decision-making",
    title: "The Role of Data Analytics in Smarter Decision-Making",
    description:
      "Data-driven insights are helping leaders make faster and more accurate business decisions.",
    image: "/assets/images/main-banner.jpg",
    category: "Data & Analytics",
    author_name: "Lisa Rodriguez",
    author_image: "/assets/images/client-3.png",
    date: "December 11, 2025",
    readTime: "7 min read",
    heroImage: "/assets/images/main-banner.jpg",
    inlineImage: "/assets/images/project-1.jpg",
    overview: "Organizations that leverage data analytics gain a competitive edge. By transforming raw data into actionable insights, businesses can optimize operations, reduce risks, and identify new growth opportunities.",
    takeaways: [
      "Real-time analytics enable faster decision-making and agility.",
      "Predictive analytics help identify risks before they escalate.",
      "Customer analytics drive more targeted marketing and personalization.",
      "Operational analytics reveal efficiency gaps and cost-saving opportunities.",
      "Data literacy across teams accelerates business transformation.",
    ],
  },
  {
    id: 4,
    slug: "strengthening-cybersecurity-in-remote-work-era",
    title: "Strengthening Cybersecurity in a Remote Work Era",
    description:
      "With distributed teams becoming the norm, cybersecurity risks are evolving rapidly.",
    image: "/assets/images/main-banner.jpg",
    category: "Cybersecurity",
    author_name: "Jahari Okoro",
    author_image: "/assets/images/client-3.png",
    date: "November 8, 2025",
    readTime: "6 min read",
    heroImage: "/assets/images/main-banner.jpg",
    inlineImage: "/assets/images/project-1.jpg",
    overview: "Remote work has expanded the attack surface for cyber threats. Organizations must implement comprehensive security strategies that protect both corporate data and employee devices across distributed networks.",
    takeaways: [
      "VPN and zero-trust architecture are essential for remote security.",
      "Employee cybersecurity training reduces phishing and social engineering attacks.",
      "Multi-factor authentication is no longer optional—it's critical.",
      "Regular security audits identify and close vulnerabilities.",
      "Incident response plans minimize breach impact and recovery time.",
    ],
  },
  {
    id: 5,
    slug: "sustainable-practices-for-responsible-business-growth",
    title: "Sustainable Practices for Responsible Business Growth",
    description:
      "Learn how companies are integrating ESG principles into their growth strategies.",
    image: "/assets/images/main-banner.jpg",
    category: "Sustainability",
    author_name: "Jonathan Martinez",
    author_image: "/assets/images/client-3.png",
    date: "November 18, 2025",
    readTime: "5 min read",
    heroImage: "/assets/images/main-banner.jpg",
    inlineImage: "/assets/images/project-1.jpg",
    overview: "Sustainability is no longer a corporate responsibility afterthought—it's a business imperative. Companies that embed ESG principles into operations report stronger financials, talent retention, and customer loyalty.",
    takeaways: [
      "ESG strategies reduce operational costs and environmental impact.",
      "Sustainable practices attract environmentally conscious customers and talent.",
      "Supply chain transparency builds trust and reduces supply-chain risks.",
      "Carbon reduction initiatives strengthen brand reputation.",
      "Diversity and inclusion drive innovation and business performance.",
    ],
  },
  {
    id: 6,
    slug: "leadership-trends-shaping-future-of-work",
    title: "Leadership Trends Shaping the Future of Work",
    description:
      "Modern leadership requires adaptability, empathy, and innovation.",
    image: "/assets/images/main-banner.jpg",
    category: "Leadership & Management",
    author_name: "Maria Novak",
    author_image: "/assets/images/client-3.png",
    date: "July 16, 2025",
    readTime: "6 min read",
    heroImage: "/assets/images/main-banner.jpg",
    inlineImage: "/assets/images/project-1.jpg",
    overview: "The future of work demands a new breed of leader. Successful leaders combine technical knowledge with emotional intelligence, embrace flexibility, and foster cultures of trust and continuous learning.",
    takeaways: [
      "Empathetic leadership improves team engagement and retention.",
      "Distributed leadership models scale decision-making and ownership.",
      "Continuous learning mindsets drive organizational agility.",
      "Psychological safety enables innovation and risk-taking.",
      "Purpose-driven leadership attracts and retains top talent.",
    ],
  },
];

export const blogCategories = ["All", ...new Set(blogPosts.map((blog) => blog.category))];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
