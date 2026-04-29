"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactModal } from "@/components/ContactModal";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { projectsCategories, projectsList, projectsServiceLinks } from "@/data/projects";

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactModal, setContactModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsList;
    return projectsList.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

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

        <div className="container py-14 lg:py-16">
          <div className="flex items-center gap-6 overflow-x-auto pb-1.5 text-base/4 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {projectsCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 border-b-2 pb-2.5 font-medium uppercase transition ${activeCategory === category ? "border-primary text-primary" : "border-transparent hover:border-primary hover:text-primary"}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border-gray-light group relative flex flex-col gap-4 overflow-hidden rounded-lg border bg-white p-4 lg:p-6"
              >
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
                  <div className="bg-primary/0 group-hover:bg-primary/50 absolute inset-0 grid place-content-center duration-300">
                    <button
                      type="button"
                      className="btn btn-secondary invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100"
                    >
                      View Project
                    </button>
                  </div>
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
            ))}
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

        <CtaBanner onQuoteClick={() => setContactModal(true)} />
      </div>

      <Footer />
      <ContactModal open={contactModal} onClose={() => setContactModal(false)} />
    </>
  );
}
