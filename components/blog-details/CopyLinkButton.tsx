"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copyLink}
      className="border-gray-light bg-background inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 text-base/5 font-medium whitespace-nowrap text-black hover:bg-white lg:p-3"
    >
      <Copy className="size-5 shrink-0" />
      <span>{copied ? "Copied" : "Copy link"}</span>
    </button>
  );
}
