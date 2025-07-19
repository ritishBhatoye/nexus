/**
 * Betting Zone App Color System
 * This file contains all the colors used throughout the betting application.
 * Colors are organized by purpose and include both light and dark mode variants.
 */

// Primary Brand Colors (Blue)
const primaryColors = {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#2563eb", // Main primary blue
  600: "#1d4ed8",
  700: "#1e40af",
  800: "#1e3a8a",
  900: "#172554",
};

// Accent Colors
const accentColors = {
  yellow: "#facc15", // For highlights, create button, etc.
  purple: "#a78bfa", // For AI/unique features
  teal: "#14b8a6", // Optional, for freshness
};

// Backgrounds
const backgroundColors = {
  light: "#fff",
  dark: "#18181b",
  cardLight: "#f3f4f6",
  cardDark: "#1e293b",
};

// Text
const textColors = {
  light: "#18181b",
  dark: "#fff",
};

// Betting Specific Colors
const bettingColors = {
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e", // Win/Success
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  danger: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444", // Loss/Danger
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  live: {
    500: "#ef4444", // Live indicator
    600: "#dc2626",
  },
  odds: {
    high: "#22c55e", // High odds
    medium: "#f59e0b", // Medium odds
    low: "#ef4444", // Low odds
  },
  betTypes: {
    single: "#3b82f6", // Single bets
    multiple: "#8b5cf6", // Multiple bets
    system: "#06b6d4", // System bets
  },
};

// Legacy colors for backward compatibility
const tintColorLight = primaryColors[500];
const tintColorDark = "#fff";

// Exported Colors Object
export const Colors = {
  light: {
    text: textColors.light,
    background: backgroundColors.light,
    tint: primaryColors[500],
    icon: "#2563eb",
    tabIconDefault: "#94a3b8",
    tabIconSelected: primaryColors[500],

    primary: primaryColors,
    accent: accentColors,

    card: {
      primary: backgroundColors.cardLight,
      accent: accentColors.yellow,
    },

    border: {
      light: "#e5e7eb",
      primary: primaryColors[500],
    },

    // Legacy Swiggy colors
    swiggy: {
      primary: "#fc8019",
      accent: {
        light: "#f8f9fa",
      },
      text: "#282c3f",
    },
  },
  dark: {
    text: textColors.dark,
    background: backgroundColors.dark,
    tint: primaryColors[400],
    icon: "#60a5fa",
    tabIconDefault: "#64748b",
    tabIconSelected: primaryColors[400],

    primary: primaryColors,
    accent: accentColors,

    card: {
      primary: backgroundColors.cardDark,
      accent: accentColors.purple,
    },

    border: {
      light: "#334155",
      primary: primaryColors[400],
    },

    // Legacy Swiggy colors (adjusted for dark mode)
    swiggy: {
      primary: "#f97316",
      accent: {
        light: "#374151",
      },
      text: "#f9fafb",
    },
  },
};

// Export individual color objects for direct use
export const PrimaryColors = primaryColors;
export const AccentColors = accentColors;
export const BettingColors = bettingColors;
