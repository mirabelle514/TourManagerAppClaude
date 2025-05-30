import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from './theme/ThemeProvider';

export const NavigationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background.primary,
    },
    header: {
        backgroundColor: Theme.colors.background.secondary,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.border.light,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitle: {
        fontSize: Theme.typography.sizes.lg,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
    },
    tabBar: {
        backgroundColor: Theme.colors.background.secondary,
        borderTopWidth: 1,
        borderTopColor: Theme.colors.border.light,
        height: 60,
        paddingBottom: Theme.spacing.sm,
        paddingTop: Theme.spacing.sm,
    },
    tabBarLabel: {
        fontSize: Theme.typography.sizes.xs,
        fontWeight: Theme.typography.weights.medium,
    },
    tabBarIcon: {
        marginBottom: Theme.spacing.xs,
    },
});
