import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | iCode Ltd",
  description: "Learn about iCode Ltd, our team, mission, and approach to building impactful digital solutions.",
  path: "/about-us",
});

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
