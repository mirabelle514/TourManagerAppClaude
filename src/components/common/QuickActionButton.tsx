import React from 'react';
import {
    TouchableOpacity,
    Text,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { Colors } from '../../styles/theme/color';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles';

interface QuickActionButtonProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
    style?: ViewStyle;
    labelStyle?: TextStyle;
    iconColor?: string;
    labelColor?: string;
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({
    icon,
    label,
    onPress,
    style,
    labelStyle,
    iconColor = Colors.primary,
    labelColor = Colors.text.primary,
}) => {
    return (
        <TouchableOpacity
            style={[CommonStyles.container, style]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Ionicons
                name={icon}
                size={24}
                color={iconColor}
                style={CommonStyles.icon}
            />
            <Text style={[CommonStyles.label, { color: labelColor }, labelStyle]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};
