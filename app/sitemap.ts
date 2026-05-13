// app/sitemap.ts  — drop-in replacement for your existing sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getCaseStudySlugs } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about-us",
    "/blog",
    "/blog-details",
    "/career",
    "/case-studies",          // ← updated: was /case-study
    "/contact",
    "/faq",
    "/job-details",
    "/pricing-comparison",
    "/privacy-policy",
    "/products",
    "/projects",
    "/services-details",
    "/services",
    "/team",
    "/terms",
  ];

  const caseStudyRoutes = getCaseStudySlugs().map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
    })),
    ...caseStudyRoutes,
  ];
}
