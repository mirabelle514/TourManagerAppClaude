import { Colors } from './color';
import { Typography } from './typography';
import { Spacing } from './spacing';

// Create a type for our theme
export type ThemeType = {
    colors: typeof Colors;
    typography: typeof Typography;
    spacing: typeof Spacing;
};

// Initialize theme object
const theme: ThemeType = {
    colors: Colors,
    typography: Typography,
    spacing: Spacing,
};

// Export the theme object
export const Theme = theme;

// Export individual theme objects for direct access
export { Colors, Typography, Spacing };

// Re-export the ThemeProvider and useTheme hook
export { ThemeProvider, useTheme } from './ThemeProvider';
