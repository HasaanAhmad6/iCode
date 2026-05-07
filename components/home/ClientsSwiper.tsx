"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeClientLogos } from "@/data/home";

import "swiper/css";

export function ClientsSwiper() {
  return (
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
  );
}
