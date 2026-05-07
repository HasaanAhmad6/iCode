"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import { blogCategories, blogPosts } from "@/data/blog";

export function BlogFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((blog) => blog.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container py-14 lg:py-16">
      <div className="flex items-center gap-6 overflow-x-auto pb-1.5 text-base/4 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 border-b-2 pb-2.5 font-medium uppercase transition ${activeCategory === cat ? "border-primary text-primary" : "border-transparent hover:border-primary hover:text-primary"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-6 xl:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border-gray-light group relative flex flex-col gap-4 overflow-hidden rounded-lg border p-2.5 md:p-4"
          >
            <div className="relative mt-auto h-60 overflow-hidden rounded-lg lg:h-81">
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="size-full object-cover duration-300 group-hover:scale-105"
              />
              <Link href="/blog-details" className="absolute inset-0" />
              <Link
                href="/blog"
                className="bg-primary-light text-primary ring-primary/20 hover:bg-primary absolute top-4 right-4 shrink-0 rounded p-1 text-xs/5 font-medium ring-1 duration-300 hover:text-white sm:px-2 sm:text-sm/6"
              >
                {blog.category}
              </Link>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <h3 className="mb-2 line-clamp-2 text-xl font-medium text-black lg:mb-3 lg:text-2xl">
                <Link href="/blog-details" className="hover:text-primary text-black">
                  {blog.title}
                </Link>
              </h3>
              <p className="line-clamp-2">{blog.description}</p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-8 overflow-hidden rounded-full lg:size-10">
                    <img
                      src={blog.author_image}
                      alt="Author image"
                      loading="lazy"
                      className="size-full object-cover object-top"
                    />
                  </div>
                  <div className="text-sm/5">
                    <p className="font-medium text-black">{blog.author_name}</p>
                    <p className="text-xs/4 lg:text-sm/5">{blog.date}</p>
                  </div>
                </div>
                <Link
                  href="/blog-details"
                  className="hover:text-primary group/link inline-flex items-center gap-1 text-sm/5 font-medium whitespace-nowrap lg:gap-2 lg:text-base/6"
                >
                  Read insight
                  <ArrowUpRight className="size-4 shrink-0 pt-px duration-300 group-hover/link:rotate-45 lg:size-6" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 md:gap-8 lg:mt-12 xl:gap-12">
        <button
          type="button"
          className="bg-background grid size-8 place-content-center rounded-lg border border-gray-200 transition hover:bg-black hover:text-white lg:size-10"
        >
          <ChevronLeft className="size-3.5 lg:size-4.5" />
        </button>
        <div className="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            className="grid size-8 place-content-center rounded-lg bg-black text-sm/4 font-semibold text-white transition hover:bg-black hover:text-white lg:size-10 lg:text-base/5"
          >
            1
          </button>
          <button
            type="button"
            className="grid size-8 place-content-center rounded-lg text-sm/4 font-semibold transition hover:bg-black hover:text-white lg:size-10 lg:text-base/5"
          >
            2
          </button>
          <button
            type="button"
            className="grid size-8 place-content-center rounded-lg text-sm/4 font-semibold transition hover:bg-black hover:text-white lg:size-10 lg:text-base/5"
          >
            3
          </button>
          <span className="grid size-8 place-content-center rounded-lg text-sm/4 font-semibold transition lg:size-10 lg:text-base/5">
            <Ellipsis className="-mb-1 size-4" />
          </span>
          <button
            type="button"
            className="grid size-8 place-content-center rounded-lg text-sm/4 font-semibold transition hover:bg-black hover:text-white lg:size-10 lg:text-base/5"
          >
            8
          </button>
        </div>
        <button
          type="button"
          className="bg-background grid size-8 place-content-center rounded-lg border border-gray-200 transition hover:bg-black hover:text-white lg:size-9.5"
        >
          <ChevronRight className="size-3.5 lg:size-4.5" />
        </button>
      </div>
    </div>
  );
}
