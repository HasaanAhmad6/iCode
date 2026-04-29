import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Service Details | iCode Ltd",
  description: "Explore service details, deliverables, and expected outcomes from iCode Ltd.",
  path: "/service-details",
});

export default function ServiceDetailsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
