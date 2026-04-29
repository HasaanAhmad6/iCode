"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AlignJustify,
  AtSign,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code,
  Globe,
  Headset,
  Layers,
  Megaphone,
  Palette,
  Phone,
  Rocket,
  Sigma,
  Share2,
  TrendingUp,
  X,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  tag: string;
};

type Testimonial = {
  id: number;
  company: string;
  subject: string;
  message: string;
  person_image: string;
  name: string;
  designation: string;
};

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / target), 10);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, stepTime);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref} className="text-primary text-3xl sm:text-4xl xl:text-5xl/14">
      {count}
      {suffix}
    </div>
  );
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [interest, setInterest] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [testimonialsSwiper, setTestimonialsSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    setMenuOpen(false);
  }, [isDesktop]);

  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "NovaCommerce Platform",
        description: "A scalable e-commerce platform built for speed, security, and growth.",
        image: "/assets/images/project-1.jpg",
        url: "/project-details",
        category: "Web Development",
        tag: "+42% conversion",
      },
      {
        id: 2,
        title: "Finly App Redesign",
        description: "A user-focused mobile experience redesigned for clarity and ease of use.",
        image: "/assets/images/project-1.jpg",
        url: "/project-details",
        category: "UX/UI Design",
        tag: "-38% user drop-off",
      },
      {
        id: 3,
        title: "Bloomly Brand Identity",
        description: "A modern visual identity crafted to reflect trust and innovation.",
        image: "/assets/images/project-1.jpg",
        url: "/project-details",
        category: "Branding",
        tag: "2x brand recall",
      },
      {
        id: 4,
        title: "GrowFast Campaign",
        description: "A performance-driven digital campaign optimized for qualified leads.",
        image: "/assets/images/project-1.jpg",
        url: "/project-details",
        category: "Digital Marketing",
        tag: "+61% lead growth",
      },
      {
        id: 5,
        title: "NovaCommerce Platform",
        description: "A scalable e-commerce platform built for speed, security, and growth.",
        image: "/assets/images/project-1.jpg",
        url: "/project-details",
        category: "Web Development",
        tag: "+42% conversion",
      },
      {
        id: 6,
        title: "Finly App Redesign",
        description: "A user-focused mobile experience redesigned for clarity and ease of use.",
        image: "/assets/images/project-1.jpg",
        url: "/project-details",
        category: "UX/UI Design",
        tag: "-38% user drop-off",
      },
    ],
    [],
  );

  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        id: 1,
        company: "Technocrat Pvt. Ltd.",
        subject: "Execution was smooth, structured, and highly professional.",
        message:
          "The team demonstrated a strong understanding of our requirements from the start. Their ability to translate ideas into a functional and visually refined solution helped us move faster without compromising quality.",
        person_image: "/assets/images/client-3.png",
        name: "Petar Garcia",
        designation: "Product Lead",
      },
      {
        id: 2,
        company: "BlueOrbit Solutions",
        subject: "A rare balance of creativity and technical clarity.",
        message:
          "Every design and development decision was backed by logic and user insight. The final outcome aligned perfectly with our business objectives and user expectations.",
        person_image: "/assets/images/client-3.png",
        name: "Sophia Martinez",
        designation: "UX Manager",
      },
      {
        id: 3,
        company: "NextWave Digital",
        subject: "They delivered measurable impact, not just deliverables.",
        message:
          "From planning to execution, the process was transparent and result-oriented. We saw noticeable improvements in engagement and conversion within weeks of launch.",
        person_image: "/assets/images/client-3.png",
        name: "Daniel Thompson",
        designation: "Growth Head",
      },
      {
        id: 4,
        company: "BlueOrbit Solutions",
        subject: "A rare balance of creativity and technical clarity.",
        message:
          "Every design and development decision was backed by logic and user insight. The final outcome aligned perfectly with our business objectives and user expectations.",
        person_image: "/assets/images/client-3.png",
        name: "Sophia Martinez",
        designation: "UX Manager",
      },
    ],
    [],
  );

  const logos = [
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
  ];

  const serviceLinks = [
    "Web Development",
    "Brand Identity",
    "Product Design",
    "Marketing Solutions",
    "UI/UX Design",
    "Social Media Management",
  ];

  return (
    <>
      <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />

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

      <header className="sticky top-0 z-50 bg-white">
        <div className="container">
          <div className="flex items-center justify-between gap-5 border-b border-black/20 py-5 lg:py-0">
            <Link href="/" className="shrink-0 text-black/50 hover:text-black">
              <img src="/assets/images/logo.svg" alt="Logo" className="w-50 sm:w-60 xl:w-70" />
            </Link>

            {menuOpen && (
              <button
                type="button"
                aria-label="Close menu overlay"
                className="fixed inset-0 z-50 bg-black/70 lg:hidden"
                onClick={() => setMenuOpen(false)}
              />
            )}

            <div
              className={`menu fixed inset-y-0 left-0 z-50 flex w-70 transform flex-col gap-1 overflow-y-auto bg-white p-4 transition-transform duration-300 sm:w-80 lg:static lg:z-auto lg:w-auto lg:transform-none lg:flex-row lg:items-center lg:gap-6 lg:overflow-visible lg:bg-transparent lg:p-0 xl:gap-10 ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
              <Link href="/" className="border-gray-light mb-2 inline-block shrink-0 border-b-4 border-double pt-3 pb-5 lg:hidden">
                <img src="/assets/images/logo.svg" alt="Logo" className="w-50 sm:w-60" />
              </Link>

              <Link href="/" className="nav-link active">
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => isDesktop && setServicesOpen(true)}
                onMouseLeave={() => isDesktop && setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link flex items-center gap-1.5"
                  onClick={() => !isDesktop && setServicesOpen((prev) => !prev)}
                >
                  Services
                  <ChevronDown className={`size-4 shrink-0 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div
                    className={
                      isDesktop
                        ? "absolute top-full left-0 w-max space-y-4 rounded-b-lg border border-gray-light bg-white p-4 shadow-[0_16px_32px_-12px_rgba(88, 92, 95, 0.1)]"
                        : "static flex w-full flex-col space-y-3 p-3"
                    }
                  >
                    {serviceLinks.map((item) => (
                      <Link key={item} href="/service-details" className="submenu-nav-link">
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/projects" className="nav-link">
                Projects
              </Link>

              <div
                className="relative"
                onMouseEnter={() => isDesktop && setCompanyOpen(true)}
                onMouseLeave={() => isDesktop && setCompanyOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link flex items-center gap-1.5"
                  onClick={() => !isDesktop && setCompanyOpen((prev) => !prev)}
                >
                  Company
                  <ChevronDown className={`size-4 shrink-0 transition-transform ${companyOpen ? "rotate-180" : ""}`} />
                </button>
                {companyOpen && (
                  <div
                    className={
                      isDesktop
                        ? "absolute top-full left-0 w-max space-y-4 rounded-b-lg border border-gray-light bg-white p-4 shadow-[0_16px_32px_-12px_rgba(88, 92, 95, 0.1)]"
                        : "static flex w-full flex-col space-y-3 p-3"
                    }
                  >
                    <Link href="/about-us" className="submenu-nav-link">
                      About us
                    </Link>
                    <Link href="/team" className="submenu-nav-link">
                      Team
                    </Link>
                    <Link href="/career" className="submenu-nav-link">
                      Career
                    </Link>
                    <Link href="/blog" className="submenu-nav-link">
                      Resources
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="nav-link">
                Contact
              </Link>
              <a href="tel:(253) 421-7583" className="btn mt-2 pl-3">
                <Phone className="size-5" /> (253) 421-7583
              </a>
            </div>

            <button
              type="button"
              className="shrink-0 text-black lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <AlignJustify className="size-5" />
            </button>
          </div>
        </div>
      </header>

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
              {projects.map((project) => (
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
            {logos.map((logo, index) => (
              <SwiperSlide key={`${logo}-${index}`}>
                <div className="border-gray-light flex justify-center rounded-lg border bg-white px-2 py-6 shadow-[0_16px_32px_-12px_rgba(88,92,95,0.1)]">
                  <img src={logo} alt="Logo" className="w-full max-w-34" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
              {[
                {
                  title: "Proven Expertise",
                  desc: "Over a decade of experience delivering high-performance digital solutions.",
                  icon: <BadgeCheck className="size-6" />,
                },
                {
                  title: "Fast Delivery",
                  desc: "Streamlined processes to launch your projects on time, every time.",
                  icon: <Rocket className="size-6" />,
                },
                {
                  title: "Scalable Approach",
                  desc: "Solutions designed to grow with your team, customers, and goals.",
                  icon: <TrendingUp className="size-6" />,
                },
                {
                  title: "Dedicated Support",
                  desc: "Get reliable support - from onboarding to long-term growth.",
                  icon: <Headset className="size-6" />,
                },
              ].map((item) => (
                <div key={item.title} className="group space-y-3">
                  <div className="border-primary/20 bg-primary/5 group-hover:bg-primary text-primary grid size-10 place-content-center rounded-lg border transition group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

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
                  ref={prevRef}
                  type="button"
                  onClick={() => testimonialsSwiper?.slidePrev()}
                  className="border-gray-light grid size-9 shrink-0 place-content-center rounded-lg border bg-white text-black transition hover:bg-black hover:text-white lg:size-11"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  ref={nextRef}
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
                {testimonials.map((item) => (
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
              <button
                type="button"
                className="btn btn-secondary px-2.5 whitespace-nowrap sm:px-4.75"
                onClick={() => setContactModal(true)}
              >
                Get a quote
              </button>
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

      <footer className="border-gray-light mt-auto overflow-hidden border-t bg-white pt-14">
        <div className="container">
          <div className="flex flex-col justify-between gap-10 pb-10 lg:flex-row lg:items-start">
            <div className="mx-auto shrink-0 lg:mx-0 lg:w-75 xl:w-105">
              <div className="space-y-6 text-center lg:text-left">
                <Link href="/" className="flex">
                  <img src="/assets/images/logo.svg" alt="Logo" className="mx-auto w-70 md:w-82 lg:mx-0" />
                </Link>
                <p>Helping businesses innovate with strategy, design, and technology.</p>
                <div className="border-gray-light flex items-center justify-center gap-4 lg:justify-start lg:border-b lg:pb-6">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="border-gray-light hover:bg-primary hover:border-primary grid size-10 place-content-center rounded-lg border hover:text-white">
                    <AtSign className="size-6" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="border-gray-light hover:bg-primary hover:border-primary grid size-10 place-content-center rounded-lg border hover:text-white">
                    <Share2 className="size-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="border-gray-light hover:bg-primary hover:border-primary grid size-10 place-content-center rounded-lg border hover:text-white">
                    <Globe className="size-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="border-gray-light hover:bg-primary hover:border-primary grid size-10 place-content-center rounded-lg border hover:text-white">
                    <AtSign className="size-6" />
                  </a>
                </div>
              </div>
              <div className="mt-12 hidden text-base font-medium lg:block">
                &copy; {new Date().getFullYear()} Aetherial Labs. All rights reserved.
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 text-base font-medium sm:grid-cols-3 lg:flex lg:gap-4 xl:gap-6">
              <div className="space-y-6 lg:w-50">
                <div className="text-primary font-semibold">Contact</div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-black">Email:</div>
                    <a href="mailto:work@aetherial_labs.com" className="hover:text-primary block truncate transition">
                      work@aetherial_labs.com
                    </a>
                  </div>
                  <div className="space-y-1">
                    <div className="text-black">Phone:</div>
                    <a href="tel:(253) 421-7583" className="hover:text-primary transition">
                      +(253) 421-7583
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-6 lg:w-40 xl:w-50">
                <div className="text-primary font-semibold">Company</div>
                <div className="flex flex-col items-start space-y-4">
                  <Link href="/about-us" className="hover:text-primary transition">
                    About Us
                  </Link>
                  <Link href="/services" className="hover:text-primary transition">
                    Our Services
                  </Link>
                  <Link href="/projects" className="hover:text-primary transition">
                    Projects
                  </Link>
                  <Link href="/blog" className="hover:text-primary transition">
                    Blog
                  </Link>
                </div>
              </div>
              <div className="space-y-6 lg:w-40 xl:w-50">
                <div className="text-primary font-semibold">Support</div>
                <div className="flex flex-col items-start space-y-4">
                  <Link href="/contact" className="hover:text-primary transition">
                    Contact
                  </Link>
                  <Link href="/faq" className="hover:text-primary transition">
                    FAQs
                  </Link>
                  <Link href="/privacy-policy" className="hover:text-primary transition">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-primary transition">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-gray-light block border-t py-6 text-center text-base font-medium lg:hidden">
            &copy; {new Date().getFullYear()} Aetherial Labs. All rights reserved.
          </div>
        </div>
      </footer>

      {contactModal && (
        <div
          className="fixed inset-0 z-50 m-auto flex justify-center overflow-y-auto bg-white/50 p-4 backdrop-blur-sm"
          onClick={() => setContactModal(false)}
        >
          <div
            className="border-gray-light relative m-auto flex w-full max-w-150 flex-col gap-6 overflow-hidden rounded-xl border bg-white p-4 shadow-[0_40px_16px_-8px_rgba(13,13,13,0.2)] lg:gap-12 lg:p-12"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 ml-auto bg-white transition hover:text-black sm:top-6 sm:right-6"
              onClick={() => setContactModal(false)}
            >
              <X className="size-5" />
              <span className="sr-only">Close</span>
            </button>
            <h2>Get a quote</h2>
            <form className="space-y-6 lg:space-y-8">
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" placeholder="Enter your full name" className="form-input" />
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label htmlFor="email">Work email</label>
                <input id="email" type="email" placeholder="Enter your email address" className="form-input" />
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label>I&apos;m interested in</label>
                <div className="flex flex-wrap gap-4">
                  {[
                    "App Development",
                    "Web Development",
                    "UI/UX Design",
                    "SEO & Marketing",
                    "AI/ML & Data Engineering",
                    "Other",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setInterest(item)}
                      className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                        interest === item
                          ? "bg-primary-light border-primary/20 text-primary"
                          : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label>Project Budget</label>
                <div className="flex flex-wrap gap-4">
                  {["Under $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+", "Not sure yet"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBudget(item)}
                      className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                        budget === item
                          ? "bg-primary-light border-primary/20 text-primary"
                          : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <label>Expected Timeline</label>
                <div className="flex flex-wrap gap-4">
                  {["Immediately", "Within 1 month", "1-3 months", "Flexible"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTimeline(item)}
                      className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                        timeline === item
                          ? "bg-primary-light border-primary/20 text-primary"
                          : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-8 space-y-2 lg:mt-12">
                <button type="submit" className="btn w-full">
                  Contact us
                </button>
                <p className="text-center text-base/6">Our team typically responds within 1 business day.</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
