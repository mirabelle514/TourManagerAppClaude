import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../styles/theme';

interface BudgetProgressProps {
    current: number;
    total: number;
    label?: string;
}

export const BudgetProgress: React.FC<BudgetProgressProps> = ({ current, total, label }) => {
    const percent = Math.min(100, Math.round((current / total) * 100));
    return (
        <View style={{ marginVertical: 12 }}>
            {label && (
                <Text style={{ fontSize: 14, color: Colors.text.primary, marginBottom: 4 }}>{label}</Text>
            )}
            <View style={{
                height: 16,
                backgroundColor: Colors.background.tertiary,
                borderRadius: 8,
                overflow: 'hidden',
            }}>
                <View style={{
                    width: `${percent}%`,
                    height: '100%',
                    backgroundColor: percent < 80 ? Colors.status.success : Colors.status.warning,
                    borderRadius: 8,
                }} />
            </View>
            <Text style={{ fontSize: 12, color: Colors.text.secondary, marginTop: 2 }}>{percent}% of budget used</Text>
        </View>
    );
};