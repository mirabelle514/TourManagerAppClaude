import { StyleSheet } from 'react-native';
import { Colors } from './theme/color';

export const FinancialStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.background.primary,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },

    dateRangeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background.secondary,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },

    dateRangeText: {
        marginLeft: 6,
        fontSize: 12,
        color: Colors.primary,
        fontWeight: '500',
    },

    summaryRow: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    summaryCard: {
        width: 140,
        padding: 15,
        borderRadius: 12,
        marginRight: 15,
        alignItems: 'center',
    },

    summaryAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.inverse,
        marginTop: 8,
    },

    summaryLabel: {
        fontSize: 12,
        color: Colors.text.inverse,
        opacity: 0.9,
        marginTop: 4,
    },

    mainContent: {
        flex: 1,
    },

    expensesSection: {
        backgroundColor: Colors.background.primary,
        margin: 15,
        borderRadius: 12,
        padding: 20,
    },

    expensesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },

    addButton: {
        backgroundColor: Colors.primary,
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    expenseItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    expenseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },

    expenseDescription: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.text.primary,
        flex: 1,
    },

    expenseAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    expenseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    expenseDate: {
        fontSize: 12,
        color: Colors.text.secondary,
    },

    categoryBadge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
    },

    categoryText: {
        fontSize: 10,
        fontWeight: '600',
    },

    modalContainer: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    },

    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },

    saveButton: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: '600',
    },

    modalContent: {
        padding: 20,
    },

    inputGroup: {
        marginBottom: 20,
    },

    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 8,
    },

    textInput: {
        borderWidth: 1,
        borderColor: Colors.border.medium,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: Colors.background.secondary,
    },

    categoryButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
    },

    categoryButtonText: {
        fontSize: 14,
        fontWeight: '600',
    },
});