import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const htmlRoutes = new Set([
  "blog",
  "blog-details",
  "career",
  "contact",
  "faq",
  "job-details",
  "pricing-comparison",
  "privacy-policy",
  "projects",
  "team",
  "terms",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const slug = pathname.slice(1);
  if (htmlRoutes.has(slug)) {
    return NextResponse.rewrite(new URL(`/${slug}.html`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog", "/blog-details", "/career", "/contact", "/faq", "/job-details", "/pricing-comparison", "/privacy-policy", "/projects", "/team", "/terms"],
};
