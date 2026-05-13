// ─── Types ────────────────────────────────────────────────────────────────────

export type CaseStudyMetric = { value: string; label: string };
export type CaseStudyPhase  = { title: string; description: string };

export type CaseStudy = {
  slug:          string;
  client:        string;
  industry:      string;
  duration:      string;
  service:       string;
  heroImage:     string;
  overviewImage: string;
  tagline:       string;           // card summary line
  metrics:       CaseStudyMetric[];
  challenges:    string[];
  solutions:     string[];
  process:       CaseStudyPhase[];
  stats: {
    conversionUplift: number;
    dropoffReduction: number;
    deliveryDays:     number;
  };
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  {
    slug:          "novacommerce",
    client:        "NovaCommerce",
    industry:      "E-Commerce",
    duration:      "4 Months",
    service:       "Web Development + UX/UI Design",
    heroImage:     "/assets/images/project-1.jpg",
    overviewImage: "/assets/images/service-6.jpg",
    tagline:       "Redesigned platform that lifted conversions by 42% and cut checkout drop-off.",
    metrics: [
      { value: "+42%", label: "Conversion Rate" },
      { value: "-38%", label: "User Drop-off" },
      { value: "90d",  label: "Time to Launch" },
      { value: "4.9★", label: "Client Rating" },
    ],
    challenges: [
      "Outdated UI causing high bounce rates on product pages",
      "Slow load times hurting SEO and mobile experience",
      "Complex checkout flow reducing completed purchases",
      "No scalable design system for future development",
    ],
    solutions: [
      "Full UX audit and redesign of key user journeys",
      "Performance-optimized frontend with lazy loading",
      "Streamlined 3-step checkout with guest option",
      "Component library built for long-term scalability",
    ],
    process: [
      {
        title:       "Discovery & Research",
        description: "Stakeholder interviews, analytics review, and user-flow mapping to surface friction and align on goals.",
      },
      {
        title:       "Strategy & Wireframing",
        description: "Low-fidelity wireframes validated with real users before any visual investment, cutting revision cycles.",
      },
      {
        title:       "Design & Prototyping",
        description: "High-fidelity prototype covering desktop and mobile with full interaction states, signed off by stakeholders.",
      },
      {
        title:       "Development & QA",
        description: "Frontend built against design specs with cross-browser and performance testing before handoff.",
      },
    ],
    stats: { conversionUplift: 42, dropoffReduction: 38, deliveryDays: 90 },
  },
  {
    slug:          "finly",
    client:        "Finly",
    industry:      "FinTech",
    duration:      "3 Months",
    service:       "UX/UI Design + Mobile Development",
    heroImage:     "/assets/images/project-1.jpg",
    overviewImage: "/assets/images/service-6.jpg",
    tagline:       "User-focused mobile redesign that slashed drop-off by 38% across onboarding.",
    metrics: [
      { value: "-38%", label: "User Drop-off" },
      { value: "+29%", label: "Activation Rate" },
      { value: "60d",  label: "Time to Launch" },
      { value: "4.8★", label: "Client Rating" },
    ],
    challenges: [
      "Confusing onboarding losing 4 in 10 new sign-ups",
      "Inconsistent UI patterns across iOS and Android",
      "No component documentation slowing engineering",
      "Poor accessibility compliance risking app-store flags",
    ],
    solutions: [
      "Redesigned onboarding flow with contextual micro-copy",
      "Unified cross-platform design system",
      "Delivered full Figma component library with tokens",
      "WCAG 2.1 AA audit and remediation",
    ],
    process: [
      {
        title:       "Audit & Benchmarking",
        description: "Reviewed session recordings and app-store reviews to identify the highest-impact pain points.",
      },
      {
        title:       "Flow Redesign",
        description: "Reworked onboarding, dashboard, and transfer flows backed by usability-test findings.",
      },
      {
        title:       "Design System",
        description: "Built a shared token-based library keeping iOS and Android pixel-aligned.",
      },
      {
        title:       "Handoff & Support",
        description: "Annotated specs, live Q&A sessions, and post-launch design support for the engineering team.",
      },
    ],
    stats: { conversionUplift: 29, dropoffReduction: 38, deliveryDays: 60 },
  },
  {
    slug:          "bloomly",
    client:        "Bloomly",
    industry:      "Retail & Branding",
    duration:      "6 Weeks",
    service:       "Brand Identity + Marketing",
    heroImage:     "/assets/images/project-1.jpg",
    overviewImage: "/assets/images/service-6.jpg",
    tagline:       "Complete brand identity that doubled recall and unified all customer touch-points.",
    metrics: [
      { value: "2×",   label: "Brand Recall" },
      { value: "+55%", label: "Social Engagement" },
      { value: "6w",   label: "Turnaround" },
      { value: "5.0★", label: "Client Rating" },
    ],
    challenges: [
      "No coherent visual identity across channels",
      "Brand positioning unclear to target audience",
      "Inconsistent tone of voice in marketing copy",
      "Lack of scalable asset library for in-house team",
    ],
    solutions: [
      "Developed logo, palette, and typography system",
      "Created brand positioning framework and story",
      "Wrote voice & tone guidelines with usage examples",
      "Delivered an asset library in Figma and Adobe formats",
    ],
    process: [
      {
        title:       "Brand Discovery",
        description: "Workshops with founders to extract values, audience personas, and competitive positioning.",
      },
      {
        title:       "Concept Development",
        description: "Three distinct visual directions explored and narrowed through stakeholder voting.",
      },
      {
        title:       "Identity Refinement",
        description: "Winning concept refined with real-world mockups across packaging, web, and social.",
      },
      {
        title:       "Brand Guidelines",
        description: "Comprehensive PDF and Figma library handed off with onboarding call for the in-house team.",
      },
    ],
    stats: { conversionUplift: 55, dropoffReduction: 20, deliveryDays: 42 },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

// Shared nav service links (unchanged from original)
export const caseStudyServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];
