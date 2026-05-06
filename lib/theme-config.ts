export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  primary: string;
  secondary: string;
  gray: string;
  grayLight: string;
  background: string;
  black: string;
  white: string;
}

export const themeConfig: Record<ThemeMode, ThemeColors> = {
  light: {
    primary: "#8b1a1a",
    secondary: "#000a23",
    gray: "#67788f",
    grayLight: "#e0e5eb",
    background: "#fafafa",
    black: "#12151e",
    white: "#fff",
  },
  dark: {
    primary: "#961e1e",
    secondary: "#1e2a45",
    gray: "#a0adb8",
    grayLight: "#2a3a4f",
    background: "#0f1419",
    black: "#fafafa",
    white: "#1a2332",
  },
};

/**
 * Generate CSS variable declarations from theme colors
 * Returns a string of CSS variable assignments
 */
export const generateThemeVariables = (colors: ThemeColors): string => {
  return `
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};
    --color-gray: ${colors.gray};
    --color-gray-light: ${colors.grayLight};
    --color-background: ${colors.background};
    --color-black: ${colors.black};
    --color-white: ${colors.white};
  `;
};
