"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeTestimonials } from "@/data/home";

import "swiper/css";

export function TestimonialsSection() {
  const [testimonialsSwiper, setTestimonialsSwiper] = useState<SwiperType | null>(null);

  return (
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
  );
}
