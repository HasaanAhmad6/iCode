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

  try {
    const queryEmbedding = await embedText(parsed.data.question);
    const chunks = await searchKnowledgeChunks(queryEmbedding, 5);

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