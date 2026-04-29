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
      <body>{children}</body>
    </html>
  );
}
