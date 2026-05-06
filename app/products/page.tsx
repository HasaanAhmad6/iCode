"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactModal } from "@/components/ContactModal";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { productsList, productsServiceLinks } from "@/data/products";

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactModal, setContactModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
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

      <Navbar serviceLinks={productsServiceLinks} />

      <div className="grow">
        {/* Hero Banner */}
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 text-white sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Our Products</h1>
            <p className="text-gray-light max-w-275">
              Explore our suite of digital products — crafted to help businesses launch faster,
              design smarter, and grow with confidence.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container py-14 lg:py-16">
          <div className="section-heading text-center">
            <h2>Built for Results</h2>
            <p>
              Each product is engineered to solve real business challenges — ready to use, easy to
              integrate, and designed to deliver measurable outcomes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 xl:grid-cols-3">
            {productsList.map((product) => (
              <Link
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${product.title}`}
                className="border-gray-light group flex flex-col overflow-hidden rounded-lg border bg-white transition hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative w-full shrink-0 overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Tag badge */}
                  <div className="bg-primary text-white absolute top-3 right-3 rounded px-2.5 py-1 text-xs font-semibold tracking-wide shadow">
                    {product.tag}
                  </div>
                  {/* Hover overlay */}
                  <div className="bg-primary/0 group-hover:bg-primary/40 absolute inset-0 transition duration-300" />
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col gap-3 p-5 lg:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-black lg:text-xl leading-snug">
                      {product.title}
                    </h3>
                    <span className="text-primary shrink-0 text-lg font-bold lg:text-xl">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-gray line-clamp-3 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="text-primary inline-flex items-center gap-1 text-sm font-medium transition group-hover:gap-2">
                      View Product
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Counter Section */}
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

        {/* CTA Banner */}
        <CtaBanner onQuoteClick={() => setContactModal(true)} />
      </div>

      <Footer />
      <ContactModal open={contactModal} onClose={() => setContactModal(false)} />
    </>
  );
}