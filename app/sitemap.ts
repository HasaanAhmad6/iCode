import type { MetadataRoute } from "next";
import { SITE_URL, sitemapRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return sitemapRoutes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified,
  }));
}
