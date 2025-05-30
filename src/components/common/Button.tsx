import React from 'react';
import {
    TouchableOpacity,
    Text,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
} from 'react-native';
import { CommonStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    variant = 'primary',
    size = 'medium',
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    style,
    textStyle,
    ...props
}) => {
    const getButtonStyles = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            ...CommonStyles.button,
            ...CommonStyles[size],
        };

        if (disabled) {
            return {
                ...baseStyle,
                ...CommonStyles.disabled,
            };
        }

        switch (variant) {
            case 'primary':
                return {
                    ...baseStyle,
                    backgroundColor: Colors.primary,
                };
            case 'secondary':
                return {
                    ...baseStyle,
                    backgroundColor: Colors.secondary,
                };
            case 'outline':
                return {
                    ...baseStyle,
                    backgroundColor: Colors.transparent,
                    borderWidth: 1,
                    borderColor: Colors.primary,
                };
            case 'text':
                return {
                    ...baseStyle,
                    backgroundColor: Colors.transparent,
                };
            default:
                return baseStyle;
        }
    };

    const getTextStyles = (): TextStyle => {
        const baseStyle: TextStyle = {
            ...CommonStyles.text,
            ...CommonStyles[`${size}Text`],
        };

        if (disabled) {
            return {
                ...baseStyle,
                color: Colors.text.tertiary,
            };
        }

        switch (variant) {
            case 'primary':
            case 'secondary':
                return {
                    ...baseStyle,
                    color: Colors.text.inverse,
                };
            case 'outline':
            case 'text':
                return {
                    ...baseStyle,
                    color: Colors.primary,
                };
            default:
                return baseStyle;
        }
    };

    return (
        <TouchableOpacity
            style={[getButtonStyles(), style]}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'primary' || variant === 'secondary'
                        ? Colors.text.inverse
                        : Colors.primary}
                    size="small"
                />
            ) : (
                <>
                    {leftIcon}
                    <Text style={[getTextStyles(), textStyle]}>{title}</Text>
                    {rightIcon}
                </>
            )}
        </TouchableOpacity>
    );
};
