import React, { createContext, useContext } from 'react';
import { Colors } from './color';
import { Typography } from './typography';
import { Spacing } from './spacing';

// Create theme object
const Theme = {
    colors: Colors,
    typography: Typography,
    spacing: Spacing,
};

// Create a context with the theme object
const ThemeContext = createContext(Theme);

// Export the theme object directly for use in style files
export { Theme };

// Hook for accessing theme in components
export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
};

// Provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeContext.Provider value={Theme}>
            {children}
        </ThemeContext.Provider>
    );
}; 