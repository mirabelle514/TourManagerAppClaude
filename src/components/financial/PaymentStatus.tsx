import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/theme';

export type PaymentStatusType = 'pending' | 'received' | 'partial' | 'overdue';

interface PaymentStatusProps {
    status: PaymentStatusType;
    showIcon?: boolean;
    style?: any;
}

export const PaymentStatus: React.FC<PaymentStatusProps> = ({
    status,
    showIcon = true,
    style
}) => {
    const getStatusConfig = (status: PaymentStatusType) => {
        switch (status) {
            case 'received':
                return {
                    color: Colors.status.success,
                    icon: 'checkmark-circle',
                    label: 'Received'
                };
            case 'partial':
                return {
                    color: Colors.status.warning,
                    icon: 'time',
                    label: 'Partial'
                };
            case 'overdue':
                return {
                    color: Colors.status.error,
                    icon: 'alert-circle',
                    label: 'Overdue'
                };
            default:
                return {
                    color: Colors.text.secondary,
                    icon: 'hourglass',
                    label: 'Pending'
                };
        }
    };

    const config = getStatusConfig(status);

    return (
        <View style={[{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: config.color + '20',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
            alignSelf: 'flex-start',
        }, style]}>
            {showIcon && (
                <Ionicons
                    name={config.icon as any}
                    size={16}
                    color={config.color}
                    style={{ marginRight: 4 }}
                />
            )}
            <Text style={{
                color: config.color,
                fontSize: 12,
                fontWeight: '500'
            }}>
                {config.label}
            </Text>
        </View>
    );
};