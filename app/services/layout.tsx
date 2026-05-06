import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "Services | iCode Software House",
description: "Web development, mobile apps, UI/UX design, and digital marketing services by iCode Software House, Gujranwala, Pakistan.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
