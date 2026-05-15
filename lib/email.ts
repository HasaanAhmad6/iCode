import { Resend } from "resend";
import type { LeadRecord } from "@/lib/lead-service";

function assertEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function buildLeadEmailHtml(lead: LeadRecord) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#12151e">
      <h2 style="margin:0 0 12px">New chatbot lead</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Phone:</strong> ${lead.phone}</p>
      <p><strong>Company:</strong> ${lead.companyName}</p>
      <p><strong>Service:</strong> ${lead.requiredService}</p>
      <p><strong>Budget:</strong> ${lead.budget}</p>
      <p><strong>Preferred contact time:</strong> ${lead.preferredContactTime}</p>
      <p><strong>Source page:</strong> ${lead.sourcePage}</p>
      <p><strong>Project details:</strong><br />${lead.projectDetails.replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

export async function sendLeadNotification(lead: LeadRecord) {
  const apiKey = assertEnv("RESEND_API_KEY", process.env.RESEND_API_KEY);
  const recipient = assertEnv("LEADS_EMAIL", process.env.LEADS_EMAIL);

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: `iCode Website <${recipient}>`,
    to: recipient,
    subject: `New lead from ${lead.name}`,
    html: buildLeadEmailHtml(lead),
  });
}