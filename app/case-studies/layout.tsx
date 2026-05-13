import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies | iCode Software House",
  description:
    "Browse real client case studies from iCode Software House — covering web development, mobile apps, UX design, and branding projects across Pakistan.",
  path: "/case-studies",
});

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
