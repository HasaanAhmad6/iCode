import { chatbotFallbackMessage, chatbotSystemPrompt } from "@/lib/chatbot";
import type { KnowledgeChunk } from "@/lib/vector-search";

function assertEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function buildContextBlock(chunks: KnowledgeChunk[]) {
  return chunks
    .map((chunk, index) => {
      const title = chunk.title ?? `Source ${index + 1}`;
      const url = chunk.url ? ` (${chunk.url})` : "";
      return `[${index + 1}] ${title}${url}\n${chunk.content ?? ""}`;
    })
    .join("\n\n");
}

export async function generateWebsiteAnswer(params: {
  question: string;
  contextChunks: KnowledgeChunk[];
  conversation?: Array<{ role: "user" | "assistant"; content: string }>;
}) {
  const apiKey = assertEnv("DEEPSEEK_API_KEY", process.env.DEEPSEEK_API_KEY);
  const context = buildContextBlock(params.contextChunks);

  if (!context.trim()) {
    return {
      answer: chatbotFallbackMessage,
      confidence: 0,
    };
  }

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      temperature: 0.2,
      messages: [
        { role: "system", content: chatbotSystemPrompt },
        {
          role: "user",
          content: `Website context:\n${context}\n\nUser question: ${params.question}\n\nAnswer using only the website context. If the answer is missing, say that you do not have exact information and suggest contacting the team.`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`DeepSeek request failed with status ${response.status}.`);
  }

  const payload = await response.json();
  const answer = payload?.choices?.[0]?.message?.content?.trim();

  if (!answer) {
    return {
      answer: chatbotFallbackMessage,
      confidence: 0,
    };
  }

  return {
    answer,
    confidence: 1,
  };
}