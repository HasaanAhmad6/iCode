import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Team | iCode Ltd",
  description: "Meet the iCode Ltd team driving strategy, design, and technology outcomes.",
  path: "/team",
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
