import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from './theme';

export const NavigationStyles = StyleSheet.create({
    tabBar: {
        backgroundColor: Colors.background.secondary,
        borderTopColor: Colors.border.light,
        borderTopWidth: 1,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Spacing.sm,
    },
    tabLabel: {
        fontSize: Typography.sizes.xs,
        marginTop: Spacing.xs,
    },
    activeTab: {
        color: Colors.primary,
    },
    inactiveTab: {
        color: Colors.text.secondary,
    },
});
