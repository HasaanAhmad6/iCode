import type { Metadata } from "next";

export const SITE_URL = "https://icodeltd.com";
const BRAND_NAME = "iCode Ltd";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/logo.svg`;

type CreatePageMetadataParams = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: CreatePageMetadataParams): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: BRAND_NAME,
      title,
      description,
      url,
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const sitemapRoutes = [
  "/",
  "/about-us",
  "/blog",
  "/blog-details",
  "/career",
  "/contact",
  "/faq",
  "/job-details",
  "/pricing-comparison",
  "/privacy-policy",
  "/projects",
  "/service-details",
  "/services",
  "/team",
  "/terms",
];
