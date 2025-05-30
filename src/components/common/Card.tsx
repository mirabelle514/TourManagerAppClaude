import React from 'react';
import {
    View,
    ViewStyle,
    ViewProps,
} from 'react-native';
import { CommonStyles } from '../../styles';
export type CardVariant = 'elevated' | 'outlined' | 'flat';

interface CardProps extends ViewProps {
    variant?: CardVariant;
    style?: ViewStyle;
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    variant = 'elevated',
    style,
    children,
    ...props
}) => {
    const getCardStyles = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            ...CommonStyles.card,
        };

        switch (variant) {
            case 'elevated':
                return {
                    ...baseStyle,
                    ...CommonStyles.elevated,
                };
            case 'outlined':
                return {
                    ...baseStyle,
                    ...CommonStyles.outlined,
                };
            case 'flat':
                return {
                    ...baseStyle,
                    ...CommonStyles.flat,
                };
            default:
                return baseStyle;
        }
    };

    return (
        <View style={[getCardStyles(), style]} {...props}>
            {children}
        </View>
    );
};
