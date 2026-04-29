"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { legalServiceLinks, privacyPolicySections } from "@/data/legal";

export default function PrivacyPolicyPage() {
  const [isLoading, setIsLoading] = useState(true);

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

      <Navbar serviceLinks={legalServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Privacy Policy</h1>
            <p className="text-gray-light max-w-275">
              We explain how your data is collected, used, and protected when you use our services.
            </p>
          </div>
        </div>

        <div className="container py-14 lg:py-16">
          <div className="prose max-w-none!">
            {privacyPolicySections.map((section) => (
              <div key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <a
            href="mailto:work@aetheriallabs.com"
            className="text-primary mt-6 flex items-center gap-2 transition hover:underline hover:underline-offset-2"
          >
            <span className="bg-primary/5 border-primary/20 grid size-8 shrink-0 place-content-center rounded-lg border">
              <Mail className="size-4 shrink-0" />
            </span>
            <span>work@aetheriallabs.com</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
