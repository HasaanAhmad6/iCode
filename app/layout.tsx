import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aetherial Labs",
  description: "Static Next.js migration for Aetherial Labs template.",
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
