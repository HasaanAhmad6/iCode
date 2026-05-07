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
import {
  blogDetailsLatestInsights,
  blogDetailsMeta,
  blogDetailsServiceLinks,
  blogDetailsTakeaways,
} from "@/data/blog-details";

export default function BlogDetailsPage() {
  return (
    <>
      <BlogDetailsClient />

      <Navbar serviceLinks={blogDetailsServiceLinks} />

      <div className="grow">
        <div className="container space-y-12 py-14 lg:py-16">
          <div className="border-gray-light space-y-6 border-b pb-6">
            <h1 className="text-3xl font-medium text-black sm:text-4xl lg:text-5xl/14">
              {blogDetailsMeta.title}
            </h1>
            <div className="relative h-100 overflow-hidden rounded-lg lg:h-120">
              <img
                src={blogDetailsMeta.heroImage}
                alt="Blog detail image"
                className="size-full object-cover"
                loading="lazy"
              />
              <Link
                href="/blog"
                className="text-primary hover:bg-primary bg-primary-light border-primary/20 absolute top-4 right-4 mb-4 rounded border px-2 py-1 text-sm/6.5 font-semibold backdrop-blur-[10px] hover:text-white"
              >
                {blogDetailsMeta.category}
              </Link>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="size-8 overflow-hidden rounded-full lg:size-10">
                  <img
                    src="/assets/images/client-3.png"
                    alt="Author image"
                    loading="lazy"
                    className="size-full object-cover object-top"
                  />
                </div>
                <div className="text-sm/5">
                  <h4 className="text-black">{blogDetailsMeta.author}</h4>
                  <p className="text-xs/4 lg:text-sm/5">{blogDetailsMeta.date}</p>
                </div>
              </div>
              <div className="text-primary flex items-center gap-2">
                <Clock3 className="size-5 shrink-0" />
                <span>{blogDetailsMeta.readTime}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="border-gray-light lg:border-r lg:pr-12">
              <div className="prose max-w-none!">
                <h2>Introduction</h2>
                <p>
                  As businesses enter 2025, the pressure to operate faster, leaner, and more
                  intelligently continues to rise. Customer expectations are higher, competition is
                  global, and technology is evolving rapidly.
                </p>
                <p>
                  Companies that thrive this year are streamlining operations, automating repetitive
                  tasks, and using data to make smarter decisions.
                </p>

                <h2>Key Takeaways</h2>
                <ul>
                  {blogDetailsTakeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <img src={blogDetailsMeta.inlineImage} alt="Blog details image" loading="lazy" />

                <h2>1. Automate Repetitive and Manual Tasks</h2>
                <p>
                  Manual processes slow productivity and increase human error. Automation tools can
                  handle routine work such as data entry, report generation, customer support
                  workflows, and approvals.
                </p>

                <h2>2. Implement Real-Time Data and Analytics</h2>
                <p>
                  Real-time dashboards help teams identify bottlenecks before they impact
                  operations, reducing delays and improving planning accuracy.
                </p>

                <h2>3. Use AI for Smarter Operations</h2>
                <p>
                  AI helps automate complex decisions, detect anomalies, and optimize workflows,
                  which improves operational consistency and response time.
                </p>

                <h2>Actionable Tips</h2>
                <ul>
                  <li>Start with an operations audit to identify bottlenecks.</li>
                  <li>Automate one high-volume task first.</li>
                  <li>Track changes with measurable KPIs.</li>
                  <li>Train teams continuously on updated systems.</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Operational efficiency in 2025 comes from combining automation, data visibility,
                  and practical process design. Businesses that operate smarter gain speed,
                  reliability, and room for innovation.
                </p>
              </div>

              <div className="border-gray-light flex flex-col justify-between gap-6 border-t pt-6 sm:flex-row sm:items-center">
                <h3>Share this post</h3>
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <CopyLinkButton />
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"><AtSign className="size-5 lg:size-6" /></a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"><Share2 className="size-5 lg:size-6" /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"><Globe className="size-5 lg:size-6" /></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"><AtSign className="size-5 lg:size-6" /></a>
                </div>
              </div>
            </div>

            <div className="sticky top-0 shrink-0 space-y-8 lg:w-113 lg:space-y-12">
              <div className="border-gray-light bg-background space-y-6 rounded-lg border p-6">
                <h2 className="text-2xl lg:text-[32px]/10">Latest insights</h2>
                <div className="divide-gray-light divide-y">
                  {blogDetailsLatestInsights.map((blog) => (
                    <div key={blog.id} className="space-y-2 py-6 first:pt-0 last:pb-0">
                      <p className="text-primary text-sm/5 font-medium">{blog.date}</p>
                      <Link href="/blog-details" className="h4 transition hover:opacity-80">{blog.title}</Link>
                      <p className="text-base/6">{blog.description}</p>
                      <Link href="/blog-details" className="hover:text-primary group/link inline-flex items-center gap-1 text-sm/5 font-medium whitespace-nowrap lg:gap-2 lg:text-base/6">
                        Read insight
                        <ArrowUpRight className="size-4 shrink-0 pt-px duration-300 group-hover/link:rotate-45 lg:size-5" />
                      </Link>
                    </div>
                  ))}
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
