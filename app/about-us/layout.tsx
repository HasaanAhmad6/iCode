import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "About Us",
description: "Learn about iCode Software House — a software development company based in Gujranwala, Punjab, Pakistan. Meet our team and see how we build digital solutions.",
  path: "/about-us",
});

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
