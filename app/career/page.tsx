"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Briefcase,
  Clock3,
  MapPin,
  Play,
  Rocket,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  careerJobs,
  careerLifeAtItems,
  careerServiceLinks,
  careerWhyWorkItems,
} from "@/data/career";

export default function CareerPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoModal, setVideoModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const iconMap = {
    rocket: <Rocket className="size-6" />,
    users: <Users className="size-6" />,
    "trending-up": <TrendingUp className="size-6" />,
    "badge-check": <BadgeCheck className="size-6" />,
  } as const;

  return (
    <>
      <div className="relative">
        {isLoading && (
          <div
            id="preloader"
            className="fixed inset-0 z-60 flex h-dvh w-full items-center justify-center bg-white"
          >
            <span className="from-background to-background absolute inset-0 animate-pulse bg-linear-to-br via-white" />
            <div className="border-t-gray/70 border-b-gray-light absolute top-1/2 left-1/2 grid size-10 -translate-1/2 animate-spin place-content-center rounded-full border-y-8 sm:size-14" />
          </div>
        )}
      </div>

      <Navbar serviceLinks={careerServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Work with us</h1>
            <p className="text-gray-light max-w-275">
              Join a team that values integrity, growth, and long-term impact.
            </p>
          </div>
        </div>

        <div className="container py-14 lg:py-16">
          <div className="section-heading text-left">
            <div>Why work with us</div>
            <h2>A workplace designed for growth and collaboration.</h2>
          </div>
          <div className="mt-8 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-12 2xl:gap-16">
            <div className="border-gray-light h-75 overflow-hidden rounded-xl border sm:h-96 lg:h-114">
              <img
                src="/assets/images/career-section-1.jpg"
                alt="Career section"
                className="size-full object-cover"
              />
            </div>
            <div className="relative grid sm:grid-cols-2">
              <span className="absolute top-1/2 left-1/2 hidden size-12 -translate-1/2 bg-white sm:block" />
              {careerWhyWorkItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`group border-gray-light flex flex-col justify-end space-y-3 p-6 pr-0 pl-0 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"} ${index >= 2 ? "sm:pb-0" : "sm:min-h-51"} ${index === 3 ? "border-t sm:border-t-0" : ""}`}
                >
                  <div className="border-primary/20 bg-primary/5 text-primary grid size-10 place-content-center rounded-lg border transition">
                    {iconMap[item.icon]}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-gray-light bg-background border-y py-14 lg:py-16">
          <div className="container">
            <div className="grid items-start gap-8 xl:grid-cols-2 2xl:flex 2xl:gap-16">
              <div className="w-full 2xl:max-w-lg">
                <div className="section-heading text-left">
                  <div>Life at Aetherial Labs</div>
                  <h2>Where work is meaningful, structured, and people-focused.</h2>
                </div>
                <div className="border-gray-light mt-8 grid gap-x-4 border-l-4 pl-4 sm:grid-cols-2 lg:mt-12">
                  {careerLifeAtItems.map((item) => (
                    <div key={item} className="flex items-center gap-2 py-2 sm:py-3">
                      <BadgeCheck className="text-primary size-5 shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-gray-light hidden h-120 w-full overflow-hidden rounded-xl border lg:block 2xl:max-w-96">
                <img
                  src="/assets/images/career-section-2.jpg"
                  alt="Career section"
                  className="size-full object-cover"
                />
              </div>

              <div className="mt-auto grid w-full gap-8 lg:col-span-2 lg:grid-cols-2 xl:gap-12 2xl:flex 2xl:max-w-122 2xl:flex-col">
                <div className="overflow-hidden">
                  <img
                    src="/assets/images/career-section-2a.png"
                    alt="Career section"
                    className="mx-auto h-auto lg:w-full lg:shadow-[16px_16px_40px_-8px_rgba(13,13,13,0.2)]"
                  />
                </div>
                <p className="border-gray-light mt-auto border-t pt-4 lg:pt-6">
                  Our goal is simple: create impactful solutions that make a measurable difference,
                  whether you&apos;re scaling operations, improving user experience, or building a
                  digital product from the ground up.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-14 lg:py-16">
          <div className="section-heading">
            <h2>Open Positions</h2>
            <p className="mx-auto max-w-136">
              We help companies streamline operations, elevate brand presence, and grow faster with
              trusted technology and design.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            {careerJobs.map((job) => (
              <div
                key={job.id}
                className="border-gray-light bg-background flex flex-col items-start gap-4 rounded-xl border p-4 lg:p-6"
              >
                <h3>{job.title}</h3>

                <div className="mb-2 flex flex-wrap gap-2.5 sm:gap-4">
                  <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-2 py-1 text-sm/6 font-semibold">
                    <MapPin className="size-4 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-2 py-1 text-sm/6 font-semibold">
                    <Clock3 className="size-4 shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2 rounded border px-2 py-1 text-sm/6 font-semibold">
                    <Briefcase className="size-4 shrink-0" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <p className="mb-2">{job.description}</p>
                <Link href="/job-details" className="btn mt-auto">
                  Apply now
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="container pb-14 lg:py-16">
          <div className="border-gray-light relative h-75 overflow-hidden rounded-xl border-4 sm:h-100 xl:h-175">
            <img
              src="/assets/images/video-banner.jpg"
              alt="Video Banner"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/25" />
            <button
              type="button"
              onClick={() => setVideoModal(true)}
              className="border-primary/20 bg-primary-light group absolute top-1/2 left-1/2 mx-auto grid size-10 -translate-1/2 place-items-center rounded-full border shadow-[0_0_0_10px_rgba(255,255,255,0.15),0_0_0_4px_rgba(255,255,255,0.20)] duration-300 sm:size-14"
            >
              <span className="absolute inset-0 -z-1 animate-[ping_2s_ease-out_infinite] rounded-full bg-white/20" />
              <Play className="fill-primary text-primary size-4 shrink-0 duration-300 group-hover:scale-90 lg:size-6" />
              <span className="sr-only">Play video</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {videoModal && (
        <div
          className="fixed inset-0 z-51 flex items-center justify-center overflow-y-auto bg-black/70"
          onClick={() => setVideoModal(false)}
        >
          <div
            className="relative m-auto w-full max-w-5xl p-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setVideoModal(false)}
              className="absolute top-0 right-0 rounded-full bg-white p-1 text-2xl text-black transition hover:scale-105"
            >
              <X className="size-5" />
              <span className="sr-only">Close</span>
            </button>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/GGf1JjSAKP4?rel=0&autoplay=1&v=GGf1JjSAKP4"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
