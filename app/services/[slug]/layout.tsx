import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { getServiceBySlug, getServiceSlugs } from "@/data/services";

// Pre-declare slugs for static generation
export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return createPageMetadata({
    title: `${service.title} Services`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
