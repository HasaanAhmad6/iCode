import Link from "next/link";
import {
  BadgeCheck,
  ChevronRight,
  Code,
  Layers,
  Megaphone,
  Palette,
  Sigma,
} from "lucide-react";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PricingPlans } from "@/components/PricingPlans";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HomePreloader } from "@/components/home/HomePreloader";
import { ProjectsSwiper } from "@/components/home/ProjectsSwiper";
import { ClientsSwiper } from "@/components/home/ClientsSwiper";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomeContactModal } from "@/components/home/HomeContactModal";
import { HomeCaseStudiesSection } from "@/components/home/HomeCaseStudiesSection";
import { homeServiceLinks } from "@/data/home";

export default function HomePage() {

  return (
    <>
      <HomePreloader />

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
            <ProjectsSwiper />
            <div className="text-center">
              <Link href="/projects" className="btn">
                View all projects
              </Link>
            </div>
          </div>
        </div>

        <HomeCaseStudiesSection />

        <div className="border-gray/20 border-y bg-[#FAFAFA] pt-14 lg:pt-16">
          <div className="container">
            <div className="section-heading">
              <div>Clients</div>
              <h2>Trusted by leading brands worldwide</h2>
            </div>
          </div>
          <ClientsSwiper />
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

        <TestimonialsSection />

        <PricingPlans />

        <HomeContactModal />
      </div>

      <Footer />
    </>
  );
}
