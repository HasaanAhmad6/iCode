import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { pricingPlans } from "@/data/pricing";

type PricingPlansProps = {
  variant?: "home" | "service-details";
};

export function PricingPlans({ variant = "home" }: PricingPlansProps) {
  return (
    <div className="bg-secondary py-14 lg:py-16">
      <div className="container space-y-8 lg:space-y-12">
        <div className="section-heading">
          <div>Pricing plans</div>
          <h2 className="text-white">Simple, Transparent Pricing</h2>
          <p className="text-gray-light mx-auto max-w-125">
            Choose the plan that fits your business needs. No hidden fees just clear value and
            reliable service.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-lg border-2 p-4 backdrop-blur-[30px] lg:py-8 xl:px-8 ${
                plan.featured
                  ? variant === "service-details"
                    ? "border-gray-light/20 relative z-1 overflow-hidden sm:order-1 sm:col-span-2 lg:order-0 lg:col-span-1"
                    : "border-gray-light/20 relative z-1 overflow-hidden"
                  : variant === "service-details"
                    ? "border-gray-light/5 bg-white/2 sm:order-2 lg:order-0 lg:mt-8"
                    : "border-gray-light/5 bg-white/2 lg:mt-8"
              }`}
            >
              {variant === "service-details" && plan.featured && (
                <div className="bg-primary absolute top-0 right-4 rounded-b-xl border border-white/20 px-2.5 py-1.5 text-xs/4 font-semibold text-white uppercase sm:right-8 sm:px-5 sm:py-2.25 sm:text-sm/5 sm:font-bold">
                  <span className="bg-primary absolute -inset-y-px -left-1.5 w-3.5 skew-x-20 rounded-bl-xl border border-r-0 border-white/20 sm:-left-2.5 sm:w-5 sm:skew-x-26" />
                  <span className="bg-primary absolute -inset-y-px -right-1.5 w-3.5 -skew-x-20 rounded-br-xl border border-l-0 border-white/20 sm:-right-2.5 sm:w-5 sm:-skew-x-26" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="section-heading text-left">
                <h3 className="text-white">{plan.title}</h3>
                <p className="text-gray-light mt-2">{plan.description}</p>
              </div>
              <div className="mt-6 text-5xl font-medium text-white lg:mt-8">
                $99
                <span className="ml-2.5 inline text-xl font-light opacity-60 lg:text-2xl">
                  / month
                </span>
              </div>
              <button
                type="button"
                className={`btn mt-4 w-full justify-center lg:mt-6 ${
                  plan.featured ? "btn-secondary" : "bg-white/5 hover:bg-primary"
                }`}
              >
                {plan.cta}
              </button>
              <div className="divide-gray-light/20 mt-6 divide-y lg:mt-8">
                {plan.benefits.map((benefit) => (
                  <div key={benefit} className="text-gray-light flex items-start gap-2 py-2 lg:py-3">
                    <BadgeCheck
                      className={`mt-1 size-4 shrink-0 lg:mt-0.75 lg:size-5 ${
                        plan.featured ? "text-primary" : ""
                      }`}
                    />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/pricing-comparison" className="btn btn-secondary">
            Compare Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
