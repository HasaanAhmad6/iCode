import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Briefcase, Clock3, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SITE_URL } from "@/lib/seo";
import { JobDetailsClient } from "@/components/job-details/job-detailsClient";
import { jobDetailsServiceLinks, getJobBySlug, getJobSlugs } from "@/data/job-details";

// ─── Static paths (SSG) ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getJobSlugs().map((slug) => ({ slug }));
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: job.title,
          description: job.description,
          datePosted: job.datePosted || new Date().toISOString().split("T")[0],
          validThrough: job.validThrough || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
          employmentType: job.type,
          hiringOrganization: {
            "@type": "Organization",
            name: "iCode Software House",
            sameAs: SITE_URL,
            logo: `${SITE_URL}/assets/images/logo.svg`,
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gujranwala",
              addressRegion: "Punjab",
              addressCountry: "PK",
            },
          },
          baseSalary: {
            "@type": "PriceSpecification",
            priceCurrency: "PKR",
            price: "Competitive",
          },
          url: `${SITE_URL}/jobs/${job.slug}`,
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
              name: "Careers",
              item: `${SITE_URL}/career`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: job.title,
              item: `${SITE_URL}/jobs/${job.slug}`,
            },
          ],
        })}
      </script>
      <JobDetailsClient />

      <Navbar serviceLinks={jobDetailsServiceLinks} />

      <div className="grow">
        <div className="bg-secondary relative z-1 flex min-h-60 items-end overflow-hidden py-8 lg:min-h-85 lg:py-16">
          <img
            src="/assets/images/job-detail-banner.png"
            alt="Job details"
            className="absolute inset-0 -z-1 size-full"
          />
          <div className="container flex h-full flex-col gap-4">
            <h1 className="text-white">{job.title}</h1>
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex shrink-0 gap-2 sm:gap-4">
                <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-1.5 py-1 text-sm/5 font-semibold sm:px-2 sm:text-sm/6">
                  <MapPin className="size-4 shrink-0" />
                  <span>{job.location}</span>
                </div>
                <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-1.5 py-1 text-sm/5 font-semibold sm:px-2 sm:text-sm/6">
                  <Briefcase className="size-4 shrink-0" />
                  <span>{job.experience}</span>
                </div>
                <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-1.5 py-1 text-sm/5 font-semibold sm:px-2 sm:text-sm/6">
                  <Clock3 className="size-4 shrink-0" />
                  <span>{job.type}</span>
                </div>
              </div>
              <Link
                href="/career#ApplicationForm"
                className="btn btn-secondary mt-6 ml-auto py-2 sm:mt-auto sm:py-2.75"
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>

        <div className="container flex flex-col items-start gap-8 py-14 lg:flex-row lg:py-16 xl:gap-12">
          <div className="border-gray-light prose max-w-full grow lg:border-r lg:pr-8 xl:pr-12">
            <h2>Job Overview</h2>
            <p>
              {job.overview || job.description}
            </p>

            {job.responsibilities && job.responsibilities.length > 0 && (
              <>
                <h2>Key Responsibilities</h2>
                <div className="space-y-2">
                  {job.responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 [&_p]:my-0">
                      <span className="bg-primary mt-2 size-2 shrink-0 rounded-xs lg:mt-1.75 lg:size-3" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {job.skills && job.skills.length > 0 && (
              <>
                <h2>Required Skills & Qualifications</h2>
                <div className="space-y-2">
                  {job.skills.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 [&_p]:my-0">
                      <span className="bg-primary mt-2 size-2 shrink-0 rounded-xs lg:mt-1.75 lg:size-3" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {job.whatWeOffer && job.whatWeOffer.length > 0 && (
              <>
                <h2>What We Offer</h2>
                <div className="space-y-2">
                  {job.whatWeOffer.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 [&_p]:my-0">
                      <span className="bg-primary mt-2 size-2 shrink-0 rounded-xs lg:mt-1.75 lg:size-3" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {job.benefits && job.benefits.length > 0 && (
              <>
                <h2>Benefits</h2>
                <div className="space-y-2">
                  {job.benefits.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 [&_p]:my-0">
                      <BadgeCheck className="text-primary mt-0.5 size-4 shrink-0 lg:size-5" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="sticky top-0 w-full shrink-0 space-y-6 lg:w-104 lg:space-y-8">
            <div className="border-gray-light bg-background space-y-6 rounded-lg border p-6">
              <h2 className="text-2xl lg:text-[28px]/10">Job Details</h2>
              <div className="space-y-4 divide-y divide-gray-light">
                <div className="space-y-1">
                  <p className="text-xs/4 font-semibold uppercase tracking-widest text-gray-500 lg:text-sm/5">
                    Job Type
                  </p>
                  <p className="font-medium">{job.type}</p>
                </div>
                <div className="space-y-1 pt-4">
                  <p className="text-xs/4 font-semibold uppercase tracking-widest text-gray-500 lg:text-sm/5">
                    Experience
                  </p>
                  <p className="font-medium">{job.experience}</p>
                </div>
                <div className="space-y-1 pt-4">
                  <p className="text-xs/4 font-semibold uppercase tracking-widest text-gray-500 lg:text-sm/5">
                    Location
                  </p>
                  <p className="font-medium">{job.location}</p>
                </div>
              </div>
            </div>

            <Link
              href="/career#ApplicationForm"
              className="btn w-full justify-center"
            >
              Apply now
            </Link>

            <div className="border-gray-light bg-primary/5 space-y-4 rounded-lg border border-primary/20 p-6">
              <h3 className="text-primary font-semibold">Ready to apply?</h3>
              <p className="text-sm/5">
                Take the next step in your career. Submit your application along with your resume
                and portfolio.
              </p>
              <Link
                href="/career#ApplicationForm"
                className="hover:text-primary group/link inline-flex items-center gap-1 text-sm/5 font-medium whitespace-nowrap"
              >
                Start application
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
