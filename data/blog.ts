export type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  author_name: string;
  author_image: string;
  date: string;
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
    title: "5 Ways to improve operational efficiency in 2025",
    description:
      "Practical steps companies can take to streamline processes and reduce inefficiencies.",
    image: "/assets/images/main-banner.jpg",
    category: "Digital Transformation",
    author_name: "Matthew Brown",
    author_image: "/assets/images/client-3.png",
    date: "May 7, 2025",
  },
  {
    id: 2,
    title: "Building a Customer-Centric Business Strategy",
    description:
      "A practical overview of aligning products, services, and processes around customer needs and expectations.",
    image: "/assets/images/main-banner.jpg",
    category: "Business Strategy",
    author_name: "Kenneth Brown",
    author_image: "/assets/images/client-3.png",
    date: "May 7, 2025",
  },
  {
    id: 3,
    title: "The Role of Data Analytics in Smarter Decision-Making",
    description:
      "Data-driven insights are helping leaders make faster and more accurate business decisions.",
    image: "/assets/images/main-banner.jpg",
    category: "Data & Analytics",
    author_name: "Lisa Rodriguez",
    author_image: "/assets/images/client-3.png",
    date: "December 11, 2025",
  },
  {
    id: 4,
    title: "Strengthening Cybersecurity in a Remote Work Era",
    description:
      "With distributed teams becoming the norm, cybersecurity risks are evolving rapidly.",
    image: "/assets/images/main-banner.jpg",
    category: "Cybersecurity",
    author_name: "Jahari Okoro",
    author_image: "/assets/images/client-3.png",
    date: "November 8, 2025",
  },
  {
    id: 5,
    title: "Sustainable Practices for Responsible Business Growth",
    description:
      "Learn how companies are integrating ESG principles into their growth strategies.",
    image: "/assets/images/main-banner.jpg",
    category: "Sustainability",
    author_name: "Jonathan Martinez",
    author_image: "/assets/images/client-3.png",
    date: "November 18, 2025",
  },
  {
    id: 6,
    title: "Leadership Trends Shaping the Future of Work",
    description:
      "Modern leadership requires adaptability, empathy, and innovation.",
    image: "/assets/images/main-banner.jpg",
    category: "Leadership & Management",
    author_name: "Maria Novak",
    author_image: "/assets/images/client-3.png",
    date: "July 16, 2025",
  },
];

export const blogCategories = ["All", ...new Set(blogPosts.map((blog) => blog.category))];
