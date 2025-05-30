// src/styles/components/common.ts
import { StyleSheet, Dimensions, ViewStyle, TextStyle } from 'react-native';
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
        backgroundColor: Colors.background.secondary,
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
        color: Colors.text.primary,
        marginBottom: 12,
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

    scheduleText: {
        fontSize: 16,
        color: Colors.text.primary,
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
        color: Colors.text.secondary,
        marginBottom: 4,
    } as TextStyle,

    stepTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        textAlign: 'center',
    } as TextStyle,

    // Progress bar styles
    progressContainer: {
        marginVertical: 16,
    } as ViewStyle,

    progressTrack: {
        height: 4,
        backgroundColor: Colors.background.tertiary,
        borderRadius: 2,
        overflow: 'hidden',
    } as ViewStyle,

    progressFill: {
        height: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 2,
    } as ViewStyle,

    progressText: {
        fontSize: 12,
        color: Colors.text.secondary,
        marginTop: 4,
        textAlign: 'right',
    } as TextStyle,

    // Footer styles
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
        backgroundColor: Colors.background.primary,
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
        backgroundColor: Colors.background.tertiary,
        borderColor: Colors.border.light,
    } as ViewStyle,

    // Card variant styles
    elevated: {
        shadowColor: Colors.text.primary,
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
        borderColor: Colors.border.light,
    } as ViewStyle,

    flat: {
        backgroundColor: Colors.background.secondary,
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
        color: Colors.text.secondary,
        textAlign: 'center',
        lineHeight: 20,
    } as TextStyle,

    // Icon and button text styles
    icon: {
        marginBottom: 4,
    } as ViewStyle,

    buttonText: {
        color: Colors.text.inverse,
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
        borderColor: Colors.border.light,
        borderRadius: 8,
        backgroundColor: Colors.background.primary,
    } as ViewStyle,

    errorContainer: {
        borderColor: Colors.border.error,
    } as ViewStyle,

    focusedContainer: {
        borderColor: Colors.border.focus,
    } as ViewStyle,

    label: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.text.primary,
        marginBottom: 8,
    } as TextStyle,

    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 12,
        fontSize: 14,
        color: Colors.text.primary,
        borderWidth: 1,
        borderColor: Colors.border.light,
    } as TextStyle,

    inputWithLeftIcon: {
        paddingLeft: 8,
    } as TextStyle,

    inputWithRightIcon: {
        paddingRight: 8,
    } as TextStyle,

    error: {
        fontSize: 12,
        color: Colors.text.error,
        marginTop: 4,
    } as TextStyle,

    // Modal styles
    modal: {
        backgroundColor: Colors.background.primary,
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
        backgroundColor: Colors.background.overlay,
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
        backgroundColor: Colors.status.success,
    },
    cancelButton: {
        backgroundColor: Colors.status.error,
    },
    addButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: Colors.background.primary,
    },
    exportButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: Colors.background.primary,
    },

    // Income/Expense styles
    incomeItem: {
        backgroundColor: Colors.background.primary,
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    expenseItem: {
        backgroundColor: Colors.background.primary,
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    incomeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    expenseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    incomeDescription: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.text.primary,
    },
    expenseDescription: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.text.primary,
    },
    incomeAmount: {
        fontSize: 16,
        fontWeight: '600',
    },
    expenseAmount: {
        fontSize: 16,
        fontWeight: '600',
    },
    incomeDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    expenseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    incomeDate: {
        fontSize: 14,
        color: Colors.text.secondary,
    },
    expenseDate: {
        fontSize: 14,
        color: Colors.text.secondary,
    },
    deleteButton: {
        position: 'absolute',
        right: 12,
        top: 12,
        padding: 4,
    },

    // Financial Summary styles
    periodSelector: {
        flexDirection: 'row',
        gap: 8,
    },
    periodButton: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: Colors.background.primary,
    },
    activePeriod: {
        backgroundColor: Colors.status.info,
    },
    periodText: {
        fontSize: 14,
        color: Colors.text.primary,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    statCard: {
        flex: 1,
        backgroundColor: Colors.background.primary,
        borderRadius: 8,
        padding: 12,
        marginHorizontal: 4,
    },
    statLabel: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: '600',
    },

    // Tax Report styles
    taxSummary: {
        backgroundColor: Colors.background.primary,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    taxTotalLabel: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 4,
    },
    taxTotalValue: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.text.primary,
    },
    taxCategories: {
        maxHeight: 300,
    },
    taxCategory: {
        backgroundColor: Colors.background.primary,
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    taxCategoryInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    taxCategoryName: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.text.primary,
    },
    taxCategoryAmount: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
    },
    taxCategoryProgress: {
        height: 4,
        backgroundColor: Colors.background.secondary,
        borderRadius: 2,
        position: 'relative',
    },
    taxCategoryProgressBar: {
        height: '100%',
        backgroundColor: Colors.status.info,
        borderRadius: 2,
    },
    taxCategoryPercentage: {
        position: 'absolute',
        right: 0,
        top: -20,
        fontSize: 12,
        color: Colors.text.secondary,
    },
    taxNotes: {
        marginTop: 16,
        padding: 12,
        backgroundColor: Colors.background.primary,
        borderRadius: 8,
    },
    taxNoteTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 8,
    },
    taxNoteText: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 4,
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
});