"use client";

import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Headset,
  Lightbulb,
  Lock,
  Minus,
  Plus,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { ContactModal } from "@/components/ContactModal";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  AboutValueIcon,
  aboutJourneys,
  aboutPosts,
  aboutServiceLinks,
  aboutTeams,
  aboutTestimonials,
  aboutValues,
} from "@/data/about";

import "swiper/css";

export default function AboutUsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactModal, setContactModal] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [activeTeam, setActiveTeam] = useState(0);
  const [testimonialsSwiper, setTestimonialsSwiper] = useState<SwiperType | null>(null);
  const [teamSwiper, setTeamSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />

      <div className="relative">
        {isLoading && (
          <div id="preloader" className="fixed inset-0 z-60 flex h-dvh w-full items-center justify-center bg-white">
            <span className="from-background to-background absolute inset-0 animate-pulse bg-linear-to-br via-white" />
            <div className="border-t-gray/70 border-b-gray-light absolute top-1/2 left-1/2 grid size-10 -translate-1/2 animate-spin place-content-center rounded-full border-y-8 sm:size-14" />
          </div>
        )}
      </div>

      <Navbar serviceLinks={aboutServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 text-white sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">About us</h1>
          </div>
        </div>

        <div className="bg-background relative z-1 overflow-hidden py-14 lg:py-16">
          <img src="/assets/images/plus-bg-layer.png" alt="Plus bg" className="absolute inset-0 -z-1" />
          <div className="relative z-1 container">
            <div className="section-heading sm:text-left">
              <h2>Our story</h2>
              <p className="sm:max-w-221">
                Our goal is simple: create impactful solutions that make a measurable difference,
                whether you are scaling operations or building a digital product from the ground up.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-8 lg:mt-11 lg:flex-row lg:gap-16">
              <div className="h-75 overflow-hidden lg:h-99">
                <img src="/assets/images/story-mission.jpg" alt="Story mission" className="size-full object-cover" />
              </div>
              <div className="max-w-147 space-y-8 lg:space-y-12">
                <div className="section-heading sm:text-left">
                  <h2>Our mission</h2>
                  <p>
                    To help organizations operate smarter, scale faster, and deliver lasting value
                    through technology-driven solutions.
                  </p>
                </div>
                <div className="border-gray-light space-y-4 border-l-2 pl-5 sm:border-l-4 lg:space-y-6">
                  <div className="space-y-2.5 lg:space-y-4">
                    <div className="flex gap-3 text-lg/6.5 text-black lg:text-xl/7">
                      <Rocket className="mt-1.25 size-4 shrink-0 lg:size-5" />
                      <h3 className="text-xl lg:text-2xl">Drive Operational Excellence</h3>
                    </div>
                    <p>
                      We streamline processes, optimize systems, and eliminate inefficiencies to
                      help businesses perform at their best.
                    </p>
                  </div>
                  <div className="space-y-2.5 lg:space-y-4">
                    <div className="flex gap-3 text-lg/6.5 text-black lg:text-xl/7">
                      <Lock className="mt-1.25 size-4 shrink-0 lg:size-5" />
                      <h3 className="text-xl lg:text-2xl">Build Reliable &amp; Secure Solutions</h3>
                    </div>
                    <p>
                      We design and manage technology that is secure, resilient, and built to
                      support long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-14 lg:py-16">
          <img src="/assets/images/ninja-star.png" alt="Ninja star" className="absolute -top-12 right-0 h-45 w-auto object-contain" />
          <div className="container">
            <div className="section-heading sm:text-left">
              <h2>Our values</h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:flex xl:flex-row">
              {aboutValues.map((value, index) => {
                const active = activeValue === index;
                const iconMap = {
                  "badge-check": <BadgeCheck className="size-6 shrink-0" />,
                  rocket: <Rocket className="size-6 shrink-0" />,
                  lightbulb: <Lightbulb className="size-6 shrink-0" />,
                  "shield-check": <ShieldCheck className="size-6 shrink-0" />,
                } as const satisfies Record<AboutValueIcon, unknown>;
                return (
                  <button
                    key={value.number}
                    type="button"
                    className={`relative z-1 flex shrink-0 cursor-pointer flex-col justify-between gap-5 overflow-hidden rounded-lg border p-4 duration-500 ease-in-out sm:h-75 xl:h-110 xl:w-65 xl:p-8 2xl:w-75 ${active ? "grow border-primary bg-primary text-white" : "border-gray-light bg-background"}`}
                    onClick={() => setActiveValue(index)}
                  >
                    <img src="/assets/images/graphy.svg" alt="Graphy" className="absolute inset-0 -z-1 h-full w-full object-cover opacity-50" />
                    {!active && <span className="from-background absolute inset-0 -z-1 h-full w-full bg-linear-to-t object-cover ease-out" />}
                    <div className="flex items-center justify-between">
                      <div className={`text-2xl/7 font-semibold sm:text-3xl lg:text-[40px]/12 ${active ? "opacity-100" : "opacity-40"}`}>{value.number}</div>
                      {active ? <Minus className="size-5 shrink-0 lg:size-10" /> : <Plus className="size-5 shrink-0 lg:size-10" />}
                    </div>
                    <div className="mt-auto flex items-center gap-2 text-xl font-medium lg:text-2xl">
                      {iconMap[value.icon]}
                      <h3 className={active ? "text-white" : "text-gray"}>{value.title}</h3>
                    </div>
                    {active && <p className="text-left">{value.description}</p>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-secondary scroll-smooth py-14 lg:py-16">
          <div className="container">
            <div className="section-heading text-white">
              <h2 className="text-white">Our journey so far</h2>
              <p className="mx-auto max-w-135">
                We help companies streamline operations, elevate brand presence, and grow faster
                with trusted technology and design.
              </p>
            </div>
            <Swiper
              modules={[FreeMode, Mousewheel]}
              className="journey-swiper mt-12! grid! border-b border-white/30 pb-4!"
              slidesPerView={1}
              spaceBetween={24}
              speed={1500}
              freeMode
              mousewheel
              breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 32 }, 1024: { slidesPerView: 3, spaceBetween: 36 } }}
            >
              {aboutJourneys.map((item) => (
                <SwiperSlide key={item.year} className="last:[&_.timeline]:hidden">
                  <div className="flex h-full gap-4 pb-0.5 sm:gap-6">
                    <div className="w-75 space-y-4 sm:w-115 lg:space-y-6">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl text-white lg:text-2xl">{item.title}</h3>
                        <div className="border-primary/20 bg-primary-light text-primary relative shrink-0 rounded border px-1 py-1 text-xs/4 font-semibold sm:px-2 sm:text-sm/6.5">
                          <span className="bg-primary-light absolute top-1/2 -left-1.25 block size-2 -translate-y-1/2 rotate-45 rounded-xs" />
                          <span>{item.year}</span>
                        </div>
                      </div>
                      <p>{item.description}</p>
                    </div>
                    <div className="timeline flex shrink-0 flex-col items-center">
                      <span className="block h-full w-px grow bg-white/30" />
                      <span className="bg-primary block size-3 rounded-full ring-2 ring-white/20" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="container space-y-8 py-14 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 lg:py-16">
            <div className="border-gray-light group relative z-4 mx-auto flex max-w-120 flex-col gap-4 overflow-hidden rounded-lg border bg-white p-4 lg:max-w-none lg:gap-6 lg:p-6">
              <div className="h-65 overflow-hidden sm:h-75 xl:h-105">
                <img src={aboutTeams[activeTeam].image} alt={aboutTeams[activeTeam].name} className="size-full object-cover object-top" />
              </div>
              <div className="border-gray-light flex flex-col gap-3 overflow-hidden border-t pt-2.5 sm:pt-4 lg:pt-6 xl:flex-row xl:items-end">
                <div className="grow space-y-1 lg:space-y-2">
                  <h3 className="text-xl font-medium text-black lg:text-2xl">{aboutTeams[activeTeam].name}</h3>
                  <p className="line-clamp-1 text-base/5 lg:text-xl/7">{aboutTeams[activeTeam].designation}</p>
                </div>
              </div>
            </div>

            <div className="relative space-y-8 lg:col-span-2 lg:space-y-12">
              <div className="hidden items-end gap-6 lg:flex 2xl:gap-28">
                <div className="space-y-4 lg:space-y-6">
                  <h2>Meet the team behind the work</h2>
                  <p>
                    A group of passionate professionals dedicated to delivering impactful solutions.
                  </p>
                </div>
              </div>
              <Swiper
                modules={[Autoplay]}
                className="team-swiper z-1 overflow-visible!"
                slidesPerView="auto"
                spaceBetween={16}
                loop
                speed={1000}
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onSwiper={setTeamSwiper}
                onSlideChange={(swiper) => setActiveTeam(swiper.realIndex % aboutTeams.length)}
              >
                {aboutTeams.map((person, idx) => (
                  <SwiperSlide key={`${person.name}-${idx}`} className="group relative size-25! overflow-hidden rounded-xl lg:size-40! xl:size-78!">
                    <img src={person.image} alt={person.name} className="size-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="mt-auto hidden gap-4 lg:flex lg:gap-6">
                <button type="button" className="border-gray-light grid size-8 shrink-0 place-content-center rounded-lg border bg-white text-black transition hover:bg-black hover:text-white lg:size-11" onClick={() => teamSwiper?.slidePrev()}>
                  <ChevronLeft className="size-5" />
                </button>
                <button type="button" className="border-gray-light grid size-8 shrink-0 place-content-center rounded-lg border bg-white text-black transition hover:bg-black hover:text-white lg:size-11" onClick={() => teamSwiper?.slideNext()}>
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary py-14 text-center font-medium text-white lg:py-16">
          <div className="container">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              <div className="space-y-2"><Counter target={250} suffix="+" /><div>Successful Projects</div></div>
              <div className="space-y-2"><Counter target={98} suffix="%" /><div>Client Satisfaction</div></div>
              <div className="space-y-2"><Counter target={12} suffix="+ Years" /><div>Industry Experience</div></div>
              <div className="space-y-2"><Counter target={40} suffix="+" /><div>Global Clients</div></div>
            </div>
          </div>
        </div>

        <div className="py-14 lg:py-16">
          <div className="container">
            <div className="section-heading border-gray-light flex flex-col items-center pb-4 text-center! sm:text-left lg:border-b xl:flex-row xl:justify-between xl:gap-5 xl:text-left">
              <h2>Why businesses choose us</h2>
              <p className="text-center sm:max-w-125 xl:mt-0! xl:text-left">
                We help companies streamline operations, elevate brand presence, and grow faster
                with trusted technology and design.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 pt-6 sm:grid-cols-2 lg:grid-cols-4 xl:pt-12">
              <div className="group space-y-3"><div className="border-primary/20 bg-primary/5 group-hover:bg-primary text-primary grid size-10 place-content-center rounded-lg border transition group-hover:text-white"><BadgeCheck className="size-6" /></div><h3>Proven Expertise</h3><p>Over a decade of experience delivering high-performance digital solutions.</p></div>
              <div className="group before:bg-gray-light relative space-y-3 before:absolute before:top-0 before:-left-6 before:hidden before:h-full before:w-px lg:pt-14 lg:before:block"><div className="border-primary/20 bg-primary/5 group-hover:bg-primary text-primary grid size-10 place-content-center rounded-lg border transition group-hover:text-white"><Rocket className="size-6" /></div><h3>Fast Delivery</h3><p>Streamlined processes to launch your projects on time, every time.</p></div>
              <div className="group before:bg-gray-light relative space-y-3 before:absolute before:top-0 before:-left-6 before:hidden before:h-full before:w-px lg:pt-6 lg:before:block"><div className="border-primary/20 bg-primary/5 group-hover:bg-primary text-primary grid size-10 place-content-center rounded-lg border transition group-hover:text-white"><TrendingUp className="size-6" /></div><h3>Scalable Approach</h3><p>Solutions designed to grow with your team, customers, and goals.</p></div>
              <div className="group before:bg-gray-light relative space-y-3 before:absolute before:top-0 before:-left-6 before:hidden before:h-full before:w-px lg:pt-14 lg:before:block"><div className="border-primary/20 bg-primary/5 group-hover:bg-primary text-primary grid size-10 place-content-center rounded-lg border transition group-hover:text-white"><Headset className="size-6" /></div><h3>Dedicated Support</h3><p>Get reliable support from onboarding to long-term growth.</p></div>
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
              </div>
              <div className="mt-auto flex gap-4 lg:gap-6">
                <button type="button" className="border-gray-light grid size-9 shrink-0 place-content-center rounded-lg border bg-white text-black transition hover:bg-black hover:text-white lg:size-11" onClick={() => testimonialsSwiper?.slidePrev()}><ChevronLeft className="size-5" /></button>
                <button type="button" className="border-gray-light grid size-9 shrink-0 place-content-center rounded-lg border bg-white text-black transition hover:bg-black hover:text-white lg:size-11" onClick={() => testimonialsSwiper?.slideNext()}><ChevronRight className="size-5" /></button>
              </div>
            </div>
            <div className="relative grow lg:w-[calc(100%-540px)]">
              <Swiper
                modules={[Autoplay]}
                className="testimonials-swiper grid! px-px!"
                onSwiper={setTestimonialsSwiper}
                spaceBetween={16}
                speed={1000}
                loop
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                slidesPerView={1}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 1.5, spaceBetween: 24 }, 1280: { slidesPerView: 2.5 } }}
              >
                {aboutTestimonials.map((item, idx) => (
                  <SwiperSlide key={`${item.name}-${idx}`}>
                    <div className="border-gray-light flex h-full flex-col gap-8 rounded-lg border bg-white p-4 lg:gap-14 lg:p-6">
                      <div className="grow space-y-4 lg:min-h-78">
                        <p>{item.company}</p>
                        <h4 className="mt-2">{item.subject}</h4>
                        <p>{item.message}</p>
                      </div>
                      <div className="mt-auto flex items-center gap-4">
                        <div className="size-14 shrink-0 overflow-hidden rounded-full">
                          <img src={item.person_image} alt="person image" className="size-full object-cover object-top" />
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

        <div className="py-14 lg:py-16">
          <div className="section-heading container">
            <h2>Highlights from Aetherial Labs</h2>
          </div>
          <div className="mt-8 lg:mt-12">
            <Swiper
              modules={[Autoplay]}
              className="post-swiper"
              spaceBetween={10}
              speed={4000}
              autoplay={{ delay: 0, disableOnInteraction: true }}
              loop
              slidesPerView="auto"
              allowTouchMove={false}
              breakpoints={{ 640: { spaceBetween: 16 } }}
            >
              {aboutPosts.map((image, idx) => (
                <SwiperSlide key={`${image}-${idx}`} className="group relative size-60! overflow-hidden rounded-xl sm:size-75!">
                  <img src={image} alt="post" className="size-full object-cover grayscale-100" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
      <ContactModal open={contactModal} onClose={() => setContactModal(false)} />
    </>
  );
}
