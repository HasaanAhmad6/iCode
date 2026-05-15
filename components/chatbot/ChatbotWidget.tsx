"use client";

import { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import {
  chatbotFallbackMessage,
  chatbotWelcomeMessage,
  chatQuickActions,
  type ChatMessage,
  type ChatQuickAction,
} from "@/lib/chatbot";
import { LeadForm } from "@/components/chatbot/LeadForm";
import { ChatWindow } from "@/components/chatbot/ChatWindow";
import type { LeadFormValues } from "@/lib/validation";

type ChatApiResponse = {
  answer: string;
  sources?: Array<{ title: string; url?: string | null; similarity?: number | null }>;
};

const initialMessage = () => ({
  id: crypto.randomUUID(),
  role: "assistant" as const,
  content: chatbotWelcomeMessage,
});

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage()]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadIntent, setLeadIntent] = useState<string | undefined>(undefined);
  const [showLeadForm, setShowLeadForm] = useState(false);

  function getSourcePage() {
    return typeof window !== "undefined" ? window.location.pathname : "/";
  }

  async function submitQuestion(question: string) {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || loading) {
      return;
    }

    const nextUserMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmedQuestion,
    };

    setMessages((current) => [...current, nextUserMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: trimmedQuestion,
          sourcePage: getSourcePage(),
          conversation: [...messages, nextUserMessage].slice(-6).map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to answer right now.");
      }

      const data = (await response.json()) as ChatApiResponse;

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.answer || chatbotFallbackMessage,
          sources: data.sources?.map((source) => ({
            title: source.title,
            url: source.url ?? undefined,
            similarity: source.similarity ?? undefined,
          })),
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: chatbotFallbackMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function submitLead(values: LeadFormValues) {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload?.error ?? "Lead submission failed.");
    }

    setShowLeadForm(false);
    setLeadIntent(undefined);
    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Thanks. Your details have been received and the team will contact you soon. If needed, you can keep chatting with me for more website details.",
      },
    ]);
  }

  function handleQuickAction(action: ChatQuickAction) {
    if (action.type === "link" && action.href) {
      window.location.href = action.href;
      return;
    }

    if (action.type === "prompt" && action.prompt) {
      void submitQuestion(action.prompt);
      return;
    }

    if (action.type === "lead") {
      setLeadIntent(action.intent);
      setShowLeadForm(true);
      setOpen(true);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="fixed right-6 bottom-6 z-[71] flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(0,10,35,0.35)] transition hover:-translate-y-0.5"
      >
        <span className="grid size-9 place-content-center rounded-full bg-white/10">
          <MessageCircle className="size-4" />
        </span>
        <span className="hidden sm:inline">Chat with iCode</span>
        <Sparkles className="size-4 text-[var(--color-primary)]" />
      </button>

      <ChatWindow
        open={open}
        messages={messages}
        quickActions={chatQuickActions}
        input={input}
        loading={loading}
        onClose={() => setOpen(false)}
        onInputChange={setInput}
        onSubmit={(event) => {
          event.preventDefault();
          void submitQuestion(input);
        }}
        onQuickAction={handleQuickAction}
      >
        {showLeadForm && (
          <LeadForm
            sourcePage={getSourcePage()}
            intent={leadIntent}
            onCancel={() => setShowLeadForm(false)}
            onSubmit={submitLead}
          />
        )}
      </ChatWindow>
    </>
  );
}