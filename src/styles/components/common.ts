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
    themeName: {
        fontSize: Typography.sizes.sm,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginTop: Spacing.sm,
        textAlign: 'center',
    },
    checkmark: {
        position: 'absolute',
        top: Spacing.sm,
        right: Spacing.sm,
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
    featureTitle: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginTop: Spacing.md,
        marginBottom: Spacing.xs,
    },
    featureDesc: {
        fontSize: Typography.sizes.xs,
        color: Colors.text.secondary,
        textAlign: 'center',
    },

    // Import/Option Styles
    importOption: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background.card,
        padding: Spacing.xl,
        borderRadius: Spacing.md,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    optionContent: {
        flex: 1,
        marginLeft: Spacing.lg,
        marginRight: Spacing.lg,
    },
    optionTitle: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginBottom: Spacing.xs,
    },
    optionDesc: {
        fontSize: Typography.sizes.sm,
        color: Colors.text.secondary,
        lineHeight: Typography.lineHeights.tight,
    },

    // Role/Team Styles
    roleCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: Colors.background.card,
        padding: Spacing.lg,
        borderRadius: Spacing.md,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    roleContent: {
        flex: 1,
        marginLeft: Spacing.md,
    },
    roleName: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginBottom: Spacing.xs,
    },
    roleDesc: {
        fontSize: Typography.sizes.sm,
        color: Colors.text.secondary,
        lineHeight: Typography.lineHeights.tight,
    },

    // Action Buttons (for MainAppScreen)
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background.card,
        padding: Spacing.lg,
        borderRadius: Spacing.md,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    actionText: {
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        flex: 1,
        marginLeft: Spacing.md,
    },

    // Welcome/Complete Styles
    welcomeTitle: {
        fontSize: Typography.sizes['2xl'],
        fontWeight: Typography.weights.bold,
        color: Colors.text.primary,
        marginTop: Spacing.lg,
        marginBottom: Spacing.md,
    },
    welcomeText: {
        fontSize: Typography.sizes.base,
        color: Colors.text.secondary,
        textAlign: 'center',
        lineHeight: Typography.lineHeights.relaxed,
    },

    // Skip/Invite Button Styles
    skipButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.transparent,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        borderRadius: Spacing.md,
        marginTop: Spacing['3xl'],
        borderWidth: 1,
        borderColor: Colors.border,
    },
    skipButtonText: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
        color: Colors.text.secondary,
    },

    inviteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.transparent,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        borderRadius: Spacing.md,
        marginTop: Spacing['3xl'],
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    inviteButtonText: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
        color: Colors.text.primary,
        marginLeft: Spacing.sm,
    },

    completeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.accent.primary,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        borderRadius: Spacing.md,
    },
    completeButtonText: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginRight: Spacing.sm,
    },

    // Permissions Card Styles
    permissionsCard: {
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        padding: Spacing.xl,
        marginBottom: Spacing['2xl'],
        borderWidth: 1,
        borderColor: Colors.border,
    },
    permissionsTitle: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginBottom: Spacing.lg,
    },
    permissionsList: {
        // Container for permission items
    },
    permissionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    permissionText: {
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        marginLeft: Spacing.md,
        flex: 1,
    },

    // Continue Button (different from primary button)
    continueButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.accent.primary,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        borderRadius: Spacing.md,
        marginTop: Spacing.xl,
    },
    continueButtonText: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginRight: Spacing.sm,
    },
    continueButtonDisabled: {
        backgroundColor: Colors.text.muted,
        opacity: 0.6,
    },

    // Info Card Styles
    infoCard: {
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
        borderLeftWidth: 4,
        borderLeftColor: Colors.accent.primary,
    },
    infoCardIcon: {
        alignSelf: 'flex-start',
        marginBottom: Spacing.sm,
    },
    infoCardTitle: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginBottom: Spacing.xs,
    },
    infoCardText: {
        fontSize: Typography.sizes.sm,
        color: Colors.text.secondary,
        lineHeight: Typography.lineHeights.tight,
    },
    infoCardContent: {
        flex: 1,
    },
});