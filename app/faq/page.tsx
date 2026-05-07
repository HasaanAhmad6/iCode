import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaqClient } from "@/components/faq/faqClient";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { faqItems, faqServiceLinks } from "@/data/faq";

export default function FaqPage() {
  return (
    <>
      <FaqClient />

      <Navbar serviceLinks={faqServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Frequently Asked Questions</h1>
            <p className="text-gray-light max-w-275">
              Discover updates, product insights, and the latest in business technology.
            </p>
          </div>
        </div>

        <div className="container py-14 lg:py-16">
          <FaqAccordion items={faqItems} initialActiveId={1} splitColumns />
        </div>

        <div className="relative overflow-hidden py-14 shadow-[0_16px_40px_-8px_rgba(13,13,13,0.2)] lg:py-16">
          <img src="/assets/images/cta-banner.png" alt="graphy" className="absolute inset-0 size-full object-cover" />
          <div className="relative z-1 container text-center">
            <img
              src="/assets/images/circle-star.png"
              alt="circle-star"
              className="absolute -bottom-16 left-0 -z-1 h-auto w-20 md:w-35 xl:w-65"
            />
            <img
              src="/assets/images/circle-half.png"
              alt="circle-star"
              className="absolute -top-16 right-0 -z-1 h-auto w-20 md:w-35 xl:w-65"
            />
            <div className="section-heading text-white">
              <h2 className="text-white">Couldn&apos;t find your answers?</h2>
              <p>
                Let&apos;s discuss your goals and create a tailored solution that helps your business
                grow with confidence.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-2 sm:gap-4 lg:gap-6">
              <Link href="/contact" className="btn btn-secondary px-2.5 whitespace-nowrap sm:px-4.75">
                Contact us
                <ChevronRight className="size-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
