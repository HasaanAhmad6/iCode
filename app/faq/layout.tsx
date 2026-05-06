import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "FAQs | iCode Software House",
description: "Frequently asked questions about iCode Software House services, pricing, and process — software development company in Gujranwala, Pakistan.",
  path: "/faq",
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
