import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BlogClient } from "@/components/blog/blogClient";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { blogServiceLinks, blogPosts } from "@/data/blog";

export default function BlogPage() {
  const featuredPost = blogPosts[0];

  return (
    <>
      <BlogClient />

      <Navbar serviceLinks={blogServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 text-white sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">News & insights</h1>
            <p className="text-gray-light max-w-275">
              Expert perspectives, industry trends, and actionable tips to help your business stay
              ahead.
            </p>
          </div>
        </div>

        <div className="border-gray-light border-b py-14 lg:py-16">
          <div className="container">
            <div className="relative h-100 overflow-hidden rounded-[10px] lg:h-116">
              <img
                src={featuredPost.image}
                alt="Blog img"
                className="size-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-linear-to-r from-[black] to-[black]/50 p-6 text-white sm:to-[black]/20 sm:p-8 sm:pb-12 lg:p-12 lg:pb-20">
                <Link
                  href="/blog"
                  className="text-primary hover:bg-primary bg-primary-light border-primary/20 mb-4 rounded border px-2 py-1 text-sm/6.5 font-semibold backdrop-blur-[10px] hover:text-white"
                >
                  {featuredPost.category}
                </Link>
                <h2 className="mb-4 line-clamp-2 text-white lg:mb-6">
                  <Link href={`/blog/${featuredPost.slug}`} className="transition hover:opacity-80">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="line-clamp-3">{featuredPost.description}</p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="text-gray-light group mt-4 inline-flex items-center gap-2 text-base/6"
                >
                  Read insight
                  <ChevronRight className="size-5 shrink-0 transition group-hover:translate-x-1 lg:size-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <BlogFilter />
      </div>

      <Footer />
    </>
  );
}
