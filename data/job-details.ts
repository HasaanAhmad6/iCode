// ─── Types ────────────────────────────────────────────────────────────────────────

export type JobPosting = {
  id: number;
  slug: string;
  title: string;
  description: string;
  location: string;
  experience: string;
  type: string;
  datePosted?: string; // ISO date string (e.g., "2025-05-14")
  validThrough?: string; // ISO date string (e.g., "2025-08-14")
  overview?: string;
  responsibilities?: string[];
  skills?: string[];
  whatWeOffer?: string[];
  benefits?: string[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const jobDetailsServiceLinks = [
  "Web Development",
  "Brand Identity",
  "Product Design",
  "Marketing Solutions",
  "UI/UX Design",
  "Social Media Management",
];

export const jobs: JobPosting[] = [
  {
    id: 1,
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "We are looking for a skilled UI/UX Designer to create intuitive, user-centered digital experiences.",
    location: "Onsite",
    experience: "2-4 Years",
    type: "Full-time",
    datePosted: "2025-03-01",
    validThrough: "2025-08-14",
    overview: "We are looking for a skilled UI/UX Designer who can translate business requirements into intuitive, user-centered digital experiences. The role involves working closely with product, development, and business teams to design interfaces that are functional, consistent, and aligned with brand standards.",
    responsibilities: [
      "Design user interfaces for web and mobile applications based on product requirements",
      "Create wireframes, user flows, prototypes, and high-fidelity visual designs",
      "Conduct basic user research and usability testing to validate design decisions",
      "Collaborate with product managers and developers throughout the design lifecycle",
      "Maintain and evolve design systems, components, and style guidelines",
      "Ensure designs are consistent, accessible, and responsive across devices",
      "Incorporate feedback while maintaining usability and design integrity",
    ],
    skills: [
      "2-4 years of professional experience in UI/UX design",
      "Strong understanding of user-centered design principles",
      "Proficiency in design tools such as Figma, Adobe XD, or Sketch",
      "Experience designing responsive web and mobile interfaces",
      "Ability to present and clearly explain design decisions",
      "Working knowledge of design systems and component libraries",
      "Good communication and collaboration skills",
    ],
    whatWeOffer: [
      "A structured and professional work environment",
      "Clear roles, responsibilities, and expectations",
      "Opportunities for learning and skill development",
      "Collaborative team culture with accessible leadership",
      "Competitive compensation aligned with experience",
      "Work-life balance policies and standard company benefits",
    ],
    benefits: [
      "Competitive pay",
      "Health insurance",
      "Paid leave",
      "Work-life balance",
      "Stable employment",
      "Learning support",
      "Performance reviews",
      "Flexible hours",
    ],
  },
  {
    id: 2,
    slug: "frontend-developer",
    title: "Frontend Developer",
    description: "Join our team as a Frontend Developer and build modern, responsive web applications using React and Next.js.",
    location: "Onsite",
    experience: "2-5 Years",
    type: "Full-time",
    datePosted: "2025-04-15",
    validThrough: "2025-08-14",
    overview: "We are seeking a talented Frontend Developer to build modern, performant web interfaces. You'll work with React, Next.js, and TypeScript to create seamless user experiences while collaborating with designers and backend engineers.",
    responsibilities: [
      "Develop responsive user interfaces using React, Next.js, and Tailwind CSS",
      "Implement pixel-perfect designs and ensure cross-browser compatibility",
      "Optimize frontend performance and Core Web Vitals",
      "Collaborate with UX/UI designers to translate designs into code",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and contribute to team best practices",
      "Debug and troubleshoot issues reported by QA and users",
    ],
    skills: [
      "3-5 years of professional frontend development experience",
      "Advanced proficiency in React and Next.js",
      "Strong knowledge of JavaScript ES6+ and TypeScript",
      "Experience with state management (Redux, Zustand, or similar)",
      "Familiarity with CSS preprocessors and utility-first CSS",
      "Understanding of responsive design and mobile-first approach",
      "Git version control and modern development workflows",
    ],
    whatWeOffer: [
      "Opportunity to work on cutting-edge web technologies",
      "Mentorship from senior developers",
      "Professional development and training budget",
      "Collaborative and innovative team environment",
      "Competitive salary and performance bonuses",
      "Flexible work arrangements",
    ],
    benefits: [
      "Competitive pay",
      "Health insurance",
      "Paid leave (20 days annually)",
      "Remote work flexibility",
      "Professional development allowance",
      "Performance bonuses",
      "Team outings and events",
      "Career growth opportunities",
    ],
  },
  {
    id: 3,
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    description: "Build end-to-end web applications. We're looking for a Full Stack Developer skilled in both frontend and backend technologies.",
    location: "Onsite",
    experience: "3-6 Years",
    type: "Full-time",
    datePosted: "2025-05-01",
    validThrough: "2025-08-14",
    overview: "We are looking for an experienced Full Stack Developer who can own the complete development lifecycle—from designing scalable backend APIs to building intuitive frontend interfaces. You'll work with modern technologies and collaborate with cross-functional teams to deliver high-quality solutions.",
    responsibilities: [
      "Design and develop scalable backend services and REST APIs",
      "Build responsive and performant frontend interfaces",
      "Design and optimize database schemas",
      "Implement security best practices and authentication mechanisms",
      "Deploy and maintain applications in cloud environments",
      "Mentor junior developers and conduct code reviews",
      "Contribute to architecture decisions and technical planning",
    ],
    skills: [
      "4-6 years of professional full-stack development experience",
      "Strong backend experience (Node.js, Python, Java, or similar)",
      "Proficiency in React or Vue.js for frontend development",
      "Experience with SQL and NoSQL databases",
      "Knowledge of RESTful API design and microservices",
      "Familiarity with cloud platforms (AWS, GCP, or Azure)",
      "Git and CI/CD pipelines",
    ],
    whatWeOffer: [
      "Lead ownership of key projects",
      "Opportunity to influence technical decisions",
      "Learning and development budget",
      "Collaborative and innovative environment",
      "Competitive compensation package",
      "Career advancement opportunities",
    ],
    benefits: [
      "Competitive pay + performance bonus",
      "Comprehensive health coverage",
      "Generous paid leave (25 days annually)",
      "Remote-first culture",
      "Technology budget for learning",
      "Stock options (eligible after 1 year)",
      "Quarterly team retreats",
      "Clear career progression path",
    ],
  },
];

// Keep legacy exports for backward compatibility with existing pages
export const jobDetailsHero = jobs[0];
export const jobDetailsResponsibilities = jobs[0].responsibilities || [];
export const jobDetailsSkillsQualifications = jobs[0].skills || [];
export const jobDetailsWhatWeOffer = jobs[0].whatWeOffer || [];
export const jobDetailsBenefits = jobs[0].benefits || [];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getJobBySlug(slug: string): JobPosting | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getJobSlugs(): string[] {
  return jobs.map((job) => job.slug);
}
