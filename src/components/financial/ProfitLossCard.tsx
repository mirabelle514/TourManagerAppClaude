import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles/CommonStyles';
import { Colors } from '../../styles/theme';

interface ProfitLossCardProps {
    date: string;
    income: number;
    expenses: number;
    profit: number;
    settlements: {
        id: string;
        date: string;
        venue: string;
        guarantee: number;
        ticketSales: number;
        merchandise: number;
        expenses: number;
        netProfit: number;
        paymentStatus: 'pending' | 'received' | 'partial';
    }[];
}

export const ProfitLossCard: React.FC<ProfitLossCardProps> = ({
    date,
    income,
    expenses,
    profit,
    settlements
}) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });

    return (
        <View style={CommonStyles.card}>
            <View style={CommonStyles.cardHeader}>
                <Text style={CommonStyles.cardTitle}>{formattedDate}</Text>
                <Text style={[
                    CommonStyles.profitText,
                    { color: profit >= 0 ? Colors.status.success : Colors.status.error }
                ]}>
                    {profit >= 0 ? '+' : ''}${profit.toLocaleString()}
                </Text>
            </View>

            <View style={CommonStyles.statsRow}>
                <View style={CommonStyles.statItem}>
                    <Text style={CommonStyles.statLabel}>Income</Text>
                    <Text style={[CommonStyles.statValue, { color: Colors.status.success }]}>
                        ${income.toLocaleString()}
                    </Text>
                </View>
                <View style={CommonStyles.statItem}>
                    <Text style={CommonStyles.statLabel}>Expenses</Text>
                    <Text style={[CommonStyles.statValue, { color: Colors.status.error }]}>
                        ${expenses.toLocaleString()}
                    </Text>
                </View>
            </View>

            {settlements.map((settlement) => (
                <View key={settlement.id} style={CommonStyles.settlementItem}>
                    <View style={CommonStyles.settlementHeader}>
                        <Text style={CommonStyles.settlementVenue}>{settlement.venue}</Text>
                        <View style={[
                            CommonStyles.statusBadge,
                            { backgroundColor: getStatusColor(settlement.paymentStatus) }
                        ]}>
                            <Text style={CommonStyles.statusText}>
                                {settlement.paymentStatus.charAt(0).toUpperCase() + settlement.paymentStatus.slice(1)}
                            </Text>
                        </View>
                    </View>
                    <View style={CommonStyles.settlementDetails}>
                        <View style={CommonStyles.settlementRow}>
                            <Text style={CommonStyles.settlementLabel}>Guarantee:</Text>
                            <Text style={CommonStyles.settlementValue}>${settlement.guarantee.toLocaleString()}</Text>
                        </View>
                        <View style={CommonStyles.settlementRow}>
                            <Text style={CommonStyles.settlementLabel}>Ticket Sales:</Text>
                            <Text style={CommonStyles.settlementValue}>${settlement.ticketSales.toLocaleString()}</Text>
                        </View>
                        <View style={CommonStyles.settlementRow}>
                            <Text style={CommonStyles.settlementLabel}>Merchandise:</Text>
                            <Text style={CommonStyles.settlementValue}>${settlement.merchandise.toLocaleString()}</Text>
                        </View>
                        <View style={CommonStyles.settlementRow}>
                            <Text style={CommonStyles.settlementLabel}>Expenses:</Text>
                            <Text style={CommonStyles.settlementValue}>${settlement.expenses.toLocaleString()}</Text>
                        </View>
                        <View style={[CommonStyles.settlementRow, CommonStyles.settlementTotal]}>
                            <Text style={CommonStyles.settlementTotalLabel}>Net Profit:</Text>
                            <Text style={[
                                CommonStyles.settlementTotalValue,
                                { color: settlement.netProfit >= 0 ? Colors.status.success : Colors.status.error }
                            ]}>
                                ${settlement.netProfit.toLocaleString()}
                            </Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'received':
            return Colors.status.success + '20';
        case 'partial':
            return Colors.status.warning + '20';
        case 'pending':
            return Colors.status.error + '20';
        default:
            return Colors.text.secondary + '20';
    }
};
