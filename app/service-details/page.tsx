"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BadgeCheck,
  ChevronRight,
  Layers,
  LayoutPanelLeft,
  Minus,
  MonitorSmartphone,
  PenTool,
  Plus,
  UserSearch,
  Workflow,
} from "lucide-react";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PricingPlans } from "@/components/PricingPlans";
import {
  serviceDetailsFaqs,
  serviceDetailsImpact,
  serviceDetailsOfferings,
  serviceDetailsProblems,
  serviceDetailsProjects,
  serviceDetailsServiceLinks,
} from "@/data/service-details";

import "swiper/css";

export default function ServiceDetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactModal, setContactModal] = useState(false);
  const [activeFaqId, setActiveFaqId] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const iconMap = {
    "user-search": <UserSearch className="size-5 lg:size-6" />,
    "layout-panel-left": <LayoutPanelLeft className="size-5 lg:size-6" />,
    "pen-tool": <PenTool className="size-5 lg:size-6" />,
    workflow: <Workflow className="size-5 lg:size-6" />,
    layers: <Layers className="size-5 lg:size-6" />,
    "monitor-smartphone": <MonitorSmartphone className="size-5 lg:size-6" />,
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

      <Navbar serviceLinks={serviceDetailsServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">UX/UI Design</h1>
            <p className="text-gray-light max-w-275">
              We create intuitive, user-centered interfaces that elevate engagement and help
              businesses deliver seamless digital experiences.
            </p>
          </div>
        </div>

        <div className="container flex flex-col gap-8 py-14 lg:flex-row lg:py-16 xl:gap-20">
          <div className="w-full max-w-150 space-y-6">
            <h2>What this service includes</h2>
            <div className="space-y-4">
              <p>
                Our UX/UI Design service focuses on crafting clean, modern interfaces that balance
                aesthetics and usability.
              </p>
              <p>
                We combine research, strategy, and visual design to create digital products that
                feel intuitive and drive measurable business impact.
              </p>
            </div>
            <button type="button" className="btn" onClick={() => setContactModal(true)}>
              Get a quote
              <ChevronRight className="size-5" />
            </button>
          </div>
          <div className="grid grow gap-4 sm:grid-cols-2">
            <div className="mr-8 h-40 overflow-hidden rounded-lg sm:mr-0 sm:mb-8 sm:h-70">
              <img src="/assets/images/service-6.jpg" alt="Service img" className="size-full object-cover" />
            </div>
            <div className="ml-8 h-40 overflow-hidden rounded-lg sm:mt-8 sm:ml-0 sm:h-70">
              <img src="/assets/images/service-5.jpg" alt="Service img" className="size-full object-cover" />
            </div>
          </div>
        </div>

        <div className="bg-background border-gray-light border-y py-14 lg:py-16">
          <div className="container">
            <div className="section-heading">
              <h2>Key Offerings</h2>
              <p className="mx-auto sm:max-w-145">
                Our UX/UI Design service focuses on crafting clean, modern interfaces that balance
                aesthetics and usability.
              </p>
            </div>
            <div className="divide-gray-light mx-auto grid max-w-324 pt-8 sm:grid-cols-2 sm:divide-x lg:grid-cols-1 lg:gap-6 lg:divide-x-0 lg:pt-12">
              <div className="grid sm:pr-6 lg:grid-cols-3 lg:pr-0">
                {serviceDetailsOfferings.slice(0, 3).map((item) => (
                  <div key={item.title} className="group border-gray-light flex flex-row items-start gap-3 py-3 sm:flex-col lg:border-r lg:px-6">
                    <div className="border-primary/20 bg-primary/5 group-hover:bg-primary text-primary grid size-10 shrink-0 place-content-center rounded-lg border transition group-hover:text-white">
                      {iconMap[item.icon]}
                    </div>
                    <div className="space-y-2 lg:space-y-3">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid sm:pl-6 lg:grid-cols-3 lg:pl-0">
                {serviceDetailsOfferings.slice(3).map((item) => (
                  <div key={item.title} className="group border-gray-light flex flex-row items-start gap-3 py-3 sm:flex-col lg:border-r lg:px-6">
                    <div className="border-primary/20 bg-primary/5 group-hover:bg-primary text-primary grid size-10 shrink-0 place-content-center rounded-lg border transition group-hover:text-white">
                      {iconMap[item.icon]}
                    </div>
                    <div className="space-y-2 lg:space-y-3">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container py-14 lg:py-16">
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 xl:flex xl:gap-12">
            <div className="w-full space-y-6 sm:order-2 xl:order-0 xl:max-w-102">
              <h2 className="text-3xl font-medium text-black sm:text-4xl xl:text-5xl/14">
                Common problems we solve
              </h2>
              <div className="space-y-4 lg:space-y-6 lg:py-3">
                {serviceDetailsProblems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <BadgeCheck className="text-primary mt-0.75 size-5 shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-80 grow overflow-hidden rounded-lg sm:order-1 sm:col-span-2 xl:order-0 xl:h-109">
              <img src="/assets/images/sticky-notes.jpg" alt="sticky-notes" className="size-full object-cover" />
            </div>
            <div className="w-full space-y-6 sm:order-2 xl:order-0 xl:max-w-102">
              <h2 className="text-3xl font-medium text-black sm:text-4xl xl:text-5xl/14">
                The impact you can expect
              </h2>
              <div className="space-y-4 lg:space-y-6 lg:py-3">
                {serviceDetailsImpact.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <BadgeCheck className="text-primary mt-0.75 size-5 shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background border-gray-light border-t py-14 lg:py-16">
          <div className="container space-y-8 lg:space-y-12">
            <div className="flex items-center justify-between gap-5">
              <h2>Related Projects</h2>
              <Link href="/projects" className="btn">
                View all projects
              </Link>
            </div>
            <Swiper
              modules={[Autoplay]}
              className="project-swiper px-px!"
              spaceBetween={16}
              speed={1000}
              loop
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 2, spaceBetween: 24 }, 1280: { slidesPerView: 3 } }}
            >
              {serviceDetailsProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="border-gray-light group relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border bg-white p-4 lg:p-6">
                    <div className="space-y-2 sm:space-y-4">
                      <h3 className="text-xl font-medium text-black lg:text-2xl">{project.title}</h3>
                      <p className="line-clamp-2">{project.description}</p>
                    </div>
                    <div className="relative mt-auto h-60 overflow-hidden rounded-lg sm:h-75 xl:h-105">
                      <img src={project.image} alt={project.title} loading="lazy" className="size-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Link href="/projects" className="h4 text-gray relative z-1 line-clamp-1 transition hover:text-black lg:text-lg">
                        {project.category}
                      </Link>
                      <div className="bg-primary-light text-primary ring-primary/20 shrink-0 rounded p-1 text-xs font-medium ring-1 sm:px-2 sm:text-sm">
                        {project.tag}
                      </div>
                    </div>
                    <Link href={project.url} className="absolute inset-0" aria-label="View project" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <PricingPlans variant="service-details" />

        <div className="bg-background border-y border-gray-200 py-14 lg:py-16">
          <div className="container flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <div className="section-heading w-full text-center lg:text-left xl:max-w-149">
              <h2>Frequently Asked Questions</h2>
              <p>Discover updates, product insights, and the latest in business technology.</p>
            </div>
            <div className="w-full max-w-190.5 lg:ml-auto">
              {serviceDetailsFaqs.map((faq, index) => {
                const isActive = faq.id === activeFaqId;
                const nextIsActive = serviceDetailsFaqs[index + 1]?.id === activeFaqId;
                return (
                  <div
                    key={faq.id}
                    className={`border-gray-light block overflow-hidden border-b ${isActive ? "rounded-lg border border-primary/20 bg-primary/5" : ""} ${nextIsActive ? "border-b-0" : ""}`}
                  >
                    <button
                      type="button"
                      className="group hover:text-secondary flex w-full items-center justify-between gap-4 px-2.5 py-4 text-left text-lg/5.5 text-black duration-300 sm:px-4 sm:text-xl/6 lg:py-6 xl:text-2xl/8"
                      aria-expanded={isActive}
                      onClick={() => setActiveFaqId((prev) => (prev === faq.id ? 0 : faq.id))}
                    >
                      <span className="flex-1">{faq.question}</span>
                      {isActive ? (
                        <Minus className="text-primary size-4 shrink-0 lg:size-6" />
                      ) : (
                        <Plus className="text-gray size-4 shrink-0 lg:size-6" />
                      )}
                    </button>
                    {isActive && <div className="px-2.5 pb-4 sm:px-4 sm:pt-2">{faq.answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
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
              alt="circle-half"
              className="absolute -top-16 right-0 -z-1 h-auto w-20 md:w-35 xl:w-65"
            />
            <div className="section-heading text-white">
              <h2 className="text-white">Ready to Build Something Better?</h2>
              <p>
                Let&apos;s discuss your goals and create a tailored solution that helps your business
                grow with confidence.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-2 sm:gap-4 lg:gap-6">
              <Link href="/contact" className="btn btn-secondary px-2.5 whitespace-nowrap sm:px-4.75">
                Get a quote
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary bg-transparent px-2.5 whitespace-nowrap text-white sm:px-4.75"
              >
                Book a free consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ContactModal open={contactModal} onClose={() => setContactModal(false)} />
    </>
  );
}
