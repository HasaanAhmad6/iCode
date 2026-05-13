import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { slug, client, industry, duration, heroImage, tagline, metrics } = caseStudy;

  return (
    <Link
      href={`/case-studies/${slug}`}
      className="border-gray-light group flex flex-col overflow-hidden rounded-xl border transition hover:shadow-lg"
    >
      {/* Card image */}
      <div className="h-52 overflow-hidden">
        <img
          src={heroImage}
          alt={`${client} case study`}
          className="size-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Card body */}
      <div className="flex grow flex-col gap-3 p-6">
        {/* Meta badges */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs font-semibold">
            {industry}
          </span>
          <span className="bg-background text-gray rounded px-2 py-0.5 text-xs font-semibold">
            {duration}
          </span>
        </div>

        <h3 className="text-lg font-semibold leading-snug">{client}</h3>
        <p className="text-gray grow text-sm">{tagline}</p>

        {/* Key metric pills */}
        <div className="mt-2 flex flex-wrap gap-2">
          {metrics.slice(0, 2).map((m) => (
            <span
              key={m.label}
              className="border-gray-light rounded-full border px-3 py-0.5 text-xs font-medium"
            >
              <span className="text-primary font-semibold">{m.value}</span> {m.label}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-black transition group-hover:gap-2">
          Read case study
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
