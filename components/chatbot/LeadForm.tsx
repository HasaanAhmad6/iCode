"use client";

import { useMemo, useState } from "react";
import { leadFormSchema, type LeadFormValues } from "@/lib/validation";

type LeadFormProps = {
  sourcePage: string;
  intent?: string;
  onCancel: () => void;
  onSubmit: (values: LeadFormValues) => Promise<void>;
};

const serviceOptions = [
  "Web Development",
  "UI/UX Design",
  "App Development",
  "Digital Marketing",
  "Automation & Integrations",
  "Brand Identity",
  "Other",
];

const budgetOptions = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

const contactTimeOptions = ["Immediately", "Within 1 month", "1-3 months", "Flexible"];

export function LeadForm({ sourcePage, intent, onCancel, onSubmit }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formState, setFormState] = useState<LeadFormValues>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    requiredService: intent === "consultation" ? "Book a Free Consultation" : intent === "contact" ? "Contact Us" : "",
    budget: "",
    projectDetails: "",
    preferredContactTime: "",
    sourcePage,
    honeypot: "",
    submittedAt: Date.now(),
  });

  const headline = useMemo(() => {
    switch (intent) {
      case "consultation":
        return "Book a Free Consultation";
      case "contact":
        return "Contact Us";
      case "support":
        return "Talk to Human Support";
      default:
        return "Get a Quote";
    }
  }, [intent]);

  function updateField<K extends keyof LeadFormValues>(key: K, value: LeadFormValues[K]) {
    setFormState((current) => ({ ...current, [key]: value }));
  }

  function goNext() {
    setError(null);

    if (step === 1) {
      const result = leadFormSchema.pick({ name: true, email: true, phone: true }).safeParse(formState);
      if (!result.success) {
        setError(result.error.issues[0]?.message ?? "Please complete the first step.");
        return;
      }
    }

    if (step === 2) {
      const result = leadFormSchema
        .pick({ companyName: true, requiredService: true, budget: true, preferredContactTime: true })
        .safeParse(formState);
      if (!result.success) {
        setError(result.error.issues[0]?.message ?? "Please complete the second step.");
        return;
      }
    }

    setStep((current) => Math.min(current + 1, 3));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const parsed = leadFormSchema.safeParse(formState);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please complete the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(parsed.data);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-black/10 bg-[#FAFAFA] p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Lead capture</p>
          <h3 className="mt-1 text-lg">{headline}</h3>
        </div>
        <button type="button" onClick={onCancel} className="text-sm text-black/50 transition hover:text-black">
          Cancel
        </button>
      </div>

      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
        {[1, 2, 3].map((item) => (
          <span
            key={item}
            className={`rounded-full px-2 py-1 ${step >= item ? "bg-secondary text-white" : "bg-black/5 text-black/40"}`}
          >
            Step {item}
          </span>
        ))}
      </div>

      {step === 1 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Name">
            <input
              value={formState.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="input-field"
              placeholder="Your name"
              required
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={formState.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="input-field"
              placeholder="you@company.com"
              required
            />
          </Field>
          <Field label="Phone / WhatsApp" className="sm:col-span-2">
            <input
              value={formState.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="input-field"
              placeholder="+92..."
              required
            />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Company name">
            <input
              value={formState.companyName}
              onChange={(event) => updateField("companyName", event.target.value)}
              className="input-field"
              placeholder="Company or brand"
              required
            />
          </Field>
          <Field label="Required service">
            <select
              value={formState.requiredService}
              onChange={(event) => updateField("requiredService", event.target.value)}
              className="input-field"
              required
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Budget">
            <select
              value={formState.budget}
              onChange={(event) => updateField("budget", event.target.value)}
              className="input-field"
              required
            >
              <option value="">Select a budget</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Preferred contact time">
            <select
              value={formState.preferredContactTime}
              onChange={(event) => updateField("preferredContactTime", event.target.value)}
              className="input-field"
              required
            >
              <option value="">Select one</option>
              {contactTimeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-3">
          <Field label="Project details">
            <textarea
              value={formState.projectDetails}
              onChange={(event) => updateField("projectDetails", event.target.value)}
              className="input-field min-h-28 resize-y"
              placeholder="Describe your project, goals, timeline, and any special requirements."
              required
            />
          </Field>
          <Field label="Source page">
            <input value={formState.sourcePage} className="input-field" readOnly />
          </Field>
          <input
            value={formState.honeypot}
            onChange={(event) => updateField("honeypot", event.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </div>
      )}

      {error && <p className="rounded-2xl bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((current) => Math.max(current - 1, 1))}
          disabled={step === 1 || isSubmitting}
          className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>
        {step < 3 ? (
          <button type="button" onClick={goNext} className="btn px-4 py-2 text-sm">
            Next
          </button>
        ) : (
          <button type="submit" disabled={isSubmitting} className="btn px-4 py-2 text-sm">
            {isSubmitting ? "Submitting..." : "Send request"}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({ label, className, children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`space-y-1.5 ${className ?? ""}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">{label}</span>
      {children}
    </label>
  );
}