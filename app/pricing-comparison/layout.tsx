import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "Pricing | iCode Software House",
description: "Compare service plans and pricing from iCode Software House, Gujranwala, Pakistan. Transparent pricing for web development and software projects.",
  path: "/pricing-comparison",
});

export default function PricingComparisonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
