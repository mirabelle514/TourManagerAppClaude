import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from './theme';

export const FormStyles = StyleSheet.create({
    // Input Groups & Containers
    inputGroup: {
        marginBottom: Spacing.lg,
    },
    inputContainer: {
        marginBottom: Spacing.lg,
    },
    formSection: {
        marginBottom: Spacing['2xl'],
    },

    // Labels
    label: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
        color: Colors.text.primary,
        marginBottom: Spacing.sm,
    },
    requiredLabel: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
        color: Colors.text.primary,
        marginBottom: Spacing.sm,
    },
    optionalLabel: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
        color: Colors.text.secondary,
        marginBottom: Spacing.sm,
    },

    // Text Inputs
    input: {
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        borderWidth: 1,
        borderColor: Colors.border.light,
        minHeight: 48,
    },
    inputFocused: {
        borderColor: Colors.primary,
        borderWidth: 2,
    },
    inputError: {
        borderColor: Colors.status.error,
        borderWidth: 2,
    },
    inputDisabled: {
        opacity: 0.6,
        backgroundColor: Colors.background.secondary,
    },

    // Multiline Text Areas
    textArea: {
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        borderWidth: 1,
        borderColor: Colors.border.light,
        minHeight: 100,
        textAlignVertical: 'top',
    },

    // Placeholders (for reference in component)
    placeholder: {
        color: Colors.text.secondary,
    },

    // Error States
    errorText: {
        fontSize: Typography.sizes.sm,
        color: Colors.status.error,
        marginTop: Spacing.xs,
        marginLeft: Spacing.xs,
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Spacing.xs,
    },
    errorIcon: {
        marginRight: Spacing.xs,
    },

    // Success States
    successText: {
        fontSize: Typography.sizes.sm,
        color: Colors.status.success,
        marginTop: Spacing.xs,
        marginLeft: Spacing.xs,
    },
    successContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Spacing.xs,
    },

    // Helper Text
    helperText: {
        fontSize: Typography.sizes.sm,
        color: Colors.text.secondary,
        marginTop: Spacing.xs,
        marginLeft: Spacing.xs,
    },

    // Checkbox & Radio Styles
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    checkboxLabel: {
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        marginLeft: Spacing.md,
        flex: 1,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.md,
        paddingVertical: Spacing.sm,
    },

    // Select/Picker Styles
    selectContainer: {
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border.light,
    },
    selectTrigger: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Spacing.lg,
        minHeight: 48,
    },
    selectText: {
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
    },
    selectPlaceholder: {
        fontSize: Typography.sizes.base,
        color: Colors.text.secondary,
    },

    // Form Buttons
    submitButton: {
        backgroundColor: Colors.primary,
        borderRadius: Spacing.md,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Spacing.xl,
    },
    submitButtonText: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
    },
    submitButtonDisabled: {
        backgroundColor: Colors.text.secondary,
        opacity: 0.6,
    },

    cancelButton: {
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.border.light,
        marginTop: Spacing.md,
    },
    cancelButtonText: {
        fontSize: Typography.sizes.base,
        fontWeight: Typography.weights.medium,
        color: Colors.text.secondary,
    },

    // Form Rows & Groups
    formRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    formRowHalf: {
        width: '48%',
    },
    halfInput: {
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        borderWidth: 1,
        borderColor: Colors.border.light,
        minHeight: 48,
        width: '48%',
    },
    fieldGroup: {
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border.light,
    },
    fieldGroupTitle: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text.primary,
        marginBottom: Spacing.lg,
    },

    // Input with Icons
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border.light,
        paddingHorizontal: Spacing.lg,
        minHeight: 48,
    },
    inputIcon: {
        marginRight: Spacing.md,
    },
    inputField: {
        flex: 1,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        paddingVertical: Spacing.md,
    },

    // Search Input
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background.secondary,
        borderRadius: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border.light,
        paddingHorizontal: Spacing.lg,
        marginBottom: Spacing.lg,
    },
    searchInput: {
        flex: 1,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        paddingVertical: Spacing.md,
        marginLeft: Spacing.sm,
    },

    // Switch/Toggle Styles
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Spacing.md,
    },
    switchLabel: {
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        flex: 1,
    },

    // Form Container
    form: {
        padding: 20,
    },

    // Input Group
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 8,
    },

    inputLabelRequired: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 8,
    },

    // Text Input
    textInput: {
        borderWidth: 1,
        borderColor: Colors.border.medium,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: Colors.text.primary,
        backgroundColor: Colors.background.secondary,
    },

    textInputFocused: {
        borderColor: Colors.border.focus,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },

    textInputError: {
        borderColor: Colors.border.error,
    },

    textInputDisabled: {
        backgroundColor: Colors.background.secondary,
        color: Colors.text.tertiary,
    },

    // Input Helper Text
    inputHelperText: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginTop: 4,
    },

    inputErrorText: {
        fontSize: 14,
        color: Colors.status.error,
        marginTop: 4,
    },

    // Button Styles
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonPrimary: {
        backgroundColor: Colors.primary,
    },

    buttonSecondary: {
        backgroundColor: Colors.secondary,
    },

    buttonSuccess: {
        backgroundColor: Colors.status.success,
    },

    buttonWarning: {
        backgroundColor: Colors.status.warning,
    },

    buttonError: {
        backgroundColor: Colors.status.error,
    },

    buttonOutline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: Colors.primary,
    },

    buttonGhost: {
        backgroundColor: 'transparent',
    },

    buttonDisabled: {
        backgroundColor: Colors.background.tertiary,
        opacity: 0.6,
    },

    buttonSmall: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    buttonLarge: {
        paddingVertical: 16,
        paddingHorizontal: 32,
    },

    // Button Text
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },

    buttonTextPrimary: {
        color: Colors.text.inverse,
    },

    buttonTextSecondary: {
        color: Colors.text.inverse,
    },

    buttonTextOutline: {
        color: Colors.primary,
    },

    buttonTextGhost: {
        color: Colors.primary,
    },

    buttonTextDisabled: {
        color: Colors.text.tertiary,
    },

    buttonIcon: {
        marginRight: 8,
    },

    // Selector Styles
    selector: {
        borderWidth: 1,
        borderColor: Colors.border.medium,
        borderRadius: 8,
        backgroundColor: Colors.background.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },

    selectorFocused: {
        borderColor: Colors.border.focus,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },

    selectorText: {
        fontSize: 16,
        color: Colors.text.primary,
        flex: 1,
    },

    selectorPlaceholder: {
        color: Colors.text.tertiary,
    },

    selectorIcon: {
        marginLeft: 8,
    },

    // Checkbox Styles
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: Colors.border.medium,
        borderRadius: 4,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkboxChecked: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: Colors.background.overlay,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modal: {
        backgroundColor: Colors.background.primary,
        borderRadius: 16,
        padding: 24,
        margin: 20,
        maxWidth: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },

    modalHeader: {
        marginBottom: 20,
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.text.primary,
        textAlign: 'center',
    },

    modalContent: {
        marginBottom: 24,
    },

    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },

    modalActionButton: {
        flex: 1,
    },

    // Search Styles
    searchInputFocused: {
        backgroundColor: Colors.background.primary,
        borderColor: Colors.border.focus,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },

    // Switch Row
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
    },

    // Quantity Controls
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
        padding: 8,
    },

    quantityButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.background.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },

    quantityInput: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        textAlign: 'center',
        minWidth: 50,
        marginHorizontal: 16,
    },

    // Validation States
    validationSuccess: {
        borderColor: Colors.status.success,
    },

    validationWarning: {
        borderColor: Colors.status.warning,
    },

    validationError: {
        borderColor: Colors.status.error,
    },
});