import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "Products | iCode Software House",
description: "Digital products by iCode Software House — UI kits, templates, and tools built by a software house in Gujranwala, Pakistan.",
  path: "/products",
});

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}