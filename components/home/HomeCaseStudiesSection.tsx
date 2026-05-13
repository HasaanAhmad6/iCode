import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";

export function HomeCaseStudiesSection() {
  // Display first 3 case studies
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <div className="border-gray-light overflow-hidden border-t py-14 lg:py-16">
      <div className="container space-y-8 lg:space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
          <div className="w-full grow">
            <div className="section-heading sm:text-left">
              <div>Case Studies</div>
              <h2>Results that speak for themselves</h2>
              <p className="sm:max-w-md">
                Explore how we've partnered with brands to deliver measurable impact through strategic design and development.
              </p>
            </div>
          </div>
          <Link href="/case-studies" className="btn mx-auto shrink-0 pr-3 sm:mx-0">
            View all case studies
            <ChevronRight className="size-5" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </div>
  );
}
