import { NextResponse } from "next/server";
import { createLead } from "@/lib/lead-service";
import { sendLeadNotification } from "@/lib/email";
import { leadFormSchema } from "@/lib/validation";

const rateLimits = new Map<string, { count: number; resetAt: number }>();

function getRequestIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
}

function allowRequest(ip: string) {
  const now = Date.now();
  const bucket = rateLimits.get(ip);

  if (!bucket || bucket.resetAt < now) {
    rateLimits.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (bucket.count >= 8) {
    return false;
  }

  bucket.count += 1;
  return true;
}

export async function POST(request: Request) {
  const ip = getRequestIp(request);

  if (!allowRequest(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = leadFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid lead data." }, { status: 400 });
  }

  if (parsed.data.honeypot?.trim()) {
    return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
  }

  if (parsed.data.submittedAt && Date.now() - parsed.data.submittedAt < 2500) {
    return NextResponse.json({ error: "Please take a moment before submitting again." }, { status: 400 });
  }

  const lead = await createLead({
    ...parsed.data,
    userAgent: request.headers.get("user-agent"),
    status: "new",
  });

  try {
    await sendLeadNotification(parsed.data);
  } catch {
    // Lead is already stored; email delivery failure should not block the user.
  }

  return NextResponse.json({ success: true, lead });
}