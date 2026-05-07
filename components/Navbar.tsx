"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AlignJustify, ChevronDown, Phone } from "lucide-react";

type NavbarProps = {
  serviceLinks: string[];
};

// Internal component that uses theme (only rendered after client mount)
function NavbarContent({
  serviceLinks,
  menuOpen,
  setMenuOpen,
  servicesOpen,
  setServicesOpen,
  companyOpen,
  setCompanyOpen,
  isDesktop,
}: {
  serviceLinks: string[];
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  servicesOpen: boolean;
  setServicesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  companyOpen: boolean;
  setCompanyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container">
        <div className="flex items-center justify-between gap-5 border-b border-black/20 py-5 lg:py-0">
          <Link href="/" className="shrink-0 pl-4 sm:pl-6 text-black/50 hover:text-black">
            <img src="/assets/images/logo.svg" alt="Logo" className="w-36 sm:w-44 xl:w-52" />
          </Link>

          {menuOpen && (
            <button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-50 bg-black/70 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
          )}

          <div
            className={`menu fixed inset-y-0 left-0 z-50 flex w-70 transform flex-col gap-1 overflow-y-auto bg-white p-4 transition-transform duration-300 sm:w-80 lg:static lg:z-auto lg:w-auto lg:transform-none lg:flex-row lg:items-center lg:gap-6 lg:overflow-visible lg:bg-transparent lg:p-0 xl:gap-10 ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
          >
            <Link href="/" className="border-gray-light mb-2 inline-block shrink-0 border-b-4 border-double pt-3 pb-5 lg:hidden">
              <img src="/assets/images/logo.svg" alt="Logo" className="w-36 sm:w-44" />
            </Link>

            <Link href="/" className="nav-link active">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => isDesktop && setServicesOpen(true)}
              onMouseLeave={() => isDesktop && setServicesOpen(false)}
            >
              <button
                type="button"
                className="nav-link flex items-center gap-1.5"
                onClick={() => !isDesktop && setServicesOpen((prev: boolean) => !prev)}
              >
                Services
                <ChevronDown className={`size-4 shrink-0 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div
                  className={
                    isDesktop
                      ? "absolute top-full left-0 w-max space-y-4 rounded-b-lg border border-gray-light bg-white p-4 shadow-[0_16px_32px_-12px_rgba(88, 92, 95, 0.1)]"
                      : "static flex w-full flex-col space-y-3 p-3"
                  }
                >
                  {serviceLinks.map((item: string) => (
                    <Link key={item} href="/service-details" className="submenu-nav-link">
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects" className="nav-link">
              Projects
            </Link>

            <div
              className="relative"
              onMouseEnter={() => isDesktop && setCompanyOpen(true)}
              onMouseLeave={() => isDesktop && setCompanyOpen(false)}
            >
              <button
                type="button"
                className="nav-link flex items-center gap-1.5"
                onClick={() => !isDesktop && setCompanyOpen((prev: boolean) => !prev)}
              >
                Company
                <ChevronDown className={`size-4 shrink-0 transition-transform ${companyOpen ? "rotate-180" : ""}`} />
              </button>
              {companyOpen && (
                <div
                  className={
                    isDesktop
                      ? "absolute top-full left-0 w-max space-y-4 rounded-b-lg border border-gray-light bg-white p-4 shadow-[0_16px_32px_-12px_rgba(88, 92, 95, 0.1)]"
                      : "static flex w-full flex-col space-y-3 p-3"
                  }
                >
                  <Link href="/about-us" className="submenu-nav-link">
                    About us
                  </Link>
                  <Link href="/team" className="submenu-nav-link">
                    Team
                  </Link>
                  <Link href="/career" className="submenu-nav-link">
                    Career
                  </Link>
                  <Link href="/blog" className="submenu-nav-link">
                    Resources
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <a href="tel:(253) 421-7583" className="btn mt-2 pl-3">
              <Phone className="size-5" /> (253) 421-7583
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="shrink-0 text-black lg:hidden"
              onClick={() => setMenuOpen((prev: boolean) => !prev)}
            >
              <AlignJustify className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Wrapper component that handles mounting and state
export function Navbar({ serviceLinks }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener("resize", onResize);
    setMounted(true);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    setMenuOpen(false);
  }, [isDesktop]);

  // Prevent rendering NavbarContent until client-side hydration is complete
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-white">
        <div className="container">
          <div className="flex items-center justify-between gap-5 border-b border-black/20 py-5 lg:py-0">
            <Link href="/" className="shrink-0 pl-4 sm:pl-6 text-black/50 hover:text-black">
              <img src="/assets/images/logo.svg" alt="Logo" className="w-36 sm:w-44 xl:w-52" />
            </Link>
            <div />
          </div>
        </div>
      </header>
    );
  }

  return (
    <NavbarContent
      serviceLinks={serviceLinks}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      servicesOpen={servicesOpen}
      setServicesOpen={setServicesOpen}
      companyOpen={companyOpen}
      setCompanyOpen={setCompanyOpen}
      isDesktop={isDesktop}
    />
  );
}
