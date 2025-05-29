// src/styles/theme/index.ts
export { Colors } from './color';
export { Typography } from './typography';
export { Spacing } from './spacing';

// src/styles/components/common.ts
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '../theme';

export const CommonStyles = StyleSheet.create({
    // Containers
    container: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    },
    content: {
        flex: 1,
        padding: Spacing.xl,
    },
    safeArea: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    },

    // Headers
    header: {
        alignItems: 'center',
        marginBottom: Spacing['4xl'],
    },
    headerWithBackground: {
        backgroundColor: Colors.background.header,
        paddingHorizontal: Spacing.xl,
        paddingVertical: Spacing['2xl'],
        alignItems: 'center',
    },

    // Text Styles
    title: {
        fontSize: Typography.sizes['3xl'],
        fontWeight: Typography.weights.bold,
        color: Colors.text.primary,
        marginTop: Spacing.lg,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: Typography.sizes.base,
        color: Colors.text.secondary,
        textAlign: 'center',
        marginTop: Spacing.sm,
        lineHeight: Typography.lineHeights.normal,
    },
    sectionTitle: {
        fontSize: Typography.sizes.xl,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginBottom: Spacing.lg,
    },
    bodyText: {
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
    },
    captionText: {
        fontSize: Typography.sizes.sm,
        color: Colors.text.secondary,
    },

    // Cards & Containers
    card: {
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    welcomeCard: {
        backgroundColor: Colors.background.card,
        padding: Spacing['2xl'],
        borderRadius: Spacing.lg,
        alignItems: 'center',
        marginBottom: Spacing['3xl'],
        borderWidth: 1,
        borderColor: Colors.border,
    },

    // Buttons
    primaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.accent.primary,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        borderRadius: Spacing.md,
        marginTop: Spacing.xl,
    },
    primaryButtonText: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginRight: Spacing.sm,
    },

    secondaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.transparent,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        borderRadius: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
        marginTop: Spacing['3xl'],
    },
    secondaryButtonText: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
        color: Colors.text.secondary,
    },

    // Layout Helpers
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex1: {
        flex: 1,
    },

    // Specific Component Styles
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.background.card,
        padding: Spacing.lg,
        borderRadius: Spacing.md,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingText: {
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        marginLeft: Spacing.md,
        flex: 1,
    },

    // Grid Layouts
    themeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: Spacing['3xl'],
    },
    themeOption: {
        width: '48%',
        aspectRatio: 1,
        borderRadius: Spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.lg,
        position: 'relative',
    },
    selectedTheme: {
        borderWidth: 3,
        borderColor: Colors.accent.primary,
    },

    featuresGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: Spacing['3xl'],
    },
    featureCard: {
        width: '48%',
        backgroundColor: Colors.background.card,
        padding: Spacing.xl,
        borderRadius: Spacing.md,
        alignItems: 'center',
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
    },
});