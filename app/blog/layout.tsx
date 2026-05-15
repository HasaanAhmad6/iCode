import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "Blog",
description: "Tech articles, development tips, and digital insights from the iCode Software House team in Gujranwala, Pakistan.",
  path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
