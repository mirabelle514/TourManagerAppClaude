import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles/theme/color';

interface BudgetProgressProps {
    current: number;
    target: number;
    label?: string;
}

export const BudgetProgress: React.FC<BudgetProgressProps> = ({
    current,
    target,
    label = 'Budget Progress',
}) => {
    const progress = Math.min((current / target) * 100, 100);
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{label}</Text>
                <Text style={styles.percentage}>{progress.toFixed(1)}%</Text>
            </View>

            <View style={styles.progressBar}>
                <View
                    style={[
                        styles.progressFill,
                        {
                            width: `${progress}%`,
                            backgroundColor:
                                progress > 90
                                    ? Colors.status.error
                                    : progress > 75
                                        ? Colors.status.warning
                                        : Colors.status.success,
                        },
                    ]}
                />
            </View>

            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Spent</Text>
                    <Text style={[styles.statValue, { color: Colors.status.error }]}>
                        {formatCurrency(current)}
                    </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Budget</Text>
                    <Text style={[styles.statValue, { color: Colors.text.primary }]}>
                        {formatCurrency(target)}
                    </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Remaining</Text>
                    <Text
                        style={[
                            styles.statValue,
                            {
                                color:
                                    target - current >= 0
                                        ? Colors.status.success
                                        : Colors.status.error,
                            },
                        ]}
                    >
                        {formatCurrency(target - current)}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
    },
    percentage: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.secondary,
    },
    progressBar: {
        height: 8,
        backgroundColor: Colors.background.primary,
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 12,
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    stat: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 12,
        color: Colors.text.secondary,
        marginBottom: 4,
    },
    statValue: {
        fontSize: 14,
        fontWeight: '600',
    },
});