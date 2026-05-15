export type ChatRole = "user" | "assistant";

export type ChatSource = {
  title: string;
  url?: string | null;
  similarity?: number;
};

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  sources?: ChatSource[];
};

export type ChatQuickAction = {
  label: string;
  type: "link" | "lead" | "prompt";
  href?: string;
  prompt?: string;
  intent?: string;
};

export const chatQuickActions: ChatQuickAction[] = [
  { label: "View Services", type: "link", href: "/services" },
  { label: "View Case Studies", type: "link", href: "/case-studies" },
  { label: "Get a Quote", type: "lead", intent: "quote" },
  { label: "Book a Free Consultation", type: "lead", intent: "consultation" },
  { label: "Contact Us", type: "lead", intent: "contact" },
  { label: "Talk to Human Support", type: "lead", intent: "support" },
];

export const chatbotWelcomeMessage =
  "Hi, I’m the iCode assistant. I can help with services, projects, blogs, case studies, pricing, and contact options. Ask me anything or pick one of the quick actions.";

export const chatbotFallbackMessage =
  "I do not have exact information for that in the website context. If you want, I can connect you with the team, prepare a quote, or book a free consultation.";

export const chatbotSystemPrompt =
  "You are the website assistant for this software house. Answer only using the provided website context. If the answer is not available in the context, say that you do not have exact information and suggest contacting the team. Never invent pricing, project timelines, guarantees, or services. For project-specific questions, guide the user to Get a Quote or Book a Free Consultation.";