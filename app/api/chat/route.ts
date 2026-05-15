import { NextResponse } from "next/server";
import { chatbotFallbackMessage } from "@/lib/chatbot";
import { generateWebsiteAnswer } from "@/lib/ai";
import { embedText } from "@/lib/embeddings";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { searchKnowledgeChunks } from "@/lib/vector-search";
import { chatRequestSchema } from "@/lib/validation";

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

  if (bucket.count >= 12) {
    return false;
  }

  bucket.count += 1;
  return true;
}

async function logUnknownQuestion(question: string, sourcePage?: string) {
  try {
    const supabase = getSupabaseAdminClient() as any;
    await supabase.from("chat_unknown_questions").insert({
      question,
      source_page: sourcePage ?? null,
      reason: "no_matching_context",
    });
  } catch {
    // Logging must never interfere with the chat response.
  }
}

function getDirectAnswer(question: string) {
  const normalizedQuestion = question.trim().toLowerCase();

  if (/^(hi|hello|hey|salam|assalam|assalamu alaikum|aoa|hy)\b[!.?\s]*$/.test(normalizedQuestion)) {
    return "Hi. I am the iCode assistant. I can help you with services, case studies, pricing, custom software, automation, integrations, and contact options.";
  }

  if (/^(thanks|thank you|jazakallah|ok|okay)\b[!.?\s]*$/.test(normalizedQuestion)) {
    return "You are welcome. Ask me anything about iCode services, projects, pricing, or contact options.";
  }

  if (/\berp\b|\benterprise resource planning\b/.test(normalizedQuestion)) {
    return "The website does not list a named ERP case study, so I should not claim that iCode has already delivered one. What iCode does offer is custom software, scalable backend development, workflow automation, and API integrations, which are the kind of services used for ERP-style business systems. For an ERP project, the best next step is to request a quote or book a free consultation.";
  }

  return null;
}

export async function POST(request: Request) {
  const ip = getRequestIp(request);

  if (!allowRequest(ip)) {
    return NextResponse.json({ answer: "Too many requests. Please try again shortly.", sources: [] }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = chatRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ answer: parsed.error.issues[0]?.message ?? chatbotFallbackMessage, sources: [] }, { status: 400 });
  }

  const directAnswer = getDirectAnswer(parsed.data.question);

  if (directAnswer) {
    return NextResponse.json({ answer: directAnswer, sources: [] });
  }

  try {
    const queryEmbedding = await embedText(parsed.data.question);
    const chunks = await searchKnowledgeChunks(queryEmbedding, 8);

    if (!chunks.length) {
      await logUnknownQuestion(parsed.data.question, parsed.data.sourcePage);
      return NextResponse.json({ answer: chatbotFallbackMessage, sources: [] });
    }

    const answer = await generateWebsiteAnswer({
      question: parsed.data.question,
      contextChunks: chunks,
      conversation: parsed.data.conversation,
    });

    return NextResponse.json({
      answer: answer.answer,
      sources: chunks.map((chunk) => ({
        title: chunk.title ?? "Website content",
        url: chunk.url ?? null,
        similarity: chunk.similarity ?? null,
      })),
    });
  } catch {
    await logUnknownQuestion(parsed.data.question, parsed.data.sourcePage);
    return NextResponse.json({ answer: chatbotFallbackMessage, sources: [] }, { status: 500 });
  }
}
