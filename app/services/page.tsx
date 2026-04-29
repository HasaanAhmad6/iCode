"use client";

import { useEffect, useState } from "react";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactModal } from "@/components/ContactModal";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { servicesItems, servicesServiceLinks } from "@/data/services";

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactModal, setContactModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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

      <Navbar serviceLinks={servicesServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Our Services</h1>
          </div>
        </div>

        <div>
          {servicesItems.map((service) => (
            <div
              key={service.id}
              className="border-gray-light sticky top-12 overflow-hidden border-b bg-white py-14 shadow-[-16px_16px_40px_-8px_rgba(13,13,13,1)] lg:top-24 lg:py-16"
            >
              <div className="container">
                <h2 className="text-3xl font-medium text-black lg:text-5xl">
                  {service.title}
                </h2>
                <div className="mt-6 grid items-start gap-6 sm:grid-cols-2 md:flex lg:gap-12">
                  <div className="h-60 w-full max-w-206 overflow-hidden sm:h-75">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 lg:space-y-6">
                    <p>{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <BadgeCheck className="text-primary mt-0.75 size-5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/service-details" className="btn">
                      Get a quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        <WhyChooseUs />
        <CtaBanner onQuoteClick={() => setContactModal(true)} />
      </div>

      <Footer />
      <ContactModal open={contactModal} onClose={() => setContactModal(false)} />
    </>
  );
}
