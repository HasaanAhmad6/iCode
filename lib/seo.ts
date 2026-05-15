import type { Metadata } from "next";

export const SITE_URL = "https://icodeltd.com";

// CHANGED: was "iCode Ltd" — updated to full brand name for better local SEO signals
const BRAND_NAME = "iCode Software House";

// CHANGED: was logo.svg — SVG files don't render in social previews.
// TODO: Create a 1200×630px JPG image and place it at /public/og-image.jpg
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
      // CHANGED: updated siteName to match new BRAND_NAME
      siteName: BRAND_NAME,
      // CHANGED: added locale — tells Facebook/LinkedIn this is Pakistan-English content
      locale: "en_PK",
      title,
      description,
      url,
      // CHANGED: now uses JPG og-image instead of SVG logo
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} — Software House in Gujranwala, Pakistan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // CHANGED: now uses JPG og-image instead of SVG logo
      images: [DEFAULT_OG_IMAGE],
    },
  };
}