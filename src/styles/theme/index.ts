import { Colors } from './color';
import { Typography } from './typography';
import { Spacing } from './spacing';

export interface Theme {
    colors: typeof Colors;
    typography: typeof Typography;
    spacing: typeof Spacing;
}

const theme: Theme = {
    colors: Colors,
    typography: Typography,
    spacing: Spacing,
};

export const useTheme = () => theme;

export { Colors, Typography, Spacing };
