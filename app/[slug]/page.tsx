import { notFound, redirect } from "next/navigation";

const htmlRoutes = new Set([
  "about-us",
  "blog",
  "blog-details",
  "career",
  "contact",
  "faq",
  "job-details",
  "pricing-comparison",
  "privacy-policy",
  "projects",
  "service-details",
  "services",
  "team",
  "terms",
]);

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!htmlRoutes.has(slug)) {
    notFound();
  }

  redirect(`/${slug}.html`);
}
