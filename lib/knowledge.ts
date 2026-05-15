import { homeProjects, homeTestimonials } from "@/data/home";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";
import { faqItems } from "@/data/faq";
import { contactBudgets, contactInterests, contactTimelines } from "@/data/contact";
import { pricingPlans } from "@/data/pricing";
import { servicesItems } from "@/data/services";
import { legalServiceLinks, privacyPolicySections, termsSections } from "@/data/legal";
import { chunkText, embedTexts } from "@/lib/embeddings";
import type { KnowledgeChunkRecord, KnowledgeDocument } from "@/lib/vector-search";
import { upsertKnowledgeChunks } from "@/lib/vector-search";

function textFromList(title: string, items: string[]) {
  return `${title}\n${items.map((item) => `- ${item}`).join("\n")}`;
}

export function getWebsiteKnowledgeDocuments(): KnowledgeDocument[] {
  return [
    {
      sourceId: "home-hero",
      sourceType: "home",
      title: "Homepage overview",
      url: "/",
      content:
        "iCode Software House helps businesses streamline operations, elevate brand presence, and grow with trusted technology and design. The homepage highlights web development, UI/UX design, marketing, product design, brand identity, and app development.",
      summary: "Homepage positioning and core service overview.",
    },
    {
      sourceId: "custom-software-erp",
      sourceType: "service",
      title: "Custom software and ERP-style systems",
      url: "/services/automation-integrations",
      content:
        "iCode Software House builds custom software solutions, scalable backend systems, APIs, workflow automation, and third-party integrations for businesses. The website does not publish a named ERP case study, but ERP-style business systems can be discussed as custom software, automation, and integration projects through Get a Quote or Book a Free Consultation.",
      summary: "Custom software, automation, integrations, and ERP-style project guidance.",
    },
    ...servicesItems.map((service) => ({
      sourceId: `service-${service.slug}`,
      sourceType: "service",
      title: service.title,
      slug: service.slug,
      url: `/services/${service.slug}`,
      content: [
        service.description,
        service.overview,
        service.features?.length ? textFromList("Features", service.features) : "",
        service.offerings?.length
          ? textFromList(
              "Offerings",
              service.offerings.map((item) => `${item.title}: ${item.description}`)
            )
          : "",
        service.problems?.length ? textFromList("Problems solved", service.problems) : "",
        service.impact?.length ? textFromList("Impact", service.impact) : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
      summary: service.description,
    })),
    ...caseStudies.map((caseStudy) => ({
      sourceId: `case-study-${caseStudy.slug}`,
      sourceType: "case-study",
      title: caseStudy.client,
      slug: caseStudy.slug,
      url: `/case-studies/${caseStudy.slug}`,
      content: [
        `${caseStudy.client} works in ${caseStudy.industry}. Service: ${caseStudy.service}. Duration: ${caseStudy.duration}.`,
        `Tagline: ${caseStudy.tagline}`,
        textFromList("Challenges", caseStudy.challenges),
        textFromList("Solutions", caseStudy.solutions),
        textFromList(
          "Process",
          caseStudy.process.map((step) => `${step.title}: ${step.description}`)
        ),
      ].join("\n\n"),
      summary: caseStudy.tagline,
    })),
    ...blogPosts.map((post) => ({
      sourceId: `blog-${post.slug}`,
      sourceType: "blog",
      title: post.title,
      slug: post.slug,
      url: `/blog/${post.slug}`,
      content: [
        `${post.title} (${post.category})`,
        post.description,
        post.overview ?? "",
        post.takeaways?.length ? textFromList("Takeaways", post.takeaways) : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
      summary: post.description,
    })),
    ...pricingPlans.map((plan) => ({
      sourceId: `pricing-${plan.title.toLowerCase().replace(/\s+/g, "-")}`,
      sourceType: "pricing",
      title: plan.title,
      url: "/pricing-comparison",
      content: [plan.description, textFromList("Benefits", plan.benefits)].join("\n\n"),
      summary: plan.description,
    })),
    {
      sourceId: "contact-options",
      sourceType: "contact",
      title: "Contact options",
      url: "/contact",
      content: [
        textFromList("Preferred interests", contactInterests),
        textFromList("Budget ranges", contactBudgets),
        textFromList("Contact timelines", contactTimelines),
        "The contact page collects project details, budget, timeline, and preferred communication options.",
      ].join("\n\n"),
      summary: "Contact and lead qualification options.",
    },
    {
      sourceId: "faq",
      sourceType: "faq",
      title: "Frequently asked questions",
      url: "/faq",
      content: textFromList(
        "FAQ",
        faqItems.map((item) => `${item.question}: ${item.answer}`)
      ),
      summary: "Common questions about revisions, payments, timelines, support, and NDAs.",
    },
    {
      sourceId: "privacy-policy",
      sourceType: "legal",
      title: "Privacy policy",
      url: "/privacy-policy",
      content: privacyPolicySections
        .map((section) => [section.title, ...(section.paragraphs ?? []), ...(section.bullets ?? [])].join("\n"))
        .join("\n\n"),
      summary: "Privacy policy and data collection details.",
    },
    {
      sourceId: "terms",
      sourceType: "legal",
      title: "Terms and conditions",
      url: "/terms",
      content: termsSections
        .map((section) => [section.title, ...(section.paragraphs ?? []), ...(section.bullets ?? [])].join("\n"))
        .join("\n\n"),
      summary: "Terms, service scope, and usage rules.",
    },
    {
      sourceId: "home-trust",
      sourceType: "home",
      title: "Testimonials and project highlights",
      url: "/",
      content: [
        textFromList(
          "Testimonials",
          homeTestimonials.map((item) => `${item.name} (${item.company}): ${item.subject} ${item.message}`)
        ),
        textFromList(
          "Projects",
          homeProjects.map((project) => `${project.title}: ${project.description} (${project.tag})`)
        ),
      ].join("\n\n"),
      summary: "Trust signals from testimonials and featured projects.",
    },
    {
      sourceId: "hero-contact",
      sourceType: "home",
      title: "Lead capture call to action",
      url: "/contact",
      content:
        "Use Get a Quote, Book a Free Consultation, Contact Us, or Talk to Human Support when a user wants direct help or a project discussion.",
      summary: "Lead capture prompts and CTA guidance.",
    },
  ];
}

export async function buildKnowledgeChunks() {
  const documents = getWebsiteKnowledgeDocuments();
  const chunks: KnowledgeChunkRecord[] = [];

  for (const document of documents) {
    const parts = chunkText(document.content);
    const embeddings = await embedTexts(parts);

    parts.forEach((chunkTextValue, index) => {
      chunks.push({
        id: `${document.sourceId}:${index}`,
        ...document,
        chunkIndex: index,
        chunkText: chunkTextValue,
        embedding: embeddings[index],
      });
    });
  }

  return chunks;
}

export async function reindexWebsiteKnowledge() {
  const chunks = await buildKnowledgeChunks();
  await upsertKnowledgeChunks(chunks);
  return { indexedChunks: chunks.length };
}
