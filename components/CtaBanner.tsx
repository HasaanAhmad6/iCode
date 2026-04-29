import Link from "next/link";

type CtaBannerProps = {
  onQuoteClick: () => void;
};

export function CtaBanner({ onQuoteClick }: CtaBannerProps) {
  return (
    <div className="relative overflow-hidden py-14 shadow-[0_16px_40px_-8px_rgba(13,13,13,0.2)] lg:py-16">
      <img src="/assets/images/cta-banner.png" alt="graphy" className="absolute inset-0 size-full object-cover" />
      <div className="relative z-1 container text-center">
        <img
          src="/assets/images/circle-star.png"
          alt="circle-star"
          className="absolute -bottom-16 left-0 -z-1 h-auto w-20 md:w-35 xl:w-65"
        />
        <img
          src="/assets/images/circle-half.png"
          alt="circle-half"
          className="absolute -top-16 right-0 -z-1 h-auto w-20 md:w-35 xl:w-65"
        />
        <div className="section-heading text-white">
          <h2 className="text-white">Ready to Build Something Better?</h2>
          <p>
            Let&apos;s discuss your goals and create a tailored solution that helps your business
            grow with confidence.
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-2 sm:gap-4 lg:gap-6">
          <button
            type="button"
            className="btn btn-secondary px-2.5 whitespace-nowrap sm:px-4.75"
            onClick={onQuoteClick}
          >
            Get a quote
          </button>
          <Link
            href="/contact"
            className="btn btn-secondary bg-transparent px-2.5 whitespace-nowrap text-white sm:px-4.75"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
