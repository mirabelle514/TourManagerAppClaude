import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Colors } from '../../styles/theme/color';

interface FinancialData {
    date: string;
    totalIncome: number;
    totalExpenses: number;
    netProfit: number;
}

interface RevenueChartsProps {
    financialData: FinancialData[];
}

export const RevenueCharts: React.FC<RevenueChartsProps> = ({ financialData }) => {
    const sortedData = [...financialData].sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const chartData = {
        labels: sortedData.map(day => day.date.split('-')[2]), // Show only day
        datasets: [
            {
                data: sortedData.map(day => day.totalIncome),
                color: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`, // Green
                strokeWidth: 2
            },
            {
                data: sortedData.map(day => day.totalExpenses),
                color: (opacity = 1) => `rgba(231, 76, 60, ${opacity})`, // Red
                strokeWidth: 2
            },
            {
                data: sortedData.map(day => day.netProfit),
                color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`, // Blue
                strokeWidth: 2
            }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: Colors.background.primary,
        backgroundGradientTo: Colors.background.primary,
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: Colors.accent.primary.main
        }
    };

    const screenWidth = Dimensions.get('window').width - 32; // Account for padding

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Revenue Overview</Text>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Income vs Expenses</Text>
                <LineChart
                    data={chartData}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                />
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Net Profit</Text>
                <BarChart
                    data={{
                        labels: chartData.labels,
                        datasets: [{
                            data: chartData.datasets[2].data
                        }]
                    }}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    style={styles.chart}
                    showValuesOnTopOfBars
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text.primary,
        marginBottom: 16,
    },
    chartContainer: {
        marginBottom: 24,
        backgroundColor: Colors.background.secondary,
        borderRadius: 12,
        padding: 16,
    },
    chartTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 8,
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
    },
}); 