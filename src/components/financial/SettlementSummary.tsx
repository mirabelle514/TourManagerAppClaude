import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles/CommonStyles';
import { Colors, Typography, Spacing } from '../../styles/theme/index';
import { FinancialStyles } from '../../styles/FinancialStyles';
import { PaymentStatus, PaymentStatusType } from './PaymentStatus';

export interface Settlement {
    id: string;
    date: string;
    venue: string;
    guarantee: number;
    ticketSales: number;
    merchandise: number;
    expenses: number;
    netProfit: number;
    paymentStatus: PaymentStatusType;
}

interface SettlementSummaryProps {
    settlement: Settlement;
}

export const SettlementSummary: React.FC<SettlementSummaryProps> = ({ settlement }) => {
    const formattedDate = new Date(settlement.date).toLocaleDateString('en-US', {
        weekday: 'short', month: 'short', day: 'numeric'
    });
    return (
        <View style={CommonStyles.card}>
            <View style={CommonStyles.cardHeader}>
                <Text style={CommonStyles.cardTitle}>{settlement.venue}</Text>
                <PaymentStatus status={settlement.paymentStatus} />
            </View>
            <Text style={CommonStyles.cardSubtitle}>{formattedDate}</Text>
            <View style={{ marginVertical: 8 }}>
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
                    <Text style={[CommonStyles.settlementTotalValue, { color: settlement.netProfit >= 0 ? Colors.status.success : Colors.status.error }]}>
                        ${settlement.netProfit.toLocaleString()}
                    </Text>
                </View>
            </View>
        </View>
    );
};