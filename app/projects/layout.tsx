import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "Our Projects | iCode Software House",
description: "Browse projects delivered by iCode Software House — a software company in Gujranwala, Pakistan — across web development, mobile apps, and design.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
