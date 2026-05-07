import Link from "next/link";
import { AtSign, ChevronRight, Globe, Share2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { teamMembers, teamServiceLinks } from "@/data/team";
import { TeamClient } from "@/components/team/teamClient";

export default function TeamPage() {
  return (
    <>
      <TeamClient />

      <Navbar serviceLinks={teamServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 text-white sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Meet the team</h1>
          </div>
        </div>

        <div className="container py-14 lg:py-16">
          <div className="grid grid-cols-1 place-self-center gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
            {teamMembers.map((person) => (
              <div
                key={person.id}
                className="border-gray-light group relative flex flex-col gap-4 overflow-hidden rounded-lg border p-4 lg:gap-6 lg:p-6"
              >
                <div className="h-65 overflow-hidden sm:h-75 xl:h-105">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="size-full object-cover object-top"
                  />
                </div>
                <div className="border-gray-light flex flex-col gap-3 overflow-hidden border-t pt-2.5 sm:flex-row sm:items-end sm:pt-4 lg:pt-6">
                  <div className="grow space-y-1 lg:space-y-2">
                    <h3 className="text-xl font-medium text-black lg:text-2xl">{person.name}</h3>
                    <p className="line-clamp-1 text-base/5 lg:text-xl/7">{person.designation}</p>
                  </div>
                  <div className="ml-auto flex gap-2 duration-300 group-hover:translate-x-0 sm:translate-x-full 2xl:gap-4">
                    <a
                      href="https://instagram.com/m/https://aetherial-labs-html.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/5 hover:bg-primary text-primary ring-primary/20 grid size-8 place-content-center rounded-lg ring-1 ring-inset transition hover:text-white lg:size-10"
                    >
                      <AtSign className="size-4 lg:size-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://aetherial-labs-html.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/5 hover:bg-primary text-primary ring-primary/20 grid size-8 place-content-center rounded-lg ring-1 ring-inset transition hover:text-white lg:size-10"
                    >
                      <Share2 className="size-4 lg:size-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://aetherial-labs-html.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/5 hover:bg-primary text-primary ring-primary/20 grid size-8 place-content-center rounded-lg ring-1 ring-inset transition hover:text-white lg:size-10"
                    >
                      <Globe className="size-4 lg:size-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-[url(/assets/images/about-bg.jpg)] bg-cover bg-center bg-no-repeat py-14 lg:py-16">
          <div className="from-secondary via-secondary to-secondary absolute inset-0 bg-linear-to-r opacity-80 lg:to-transparent lg:opacity-100" />
          <div className="container">
            <div className="relative flex flex-col items-center gap-14 lg:flex-row lg:items-end lg:justify-between">
              <div className="section-heading lg:text-left">
                <div>About us</div>
                <h2 className="text-white lg:max-w-122 lg:pb-33">A team committed to your success</h2>
                <p className="border-white/30 font-medium text-white/80 sm:max-w-3xl lg:mt-0 lg:border-t lg:pt-4 lg:text-2xl/10">
                  We combine strategy, design, and technology to{" "}
                  <span className="text-white">help businesses unlock their full potential.</span>{" "}
                  Our approach is simple: Understand your challenges deeply, and{" "}
                  <span className="text-white">deliver solutions that move the needle.</span>
                </p>
              </div>
              <Link href="/about-us" className="btn btn-secondary shrink-0 pr-3">
                Know more about us
                <ChevronRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
