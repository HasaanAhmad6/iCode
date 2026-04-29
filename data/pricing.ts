export type PricingPlan = {
  title: string;
  description: string;
  cta: string;
  featured: boolean;
  benefits: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    title: "Essential",
    description: "Get a professional online presence at a fraction of agency costs.",
    cta: "Get Started",
    featured: false,
    benefits: [
      "Professional website setup",
      "Mobile-responsive design",
      "Up to 5 core pages",
      "Basic branding elements",
      "Standard support (Email)",
      "Monthly analytics overview",
    ],
  },
  {
    title: "Professional",
    description: "Unlock premium features while saving 40% vs. custom builds.",
    cta: "Choose Professional",
    featured: true,
    benefits: [
      "Everything in Essential",
      "Up to 15 pages included",
      "Priority support (Email + Chat)",
      "Advanced on-page SEO",
      "Conversion-focused UX enhancements",
      "Integration with marketing tools",
    ],
  },
  {
    title: "Business Plus",
    description: "Get enterprise-level capabilities for up to 50% less than agency retainers.",
    cta: "Upgrade to Business Plus",
    featured: false,
    benefits: [
      "Everything in Professional",
      "Unlimited pages & modules",
      "Dedicated account manager",
      "Monthly performance strategy call",
      "Automation workflow setup",
      "Detailed analytics & reporting",
    ],
  },
];
