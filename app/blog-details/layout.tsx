import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog Details | iCode Ltd",
  description: "Explore detailed articles and business insights from iCode Ltd.",
  path: "/blog-details",
});

export default function BlogDetailsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
