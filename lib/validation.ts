import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(6, "Please enter a phone or WhatsApp number."),
  companyName: z.string().trim().min(2, "Please enter your company name."),
  requiredService: z.string().trim().min(2, "Please select a service."),
  budget: z.string().trim().min(2, "Please select a budget range."),
  projectDetails: z.string().trim().min(20, "Please add a few more details about the project."),
  preferredContactTime: z.string().trim().min(2, "Please share a preferred contact time."),
  sourcePage: z.string().trim().min(1, "Source page is required."),
  honeypot: z.string().optional().default(""),
  submittedAt: z.number().int().optional(),
});

export const chatRequestSchema = z.object({
  question: z.string().trim().min(1, "Question is required."),
  sourcePage: z.string().trim().optional(),
  conversation: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1),
      })
    )
    .optional(),
});

export const reindexRequestSchema = z.object({
  force: z.boolean().optional().default(false),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
export type ChatRequestValues = z.infer<typeof chatRequestSchema>;