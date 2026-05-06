import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
 title: "Our Team | iCode Software House",
 description: "Meet the team at iCode Software House, Gujranwala, Pakistan — developers, designers, and strategists building digital products.",
 path: "/team",
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
