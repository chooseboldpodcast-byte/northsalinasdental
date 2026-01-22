/**
 * Theme Configuration
 *
 * Customize colors, fonts, and visual style of your website.
 * Choose from pre-built color presets or create your own custom palette.
 */

//============================================================================
// COLOR PRESETS
//============================================================================

/**
 * Pre-built color palettes
 * Each palette includes primary, secondary, and background colors
 * designed to work well together.
 */
export const colorPresets = {
  teal: {
    name: "Teal & Coral",
    description: "Fresh and modern with warm accents",
    colors: {
      primary: {
        50: "#E6F7F7",
        100: "#CCF0EF",
        200: "#99E0DF",
        300: "#66D1CF",
        400: "#33C1BF",
        500: "#16938F",
        600: "#0D7C7A",
        700: "#0A6664",
        800: "#08504E",
        900: "#053A38",
      },
      secondary: {
        50: "#FFF5F3",
        100: "#FFEBE7",
        200: "#FFD7CF",
        300: "#FFB5A7",
        400: "#FF8B7B",
        500: "#FF6B5B",
        600: "#E54B3B",
        700: "#CC3B2B",
        800: "#B32B1B",
        900: "#991B0B",
      },
      background: "#F7FAFC",
    },
  },

  navy: {
    name: "Navy & Blush",
    description: "Classic and professional with soft pink accents",
    colors: {
      primary: {
        50: "#E8EDF4",
        100: "#D1DBE9",
        200: "#A3B7D3",
        300: "#7593BD",
        400: "#476FA7",
        500: "#1B365D",
        600: "#162C4D",
        700: "#11223D",
        800: "#0C182D",
        900: "#070E1D",
      },
      secondary: {
        50: "#FDF5F6",
        100: "#FBEBED",
        200: "#F7D7DB",
        300: "#E8B4B8",
        400: "#D99095",
        500: "#CA6C72",
        600: "#B5525A",
        700: "#9F3842",
        800: "#8A1E2A",
        900: "#750412",
      },
      background: "#F8FAFC",
    },
  },

  forest: {
    name: "Forest & Sand",
    description: "Natural and earthy with warm undertones",
    colors: {
      primary: {
        50: "#EBF2ED",
        100: "#D7E5DB",
        200: "#AFCBB7",
        300: "#87B193",
        400: "#5F976F",
        500: "#2D5A3D",
        600: "#254B33",
        700: "#1D3C29",
        800: "#152D1F",
        900: "#0D1E15",
      },
      secondary: {
        50: "#FAF6F1",
        100: "#F5EDE3",
        200: "#EBDBC7",
        300: "#D4A574",
        400: "#C78F58",
        500: "#BA793C",
        600: "#9E6332",
        700: "#824D28",
        800: "#66371E",
        900: "#4A2114",
      },
      background: "#FAFAF8",
    },
  },

  plum: {
    name: "Plum & Gold",
    description: "Luxurious and sophisticated",
    colors: {
      primary: {
        50: "#F3EFF4",
        100: "#E7DFE9",
        200: "#CFBFD3",
        300: "#B79FBD",
        400: "#9F7FA7",
        500: "#6B4C6E",
        600: "#593F5C",
        700: "#47324A",
        800: "#352538",
        900: "#231826",
      },
      secondary: {
        50: "#FEFBF0",
        100: "#FDF7E1",
        200: "#FBEFC3",
        300: "#F0C987",
        400: "#E5B35B",
        500: "#DA9D2F",
        600: "#B88326",
        700: "#96691D",
        800: "#744F14",
        900: "#52350B",
      },
      background: "#FAF9FB",
    },
  },

  ocean: {
    name: "Ocean & Sunshine",
    description: "Bright and energetic with bold contrast",
    colors: {
      primary: {
        50: "#E5F3F9",
        100: "#CCE7F3",
        200: "#99CFE7",
        300: "#66B7DB",
        400: "#339FCF",
        500: "#0077B6",
        600: "#006399",
        700: "#004F7C",
        800: "#003B5F",
        900: "#002742",
      },
      secondary: {
        50: "#FFFAEB",
        100: "#FFF5D6",
        200: "#FFEBAD",
        300: "#FFE184",
        400: "#FFCC44",
        500: "#FFB703",
        600: "#D69A02",
        700: "#AD7D02",
        800: "#846001",
        900: "#5B4301",
      },
      background: "#F7FBFC",
    },
  },

  slate: {
    name: "Slate & Sky",
    description: "Modern minimalist with cool blue accents",
    colors: {
      primary: {
        50: "#F1F5F9",
        100: "#E2E8F0",
        200: "#CBD5E1",
        300: "#94A3B8",
        400: "#64748B",
        500: "#475569",
        600: "#3D4A5C",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
      secondary: {
        50: "#ECFBFF",
        100: "#D9F7FF",
        200: "#B3EFFF",
        300: "#7EE3FE",
        400: "#38BDF8",
        500: "#0EA5E9",
        600: "#0284C7",
        700: "#0369A1",
        800: "#075985",
        900: "#0C4A6E",
      },
      background: "#F8FAFC",
    },
  },
} as const;

//============================================================================
// THEME CONFIGURATION
//============================================================================

export const themeConfig = {
  /**
   * Active color preset
   * Choose from: "teal" | "navy" | "forest" | "plum" | "ocean" | "slate" | "custom"
   */
  colorPreset: "teal" as keyof typeof colorPresets | "custom",

  /**
   * Custom colors (only used when colorPreset is "custom")
   * Use a tool like https://coolors.co to generate your palette
   */
  customColors: {
    primary: {
      50: "#E6F7F7",
      100: "#CCF0EF",
      200: "#99E0DF",
      300: "#66D1CF",
      400: "#33C1BF",
      500: "#16938F",  // Main brand color
      600: "#0D7C7A",  // Hover state
      700: "#0A6664",  // Dark variant
      800: "#08504E",
      900: "#053A38",
    },
    secondary: {
      50: "#FFF5F3",
      100: "#FFEBE7",
      200: "#FFD7CF",
      300: "#FFB5A7",
      400: "#FF8B7B",  // Accent color
      500: "#FF6B5B",
      600: "#E54B3B",
      700: "#CC3B2B",
      800: "#B32B1B",
      900: "#991B0B",
    },
    background: "#F7FAFC",
  },

  /**
   * Typography settings
   */
  fonts: {
    /** Font for headings (h1, h2, h3, etc.) */
    heading: "Playfair Display",

    /** Font for body text */
    body: "Manrope",
  },

  /**
   * Border radius style
   * "rounded" - Soft, friendly curves (default)
   * "sharp" - More professional, minimal rounding
   * "pill" - Fully rounded buttons and elements
   */
  borderStyle: "rounded" as "rounded" | "sharp" | "pill",
};

//============================================================================
// HELPER FUNCTIONS
//============================================================================

/**
 * Get the active color palette based on configuration
 */
export function getActiveColors() {
  if (themeConfig.colorPreset === "custom") {
    return themeConfig.customColors;
  }
  return colorPresets[themeConfig.colorPreset].colors;
}

/**
 * Get preset info for display purposes
 */
export function getPresetInfo(presetKey: keyof typeof colorPresets) {
  return {
    key: presetKey,
    name: colorPresets[presetKey].name,
    description: colorPresets[presetKey].description,
    primaryColor: colorPresets[presetKey].colors.primary[500],
    secondaryColor: colorPresets[presetKey].colors.secondary[400],
  };
}

/**
 * Get all available presets for a color picker UI
 */
export function getAllPresets() {
  return Object.keys(colorPresets).map((key) =>
    getPresetInfo(key as keyof typeof colorPresets)
  );
}

// Type exports
export type ThemeConfig = typeof themeConfig;
export type ColorPreset = keyof typeof colorPresets;
