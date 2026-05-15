"use client";

import dynamic from "next/dynamic";

const ChatbotWidget = dynamic(
  () => import("@/components/chatbot/ChatbotWidget").then((module) => module.ChatbotWidget),
  { ssr: false }
);

export function ChatbotMount() {
  return <ChatbotWidget />;
}