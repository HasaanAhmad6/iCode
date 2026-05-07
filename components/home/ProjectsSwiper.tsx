"use client";

import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeProjects } from "@/data/home";

import "swiper/css";

export function ProjectsSwiper() {
  return (
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
  );
}
