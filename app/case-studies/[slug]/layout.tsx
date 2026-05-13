import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/data/case-studies";

// Pre-declare slugs for static generation
export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return createPageMetadata({
    title: `${cs.client} Case Study | iCode Software House`,
    description: `How iCode Software House helped ${cs.client} in the ${cs.industry} industry — ${cs.tagline}`,
    path: `/case-studies/${cs.slug}`,
  });
}

export default function CaseStudyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
