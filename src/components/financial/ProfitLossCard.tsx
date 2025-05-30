import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles/theme/color';

interface ProfitLossCardProps {
    income: number;
    expenses: number;
    profit: number;
    date?: string;
    settlements?: Array<{
        id: string;
        date: string;
        venue: string;
        guarantee: number;
        ticketSales: number;
        merchandise: number;
        expenses: number;
        netProfit: number;
        paymentStatus: 'pending' | 'received' | 'partial';
    }>;
}

export const ProfitLossCard: React.FC<ProfitLossCardProps> = ({
    income,
    expenses,
    profit,
    date,
    settlements,
}) => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {date ? `Financial Summary - ${date}` : 'Financial Summary'}
                </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.label}>Income</Text>
                    <Text style={[styles.value, styles.income]}>
                        {formatCurrency(income)}
                    </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Expenses</Text>
                    <Text style={[styles.value, styles.expenses]}>
                        {formatCurrency(expenses)}
                    </Text>
                </View>

                <View style={[styles.row, styles.profitRow]}>
                    <Text style={styles.label}>Net Profit</Text>
                    <Text
                        style={[
                            styles.value,
                            styles.profit,
                            { color: profit >= 0 ? Colors.status.success : Colors.status.error },
                        ]}
                    >
                        {formatCurrency(profit)}
                    </Text>
                </View>
            </View>

            {settlements && settlements.length > 0 && (
                <View style={styles.settlements}>
                    <Text style={styles.settlementsTitle}>Settlements</Text>
                    {settlements.map((settlement) => (
                        <View key={settlement.id} style={styles.settlement}>
                            <Text style={styles.venue}>{settlement.venue}</Text>
                            <View style={styles.settlementDetails}>
                                <Text style={styles.settlementText}>
                                    Guarantee: {formatCurrency(settlement.guarantee)}
                                </Text>
                                <Text style={styles.settlementText}>
                                    Ticket Sales: {formatCurrency(settlement.ticketSales)}
                                </Text>
                                <Text style={styles.settlementText}>
                                    Merchandise: {formatCurrency(settlement.merchandise)}
                                </Text>
                                <Text style={styles.settlementText}>
                                    Expenses: {formatCurrency(settlement.expenses)}
                                </Text>
                                <Text
                                    style={[
                                        styles.settlementText,
                                        styles.netProfit,
                                        {
                                            color:
                                                settlement.netProfit >= 0
                                                    ? Colors.status.success
                                                    : Colors.status.error,
                                        },
                                    ]}
                                >
                                    Net: {formatCurrency(settlement.netProfit)}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}
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
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },
    content: {
        gap: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profitRow: {
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
        paddingTop: 12,
        marginTop: 4,
    },
    label: {
        fontSize: 16,
        color: Colors.text.secondary,
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
    },
    income: {
        color: Colors.status.success,
    },
    expenses: {
        color: Colors.status.error,
    },
    profit: {
        fontWeight: 'bold',
    },
    settlements: {
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
    },
    settlementsTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 12,
    },
    settlement: {
        marginBottom: 12,
        padding: 12,
        backgroundColor: Colors.background.primary,
        borderRadius: 8,
    },
    venue: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 8,
    },
    settlementDetails: {
        gap: 4,
    },
    settlementText: {
        fontSize: 14,
        color: Colors.text.secondary,
    },
    netProfit: {
        fontWeight: '600',
        marginTop: 4,
    },
});
