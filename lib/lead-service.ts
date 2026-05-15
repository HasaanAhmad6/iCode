import { getSupabaseAdminClient } from "@/lib/supabase";
import type { LeadFormValues } from "@/lib/validation";

export type LeadRecord = LeadFormValues & {
  userAgent?: string | null;
  status?: string;
};

export async function createLead(record: LeadRecord) {
  const supabase = getSupabaseAdminClient() as any;

  const { data, error } = await supabase
    .from("leads")
    .insert({
      name: record.name,
      email: record.email,
      phone: record.phone,
      company_name: record.companyName,
      required_service: record.requiredService,
      budget: record.budget,
      project_details: record.projectDetails,
      preferred_contact_time: record.preferredContactTime,
      source_page: record.sourcePage,
      user_agent: record.userAgent ?? null,
      status: record.status ?? "new",
    })
    .select("id, name, email, created_at")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}