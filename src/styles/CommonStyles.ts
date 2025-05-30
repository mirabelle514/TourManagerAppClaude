// src/styles/components/common.ts
import { StyleSheet, Dimensions, ViewStyle, TextStyle } from 'react-native';
import { Theme } from './theme/ThemeProvider';
import { Colors } from './theme/color';

const { width: screenWidth } = Dimensions.get('window');

export const CommonStyles = StyleSheet.create({
    // Containers
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background.primary,
    },
    content: {
        flex: 1,
        padding: Theme.spacing.xl,
    },
    safeArea: {
        flex: 1,
        backgroundColor: Theme.colors.background.primary,
    },

    // Headers
    header: {
        alignItems: 'center',
        marginBottom: Theme.spacing['4xl'],
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 16,
        backgroundColor: Theme.colors.background.primary,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.border.light,
    },
    headerWithBackground: {
        backgroundColor: Theme.colors.background.primary,
        paddingHorizontal: Theme.spacing.xl,
        paddingVertical: Theme.spacing['2xl'],
        alignItems: 'center',
    },

    // Text Styles
    title: {
        fontSize: Theme.typography.sizes['3xl'],
        fontWeight: Theme.typography.weights.bold,
        color: Theme.colors.text.primary,
        marginTop: Theme.spacing.lg,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.secondary,
        textAlign: 'center',
        marginTop: Theme.spacing.sm,
        lineHeight: Theme.typography.lineHeights.normal,
    },
    sectionTitle: {
        fontSize: Theme.typography.sizes.xl,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.lg,
    },
    bodyText: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.primary,
    },
    captionText: {
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
    },

    // Cards & Containers
    card: {
        backgroundColor: Theme.colors.background.secondary,
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Theme.colors.text.primary,
        marginBottom: 12,
    },
    welcomeCard: {
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing['2xl'],
        borderRadius: Theme.spacing.lg,
        alignItems: 'center',
        marginBottom: Theme.spacing['3xl'],
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },

    // Buttons
    primaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.accent.primary.main,
        paddingVertical: Theme.spacing.lg,
        paddingHorizontal: Theme.spacing['2xl'],
        borderRadius: Theme.spacing.md,
        marginTop: Theme.spacing.xl,
    },
    primaryButtonText: {
        fontSize: Theme.typography.sizes.lg,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginRight: Theme.spacing.sm,
    },

    // Disabled Button States
    disabledButton: {
        backgroundColor: Theme.colors.text.muted,
        opacity: 0.6,
    },
    disabledButtonText: {
        color: Theme.colors.text.secondary,
    },

    secondaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.transparent,
        paddingVertical: Theme.spacing.lg,
        paddingHorizontal: Theme.spacing['2xl'],
        borderRadius: Theme.spacing.md,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
        marginTop: Theme.spacing['3xl'],
    },
    secondaryButtonText: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
        color: Theme.colors.text.secondary,
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
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing.lg,
        borderRadius: Theme.spacing.md,
        marginBottom: Theme.spacing.md,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingText: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.primary,
        marginLeft: Theme.spacing.md,
        flex: 1,
    },

    // Grid Layouts
    themeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: Theme.spacing['3xl'],
    },
    themeOption: {
        width: '48%',
        aspectRatio: 1,
        borderRadius: Theme.spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Theme.spacing.lg,
        position: 'relative',
    },
    selectedTheme: {
        borderWidth: 3,
        borderColor: Theme.colors.accent.primary.main,
    },
    themeName: {
        fontSize: Theme.typography.sizes.sm,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginTop: Theme.spacing.sm,
        textAlign: 'center',
    },
    checkmark: {
        position: 'absolute',
        top: Theme.spacing.sm,
        right: Theme.spacing.sm,
    },

    featuresGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: Theme.spacing['3xl'],
    },
    featureCard: {
        width: '48%',
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing.xl,
        borderRadius: Theme.spacing.md,
        alignItems: 'center',
        marginBottom: Theme.spacing.lg,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },
    featureTitle: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginTop: Theme.spacing.md,
        marginBottom: Theme.spacing.xs,
    },
    featureDesc: {
        fontSize: Theme.typography.sizes.xs,
        color: Theme.colors.text.secondary,
        textAlign: 'center',
    },

    // Import/Option Styles
    importOption: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing.xl,
        borderRadius: Theme.spacing.md,
        marginBottom: Theme.spacing.lg,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },
    optionContent: {
        flex: 1,
        marginLeft: Theme.spacing.lg,
        marginRight: Theme.spacing.lg,
    },
    optionTitle: {
        fontSize: Theme.typography.sizes.lg,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.xs,
    },
    optionDesc: {
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
        lineHeight: Theme.typography.lineHeights.tight,
    },

    // Role/Team Styles
    roleCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing.lg,
        borderRadius: Theme.spacing.md,
        marginBottom: Theme.spacing.md,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },
    roleContent: {
        flex: 1,
        marginLeft: Theme.spacing.md,
    },
    roleName: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.xs,
    },
    roleDesc: {
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
        lineHeight: Theme.typography.lineHeights.tight,
    },

    // Action Buttons (for MainAppScreen)
    quickActions: {
        marginBottom: Theme.spacing.xl,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing.lg,
        borderRadius: Theme.spacing.md,
        marginBottom: Theme.spacing.md,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },
    actionText: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.primary,
        flex: 1,
        marginLeft: Theme.spacing.md,
    },

    // Welcome/Complete Styles
    welcomeTitle: {
        fontSize: Theme.typography.sizes['2xl'],
        fontWeight: Theme.typography.weights.bold,
        color: Theme.colors.text.primary,
        marginTop: Theme.spacing.lg,
        marginBottom: Theme.spacing.md,
    },
    welcomeText: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.secondary,
        textAlign: 'center',
        lineHeight: Theme.typography.lineHeights.relaxed,
    },

    // Skip/Invite Button Styles
    skipButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.background.secondary,
        paddingVertical: Theme.spacing.lg,
        paddingHorizontal: Theme.spacing['2xl'],
        borderRadius: Theme.spacing.md,
        marginTop: Theme.spacing['3xl'],
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },
    skipButtonText: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
        color: Theme.colors.text.secondary,
    },

    inviteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.background.secondary,
        paddingVertical: Theme.spacing.lg,
        paddingHorizontal: Theme.spacing['2xl'],
        borderRadius: Theme.spacing.md,
        marginTop: Theme.spacing['3xl'],
        marginBottom: Theme.spacing.lg,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },
    inviteButtonText: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
        color: Theme.colors.text.primary,
        marginLeft: Theme.spacing.sm,
    },

    completeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.accent.primary.main,
        paddingVertical: Theme.spacing.lg,
        paddingHorizontal: Theme.spacing['2xl'],
        borderRadius: Theme.spacing.md,
    },
    completeButtonText: {
        fontSize: Theme.typography.sizes.lg,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginRight: Theme.spacing.sm,
    },

    // Permissions Card Styles
    permissionsCard: {
        backgroundColor: Theme.colors.background.secondary,
        borderRadius: Theme.spacing.md,
        padding: Theme.spacing.xl,
        marginBottom: Theme.spacing['2xl'],
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    },
    permissionsTitle: {
        fontSize: Theme.typography.sizes.lg,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.lg,
    },
    permissionsList: {
        // Container for permission items
    },
    permissionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Theme.spacing.md,
    },
    permissionText: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.primary,
        marginLeft: Theme.spacing.md,
        flex: 1,
    },

    // Continue Button (different from primary button)
    continueButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.accent.primary.main,
        paddingVertical: Theme.spacing.lg,
        paddingHorizontal: Theme.spacing['2xl'],
        borderRadius: Theme.spacing.md,
        marginTop: Theme.spacing.xl,
    },
    continueButtonText: {
        fontSize: Theme.typography.sizes.lg,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginRight: Theme.spacing.sm,
    },
    continueButtonDisabled: {
        backgroundColor: Theme.colors.text.muted,
        opacity: 0.6,
    },

    // Info Card Styles
    infoCard: {
        backgroundColor: Theme.colors.background.secondary,
        borderRadius: Theme.spacing.md,
        padding: Theme.spacing.lg,
        marginBottom: Theme.spacing.lg,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
        borderLeftWidth: 4,
        borderLeftColor: Theme.colors.accent.primary.main,
    },
    infoCardIcon: {
        alignSelf: 'flex-start',
        marginBottom: Theme.spacing.sm,
    },
    infoCardTitle: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.xs,
    },
    infoCardText: {
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
        lineHeight: Theme.typography.lineHeights.tight,
    },
    infoCardContent: {
        flex: 1,
    },

    // Login Screen Styles
    loginContainer: {
        flex: 1,
        backgroundColor: Theme.colors.background.primary, // #1a1a2e
    },
    loginContent: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: Theme.spacing['2xl'],
    },
    loginTitle: {
        fontSize: Theme.typography.sizes['4xl'], // 32
        fontWeight: Theme.typography.weights.bold,
        color: Theme.colors.text.primary,
        textAlign: 'center',
        marginBottom: Theme.spacing.sm,
    },
    loginSubtitle: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.secondary,
        textAlign: 'center',
        marginBottom: Theme.spacing['4xl'], // 32
    },
    loginInputContainer: {
        marginBottom: Theme.spacing['2xl'],
    },
    loginInput: {
        backgroundColor: '#16213e', // Keeping original dark blue
        borderRadius: Theme.spacing.sm,
        padding: Theme.spacing.lg,
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.lg,
        borderWidth: 1,
        borderColor: '#0f3460', // Keeping original border color
    },
    loginButton: {
        backgroundColor: '#007AFF', // iOS blue - keeping original
        borderRadius: Theme.spacing.sm,
        padding: Theme.spacing.lg,
        alignItems: 'center',
        marginBottom: Theme.spacing.lg,
    },
    loginButtonDisabled: {
        backgroundColor: '#555555',
    },
    loginButtonText: {
        color: Theme.colors.text.primary,
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
    },
    forgotPasswordButton: {
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#007AFF', // Matching login button color
        fontSize: Theme.typography.sizes.sm,
    },
    devHelper: {
        marginTop: Theme.spacing['4xl'],
        padding: Theme.spacing.md,
        backgroundColor: Theme.colors.background.secondary,
        borderRadius: Theme.spacing.sm,
    },
    devHelperText: {
        color: Theme.colors.text.secondary,
        fontSize: Theme.typography.sizes.xs,
        textAlign: 'center',
    },

    // Biometric Setup Screen Styles
    biometricContainer: {
        flex: 1,
        backgroundColor: Theme.colors.background.primary, // #1a1a2e
    },
    biometricContent: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: Theme.spacing['2xl'],
    },
    biometricTitle: {
        fontSize: Theme.typography.sizes['3xl'], // 28
        fontWeight: Theme.typography.weights.bold,
        color: Theme.colors.text.primary,
        textAlign: 'center',
        marginBottom: Theme.spacing.sm,
    },
    biometricSubtitle: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.secondary,
        textAlign: 'center',
        marginBottom: Theme.spacing['5xl'], // 48
        lineHeight: Theme.typography.lineHeights.normal,
    },
    enableButton: {
        backgroundColor: '#007AFF', // iOS blue - keeping original
        borderRadius: Theme.spacing.sm,
        padding: Theme.spacing.lg,
        alignItems: 'center',
        marginBottom: Theme.spacing.lg,
    },
    enableButtonText: {
        color: Theme.colors.text.primary,
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
    },

    // Container Styles
    scrollView: {
        flex: 1,
        backgroundColor: Theme.colors.background.primary,
    },

    // Loading Styles
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.background.primary,
    },

    loadingText: {
        fontSize: 16,
        color: Theme.colors.text.secondary,
        marginTop: 12,
    },

    // Header Styles
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Theme.colors.text.primary,
        marginBottom: 4,
    },

    headerDate: {
        fontSize: 16,
        color: Theme.colors.text.secondary,
    },

    headerSubtitle: {
        fontSize: 14,
        color: Theme.colors.text.secondary,
        marginTop: 2,
    },

    // Card Styles
    cardSubtitle: {
        fontSize: 14,
        color: Theme.colors.text.secondary,
        marginBottom: 8,
    },

    // Schedule Styles
    scheduleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 4,
    },

    scheduleText: {
        fontSize: 16,
        color: Theme.colors.text.primary,
        marginLeft: 12,
        fontWeight: '500',
    },

    // Technical Details
    techDetail: {
        marginBottom: 12,
    },

    techLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Theme.colors.text.secondary,
        marginBottom: 4,
    },

    techValue: {
        fontSize: 16,
        color: Theme.colors.text.primary,
    },

    // Settlement Styles
    settlementInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    settlementLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Theme.colors.text.secondary,
    },

    settlementValue: {
        fontSize: 16,
        color: Theme.colors.text.primary,
        fontWeight: '500',
    },

    // Travel Info Styles
    travelInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    travelLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Theme.colors.text.secondary,
    },

    travelValue: {
        fontSize: 16,
        color: Theme.colors.text.primary,
        fontWeight: '500',
    },

    // Emergency Button
    emergencyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.status.error,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 16,
    },

    emergencyButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: Theme.colors.text.inverse,
        marginLeft: 8,
    },

    // Inventory Card Styles
    inventoryCard: {
        backgroundColor: Theme.colors.background.primary,
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },

    inventoryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },

    inventoryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    categoryIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    inventoryDetails: {
        flex: 1,
    },

    inventoryName: {
        fontSize: 16,
        fontWeight: '600',
        color: Theme.colors.text.primary,
        marginBottom: 2,
    },

    inventoryCategory: {
        fontSize: 12,
        color: Theme.colors.text.secondary,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    inventorySizes: {
        fontSize: 12,
        color: Theme.colors.text.tertiary,
        marginTop: 2,
    },

    inventoryStats: {
        alignItems: 'flex-end',
    },

    inventoryPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Theme.colors.primary,
        marginBottom: 4,
    },

    inventoryStock: {
        fontSize: 14,
        fontWeight: '600',
    },

    lowStockBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.status.error + '15',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 12,
    },

    lowStockText: {
        fontSize: 12,
        color: Theme.colors.status.error,
        marginLeft: 6,
        fontWeight: '500',
    },

    inventoryMetrics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: Theme.colors.border.light,
    },

    metric: {
        alignItems: 'center',
        flex: 1,
    },

    metricLabel: {
        fontSize: 12,
        color: Theme.colors.text.secondary,
        marginBottom: 4,
    },

    metricValue: {
        fontSize: 14,
        fontWeight: '600',
        color: Theme.colors.text.primary,
    },

    // Sales Tracker
    salesTrackerCard: {
        backgroundColor: Theme.colors.background.primary,
        borderRadius: 12,
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    salesTrackerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Theme.colors.text.primary,
        marginBottom: 16,
        textAlign: 'center',
    },

    chart: {
        marginVertical: 8,
        borderRadius: 16,
    },

    // Reorder Alert
    reorderAlertCard: {
        backgroundColor: Theme.colors.status.error + '10',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderLeftWidth: 4,
        borderLeftColor: Theme.colors.status.error,
    },

    reorderHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },

    reorderTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Theme.colors.status.error,
        marginLeft: 8,
    },

    reorderDescription: {
        fontSize: 14,
        color: Theme.colors.text.secondary,
        marginBottom: 12,
    },

    reorderList: {
        marginHorizontal: -8,
    },

    reorderItem: {
        backgroundColor: Theme.colors.background.primary,
        borderRadius: 8,
        padding: 12,
        marginHorizontal: 8,
        minWidth: 120,
        alignItems: 'center',
    },

    reorderItemName: {
        fontSize: 12,
        fontWeight: '600',
        color: Theme.colors.text.primary,
        textAlign: 'center',
        marginBottom: 4,
    },

    reorderItemStock: {
        fontSize: 14,
        color: Theme.colors.status.error,
        fontWeight: 'bold',
        marginBottom: 2,
    },

    reorderSuggestion: {
        fontSize: 10,
        color: Theme.colors.text.secondary,
        textAlign: 'center',
    },

    // Venue Performance
    venuePerformanceCard: {
        backgroundColor: Theme.colors.background.primary,
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },

    venueHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },

    venueName: {
        fontSize: 16,
        fontWeight: '600',
        color: Theme.colors.text.primary,
    },

    venueDate: {
        fontSize: 12,
        color: Theme.colors.text.secondary,
    },

    venueStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    venueStat: {
        alignItems: 'center',
        flex: 1,
    },

    venueStatValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Theme.colors.text.primary,
        marginBottom: 4,
    },

    venueStatLabel: {
        fontSize: 10,
        color: Theme.colors.text.secondary,
        textAlign: 'center',
    },

    topItemsTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Theme.colors.text.primary,
        marginBottom: 8,
    },

    topItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.border.light,
    },

    topItemName: {
        fontSize: 14,
        color: Theme.colors.text.primary,
        flex: 1,
    },

    topItemStats: {
        alignItems: 'flex-end',
    },

    topItemQuantity: {
        fontSize: 12,
        color: Theme.colors.text.secondary,
    },

    topItemRevenue: {
        fontSize: 14,
        fontWeight: '600',
        color: Theme.colors.primary,
    },

    // Venue Card Specific Styles
    headerContent: {
        flex: 1,
        alignItems: 'center',
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Theme.spacing.xs,
    },
    address: {
        fontSize: Theme.typography.sizes.sm,
        marginLeft: Theme.spacing.xs,
    },
    distance: {
        fontSize: Theme.typography.sizes.sm,
        marginTop: Theme.spacing.xs,
    },
    section: {
        padding: Theme.spacing.lg,
        marginBottom: Theme.spacing.md,
    },
    capacityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Theme.spacing.sm,
    },
    capacityStats: {
        alignItems: 'flex-end',
    },
    capacityText: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
    },
    percentageText: {
        fontSize: Theme.typography.sizes.sm,
        fontWeight: Theme.typography.weights.semibold,
    },
    venuePercentage: {
        fontSize: Theme.typography.sizes.sm,
    },
    scheduleTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Theme.spacing.md,
    },
    timeText: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
    },
    countdown: {
        fontSize: Theme.typography.sizes.sm,
        marginLeft: Theme.spacing.sm,
    },
    scheduleLabel: {
        fontSize: Theme.typography.sizes.base,
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Theme.spacing.sm,
    },
    contactName: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
    },
    phoneButton: {
        padding: Theme.spacing.xs,
    },
    phoneText: {
        fontSize: Theme.typography.sizes.base,
    },
    emailText: {
        fontSize: Theme.typography.sizes.sm,
    },
    techItem: {
        fontSize: Theme.typography.sizes.base,
        marginBottom: Theme.spacing.sm,
    },
    wifiInfo: {
        marginBottom: Theme.spacing.sm,
    },
    wifiPassword: {
        fontSize: Theme.typography.sizes.sm,
        marginLeft: Theme.spacing.md,
    },
    settlementRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Theme.spacing.sm,
    },
    settlementButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Theme.spacing.md,
        borderRadius: Theme.spacing.sm,
        marginTop: Theme.spacing.md,
    },
    settlementButtonText: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
    },
    logisticsItem: {
        fontSize: Theme.typography.sizes.base,
        marginBottom: Theme.spacing.sm,
    },
    hospitalityItem: {
        fontSize: Theme.typography.sizes.base,
        marginBottom: Theme.spacing.sm,
    },
    travelItem: {
        fontSize: Theme.typography.sizes.base,
        marginBottom: Theme.spacing.xs,
    },
    notesButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Theme.spacing.md,
        borderRadius: Theme.spacing.sm,
        marginTop: Theme.spacing.md,
        borderWidth: 1,
    },
    notesButtonText: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
        marginLeft: Theme.spacing.sm,
    },

    // Header styles
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    } as ViewStyle,

    headerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,

    headerRight: {
        width: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    } as ViewStyle,

    // Step indicator styles
    stepCounter: {
        fontSize: 14,
        fontWeight: '500',
        color: Theme.colors.text.secondary,
        marginBottom: 4,
    } as TextStyle,

    stepTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Theme.colors.text.primary,
        textAlign: 'center',
    } as TextStyle,

    // Progress bar styles
    progressContainer: {
        marginVertical: 16,
    } as ViewStyle,

    progressTrack: {
        height: 4,
        backgroundColor: Theme.colors.background.tertiary,
        borderRadius: 2,
        overflow: 'hidden',
    } as ViewStyle,

    progressFill: {
        height: '100%',
        backgroundColor: Theme.colors.primary,
        borderRadius: 2,
    } as ViewStyle,

    progressText: {
        fontSize: 12,
        color: Theme.colors.text.secondary,
        marginTop: 4,
        textAlign: 'right',
    } as TextStyle,

    // Footer styles
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: Theme.colors.border.light,
        backgroundColor: Theme.colors.background.primary,
    } as ViewStyle,

    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    } as ViewStyle,

    navButton: {
        flex: 1,
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    } as ViewStyle,

    navButtonText: {
        fontSize: 16,
        fontWeight: '600',
    } as TextStyle,

    // Button styles
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 16,
    } as ViewStyle,

    small: {
        height: 32,
        paddingHorizontal: 12,
    } as ViewStyle,

    medium: {
        height: 40,
        paddingHorizontal: 16,
    } as ViewStyle,

    large: {
        height: 48,
        paddingHorizontal: 24,
    } as ViewStyle,

    text: {
        fontWeight: '600',
        textAlign: 'center',
    } as TextStyle,

    smallText: {
        fontSize: 12,
    } as TextStyle,

    mediumText: {
        fontSize: 14,
    } as TextStyle,

    largeText: {
        fontSize: 16,
    } as TextStyle,

    disabled: {
        backgroundColor: Theme.colors.background.tertiary,
        borderColor: Theme.colors.border.light,
    } as ViewStyle,

    // Card variant styles
    elevated: {
        shadowColor: Theme.colors.text.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    } as ViewStyle,

    outlined: {
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    } as ViewStyle,

    flat: {
        backgroundColor: Theme.colors.background.secondary,
    } as ViewStyle,

    // Empty state styles
    image: {
        width: 200,
        height: 200,
        marginBottom: 24,
    } as ViewStyle,

    iconContainer: {
        marginBottom: 16,
    } as ViewStyle,

    message: {
        fontSize: 14,
        color: Theme.colors.text.secondary,
        textAlign: 'center',
        lineHeight: 20,
    } as TextStyle,

    // Icon and button text styles
    icon: {
        marginBottom: 4,
    } as ViewStyle,

    buttonText: {
        color: Theme.colors.text.inverse,
        fontSize: 16,
        fontWeight: '500',
    } as TextStyle,

    // Header container styles
    placeholder: {
        width: 40,
    } as ViewStyle,

    iconButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,

    rightContainer: {
        width: 40,
        alignItems: 'flex-end',
    } as ViewStyle,

    leftContainer: {
        width: 40,
        alignItems: 'flex-start',
    } as ViewStyle,

    // Input styles
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
        borderRadius: 8,
        backgroundColor: Theme.colors.background.primary,
    } as ViewStyle,

    errorContainer: {
        borderColor: Theme.colors.border.error,
    } as ViewStyle,

    focusedContainer: {
        borderColor: Theme.colors.border.focus,
    } as ViewStyle,

    label: {
        fontSize: 14,
        fontWeight: '500',
        color: Theme.colors.text.primary,
        marginBottom: 8,
    } as TextStyle,

    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 12,
        fontSize: 14,
        color: Theme.colors.text.primary,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
    } as TextStyle,

    inputWithLeftIcon: {
        paddingLeft: 8,
    } as TextStyle,

    inputWithRightIcon: {
        paddingRight: 8,
    } as TextStyle,

    error: {
        fontSize: 12,
        color: Theme.colors.text.error,
        marginTop: 4,
    } as TextStyle,

    // Modal styles
    modal: {
        backgroundColor: Theme.colors.background.primary,
        borderRadius: 12,
    } as ViewStyle,

    centerModal: {
        width: '90%',
        maxWidth: 400,
    } as ViewStyle,

    bottomModal: {
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        position: 'absolute',
        bottom: 0,
    } as ViewStyle,

    fullscreenModal: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 0,
    } as ViewStyle,

    overlay: {
        flex: 1,
        backgroundColor: Theme.colors.background.overlay,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,

    // Navigation item styles
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
    } as ViewStyle,

    closeButton: {
        position: 'absolute',
        right: 16,
        top: 12,
        padding: 4,
    } as ViewStyle,

    // Status indicator styles
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 8,
    } as ViewStyle,

    // Form styles
    form: {
        marginTop: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
        marginTop: 16,
    },
    saveButton: {
        backgroundColor: Theme.colors.status.success,
    },
    cancelButton: {
        backgroundColor: Theme.colors.status.error,
    },
    addButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: Theme.colors.background.primary,
    },
    exportButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: Theme.colors.background.primary,
    },

    // Category badge styles
    categoryBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    categoryText: {
        fontSize: 12,
        fontWeight: '500',
    },

    // Search and Filter Styles
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 8,
    },
    searchInput: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
        padding: 12,
        color: Colors.text.primary,
    },
    filterButton: {
        padding: 12,
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
    },
    categoryFilter: {
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    categoryButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Colors.background.secondary,
        borderRadius: 20,
        marginRight: 8,
    },
    selectedCategoryButton: {
        backgroundColor: Colors.accent.primary.main,
    },
    categoryButtonText: {
        color: Colors.text.primary,
        fontSize: 14,
        fontWeight: '500',
    },
    selectedCategoryButtonText: {
        color: Colors.text.inverse,
    },

    // Contact Card Styles
    contactCard: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 12,
    },
    contactHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    contactName: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
    },
    contactRole: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 8,
    },
    contactDetail: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 4,
    },
    emergencyBadge: {
        backgroundColor: Colors.error.main,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    emergencyBadgeText: {
        color: Colors.text.inverse,
        fontSize: 12,
        fontWeight: '500',
    },

    // Modal Styles
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.background.overlay,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: Colors.background.primary,
        borderRadius: 12,
        padding: 24,
        width: '90%',
        maxWidth: 400,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 16,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
        marginTop: 16,
    },
    input: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        color: Colors.text.primary,
    },

    // Button Container
    buttonContainer: {
        padding: 16,
        gap: 12,
    },
});