import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectsClient } from "@/components/projects/projectsClient";
import { projectsServiceLinks } from "@/data/projects";

export default function ProjectsPage() {

  return (
    <>
      <ProjectsClient />

      <Navbar serviceLinks={projectsServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 text-white sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Our Projects</h1>
            <p className="text-gray-light max-w-275">
              A collection of the work we&apos;ve delivered, helping businesses innovate, scale, and
              achieve measurable results across industries.
            </p>
          </div>
        </div>

        <ProjectFilter />

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

        <CtaBanner />
      </div>

      <Footer />
    </>
  );
}
