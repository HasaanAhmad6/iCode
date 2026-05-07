"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ContactModal } from "@/components/ContactModal";

export function QuoteButton() {
  const [contactModal, setContactModal] = useState(false);

  return (
    <>
      <button type="button" className="btn" onClick={() => setContactModal(true)}>
        Get a quote
        <ChevronRight className="size-5" />
      </button>
      <ContactModal open={contactModal} onClose={() => setContactModal(false)} />
    </>
  );
}
