import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from './theme/ThemeProvider';

export const FormStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background.primary,
    },
    content: {
        flex: 1,
        padding: Theme.spacing.xl,
    },
    form: {
        marginTop: Theme.spacing.xl,
        marginBottom: Theme.spacing.xl,
    },
    formGroup: {
        marginBottom: Theme.spacing.lg,
    },
    label: {
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
        color: Theme.colors.text.primary,
        marginBottom: Theme.spacing.sm,
    },
    input: {
        backgroundColor: Theme.colors.background.secondary,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
        borderRadius: Theme.spacing.sm,
        padding: Theme.spacing.md,
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.primary,
    },
    textArea: {
        backgroundColor: Theme.colors.background.secondary,
        borderWidth: 1,
        borderColor: Theme.colors.border.light,
        borderRadius: Theme.spacing.sm,
        padding: Theme.spacing.md,
        fontSize: Theme.typography.sizes.base,
        color: Theme.colors.text.primary,
        height: 120,
        textAlignVertical: 'top',
    },
    inputError: {
        borderColor: Theme.colors.status.error,
    },
    errorText: {
        color: Theme.colors.status.error,
        fontSize: Theme.typography.sizes.sm,
        marginTop: Theme.spacing.xs,
    },
    button: {
        backgroundColor: Theme.colors.primary,
        padding: Theme.spacing.md,
        borderRadius: Theme.spacing.sm,
        alignItems: 'center',
        marginTop: Theme.spacing.lg,
    },
    buttonDisabled: {
        backgroundColor: Theme.colors.text.muted,
    },
    buttonText: {
        color: Theme.colors.text.inverse,
        fontSize: Theme.typography.sizes.base,
        fontWeight: Theme.typography.weights.medium,
    },
});