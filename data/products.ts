export type ProductItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  price: string;
  tag: string;
};

export const productsServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];

export const productsList: ProductItem[] = [
  {
    id: 1,
    title: "NovaCommerce Starter Kit",
    description:
      "A ready-to-deploy e-commerce starter with cart, checkout, and payment integration built for speed and scalability.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    url: "https://example.com/products/novacommerce",
    price: "$149",
    tag: "Best Seller",
  },
  {
    id: 2,
    title: "AdminPro Dashboard UI",
    description:
      "A fully responsive admin dashboard template with dark mode, charts, and modular components for SaaS applications.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    url: "https://example.com/products/adminpro",
    price: "$89",
    tag: "New",
  },
  {
    id: 3,
    title: "SEO Audit Toolkit",
    description:
      "A comprehensive SEO analysis tool that scans your website and delivers actionable insights to boost your search ranking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    url: "https://example.com/products/seo-toolkit",
    price: "$59",
    tag: "Popular",
  },
  {
    id: 4,
    title: "BrandKit Pro",
    description:
      "An all-in-one brand identity package including logo templates, color palettes, and typography systems ready for production.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    url: "https://example.com/products/brandkit",
    price: "$119",
    tag: "Bundle",
  },
  {
    id: 5,
    title: "Landing Page Builder",
    description:
      "A drag-and-drop landing page builder with conversion-focused templates, A/B testing support, and analytics integration.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    url: "https://example.com/products/landing-builder",
    price: "$99",
    tag: "Top Rated",
  },
  {
    id: 6,
    title: "AutoEmail Campaign Suite",
    description:
      "A powerful email automation suite with drip campaign builder, audience segmentation, and real-time performance tracking.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    url: "https://example.com/products/autoemail",
    price: "$79",
    tag: "Launch Offer",
  },
];