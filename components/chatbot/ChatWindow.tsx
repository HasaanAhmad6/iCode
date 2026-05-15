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
      className={`chatbot-window ${
        open ? "chatbot-window-open" : "chatbot-window-closed"
      }`}
    >
      <div className="chatbot-header">
        <div className="chatbot-header-glow" />
        <div className="chatbot-header-content">
          <div>
            <p className="chatbot-eyebrow">iCode assistant</p>
            <h2 className="chatbot-heading">Custom RAG chatbot</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="chatbot-close"
          >
            Close
          </button>
        </div>
      </div>

      <div className="chatbot-scrollbar chatbot-body">
        <QuickActions actions={quickActions} onAction={onQuickAction} />

        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {children}
      </div>

      <form onSubmit={onSubmit} className="chatbot-form">
        <div className="chatbot-input-shell">
          <input
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder="Ask about services, case studies, pricing, or contact options..."
            className="chatbot-input"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="chatbot-send"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
