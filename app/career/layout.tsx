import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Career | iCode Ltd",
  description: "Explore open roles at iCode Ltd and join a team focused on meaningful, long-term impact.",
  path: "/career",
});

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
