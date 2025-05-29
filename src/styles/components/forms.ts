// src/styles/components/forms.ts
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '../theme';

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
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        borderWidth: 1,
        borderColor: Colors.border,
        minHeight: 48,
    },
    inputFocused: {
        borderColor: Colors.accent.primary,
        borderWidth: 2,
    },
    inputError: {
        borderColor: Colors.accent.error,
        borderWidth: 2,
    },
    inputDisabled: {
        opacity: 0.6,
        backgroundColor: Colors.background.secondary,
    },

    // Multiline Text Areas
    textArea: {
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        borderWidth: 1,
        borderColor: Colors.border,
        minHeight: 100,
        textAlignVertical: 'top',
    },

    // Placeholders (for reference in component)
    placeholder: {
        color: Colors.text.muted,
    },

    // Error States
    errorText: {
        fontSize: Typography.sizes.sm,
        color: Colors.accent.error,
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
        color: Colors.accent.success,
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
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
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
        color: Colors.text.muted,
    },

    // Form Buttons
    submitButton: {
        backgroundColor: Colors.accent.primary,
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
        backgroundColor: Colors.text.muted,
        opacity: 0.6,
    },

    cancelButton: {
        backgroundColor: Colors.transparent,
        borderRadius: Spacing.md,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
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
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        fontSize: Typography.sizes.base,
        color: Colors.text.primary,
        borderWidth: 1,
        borderColor: Colors.border,
        minHeight: 48,
        width: '48%',
    },
    fieldGroup: {
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        padding: Spacing.lg,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
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
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
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
        backgroundColor: Colors.background.card,
        borderRadius: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
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
});