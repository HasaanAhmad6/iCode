"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ThemeMode, themeConfig, generateThemeVariables } from "./theme-config";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "icode-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const initializeTheme = () => {
      // Check localStorage first
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        setThemeState(savedTheme);
        applyTheme(savedTheme);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme: ThemeMode = prefersDark ? "dark" : "light";
        setThemeState(initialTheme);
        applyTheme(initialTheme);
      }
      
      setMounted(true);
    };

    initializeTheme();
  }, []);

  const applyTheme = (themeMode: ThemeMode) => {
    const colors = themeConfig[themeMode];
    const cssVariables = generateThemeVariables(colors);
    
    // Apply CSS variables to document root
    const root = document.documentElement;
    const style = root.style;
      // Set data attribute for CSS selectors
      root.setAttribute("data-theme", themeMode);
   
    
    // Set each variable individually
    style.setProperty("--color-primary", colors.primary);
    style.setProperty("--color-secondary", colors.secondary);
    style.setProperty("--color-gray", colors.gray);
    style.setProperty("--color-gray-light", colors.grayLight);
    style.setProperty("--color-background", colors.background);
    style.setProperty("--color-black", colors.black);
    style.setProperty("--color-white", colors.white);
    
    // Update body background for dark mode
    if (themeMode === "dark") {
      root.style.backgroundColor = colors.background;
      document.body.style.backgroundColor = colors.background;
    } else {
      root.style.backgroundColor = colors.background;
      document.body.style.backgroundColor = colors.background;
    }
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Prevent rendering until client-side theme is loaded
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
