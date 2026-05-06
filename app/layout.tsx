import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";
import { ThemeProvider } from "@/lib/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // CHANGED: was just "iCode Ltd" — now includes location keywords for Pakistan/Gujranwala SEO
  title: {
    default: "iCode Software House | Web & App Development in Gujranwala, Pakistan",
    // This template is used by all child pages: "About Us | iCode Software House"
    template: "%s | iCode Software House",
  },

  // CHANGED: was generic — now includes Gujranwala and Pakistan for local SEO
  description:
    "iCode Software House is a professional software company in Gujranwala, Pakistan. We build websites, mobile apps, and custom software solutions for businesses across Punjab and Pakistan.",

  // ADDED: keywords — Google ignores them but Bing (popular in Pakistan) still reads them
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
    // ADDED: locale tells Facebook/LinkedIn this is Pakistan-English content
    locale: "en_PK",
    // CHANGED: was "iCode Ltd" — now includes location
    title: "iCode Software House | Web & App Development in Gujranwala, Pakistan",
    // CHANGED: was generic — now geo-targeted
    description:
      "Professional software development company in Gujranwala, Pakistan. We build websites, mobile apps, and custom software for businesses across Punjab and Pakistan.",
    url: SITE_URL,
    // CHANGED: was logo.svg with no dimensions — SVGs don't render in social previews
    // TODO: Create this file at /public/og-image.jpg (1200×630px)
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
    // CHANGED: was "iCode Ltd" — now includes location
    title: "iCode Software House | Gujranwala, Pakistan",
    // CHANGED: was generic — now geo-targeted
    description:
      "Professional software development company in Gujranwala, Pakistan.",
    // CHANGED: was logo.svg — now uses proper JPG og-image
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

  // ADDED: geo meta tags — tells Google and Bing exactly where your business is located
  other: {
    "geo.region": "PK-PB",             // Pakistan - Punjab province
    "geo.placename": "Gujranwala",
    "geo.position": "32.1877;74.1945", // Gujranwala coordinates
    "ICBM": "32.1877, 74.1945",        // legacy but still read by some crawlers
  },
};

// ADDED: LocalBusiness JSON-LD structured data
// This is what gets you into Google's local map pack for Gujranwala searches
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "iCode Software House",
  description:
    "Professional web development, mobile app development, and custom software solutions in Gujranwala, Pakistan.",
  url: SITE_URL,
  // TODO: Replace with your real Pakistani phone number
  telephone: "+92-300-0000000",
  // TODO: Replace with your real business email
  email: "contact@icodeltd.com",
  address: {
    "@type": "PostalAddress",
    // TODO: Replace with your real street address
    streetAddress: "Your Street Address",
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
  // TODO: Replace these with your real social media profile URLs
  sameAs: [
    "https://www.facebook.com/icodesoftwarehouse",
    "https://www.linkedin.com/company/icodesoftwarehouse",
    "https://www.instagram.com/icodesoftwarehouse",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // CHANGED: was lang="en" — now en-PK signals Pakistan-English to search engines
    <html lang="en-PK">
      <head>
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* ADDED: JSON-LD structured data for local business — keeps existing script tag below */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* Existing theme initialization script — unchanged */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const THEME_STORAGE_KEY = 'icode-theme';
                const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
                let theme = savedTheme && (savedTheme === 'light' || savedTheme === 'dark') 
                  ? savedTheme 
                  : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                
                const colors = {
                  light: {
                    primary: '#8b1a1a',
                    secondary: '#000a23',
                    gray: '#67788f',
                    grayLight: '#e0e5eb',
                    background: '#fafafa',
                    black: '#12151e',
                    white: '#fff',
                  },
                  dark: {
                    primary: '#961e1e',
                    secondary: '#1e2a45',
                    gray: '#a0adb8',
                    grayLight: '#2a3a4f',
                    background: '#0f1419',
                    black: '#fafafa',
                    white: '#1a2332',
                  }
                };
                
                const themeColors = colors[theme];
                const root = document.documentElement;
                root.style.setProperty('--color-primary', themeColors.primary);
                               root.setAttribute('data-theme', theme);
                root.style.setProperty('--color-secondary', themeColors.secondary);
                root.style.setProperty('--color-gray', themeColors.gray);
                root.style.setProperty('--color-gray-light', themeColors.grayLight);
                root.style.setProperty('--color-background', themeColors.background);
                root.style.setProperty('--color-black', themeColors.black);
                root.style.setProperty('--color-white', themeColors.white);
                root.style.backgroundColor = themeColors.background;
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}