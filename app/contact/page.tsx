"use client";

import { useEffect, useState } from "react";
import { AtSign, Globe, Share2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  contactBudgets,
  contactInterests,
  contactServiceLinks,
  contactTimelines,
} from "@/data/contact";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInterest, setSelectedInterest] = useState("App Development");
  const [selectedBudget, setSelectedBudget] = useState("Under $10,000");
  const [selectedTimeline, setSelectedTimeline] = useState("Immediately");

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

      <Navbar serviceLinks={contactServiceLinks} />

      <div className="grow">
        <div className="container flex flex-col gap-12 py-14 lg:flex-row lg:py-16">
          <div className="grow space-y-12 lg:space-y-16">
            <h1>Let&apos;s build the product your business deserves</h1>
            <div className="space-y-8">
              <div className="h-75 overflow-hidden rounded-lg lg:h-104.5">
                <img
                  src="/assets/images/main-banner.jpg"
                  alt="Contact banner"
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="border-gray-light grid gap-4 border-y py-6 sm:grid-cols-2 sm:gap-6 lg:py-8">
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-black">Email:</div>
                  <a
                    href="mailto:work@aetheriallabs.com"
                    className="hover:text-primary inline-block text-lg/6 transition lg:text-xl/7"
                  >
                    work@aetheriallabs.com
                  </a>
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-black">Phone:</div>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-primary inline-block text-lg/6 transition lg:text-xl/7"
                  >
                    +1 234 567 890
                  </a>
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-black">Address:</div>
                  <a
                    href="https://www.google.com/maps?embed"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary inline-block text-lg/6 transition lg:text-xl/7"
                  >
                    123 Corporate Avenue, Business City
                  </a>
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-black">Office Hours:</div>
                  <p className="inline-block text-lg/6 lg:text-xl/7">Mon-Fri, 9am-6pm</p>
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-black">Socials</div>
                  <div className="flex gap-2.5 sm:gap-4">
                    <a
                      href="https://instagram.com/m/https://aetherial-labs-html.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"
                    >
                      <AtSign className="size-5 lg:size-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://aetherial-labs-html.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"
                    >
                      <Share2 className="size-5 lg:size-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://aetherial-labs-html.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"
                    >
                      <Globe className="size-5 lg:size-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://aetherial-labs-html.vercel.app/&text="
                      target="_blank"
                      rel="noreferrer"
                      className="border-gray-light bg-background hover:bg-primary hover:border-primary grid size-9 place-content-center rounded-lg border hover:text-white lg:size-10"
                    >
                      <AtSign className="size-5 lg:size-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            className="border-gray-light w-full max-w-120 shrink-0 space-y-6 rounded-lg border p-4 sm:p-8 lg:space-y-8 xl:max-w-163 xl:p-12"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col gap-2.5 lg:gap-4">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Enter your full name" className="form-input" />
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-4">
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email address"
                className="form-input"
              />
            </div>

            <div className="flex flex-col gap-2.5 lg:gap-4">
              <label>I&apos;m interested in</label>
              <div className="flex flex-wrap gap-4">
                {contactInterests.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedInterest(item)}
                    className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                      selectedInterest === item
                        ? "bg-primary-light border-primary/20 text-primary"
                        : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 lg:gap-4">
              <label htmlFor="brief">Project brief</label>
              <textarea
                id="brief"
                placeholder="Briefly describe your requirements, goals, or challenges"
                className="form-textarea"
              />
            </div>

            <div className="flex flex-col gap-2.5 lg:gap-4">
              <label>Project budget</label>
              <div className="flex flex-wrap gap-4">
                {contactBudgets.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedBudget(item)}
                    className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                      selectedBudget === item
                        ? "bg-primary-light border-primary/20 text-primary"
                        : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 lg:gap-4">
              <label>Expected timeline</label>
              <div className="flex flex-wrap gap-4">
                {contactTimelines.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedTimeline(item)}
                    className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                      selectedTimeline === item
                        ? "bg-primary-light border-primary/20 text-primary"
                        : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="text-gray flex items-start gap-2 text-base font-normal">
              <input type="checkbox" className="form-checkbox mt-1.25" />
              <p>I agree to be contacted regarding my inquiry.</p>
            </label>

            <div className="mt-8 space-y-2 lg:mt-12">
              <button type="submit" className="btn w-full">
                Contact us
              </button>
              <p className="text-center text-base/6">Our team typically responds within 1 business day.</p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
