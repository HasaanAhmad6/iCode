import type { ChatQuickAction } from "@/lib/chatbot";

type QuickActionsProps = {
  actions: ChatQuickAction[];
  onAction: (action: ChatQuickAction) => void;
};

export function QuickActions({ actions, onAction }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={() => onAction(action)}
          className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-black transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/5"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}