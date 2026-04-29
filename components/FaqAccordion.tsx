"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  initialActiveId?: number;
  splitColumns?: boolean;
};

function FaqColumn({
  items,
  activeId,
  onToggle,
}: {
  items: FaqItem[];
  activeId: number;
  onToggle: (id: number) => void;
}) {
  return (
    <div>
      {items.map((faq, index) => {
        const isActive = faq.id === activeId;
        const nextIsActive = items[index + 1]?.id === activeId;
        return (
          <div
            key={faq.id}
            className={`border-gray-light block overflow-hidden border-b ${isActive ? "rounded-lg border border-primary/20 bg-primary/5" : ""} ${nextIsActive ? "border-b-0" : ""}`}
          >
            <button
              type="button"
              className="group hover:text-secondary flex w-full items-center justify-between gap-4 px-2.5 py-4 text-left text-lg/5.5 text-black duration-300 sm:px-4 sm:text-xl/6 lg:py-6 xl:text-2xl/8"
              aria-expanded={isActive}
              onClick={() => onToggle(faq.id)}
            >
              <span className="flex-1">{faq.question}</span>
              {isActive ? (
                <Minus className="text-primary size-4 shrink-0 lg:size-6" />
              ) : (
                <Plus className="text-gray size-4 shrink-0 lg:size-6" />
              )}
            </button>
            {isActive && <div className="px-2.5 pb-4 sm:px-4 sm:pt-2">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}

export function FaqAccordion({ items, initialActiveId = 1, splitColumns = false }: FaqAccordionProps) {
  const [activeId, setActiveId] = useState(initialActiveId);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? 0 : id));
  };

  if (!splitColumns) {
    return <FaqColumn items={items} activeId={activeId} onToggle={handleToggle} />;
  }

  const middle = Math.ceil(items.length / 2);
  return (
    <div className="grid lg:grid-cols-2 lg:gap-6">
      <FaqColumn items={items.slice(0, middle)} activeId={activeId} onToggle={handleToggle} />
      <FaqColumn items={items.slice(middle)} activeId={activeId} onToggle={handleToggle} />
    </div>
  );
}
