import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
title: "Contact Us | iCode Software House",
description: "Get in touch with iCode Software House in Gujranwala, Pakistan. Request a quote for web development, app development, or custom software.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
