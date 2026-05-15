import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { getJobBySlug, getJobSlugs } from "@/data/job-details";

// Pre-declare slugs for static generation
export function generateStaticParams() {
  return getJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return createPageMetadata({
    title: `${job.title} - Careers`,
    description: job.description,
    path: `/jobs/${job.slug}`,
  });
}

export default function JobDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
