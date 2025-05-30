import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { CommonStyles } from '../../styles/CommonStyles';
import { Colors } from '../../styles/theme';

interface FinancialData {
    date: string;
    income: number;
    expenses: number;
    profit: number;
}

interface FinancialSummaryProps {
    data: FinancialData[];
    period: 'week' | 'month' | 'year';
    onPeriodChange: (period: 'week' | 'month' | 'year') => void;
}

export const FinancialSummary: React.FC<FinancialSummaryProps> = ({
    data,
    period,
    onPeriodChange
}) => {
    const totalIncome = data.reduce((sum, item) => sum + item.income, 0);
    const totalExpenses = data.reduce((sum, item) => sum + item.expenses, 0);
    const totalProfit = totalIncome - totalExpenses;

    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                data: data.map(item => item.income),
                color: () => Colors.status.success,
                strokeWidth: 2
            },
            {
                data: data.map(item => item.expenses),
                color: () => Colors.status.error,
                strokeWidth: 2
            },
            {
                data: data.map(item => item.profit),
                color: () => Colors.status.info,
                strokeWidth: 2
            }
        ],
        legend: ['Income', 'Expenses', 'Profit']
    };

    return (
        <View style={CommonStyles.card}>
            <View style={CommonStyles.cardHeader}>
                <Text style={CommonStyles.cardTitle}>Financial Summary</Text>
                <View style={CommonStyles.periodSelector}>
                    <TouchableOpacity
                        style={[CommonStyles.periodButton, period === 'week' && CommonStyles.activePeriod]}
                        onPress={() => onPeriodChange('week')}
                    >
                        <Text style={CommonStyles.periodText}>Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[CommonStyles.periodButton, period === 'month' && CommonStyles.activePeriod]}
                        onPress={() => onPeriodChange('month')}
                    >
                        <Text style={CommonStyles.periodText}>Month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[CommonStyles.periodButton, period === 'year' && CommonStyles.activePeriod]}
                        onPress={() => onPeriodChange('year')}
                    >
                        <Text style={CommonStyles.periodText}>Year</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <LineChart
                    data={chartData}
                    width={Math.max(data.length * 100, 350)}
                    height={220}
                    chartConfig={{
                        backgroundColor: Colors.background.primary,
                        backgroundGradientFrom: Colors.background.primary,
                        backgroundGradientTo: Colors.background.primary,
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={CommonStyles.chart}
                />
            </ScrollView>

            <View style={CommonStyles.statsContainer}>
                <View style={CommonStyles.statCard}>
                    <Text style={CommonStyles.statLabel}>Total Income</Text>
                    <Text style={[CommonStyles.statValue, { color: Colors.status.success }]}>
                        ${totalIncome.toFixed(2)}
                    </Text>
                </View>
                <View style={CommonStyles.statCard}>
                    <Text style={CommonStyles.statLabel}>Total Expenses</Text>
                    <Text style={[CommonStyles.statValue, { color: Colors.status.error }]}>
                        ${totalExpenses.toFixed(2)}
                    </Text>
                </View>
                <View style={CommonStyles.statCard}>
                    <Text style={CommonStyles.statLabel}>Net Profit</Text>
                    <Text style={[CommonStyles.statValue, { color: totalProfit >= 0 ? Colors.status.success : Colors.status.error }]}>
                        ${totalProfit.toFixed(2)}
                    </Text>
                </View>
            </View>
        </View>
    );
}; 