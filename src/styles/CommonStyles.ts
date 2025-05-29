// src/styles/components/common.ts
import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Typography, Spacing } from './theme';

const { width: screenWidth } = Dimensions.get('window');

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
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 16,
        backgroundColor: Colors.background.primary,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },
    headerWithBackground: {
        backgroundColor: Colors.background.primary,
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
        backgroundColor: Colors.background.primary,
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
    welcomeCard: {
        backgroundColor: Colors.background.secondary,
        padding: Spacing['2xl'],
        borderRadius: Spacing.lg,
        alignItems: 'center',
        marginBottom: Spacing['3xl'],
        borderWidth: 1,
        borderColor: Colors.border.light,
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

    // Disabled Button States
    disabledButton: {
        backgroundColor: Colors.text.muted,
        opacity: 0.6,
    },
    disabledButtonText: {
        color: Colors.text.secondary,
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
        borderColor: Colors.border.light,
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
        backgroundColor: Colors.background.secondary,
        padding: Spacing.lg,
        borderRadius: Spacing.md,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border.light,
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
        backgroundColor: Colors.background.secondary,
        padding: Spacing.xl,
        borderRadius: Spacing.md,
        alignItems: 'center',
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border.light,
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
        backgroundColor: Colors.background.secondary,
        padding: Spacing.xl,
        borderRadius: Spacing.md,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border.light,
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
        backgroundColor: Colors.background.secondary,
        padding: Spacing.lg,
        borderRadius: Spacing.md,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border.light,
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
    quickActions: {
        marginBottom: Spacing.xl,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background.secondary,
        padding: Spacing.lg,
        borderRadius: Spacing.md,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border.light,
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
        backgroundColor: Colors.background.secondary,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        borderRadius: Spacing.md,
        marginTop: Spacing['3xl'],
        borderWidth: 1,
        borderColor: Colors.border.light,
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
        backgroundColor: Colors.background.secondary,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        borderRadius: Spacing.md,
        marginTop: Spacing['3xl'],
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border.light,
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
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        padding: Spacing.xl,
        marginBottom: Spacing['2xl'],
        borderWidth: 1,
        borderColor: Colors.border.light,
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
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border.light,
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

    // Login Screen Styles
    loginContainer: {
        flex: 1,
        backgroundColor: Colors.background.primary, // #1a1a2e
    },
    loginContent: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: Spacing['2xl'],
    },
    loginTitle: {
        fontSize: Typography.sizes['4xl'], // 32
        fontWeight: Typography.weights.bold,
        color: Colors.text.primary,
        textAlign: 'center',
        marginBottom: Spacing.sm,
    },
    loginSubtitle: {
        fontSize: Typography.sizes.base,
        color: Colors.text.secondary,
        textAlign: 'center',
        marginBottom: Spacing['4xl'], // 32
    },
    loginInputContainer: {
        marginBottom: Spacing['2xl'],
    },
    loginInput: {
        backgroundColor: '#16213e', // Keeping original dark blue
        borderRadius: Spacing.sm,
        padding: Spacing.lg,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: '#0f3460', // Keeping original border color
    },
    loginButton: {
        backgroundColor: '#007AFF', // iOS blue - keeping original
        borderRadius: Spacing.sm,
        padding: Spacing.lg,
        alignItems: 'center',
        marginBottom: Spacing.lg,
    },
    loginButtonDisabled: {
        backgroundColor: '#555555',
    },
    loginButtonText: {
        color: Colors.text.primary,
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.semibold,
    },
    forgotPasswordButton: {
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#007AFF', // Matching login button color
        fontSize: Typography.sizes.sm,
    },
    devHelper: {
        marginTop: Spacing['4xl'],
        padding: Spacing.md,
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.sm,
    },
    devHelperText: {
        color: Colors.text.secondary,
        fontSize: Typography.sizes.xs,
        textAlign: 'center',
    },

    // Biometric Setup Screen Styles
    biometricContainer: {
        flex: 1,
        backgroundColor: Colors.background.primary, // #1a1a2e
    },
    biometricContent: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: Spacing['2xl'],
    },
    biometricTitle: {
        fontSize: Typography.sizes['3xl'], // 28
        fontWeight: Typography.weights.bold,
        color: Colors.text.primary,
        textAlign: 'center',
        marginBottom: Spacing.sm,
    },
    biometricSubtitle: {
        fontSize: Typography.sizes.base,
        color: Colors.text.secondary,
        textAlign: 'center',
        marginBottom: Spacing['5xl'], // 48
        lineHeight: Typography.lineHeights.normal,
    },
    enableButton: {
        backgroundColor: '#007AFF', // iOS blue - keeping original
        borderRadius: Spacing.sm,
        padding: Spacing.lg,
        alignItems: 'center',
        marginBottom: Spacing.lg,
    },
    enableButtonText: {
        color: Colors.text.primary,
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.semibold,
    },

    // Container Styles
    scrollView: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    },

    // Loading Styles
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background.primary,
    },

    loadingText: {
        fontSize: 16,
        color: Colors.text.secondary,
        marginTop: 12,
    },

    // Header Styles

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.text.primary,
        marginBottom: 4,
    },

    headerDate: {
        fontSize: 16,
        color: Colors.text.secondary,
    },

    headerSubtitle: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginTop: 2,
    },

    // Card Styles
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 12,
    },

    cardSubtitle: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 8,
    },

    // Schedule Styles
    scheduleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 4,
    },

    scheduleIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },

    scheduleText: {
        fontSize: 16,
        fontWeight: '500',
    },

    scheduleDescription: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginTop: 2,
    },

    // Technical Details
    techDetail: {
        marginBottom: 12,
    },

    techLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text.secondary,
        marginBottom: 4,
    },

    techValue: {
        fontSize: 16,
        color: Colors.text.primary,
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
        color: Colors.text.secondary,
    },

    settlementValue: {
        fontSize: 16,
        color: Colors.text.primary,
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
        color: Colors.text.secondary,
    },

    travelValue: {
        fontSize: 16,
        color: Colors.text.primary,
        fontWeight: '500',
    },

    // Emergency Button
    emergencyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.status.error,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 16,
    },

    emergencyButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.inverse,
        marginLeft: 8,
    },

    // Inventory Card Styles
    inventoryCard: {
        backgroundColor: Colors.background.primary,
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
        color: Colors.text.primary,
        marginBottom: 2,
    },

    inventoryCategory: {
        fontSize: 12,
        color: Colors.text.secondary,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    inventorySizes: {
        fontSize: 12,
        color: Colors.text.tertiary,
        marginTop: 2,
    },

    inventoryStats: {
        alignItems: 'flex-end',
    },

    inventoryPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 4,
    },

    inventoryStock: {
        fontSize: 14,
        fontWeight: '600',
    },

    lowStockBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.status.error + '15',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 12,
    },

    lowStockText: {
        fontSize: 12,
        color: Colors.status.error,
        marginLeft: 6,
        fontWeight: '500',
    },

    inventoryMetrics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
    },

    metric: {
        alignItems: 'center',
        flex: 1,
    },

    metricLabel: {
        fontSize: 12,
        color: Colors.text.secondary,
        marginBottom: 4,
    },

    metricValue: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text.primary,
    },

    // Sales Tracker
    salesTrackerCard: {
        backgroundColor: Colors.background.primary,
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
        color: Colors.text.primary,
        marginBottom: 16,
        textAlign: 'center',
    },

    chart: {
        marginVertical: 8,
        borderRadius: 16,
    },

    // Reorder Alert
    reorderAlertCard: {
        backgroundColor: Colors.status.error + '10',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderLeftWidth: 4,
        borderLeftColor: Colors.status.error,
    },

    reorderHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },

    reorderTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.status.error,
        marginLeft: 8,
    },

    reorderDescription: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 12,
    },

    reorderList: {
        marginHorizontal: -8,
    },

    reorderItem: {
        backgroundColor: Colors.background.primary,
        borderRadius: 8,
        padding: 12,
        marginHorizontal: 8,
        minWidth: 120,
        alignItems: 'center',
    },

    reorderItemName: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.text.primary,
        textAlign: 'center',
        marginBottom: 4,
    },

    reorderItemStock: {
        fontSize: 14,
        color: Colors.status.error,
        fontWeight: 'bold',
        marginBottom: 2,
    },

    reorderSuggestion: {
        fontSize: 10,
        color: Colors.text.secondary,
        textAlign: 'center',
    },

    // Venue Performance
    venuePerformanceCard: {
        backgroundColor: Colors.background.primary,
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
        color: Colors.text.primary,
    },

    venueDate: {
        fontSize: 12,
        color: Colors.text.secondary,
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
        color: Colors.text.primary,
        marginBottom: 4,
    },

    venueStatLabel: {
        fontSize: 10,
        color: Colors.text.secondary,
        textAlign: 'center',
    },

    topItemsTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 8,
    },

    topItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    topItemName: {
        fontSize: 14,
        color: Colors.text.primary,
        flex: 1,
    },

    topItemStats: {
        alignItems: 'flex-end',
    },

    topItemQuantity: {
        fontSize: 12,
        color: Colors.text.secondary,
    },

    topItemRevenue: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.primary,
    },

    // Venue Card Specific Styles
    headerContent: {
        flex: 1,
        alignItems: 'center',
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Spacing.xs,
    },
    address: {
        fontSize: Typography.sizes.sm,
        marginLeft: Spacing.xs,
    },
    distance: {
        fontSize: Typography.sizes.sm,
        marginTop: Spacing.xs,
    },
    section: {
        padding: Spacing.lg,
        marginBottom: Spacing.md,
    },
    capacityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    capacityStats: {
        alignItems: 'flex-end',
    },
    capacityText: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.semibold,
    },
    percentageText: {
        fontSize: Typography.sizes.sm,
        fontWeight: Typography.weights.semibold,
    },
    venuePercentage: {
        fontSize: Typography.sizes.sm,
    },
    scheduleTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Spacing.md,
    },
    timeText: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
    },
    countdown: {
        fontSize: Typography.sizes.sm,
        marginLeft: Spacing.sm,
    },
    scheduleLabel: {
        fontSize: Typography.sizes.base,
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    contactName: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
    },
    phoneButton: {
        padding: Spacing.xs,
    },
    phoneText: {
        fontSize: Typography.sizes.base,
    },
    emailText: {
        fontSize: Typography.sizes.sm,
    },
    techItem: {
        fontSize: Typography.sizes.base,
        marginBottom: Spacing.sm,
    },
    wifiInfo: {
        marginBottom: Spacing.sm,
    },
    wifiPassword: {
        fontSize: Typography.sizes.sm,
        marginLeft: Spacing.md,
    },
    settlementRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    settlementButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.md,
        borderRadius: Spacing.sm,
        marginTop: Spacing.md,
    },
    settlementButtonText: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
    },
    logisticsItem: {
        fontSize: Typography.sizes.base,
        marginBottom: Spacing.sm,
    },
    hospitalityItem: {
        fontSize: Typography.sizes.base,
        marginBottom: Spacing.sm,
    },
    travelItem: {
        fontSize: Typography.sizes.base,
        marginBottom: Spacing.xs,
    },
    notesButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.md,
        borderRadius: Spacing.sm,
        marginTop: Spacing.md,
        borderWidth: 1,
    },
    notesButtonText: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
        marginLeft: Spacing.sm,
    },
});