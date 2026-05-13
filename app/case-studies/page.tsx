import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CaseStudyPreloader } from "@/components/case-study/CaseStudyPreloader";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { caseStudies, caseStudyServiceLinks } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudyPreloader />

      <Navbar serviceLinks={caseStudyServiceLinks} />

      <div className="grow">

        {/* ── Hero Banner ── */}
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 text-white sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Case Studies</h1>
            <p className="text-gray-light max-w-275">
              Real problems. Measurable outcomes. Explore how we partner with clients to deliver
              digital products that grow businesses.
            </p>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="container py-14 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
