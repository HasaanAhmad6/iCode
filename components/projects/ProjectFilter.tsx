"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projectsCategories, projectsList } from "@/data/projects";

export function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsList;
    return projectsList.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
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
  );
}
