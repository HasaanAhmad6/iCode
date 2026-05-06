"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent SSR issues
  if (!mounted) {
    return <div className="inline-flex items-center justify-center rounded-lg p-2 w-9 h-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-light transition-colors"
      title={`Current theme: ${theme}`}
    >
      {theme === "light" ? (
        <Moon className="size-5 text-primary" />
      ) : (
        <Sun className="size-5 text-primary" />
      )}
    </button>
  );
}
