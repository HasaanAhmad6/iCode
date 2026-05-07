import Link from "next/link";
import { BadgeCheck, Briefcase, Clock3, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { JobDetailsClient } from "@/components/job-details/job-detailsClient";
import {
  jobDetailsBenefits,
  jobDetailsHero,
  jobDetailsResponsibilities,
  jobDetailsServiceLinks,
  jobDetailsSkillsQualifications,
  jobDetailsWhatWeOffer,
} from "@/data/job-details";

export default function JobDetailsPage() {
  return (
    <>
      <JobDetailsClient />

      <Navbar serviceLinks={jobDetailsServiceLinks} />

      <div className="grow">
        <div className="bg-secondary relative z-1 flex min-h-60 items-end overflow-hidden py-8 lg:min-h-85 lg:py-16">
          <img src="/assets/images/job-detail-banner.png" alt="Job details" className="absolute inset-0 -z-1 size-full" />
          <div className="container flex h-full flex-col gap-4">
            <h1 className="text-white">{jobDetailsHero.title}</h1>
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex shrink-0 gap-2 sm:gap-4">
                <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-1.5 py-1 text-sm/5 font-semibold sm:px-2 sm:text-sm/6">
                  <MapPin className="size-4 shrink-0" />
                  <span>{jobDetailsHero.location}</span>
                </div>
                <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-1.5 py-1 text-sm/5 font-semibold sm:px-2 sm:text-sm/6">
                  <Briefcase className="size-4 shrink-0" />
                  <span>{jobDetailsHero.experience}</span>
                </div>
                <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-1.5 py-1 text-sm/5 font-semibold sm:px-2 sm:text-sm/6">
                  <Clock3 className="size-4 shrink-0" />
                  <span>{jobDetailsHero.type}</span>
                </div>
              </div>
              <Link
                href="/job-details#ApplicationForm"
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
              We are looking for a skilled UI/UX Designer who can translate business requirements
              into intuitive, user-centered digital experiences. The role involves working closely
              with product, development, and business teams to design interfaces that are
              functional, consistent, and aligned with brand standards.
            </p>
            <p>
              This position requires strong design fundamentals, attention to detail, and a
              structured approach to problem-solving.
            </p>

            <h2>Key Responsibilities</h2>
            <div className="space-y-2">
              {jobDetailsResponsibilities.map((item) => (
                <div key={item} className="flex items-start gap-2.5 [&_p]:my-0">
                  <span className="bg-primary mt-2 size-2 shrink-0 rounded-xs lg:mt-1.75 lg:size-3" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <h2>Required Skills & Qualifications</h2>
            <div className="space-y-2">
              {jobDetailsSkillsQualifications.map((item) => (
                <div key={item} className="flex items-start gap-2.5 [&_p]:my-0">
                  <span className="bg-primary mt-2 size-2 shrink-0 rounded-xs lg:mt-1.75 lg:size-3" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <h2>What We Offer</h2>
            <div className="space-y-2">
              {jobDetailsWhatWeOffer.map((item) => (
                <div key={item} className="flex items-start gap-2.5 [&_p]:my-0">
                  <span className="bg-primary mt-2 size-2 shrink-0 rounded-xs lg:mt-1.75 lg:size-3" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <h2>Benefits</h2>
            <div className="space-y-2">
              {jobDetailsBenefits.map((item) => (
                <div key={item} className="flex items-start gap-2.5 [&_p]:my-0">
                  <BadgeCheck className="text-primary mt-0.5 size-4 shrink-0 lg:size-5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="ApplicationForm"
            className="border-gray-light shrink-0 scroll-mt-16 space-y-8 rounded-md border px-4 py-6 shadow-[0_16px_32px_-12px_rgba(88,92,95,0.1)] sm:p-8 lg:w-100 xl:w-139.25 xl:space-y-12 xl:p-12"
          >
            <h2 className="text-2xl/8 lg:text-[32px]/10">Application Form</h2>
            <form className="space-y-6 xl:space-y-8">
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" placeholder="Enter your full name" className="form-input" />
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Enter your email address" className="form-input" />
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="text" placeholder="Enter your phone number" className="form-input" />
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label htmlFor="experience">Total experience</label>
                <input
                  id="experience"
                  type="text"
                  placeholder="Enter your total experience"
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label htmlFor="portfolio">Portfolio link</label>
                <input
                  id="portfolio"
                  type="text"
                  placeholder="Enter your portfolio link"
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label htmlFor="resume">Upload resume</label>
                <div className="border-gray-light hover:border-primary bg-background relative grid h-25 place-content-center rounded-lg border p-2 transition">
                  <input id="resume" type="file" className="absolute inset-0 cursor-pointer opacity-0" />
                  <span>Upload PDF or DOC</span>
                </div>
              </div>
              <label className="text-gray flex items-start gap-2 text-base font-normal">
                <input type="checkbox" className="form-checkbox mt-1.5" />
                <p>
                  I confirm the details provided are accurate and consent to recruitment-related
                  communication.
                </p>
              </label>
              <button type="submit" className="btn mt-4 mb-2 w-full">
                Submit application
              </button>
              <p className="text-center text-sm sm:text-base">
                Our team typically responds within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
