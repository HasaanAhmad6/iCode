import Link from "next/link";
import { AtSign, Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-gray-light mt-auto overflow-hidden border-t bg-white pt-14">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 pb-10 lg:flex-row lg:items-start">
          <div className="mx-auto shrink-0 lg:mx-0 lg:w-75 xl:w-105">
            <div className="space-y-6 text-center lg:text-left">
              <Link href="/" className="flex">
                <img src="/assets/images/logo.svg" alt="Logo" className="mx-auto w-70 md:w-82 lg:mx-0" />
              </Link>
              <p>Helping businesses innovate with strategy, design, and technology.</p>
              <div className="border-gray-light flex items-center justify-center gap-4 lg:justify-start lg:border-b lg:pb-6">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="border-gray-light hover:bg-primary hover:border-primary grid size-10 place-content-center rounded-lg border hover:text-white">
                  <AtSign className="size-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="border-gray-light hover:bg-primary hover:border-primary grid size-10 place-content-center rounded-lg border hover:text-white">
                  <Share2 className="size-6" />
                </a>
                <a href="https://www.linkedin.com/company/icodeltd" target="_blank" rel="noreferrer" className="border-gray-light hover:bg-primary hover:border-primary grid size-10 place-content-center rounded-lg border hover:text-white">
                  <Globe className="size-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="border-gray-light hover:bg-primary hover:border-primary grid size-10 place-content-center rounded-lg border hover:text-white">
                  <AtSign className="size-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 hidden text-base font-medium lg:block">
              &copy; {new Date().getFullYear()} iCode Ltd. All rights reserved.
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 text-base font-medium sm:grid-cols-3 lg:flex lg:gap-4 xl:gap-6">
            <div className="space-y-6 lg:w-50">
              <div className="text-primary font-semibold">Contact</div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-black">Email:</div>
                  <a href="mailto:info@icodeltd.com" className="hover:text-primary block truncate transition">
                    info@icodeltd.com
                  </a>
                </div>
                <div className="space-y-1">
                  <div className="text-black">Phone:</div>
                  <a href="tel:+92-307-6256808" className="hover:text-primary transition">
                    +92-307-6256808
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:w-40 xl:w-50">
              <div className="text-primary font-semibold">Company</div>
              <div className="flex flex-col items-start space-y-4">
                <Link href="/about-us" className="hover:text-primary transition">
                  About Us
                </Link>
                <Link href="/services" className="hover:text-primary transition">
                  Our Services
                </Link>
                <Link href="/projects" className="hover:text-primary transition">
                  Projects
                </Link>
                <Link href="/blog" className="hover:text-primary transition">
                  Blog
                </Link>
              </div>
            </div>
            <div className="space-y-6 lg:w-40 xl:w-50">
              <div className="text-primary font-semibold">Support</div>
              <div className="flex flex-col items-start space-y-4">
                <Link href="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
                <Link href="/faq" className="hover:text-primary transition">
                  FAQs
                </Link>
                <Link href="/privacy-policy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-light block border-t py-6 text-center text-base font-medium lg:hidden">
          &copy; {new Date().getFullYear()} iCode Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
