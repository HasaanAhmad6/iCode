import type { ChatQuickAction } from "@/lib/chatbot";

type QuickActionsProps = {
  actions: ChatQuickAction[];
  onAction: (action: ChatQuickAction) => void;
};

export function QuickActions({ actions, onAction }: QuickActionsProps) {
  return (
    <div className="chatbot-quick-actions">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={() => onAction(action)}
          className="chatbot-quick-action"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
