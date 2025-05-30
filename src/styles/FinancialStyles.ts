import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from './theme/ThemeProvider';
import { Colors } from './theme/color';

export const FinancialStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    },
    scrollView: {
        flex: 1,
    },
    dateRangeContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background.secondary,
        padding: 12,
        borderRadius: 8,
        gap: 8,
    },
    dateButtonText: {
        color: Colors.text.primary,
        fontSize: 16,
    },
    summaryContainer: {
        padding: 16,
        gap: 16,
    },
    addButton: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.accent.primary.main,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    content: {
        flex: 1,
        padding: Theme.spacing.xl,
    },
    header: {
        marginBottom: Theme.spacing.xl,
    },
    title: {
        fontSize: Theme.typography.sizes['3xl'],
        fontWeight: Theme.typography.weights.bold,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.sm,
    },
    subtitle: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.secondary,
    },
    card: {
        backgroundColor: Theme.colors.background.secondary,
        borderRadius: Theme.spacing.sm,
        padding: Theme.spacing.lg,
        marginBottom: Theme.spacing.lg,
    },
    cardTitle: {
        fontSize: Theme.typography.sizes.lg,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.md,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Theme.spacing.md,
    },
    column: {
        flex: 1,
        marginHorizontal: Theme.spacing.sm,
    },
    label: {
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
        marginBottom: Theme.spacing.xs,
    },
    value: {
        fontSize: Theme.typography.sizes.lg,
        fontWeight: Theme.typography.weights.medium,
        color: Theme.colors.text.primary,
    },
    total: {
        fontSize: Theme.typography.sizes.xl,
        fontWeight: Theme.typography.weights.bold,
        color: Theme.colors.primary,
    },
    button: {
        backgroundColor: Theme.colors.primary,
        padding: Theme.spacing.md,
        borderRadius: Theme.spacing.sm,
        alignItems: 'center',
        marginTop: Theme.spacing.lg,
    },
    buttonText: {
        color: Theme.colors.text.inverse,
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
    },
    // Tax Report Styles
    taxSummary: {
        backgroundColor: Theme.colors.background.tertiary,
        padding: Theme.spacing.lg,
        borderRadius: Theme.spacing.sm,
        marginBottom: Theme.spacing.lg,
    },
    taxTotalLabel: {
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
        marginBottom: Theme.spacing.xs,
    },
    taxTotalValue: {
        fontSize: Theme.typography.sizes['2xl'],
        fontWeight: Theme.typography.weights.bold,
        color: Theme.colors.primary,
    },
    taxCategories: {
        maxHeight: 300,
        marginBottom: Theme.spacing.lg,
    },
    taxCategory: {
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing.md,
        borderRadius: Theme.spacing.sm,
        marginBottom: Theme.spacing.sm,
    },
    taxCategoryInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Theme.spacing.sm,
    },
    taxCategoryName: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
        color: Theme.colors.text.primary,
    },
    taxCategoryAmount: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
    },
    taxCategoryProgress: {
        height: 8,
        backgroundColor: Theme.colors.background.tertiary,
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
    },
    taxCategoryProgressBar: {
        height: '100%',
        backgroundColor: Theme.colors.accent.primary.main,
        borderRadius: 4,
    },
    taxCategoryPercentage: {
        position: 'absolute',
        right: 8,
        top: -20,
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
    },
    taxNotes: {
        marginTop: Theme.spacing.lg,
        padding: Theme.spacing.md,
        backgroundColor: Theme.colors.background.tertiary,
        borderRadius: Theme.spacing.sm,
    },
    taxNoteTitle: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.sm,
    },
    taxNoteText: {
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
        marginBottom: Theme.spacing.xs,
    },
    // Expense Item Styles
    expenseItem: {
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing.md,
        borderRadius: Theme.spacing.sm,
        marginBottom: Theme.spacing.sm,
    },
    expenseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Theme.spacing.xs,
    },
    expenseDescription: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
        color: Theme.colors.text.primary,
        flex: 1,
    },
    expenseAmount: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.semibold,
    },
    expenseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    expenseDate: {
        fontSize: Theme.typography.sizes.sm,
        color: Theme.colors.text.secondary,
    },
    categoryBadge: {
        paddingHorizontal: Theme.spacing.sm,
        paddingVertical: Theme.spacing.xs,
        borderRadius: Theme.spacing.sm,
    },
    categoryText: {
        fontSize: Theme.typography.sizes.sm,
        fontWeight: Theme.typography.weights.medium,
    },
    // Filter Button Styles
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.background.secondary,
        padding: Theme.spacing.md,
        borderRadius: Theme.spacing.sm,
        marginBottom: Theme.spacing.md,
    },
    filterButtonText: {
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.primary,
        marginLeft: Theme.spacing.sm,
    },
    // Modal Styles
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: Colors.background.primary,
        borderRadius: 12,
        padding: 16,
        width: '90%',
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },
    closeButton: {
        padding: 4,
    },
    saveButton: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
        color: Theme.colors.accent.primary.main,
    },
});