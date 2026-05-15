"use client";

import type { ChatMessage, ChatQuickAction } from "@/lib/chatbot";
import { MessageBubble } from "@/components/chatbot/MessageBubble";
import { QuickActions } from "@/components/chatbot/QuickActions";

type ChatWindowProps = {
  open: boolean;
  messages: ChatMessage[];
  quickActions: ChatQuickAction[];
  input: string;
  loading: boolean;
  onClose: () => void;
  onInputChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onQuickAction: (action: ChatQuickAction) => void;
  children?: React.ReactNode;
};

export function ChatWindow({
  open,
  messages,
  quickActions,
  input,
  loading,
  onClose,
  onInputChange,
  onSubmit,
  onQuickAction,
  children,
}: ChatWindowProps) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-[70] w-[calc(100vw-1.5rem)] max-w-[24rem] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(13,13,13,0.22)] transition-all duration-300 sm:w-[24rem] ${
        open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="relative overflow-hidden bg-secondary px-5 py-4 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,48,48,0.35),transparent_45%),radial-gradient(circle_at_left,rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">iCode assistant</p>
            <h2 className="mt-1 text-lg font-semibold">Custom RAG chatbot</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white transition hover:bg-white/20"
          >
            Close
          </button>
        </div>
      </div>

      <div className="chatbot-scrollbar max-h-[32rem] space-y-4 overflow-y-auto px-4 py-4">
        <QuickActions actions={quickActions} onAction={onQuickAction} />

        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {children}
      </div>

      <form onSubmit={onSubmit} className="border-t border-black/10 bg-[#FBFBFB] p-3">
        <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 shadow-sm focus-within:border-black/20">
          <input
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder="Ask about services, case studies, pricing, or contact options..."
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-black/35"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}