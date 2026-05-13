import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { legalServiceLinks, termsSections } from "@/data/legal";
import { TermsClient } from "../../components/terms/TermsClient";

export default function TermsPage() {
  return (
    <>
      <TermsClient />

      <Navbar serviceLinks={legalServiceLinks} />

      <div className="grow">
        <div className="relative z-1 h-60 overflow-hidden bg-[url('/assets/images/main-banner.jpg')] bg-cover bg-center bg-no-repeat lg:h-85">
          <span className="sm:from-secondary from-secondary/90 to-secondary/60 absolute inset-0 -z-1 bg-linear-to-r from-50% sm:to-transparent lg:from-28%" />
          <div className="container flex h-full flex-col justify-end gap-3 py-8 sm:gap-4 lg:gap-6 lg:py-16">
            <h1 className="text-white">Terms & Condition</h1>
            <p className="text-gray-light max-w-275">
              These terms outline the rules and responsibilities for using our website and services.
            </p>
          </div>
        </div>

        <div className="container py-14 lg:py-16">
          <div className="prose max-w-none!">
            {termsSections.map((section) => (
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
            href="mailto:info@icodeltd.com"
            className="text-primary mt-6 flex items-center gap-2 transition hover:underline hover:underline-offset-2"
          >
            <span className="bg-primary/5 border-primary/20 grid size-8 shrink-0 place-content-center rounded-lg border">
              <Mail className="size-4 shrink-0" />
            </span>
            <span>info@icodeltd.com</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
