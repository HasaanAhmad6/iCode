import type { ChatMessage } from "@/lib/chatbot";

type MessageBubbleProps = {
  message: ChatMessage;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
          isUser
            ? "bg-secondary text-white"
            : "border border-black/10 bg-white text-black"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        {message.sources && message.sources.length > 0 && !isUser && (
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-black/60">
            {message.sources.map((source) => (
              <span
                key={`${source.title}-${source.url ?? "source"}`}
                className="rounded-full border border-black/10 px-2 py-1"
              >
                {source.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}