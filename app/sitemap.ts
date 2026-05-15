// app/sitemap.ts  — drop-in replacement for your existing sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getBlogPostSlugs } from "@/data/blog";
import { getServiceSlugs } from "@/data/services";
import { getJobSlugs } from "@/data/job-details";
import { getCaseStudySlugs } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about-us",
    "/blog",
    "/career",
    "/case-studies",
    "/contact",
    "/faq",
    "/pricing-comparison",
    "/privacy-policy",
    "/products",
    "/projects",
    "/services",
    "/team",
    "/terms",
  ];

  const blogRoutes = getBlogPostSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = getServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const jobRoutes = getJobSlugs().map((slug) => ({
    url: `${SITE_URL}/jobs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const caseStudyRoutes = getCaseStudySlugs().map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
    })),
    ...blogRoutes,
    ...serviceRoutes,
    ...jobRoutes,
    ...caseStudyRoutes,
  ];
}
