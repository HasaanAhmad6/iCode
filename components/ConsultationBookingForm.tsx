"use client";

import { useState } from "react";
import { consultationDurations, consultationTopics, preferredTimeSlots } from "@/data/consultation";

export function ConsultationBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    timeSlot: "",
    duration: "30 minutes",
    topic: "Project Discovery",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.date) newErrors.date = "Preferred date is required";
    if (!formData.timeSlot) newErrors.timeSlot = "Preferred time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint when backend is ready
      // For now, we just simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        date: "",
        timeSlot: "",
        duration: "30 minutes",
        topic: "Project Discovery",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-gray-light w-full max-w-120 space-y-6 rounded-lg border p-4 sm:p-8 lg:space-y-8 xl:max-w-163 xl:p-12"
    >
      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-green-50 border-green-200 rounded-lg border p-4 text-green-800">
          <p className="font-medium">Thanks for booking! We'll confirm your consultation shortly.</p>
          <p className="text-sm">Check your email for details.</p>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label htmlFor="consultation-name" className="font-medium">
          Full name
        </label>
        <input
          id="consultation-name"
          type="text"
          placeholder="Enter your full name"
          className={`form-input ${errors.name ? "border-red-500" : ""}`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label htmlFor="consultation-email" className="font-medium">
          Work email
        </label>
        <input
          id="consultation-email"
          type="email"
          placeholder="Enter your email address"
          className={`form-input ${errors.email ? "border-red-500" : ""}`}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label htmlFor="consultation-phone" className="font-medium">
          Phone number
        </label>
        <input
          id="consultation-phone"
          type="tel"
          placeholder="Enter your phone number"
          className={`form-input ${errors.phone ? "border-red-500" : ""}`}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <span className="text-red-600 text-sm">{errors.phone}</span>}
      </div>

      {/* Company (Optional) */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label htmlFor="consultation-company" className="font-medium">
          Company <span className="text-gray text-sm">(Optional)</span>
        </label>
        <input
          id="consultation-company"
          type="text"
          placeholder="Enter your company name"
          className="form-input"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>

      {/* Preferred Date */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label htmlFor="consultation-date" className="font-medium">
          Preferred date
        </label>
        <input
          id="consultation-date"
          type="date"
          className={`form-input ${errors.date ? "border-red-500" : ""}`}
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          min={new Date().toISOString().split("T")[0]}
        />
        {errors.date && <span className="text-red-600 text-sm">{errors.date}</span>}
      </div>

      {/* Preferred Time */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label className="font-medium">Preferred time</label>
        <div className="flex flex-wrap gap-2">
          {preferredTimeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setFormData({ ...formData, timeSlot: slot })}
              className={`border-gray-light rounded-lg border px-3 py-2 text-sm transition lg:px-4 lg:py-2.5 ${
                formData.timeSlot === slot
                  ? "bg-primary-light border-primary/20 text-primary"
                  : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        {errors.timeSlot && <span className="text-red-600 text-sm">{errors.timeSlot}</span>}
      </div>

      {/* Consultation Topic */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label className="font-medium">Consultation topic</label>
        <div className="flex flex-wrap gap-2">
          {consultationTopics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => setFormData({ ...formData, topic })}
              className={`border-gray-light rounded-lg border px-3 py-2 text-sm transition lg:px-4 lg:py-2.5 ${
                formData.topic === topic
                  ? "bg-primary-light border-primary/20 text-primary"
                  : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label className="font-medium">Duration</label>
        <div className="flex flex-wrap gap-2">
          {consultationDurations.map((duration) => (
            <button
              key={duration}
              type="button"
              onClick={() => setFormData({ ...formData, duration })}
              className={`border-gray-light rounded-lg border px-3 py-2 text-sm transition lg:px-4 lg:py-2.5 ${
                formData.duration === duration
                  ? "bg-primary-light border-primary/20 text-primary"
                  : "bg-background hover:bg-primary-light hover:border-primary/20 hover:text-primary"
              }`}
            >
              {duration}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Details (Optional) */}
      <div className="flex flex-col gap-2.5 lg:gap-4">
        <label htmlFor="consultation-message" className="font-medium">
          Additional details <span className="text-gray text-sm">(Optional)</span>
        </label>
        <textarea
          id="consultation-message"
          placeholder="Tell us more about your needs or questions..."
          rows={4}
          className="form-textarea"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8 space-y-2 lg:mt-12">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Booking..." : "Book Free Consultation"}
        </button>
        <p className="text-center text-base/6">
          Our team will confirm within 24 hours during business hours.
        </p>
      </div>
    </form>
  );
}
