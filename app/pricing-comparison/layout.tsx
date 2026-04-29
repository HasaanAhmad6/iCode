import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing Comparison | iCode Ltd",
  description: "Compare iCode Ltd plans and choose the option that fits your business goals.",
  path: "/pricing-comparison",
});

export default function PricingComparisonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
