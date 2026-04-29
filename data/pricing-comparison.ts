import type { FaqItem } from "@/components/FaqAccordion";

export const pricingComparisonServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];

export type ComparisonSection = {
  title: string;
  items: {
    name: string;
    essential: boolean;
    pro: boolean;
    business: boolean;
  }[];
};

export const pricingComparisonSections: ComparisonSection[] = [
  {
    title: "Core Features",
    items: [
      { name: "Mobile-responsive design", essential: true, pro: true, business: true },
      { name: "Fast loading performance", essential: true, pro: true, business: true },
      { name: "SEO-ready foundation", essential: true, pro: true, business: true },
      { name: "Security & maintenance updates", essential: true, pro: true, business: true },
    ],
  },
  {
    title: "Support & Communication",
    items: [
      { name: "Email support", essential: true, pro: true, business: true },
      { name: "Priority chat support", essential: false, pro: true, business: true },
      { name: "Dedicated account manager", essential: false, pro: false, business: true },
      { name: "Scheduled review calls", essential: false, pro: false, business: true },
    ],
  },
  {
    title: "Website Features",
    items: [
      { name: "Up to 5 pages", essential: true, pro: false, business: false },
      { name: "Up to 15 pages", essential: false, pro: true, business: false },
      { name: "Unlimited pages", essential: false, pro: false, business: true },
      { name: "Custom UI enhancements", essential: false, pro: true, business: true },
      { name: "Advanced SEO optimization", essential: false, pro: true, business: true },
      { name: "Analytics dashboard integration", essential: false, pro: true, business: true },
    ],
  },
  {
    title: "Performance & Optimization",
    items: [
      { name: "Standard performance tuning", essential: true, pro: true, business: true },
      { name: "Advanced optimization", essential: false, pro: true, business: true },
      { name: "Conversion & funnel insights", essential: false, pro: true, business: true },
      { name: "Quarterly strategy review", essential: false, pro: false, business: true },
      { name: "Multi-device optimization", essential: true, pro: true, business: true },
    ],
  },
];

export const pricingComparisonFaqs: FaqItem[] = [
  {
    id: 1,
    question: "Do you offer revisions?",
    answer:
      "Yes, we provide revisions based on the scope defined in the agreement. The number of revisions and turnaround time depend on the selected service package.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, UPI, net banking, and other approved digital payment methods. Payment terms may vary for corporate clients.",
  },
  {
    id: 3,
    question: "What is the project delivery timeline?",
    answer:
      "Project timelines vary based on scope and requirements. A detailed delivery schedule is shared after requirement analysis and project confirmation.",
  },
  {
    id: 4,
    question: "Do you provide post-delivery support?",
    answer:
      "Yes, we offer post-delivery support as per the agreed service terms. Ongoing maintenance and support plans are also available.",
  },
  {
    id: 5,
    question: "How do you handle changes or urgent requests?",
    answer:
      "Change requests and urgent requirements are evaluated based on impact and feasibility. Additional timelines or costs may apply after approval.",
  },
];
