import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "iCode Ltd",
  description: "iCode Ltd helps businesses grow with strategy, design, and technology.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "iCode Ltd",
    title: "iCode Ltd",
    description: "iCode Ltd helps businesses grow with strategy, design, and technology.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/assets/images/logo.svg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iCode Ltd",
    description: "iCode Ltd helps businesses grow with strategy, design, and technology.",
    images: [`${SITE_URL}/assets/images/logo.svg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
