import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    ViewStyle,
    TextStyle,
    TextInputProps,
} from 'react-native';
import { Colors } from '../../styles/theme/color';
import { CommonStyles } from '../../styles';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    labelStyle?: TextStyle;
    errorStyle?: TextStyle;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    leftIcon,
    rightIcon,
    containerStyle,
    inputStyle,
    labelStyle,
    errorStyle,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const getInputContainerStyle = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            ...CommonStyles.inputContainer,
        };

        if (error) {
            return {
                ...baseStyle,
                ...CommonStyles.errorContainer,
            };
        }

        if (isFocused) {
            return {
                ...baseStyle,
                ...CommonStyles.focusedContainer,
            };
        }

        return baseStyle;
    };

    return (
        <View style={[CommonStyles.container, containerStyle]}>
            {label && (
                <Text style={[CommonStyles.label, labelStyle]}>
                    {label}
                </Text>
            )}
            <View style={getInputContainerStyle()}>
                {leftIcon && (
                    <View style={CommonStyles.iconContainer}>
                        {leftIcon}
                    </View>
                )}
                <TextInput
                    style={[
                        CommonStyles.input,
                        leftIcon ? CommonStyles.inputWithLeftIcon : null,
                        rightIcon ? CommonStyles.inputWithRightIcon : null,
                        inputStyle,
                    ]}
                    placeholderTextColor={Colors.text.tertiary}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                {rightIcon && (
                    <View style={CommonStyles.iconContainer}>
                        {rightIcon}
                    </View>
                )}
            </View>
            {error && (
                <Text style={[CommonStyles.error, errorStyle]}>
                    {error}
                </Text>
            )}
        </View>
    );
};
