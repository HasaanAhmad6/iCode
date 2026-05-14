import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "iCode Software House | Web & App Development in Gujranwala, Pakistan",
    template: "%s | iCode Software House",
  },

  description:
    "iCode Software House is a professional software company in Gujranwala, Pakistan. We build websites, mobile apps, and custom software solutions for businesses across Punjab and Pakistan.",

  keywords: [
    "software house Gujranwala",
    "web development Gujranwala",
    "app development Pakistan",
    "software company Punjab Pakistan",
    "iCode software house",
    "website development Gujranwala",
    "IT company Gujranwala",
    "software development Pakistan",
    "custom software Gujranwala",
    "mobile app development Pakistan",
  ],

  authors: [{ name: "iCode Software House", url: SITE_URL }],
  creator: "iCode Software House",
  publisher: "iCode Software House",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    siteName: "iCode Software House",
    locale: "en_PK",
    title: "iCode Software House | Web & App Development in Gujranwala, Pakistan",
    description:
      "Professional software development company in Gujranwala, Pakistan. We build websites, mobile apps, and custom software for businesses across Punjab and Pakistan.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "iCode Software House — Gujranwala, Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "iCode Software House | Gujranwala, Pakistan",
    description:
      "Professional software development company in Gujranwala, Pakistan.",
    images: [`${SITE_URL}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Gujranwala",
    "geo.position": "32.1877;74.1945",
    "ICBM": "32.1877, 74.1945",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "iCode Software House",
  description:
    "Professional web development, mobile app development, and custom software solutions in Gujranwala, Pakistan.",
  url: SITE_URL,
  telephone: "+92-307-6256808",
  email: "info@icodeltd.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Master City, Gujranwala, Punjab, Pakistan",
    addressLocality: "Gujranwala",
    addressRegion: "Punjab",
    postalCode: "52250",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.1877,
    longitude: 74.1945,
  },
  openingHours: "Mo-Sa 09:00-18:00",
  areaServed: [
    { "@type": "City", name: "Gujranwala" },
    { "@type": "State", name: "Punjab" },
    { "@type": "Country", name: "Pakistan" },
  ],
  sameAs: [
    "https://www.facebook.com/icodesoftwarehouse",
    "https://www.linkedin.com/company/icodeltd",
    "https://www.instagram.com/icodesoftwarehouse",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK">
      <head>
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

      </head>
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Analytics />
      </body>
    </html>
  );
}