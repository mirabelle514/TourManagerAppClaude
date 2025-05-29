
// Main styles export file
// This file provides easy access to all theme styles throughout the app

// Export the main theme
export { default as theme } from './theme';

// Export individual style collections
export { CommonStyles } from './CommonStyles';
export { DaySheetStyles } from './DaySheetStyles';
export { FormStyles } from './FormStyles';
export { MerchandiseStyles } from './MerchandiseStyles';
export { FinancialStyles } from './FinancialStyles';
export { GuestListStyles } from './GuestListStyles';
export { Colors } from './theme/color';

export { NavigationStyles } from './NavigationStyles';

// Export theme utilities
export {
    typography,
    spacing,
    borderRadius,
    shadows,
    variants,
    Spacing,
} from './theme';


// Legacy global styles (if you have existing global styles)
// export { default as globalStyles } from './globalStyles';

/*
USAGE EXAMPLES:

1. Import entire theme:
   import { theme } from '../styles';
   
2. Import specific style collections:
   import { commonStyles, cardStyles, colors } from '../styles';
   
3. Import individual components:
   import { common, cards, forms } from '../styles';
   
4. Import theme utilities:
   import { typography, spacing, colors } from '../styles';
   
5. Use in components:
   <View style={theme.styles.common.container}>
   <View style={commonStyles.header}>
   <Text style={[cardStyles.inventoryName, { color: colors.primary }]}>
*/
