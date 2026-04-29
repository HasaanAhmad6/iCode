import { X } from "lucide-react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  interest: string;
  setInterest: (value: string) => void;
  budget: string;
  setBudget: (value: string) => void;
  timeline: string;
  setTimeline: (value: string) => void;
};

export function ContactModal({
  open,
  onClose,
  interest,
  setInterest,
  budget,
  setBudget,
  timeline,
  setTimeline,
}: ContactModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 m-auto flex justify-center overflow-y-auto bg-white/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="border-gray-light relative m-auto flex w-full max-w-150 flex-col gap-6 overflow-hidden rounded-xl border bg-white p-4 shadow-[0_40px_16px_-8px_rgba(13,13,13,0.2)] lg:gap-12 lg:p-12"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 z-10 ml-auto bg-white transition hover:text-black sm:top-6 sm:right-6"
          onClick={onClose}
        >
          <X className="size-5" />
          <span className="sr-only">Close</span>
        </button>
        <h2>Get a quote</h2>
        <form className="space-y-6 lg:space-y-8">
          <div className="flex flex-col gap-2.5 lg:gap-4">
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" placeholder="Enter your full name" className="form-input" />
          </div>
          <div className="flex flex-col gap-2.5 lg:gap-4">
            <label htmlFor="email">Work email</label>
            <input id="email" type="email" placeholder="Enter your email address" className="form-input" />
          </div>
          <div className="flex flex-col gap-2.5 lg:gap-4">
            <label>I&apos;m interested in</label>
            <div className="flex flex-wrap gap-4">
              {[
                "App Development",
                "Web Development",
                "UI/UX Design",
                "SEO & Marketing",
                "AI/ML & Data Engineering",
                "Other",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setInterest(item)}
                  className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                    interest === item
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
            <label>Project Budget</label>
            <div className="flex flex-wrap gap-4">
              {["Under $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+", "Not sure yet"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setBudget(item)}
                  className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                    budget === item
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
            <label>Expected Timeline</label>
            <div className="flex flex-wrap gap-4">
              {["Immediately", "Within 1 month", "1-3 months", "Flexible"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTimeline(item)}
                  className={`border-gray-light rounded-lg border px-3 py-2 text-base/5.5 transition lg:px-4 lg:py-3 ${
                    timeline === item
                      ? "bg-primary-light border-primary/20 text-primary"
                      : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 space-y-2 lg:mt-12">
            <button type="submit" className="btn w-full">
              Contact us
            </button>
            <p className="text-center text-base/6">Our team typically responds within 1 business day.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
