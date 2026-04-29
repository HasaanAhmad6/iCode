import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Job Details | iCode Ltd",
  description: "Review role requirements, responsibilities, and application details for open positions.",
  path: "/job-details",
});

export default function JobDetailsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
