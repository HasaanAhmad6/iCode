import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  AtSign,
  Clock3,
  Globe,
  Share2,
} from "lucide-react";
import { BlogDetailsClient } from "@/components/blog-details/blog-detailsClient";
import { CopyLinkButton } from "@/components/blog-details/CopyLinkButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SITE_URL } from "@/lib/seo";
import { blogServiceLinks, getBlogPostBySlug, getBlogPostSlugs } from "@/data/blog";

// ─── Static paths (SSG) ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: post.heroImage || post.image,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            "@type": "Person",
            name: post.author_name,
            image: post.author_image,
          },
          publisher: {
            "@type": "Organization",
            name: "iCode Software House",
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/assets/images/logo.svg`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${post.slug}`,
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${SITE_URL}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: `${SITE_URL}/blog/${post.slug}`,
            },
          ],
        })}
      </script>
      <BlogDetailsClient />

      <Navbar serviceLinks={blogServiceLinks} />

      <div className="grow">
        <div className="container space-y-12 py-14 lg:py-16">
          <div className="border-gray-light space-y-6 border-b pb-6">
            <h1 className="text-3xl font-medium text-black sm:text-4xl lg:text-5xl/14">
              {post.title}
            </h1>
            <div className="relative h-100 overflow-hidden rounded-lg lg:h-120">
              <img
                src={post.heroImage || post.image}
                alt={post.title}
                className="size-full object-cover"
                loading="lazy"
              />
              <Link
                href="/blog"
                className="text-primary hover:bg-primary bg-primary-light border-primary/20 absolute top-4 right-4 mb-4 rounded border px-2 py-1 text-sm/6.5 font-semibold backdrop-blur-[10px] hover:text-white"
              >
                {post.category}
              </Link>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="size-8 overflow-hidden rounded-full lg:size-10">
                  <img
                    src={post.author_image}
                    alt={post.author_name}
                    loading="lazy"
                    className="size-full object-cover object-top"
                  />
                </div>
                <div className="text-sm/5">
                  <h4 className="text-black">{post.author_name}</h4>
                  <p className="text-xs/4 lg:text-sm/5">{post.date}</p>
                </div>
              </div>
              <div className="text-primary flex items-center gap-2">
                <Clock3 className="size-5 shrink-0" />
                <span>{post.readTime || "5 min read"}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="border-gray-light lg:border-r lg:pr-12">
              <div className="prose max-w-none!">
                <h2>Introduction</h2>
                <p>{post.overview || post.description}</p>

                {post.takeaways && post.takeaways.length > 0 && (
                  <>
                    <h2>Key Takeaways</h2>
                    <ul>
                      {post.takeaways.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {post.inlineImage && (
                  <img src={post.inlineImage} alt={post.title} loading="lazy" />
                )}

                <h2>Actionable Insights</h2>
                <p>
                  {post.title} requires a strategic approach. By implementing these principles,
                  organizations can achieve measurable improvements in their operations and outcomes.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Success in today's competitive landscape demands continuous learning and
                  adaptation. The strategies outlined in this article provide a roadmap for
                  meaningful progress.
                </p>
              </div>

              <div className="border-gray-light flex flex-col justify-between gap-6 border-t pt-6 sm:flex-row sm:items-center">
                <h3>Share this post</h3>
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <CopyLinkButton />
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"
                  >
                    <AtSign className="size-5 lg:size-6" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"
                  >
                    <Share2 className="size-5 lg:size-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/icodeltd"
                    target="_blank"
                    rel="noreferrer"
                    className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"
                  >
                    <Globe className="size-5 lg:size-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"
                  >
                    <AtSign className="size-5 lg:size-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="sticky top-0 shrink-0 space-y-8 lg:w-113 lg:space-y-12">
              <div className="border-gray-light bg-background space-y-6 rounded-lg border p-6">
                <h2 className="text-2xl lg:text-[32px]/10">Latest insights</h2>
                <div className="divide-gray-light divide-y">
                  {/* Show related posts */}
                  <div className="space-y-2 py-6 first:pt-0 last:pb-0">
                    <p className="text-primary text-sm/5 font-medium">{post.date}</p>
                    <p className="h4">{post.title}</p>
                    <p className="text-base/6">{post.description}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary group/link inline-flex items-center gap-1 text-sm/5 font-medium whitespace-nowrap lg:gap-2 lg:text-base/6"
                    >
                      Read more
                      <ArrowUpRight className="size-4 shrink-0 pt-px duration-300 group-hover/link:rotate-45 lg:size-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-gray-light bg-primary space-y-6 rounded-lg border p-6">
                <div className="space-y-4 text-white">
                  <h3 className="text-white">Stay Ahead With Weekly Insights</h3>
                  <p className="text-gray-light">
                    Join leaders who get actionable updates on tech, AI, and operations.
                  </p>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="w-full rounded-lg border border-white/30 bg-black/20 px-4 py-3 text-base/6 text-white placeholder:text-white focus:border-white focus-visible:ring-0 focus-visible:outline-0"
                  />
                  <button type="submit" className="btn-secondary btn w-full">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
