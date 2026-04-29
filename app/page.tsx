"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Code,
  Layers,
  Megaphone,
  Palette,
  Sigma,
} from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactModal } from "@/components/ContactModal";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import {
  homeClientLogos,
  homeProjects,
  homeServiceLinks,
  homeTestimonials,
} from "@/data/home";

import "swiper/css";
import "swiper/css/navigation";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactModal, setContactModal] = useState(false);
  const [testimonialsSwiper, setTestimonialsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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

      <Navbar serviceLinks={homeServiceLinks} />

      <div className="grow">
        <div className="pt-14 lg:pt-16">
          <div className="container">
            <div className="mx-auto max-w-262 space-y-6 pb-14 text-center lg:pb-20">
              <h1>Empower your business with reliable digital solutions</h1>
              <p className="mx-auto max-w-143">
                We help companies streamline operations, elevate brand presence, and grow faster
                with trusted technology and design.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                <Link href="/contact" className="btn pr-3">
                  Get a quote
                  <ChevronRight className="size-5" />
                </Link>
                <Link href="/services" className="btn btn-secondary pr-3">
                  Explore services
                  <ChevronRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto h-50 max-w-409 overflow-hidden rounded-t-[100px] sm:h-70 sm:rounded-t-[200px] lg:h-92 lg:rounded-t-[370px]">
            <img
              src="/assets/images/hero-banner.jpg"
              alt="Hero image"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="bg-secondary py-14 text-center font-medium text-white lg:py-16">
          <div className="container">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              <div className="space-y-2">
                <Counter target={250} suffix="+" />
                <div>Successful Projects</div>
              </div>
              <div className="space-y-2">
                <Counter target={98} suffix="%" />
                <div>Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <Counter target={12} suffix="+ Years" />
                <div>Industry Experience</div>
              </div>
              <div className="space-y-2">
                <Counter target={40} suffix="+" />
                <div>Global Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background py-14 lg:py-16">
          <div className="container">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
              <div className="w-full grow">
                <div className="section-heading sm:text-left">
                  <div>Our services</div>
                  <h2>What we can do for you</h2>
                  <p className="sm:max-w-md">
                    Delivering end-to-end services that turn ideas into impactful digital
                    experiences.
                  </p>
                </div>
              </div>
              <Link href="/services" className="btn mx-auto shrink-0 sm:mx-0">
                View all services
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Web Development",
                  text: "We build fast, scalable, and secure web applications tailored to your business goals.",
                  icon: <Code className="size-5" />,
                },
                {
                  title: "UI/UX Design",
                  text: "Our approach blends research, strategy, and design to enhance engagement and usability.",
                  icon: <Sigma className="size-5" />,
                },
                {
                  title: "Marketing Solutions",
                  text: "We create data-driven marketing strategies that increase visibility and drive conversions.",
                  icon: <Megaphone className="size-5" />,
                },
                {
                  title: "Product Design",
                  text: "We design digital products that solve real problems and deliver meaningful experiences.",
                  icon: <Layers className="size-5" />,
                },
                {
                  title: "Brand Identity",
                  text: "We craft distinctive brand identities that communicate clarity, trust, and purpose.",
                  icon: <Palette className="size-5" />,
                },
                {
                  title: "App Development",
                  text: "We build fast, scalable mobile apps tailored to your business needs.",
                  icon: <Code className="size-5" />,
                },
              ].map((service) => (
                <div key={service.title} className="bg-primary rounded-[14px]">
                  <div className="group border-gray-light relative h-full overflow-hidden rounded-xl border bg-white p-6 shadow-[0_16px_32px_-12px_rgba(88,92,95,0.1)] transition-all hover:-rotate-3">
                    <img
                      src="/assets/images/leaves-icon.svg"
                      alt="leaves-icon"
                      className="absolute -top-5 -right-5 size-40"
                    />
                    <div className="relative">
                      <div className="border-gray-light group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:text-primary grid size-10 place-content-center rounded-lg border bg-[#FAFAFA] transition">
                        {service.icon}
                      </div>
                      <h3 className="mt-8 mb-4">{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-gray-light overflow-hidden border-t py-14 lg:py-16">
          <div className="container space-y-8 lg:space-y-12">
            <div className="section-heading">
              <div>Our projects</div>
              <h2>Work that drives real results</h2>
            </div>
            <Swiper
              modules={[Autoplay]}
              className="project-swiper"
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2, spaceBetween: 24 },
                1280: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {homeProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="border-gray-light group relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border bg-white p-4 lg:p-6">
                    <div className="space-y-2 sm:space-y-4">
                      <h3 className="text-xl font-medium text-black lg:text-2xl">{project.title}</h3>
                      <p className="line-clamp-2">{project.description}</p>
                    </div>
                    <div className="relative mt-auto h-60 overflow-hidden rounded-lg sm:h-75 xl:h-105">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href="/projects"
                        className="h4 text-gray relative z-1 line-clamp-1 transition hover:text-black lg:text-lg"
                      >
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
            <div className="text-center">
              <Link href="/projects" className="btn">
                View all projects
              </Link>
            </div>
          </div>
        </div>

        <div className="border-gray/20 border-y bg-[#FAFAFA] pt-14 lg:pt-16">
          <div className="container">
            <div className="section-heading">
              <div>Clients</div>
              <h2>Trusted by leading brands worldwide</h2>
            </div>
          </div>
          <Swiper
            modules={[Autoplay]}
            className="clients-swiper pt-12! pb-14! lg:pb-16!"
            slidesPerView={2}
            spaceBetween={16}
            loop
            centeredSlides
            speed={1000}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 4, spaceBetween: 16 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
              1280: { slidesPerView: 6, spaceBetween: 30 },
              1568: { slidesPerView: 8, spaceBetween: 48 },
            }}
          >
            {homeClientLogos.map((logo, index) => (
              <SwiperSlide key={`${logo}-${index}`}>
                <div className="border-gray-light flex justify-center rounded-lg border bg-white px-2 py-6 shadow-[0_16px_32px_-12px_rgba(88,92,95,0.1)]">
                  <img src={logo} alt="Logo" className="w-full max-w-34" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <WhyChooseUs titleClassName="text-center!" />

        <div className="relative bg-[url(/assets/images/about-bg.jpg)] bg-cover bg-center bg-no-repeat py-14 lg:py-16">
          <div className="from-secondary via-secondary to-secondary absolute inset-0 bg-linear-to-r opacity-80 lg:to-transparent lg:opacity-100" />
          <div className="container">
            <div className="relative flex flex-col items-center gap-14 lg:flex-row lg:items-end lg:justify-between">
              <div className="section-heading lg:text-left">
                <div>About us</div>
                <h2 className="text-white lg:max-w-122 lg:pb-33">A team committed to your success</h2>
                <p className="border-white/30 font-medium text-white/80 sm:max-w-3xl lg:mt-0 lg:border-t lg:pt-4 lg:text-2xl/10">
                  We combine strategy, design, and technology to{" "}
                  <span className="text-white">help businesses unlock their full potential.</span>{" "}
                  Our approach is simple: Understand your challenges deeply, and{" "}
                  <span className="text-white">deliver solutions that move the needle.</span>
                </p>
              </div>
              <Link href="/about-us" className="btn btn-secondary shrink-0 pr-3">
                Know more about us
                <ChevronRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-background border-gray-light relative overflow-hidden border-y-2 py-14 lg:py-16">
          <img src="/assets/images/quote.png" alt="Quote" width={160} height={160} className="absolute top-0 left-0 w-40" />
          <div className="container flex flex-col gap-8 lg:flex-row xl:gap-20">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:gap-8 lg:flex-col xl:max-w-115">
              <div className="section-heading text-left">
                <div>Testimonials</div>
                <h2>What our clients say</h2>
                <p className="max-w-115">
                  We&apos;ve helped global brands create meaningful impact. Here&apos;s what our
                  clients share about working with us.
                </p>
              </div>
              <div className="mt-auto flex gap-4 lg:gap-6">
                <button
                  type="button"
                  onClick={() => testimonialsSwiper?.slidePrev()}
                  className="border-gray-light grid size-9 shrink-0 place-content-center rounded-lg border bg-white text-black transition hover:bg-black hover:text-white lg:size-11"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => testimonialsSwiper?.slideNext()}
                  className="border-gray-light grid size-9 shrink-0 place-content-center rounded-lg border bg-white text-black transition hover:bg-black hover:text-white lg:size-11"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <div className="relative grow lg:w-[calc(100%-540px)]">
              <span className="sm:from-background absolute inset-y-0 right-0 z-2 hidden w-1/4 translate-x-1 bg-linear-to-l sm:to-transparent lg:block" />
              <Swiper
                modules={[Autoplay]}
                className="testimonials-swiper grid! px-px!"
                onSwiper={setTestimonialsSwiper}
                spaceBetween={16}
                speed={1000}
                loop
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 1.5, spaceBetween: 24 },
                  1280: { slidesPerView: 2.5 },
                }}
              >
                {homeTestimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="border-gray-light flex h-full flex-col gap-8 rounded-lg border bg-white p-4 lg:gap-14 lg:p-6">
                      <div className="grow space-y-4 lg:min-h-78">
                        <p>{item.company}</p>
                        <h4 className="mt-2">{item.subject}</h4>
                        <p>{item.message}</p>
                      </div>
                      <div className="mt-auto flex items-center gap-4">
                        <div className="size-14 shrink-0 overflow-hidden rounded-full">
                          <img
                            src={item.person_image}
                            alt="person image"
                            className="size-full object-cover object-top"
                          />
                        </div>
                        <div className="space-y-1">
                          <h4>{item.name}</h4>
                          <p className="text-base/6">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="bg-secondary py-14 lg:py-16">
          <div className="container space-y-8 lg:space-y-12">
            <div className="section-heading">
              <div>Pricing plans</div>
              <h2 className="text-white">Simple, Transparent Pricing</h2>
              <p className="text-gray-light mx-auto max-w-125">
                Choose the plan that fits your business needs. No hidden fees just clear value and
                reliable service.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Essential",
                  desc: "Get a professional online presence at a fraction of agency costs.",
                  cta: "Get Started",
                  featured: false,
                  benefits: [
                    "Professional website setup",
                    "Mobile-responsive design",
                    "Up to 5 core pages",
                    "Basic branding elements",
                    "Standard support (Email)",
                    "Monthly analytics overview",
                  ],
                },
                {
                  title: "Professional",
                  desc: "Unlock premium features while saving 40% vs. custom builds.",
                  cta: "Choose Professional",
                  featured: true,
                  benefits: [
                    "Everything in Essential",
                    "Up to 15 pages included",
                    "Priority support (Email + Chat)",
                    "Advanced on-page SEO",
                    "Conversion-focused UX enhancements",
                    "Integration with marketing tools",
                  ],
                },
                {
                  title: "Business Plus",
                  desc: "Get enterprise-level capabilities for up to 50% less than agency retainers.",
                  cta: "Upgrade to Business Plus",
                  featured: false,
                  benefits: [
                    "Everything in Professional",
                    "Unlimited pages & modules",
                    "Dedicated account manager",
                    "Monthly performance strategy call",
                    "Automation workflow setup",
                    "Detailed analytics & reporting",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.title}
                  className={`rounded-lg border-2 p-4 backdrop-blur-[30px] lg:py-8 xl:px-8 ${
                    plan.featured
                      ? "border-gray-light/20 relative z-1 overflow-hidden"
                      : "border-gray-light/5 bg-white/2 lg:mt-8"
                  }`}
                >
                  <div className="section-heading text-left">
                    <h3 className="text-white">{plan.title}</h3>
                    <p className="text-gray-light mt-2">{plan.desc}</p>
                  </div>
                  <div className="mt-6 text-5xl font-medium text-white lg:mt-8">
                    $99
                    <span className="ml-2.5 inline text-xl font-light opacity-60 lg:text-2xl">
                      / month
                    </span>
                  </div>
                  <button
                    type="button"
                    className={`btn mt-4 w-full justify-center lg:mt-6 ${
                      plan.featured ? "btn-secondary" : "bg-white/5 hover:bg-primary"
                    }`}
                  >
                    {plan.cta}
                  </button>
                  <div className="divide-gray-light/20 mt-6 divide-y lg:mt-8">
                    {plan.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="text-gray-light flex items-start gap-2 py-2 lg:py-3"
                      >
                        <BadgeCheck
                          className={`mt-1 size-4 shrink-0 lg:mt-0.75 lg:size-5 ${
                            plan.featured ? "text-primary" : ""
                          }`}
                        />
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/pricing-comparison" className="btn btn-secondary">
                Compare Plans
              </Link>
            </div>
          </div>
        </div>

        <CtaBanner onQuoteClick={() => setContactModal(true)} />
      </div>

      <Footer />
      <ContactModal open={contactModal} onClose={() => setContactModal(false)} />
    </>
  );
}
