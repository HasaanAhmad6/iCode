import { notFound } from "next/navigation";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CaseStudyPreloader } from "@/components/case-study/CaseStudyPreloader";
import {
  caseStudies,
  caseStudyServiceLinks,
  getCaseStudyBySlug,
} from "@/data/case-studies";

// ─── Static paths (SSG) ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  // Other case studies for the bottom cards (exclude current)
  const others = caseStudies.filter((c) => c.slug !== slug);

  return (
    <>
      <CaseStudyPreloader />

      <Navbar serviceLinks={caseStudyServiceLinks} />

      <div className="grow">

        {/* ── Hero Banner ── */}
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 sm:gap-4 lg:gap-6 lg:py-16">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Link href="/case-studies" className="hover:text-white transition">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-white">{cs.client}</span>
            </div>
            <h1 className="text-white">{cs.client} — Case Study</h1>
            <p className="text-gray-light max-w-275">
              How we helped {cs.client} transform their digital product and achieve measurable
              growth through design and engineering.
            </p>
          </div>
        </div>

        {/* ── Project Meta Bar ── */}
        <div className="bg-secondary text-white">
          <div className="container grid grid-cols-2 gap-x-4 gap-y-5 py-8 sm:grid-cols-4 lg:py-10">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Client</p>
              <p className="font-medium">{cs.client}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Industry</p>
              <p className="font-medium">{cs.industry}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Duration</p>
              <p className="font-medium">{cs.duration}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Service</p>
              <p className="font-medium">{cs.service}</p>
            </div>
          </div>
        </div>

        {/* ── Overview ── */}
        <div className="container flex flex-col gap-8 py-14 lg:flex-row lg:py-16 xl:gap-20">
          <div className="w-full max-w-150 space-y-6">
            <h2>Project Overview</h2>
            <div className="space-y-4">
              <p>
                {cs.client} approached us with a platform that had strong traffic but poor
                conversion. Their product pages were visually outdated, their checkout abandoned
                at 67%, and the codebase was too fragile to iterate on quickly.
              </p>
              <p>
                We partnered with their team over {cs.duration.toLowerCase()} to redesign the
                user experience, rebuild the frontend, and deliver a scalable system they could
                own long-term.
              </p>
            </div>
            <Link href="/contact" className="btn">
              Start a similar project
            </Link>
          </div>
          <div className="grid grow gap-4 sm:grid-cols-2">
            <div className="mr-8 h-40 overflow-hidden rounded-lg sm:mr-0 sm:mb-8 sm:h-70">
              <img
                src={cs.heroImage}
                alt={`${cs.client} project`}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="ml-8 h-40 overflow-hidden rounded-lg sm:mt-8 sm:ml-0 sm:h-70">
              <img
                src={cs.overviewImage}
                alt={`${cs.client} overview`}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── Metrics ── */}
        <div className="bg-background border-gray-light border-y py-14 lg:py-16">
          <div className="container">
            <div className="section-heading">
              <h2>Results at a Glance</h2>
              <p className="mx-auto sm:max-w-145">
                Measurable outcomes delivered within the project timeline.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4 lg:mt-12">
              {cs.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-gray-light rounded-lg border p-6 text-center space-y-2"
                >
                  <div className="text-primary text-3xl font-semibold sm:text-4xl xl:text-5xl/14">
                    {metric.value}
                  </div>
                  <p className="text-sm font-medium">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Challenges & Solutions ── */}
        <div className="container py-14 lg:py-16">
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 xl:gap-20">
            <div className="space-y-6">
              <h2>Challenges</h2>
              <div className="space-y-4 lg:space-y-5">
                {cs.challenges.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <BadgeCheck className="text-primary mt-0.75 size-5 shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2>Our Solutions</h2>
              <div className="space-y-4 lg:space-y-5">
                {cs.solutions.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <BadgeCheck className="text-primary mt-0.75 size-5 shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Process ── */}
        <div className="bg-background border-gray-light border-t py-14 lg:py-16">
          <div className="container">
            <div className="section-heading">
              <h2>Our Process</h2>
              <p className="mx-auto sm:max-w-145">
                A structured, transparent approach from brief to delivery.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-324 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {cs.process.map((phase, index) => (
                <div
                  key={phase.title}
                  className="border-gray-light group rounded-lg border p-6 space-y-3"
                >
                  <div className="border-primary/20 bg-primary/5 text-primary grid size-9 place-content-center rounded-lg border text-sm font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="bg-secondary py-14 text-center font-medium text-white lg:py-16">
          <div className="container">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              <div className="space-y-2">
                <Counter target={cs.stats.conversionUplift} suffix="%" />
                <div>Conversion Uplift</div>
              </div>
              <div className="space-y-2">
                <Counter target={cs.stats.dropoffReduction} suffix="%" />
                <div>Drop-off Reduction</div>
              </div>
              <div className="space-y-2">
                <Counter target={cs.stats.deliveryDays} suffix=" days" />
                <div>Delivery Timeline</div>
              </div>
              <div className="space-y-2">
                <Counter target={100} suffix="%" />
                <div>On-time Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── More Case Studies ── */}
        {others.length > 0 && (
          <div className="container py-14 lg:py-16">
            <div className="mb-8 flex items-center justify-between gap-5">
              <h2>More Case Studies</h2>
              <Link href="/case-studies" className="btn">
                View all
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/case-studies/${other.slug}`}
                  className="border-gray-light group flex flex-col overflow-hidden rounded-xl border transition hover:shadow-lg"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={other.heroImage}
                      alt={`${other.client} case study`}
                      className="size-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <span className="bg-primary/10 text-primary w-fit rounded px-2 py-0.5 text-xs font-semibold">
                      {other.industry}
                    </span>
                    <h3 className="text-base font-semibold">{other.client}</h3>
                    <p className="text-gray line-clamp-2 text-sm">{other.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <CtaBanner />
      </div>

      <Footer />
    </>
  );
}
