import React from 'react';
import {
    View,
    Text,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { Colors } from '../../styles/theme/color';
import { CommonStyles } from '../../styles';

export type StatusType = 'success' | 'warning' | 'error' | 'info';

interface StatusIndicatorProps {
    type: StatusType;
    label?: string;
    style?: ViewStyle;
    labelStyle?: TextStyle;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
    type,
    label,
    style,
    labelStyle,
}) => {
    const getStatusColor = (): string => {
        switch (type) {
            case 'success':
                return Colors.status.success;
            case 'warning':
                return Colors.status.warning;
            case 'error':
                return Colors.status.error;
            case 'info':
                return Colors.status.info;
            default:
                return Colors.status.info;
        }
    };

    return (
        <View style={[CommonStyles.container, style]}>
            <View
                style={[
                    CommonStyles.indicator,
                    {
                        backgroundColor: getStatusColor(),
                    },
                ]}
            />
            {label && (
                <Text style={[CommonStyles.label, labelStyle]}>
                    {label}
                </Text>
            )}
        </View>
    );
};
