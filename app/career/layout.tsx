import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "Careers | iCode Software House",
description: "Join iCode Software House in Gujranwala, Pakistan. Explore open roles in software development, design, and digital marketing.",
  path: "/career",
});

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
