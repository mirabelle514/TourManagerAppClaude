import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { FinancialStyles } from '../styles/FinancialStyles';
import { Theme } from '../styles/theme/ThemeProvider';

export const FinancialScreen: React.FC = () => {
    return (
        <View style={FinancialStyles.container}>
            <ScrollView style={FinancialStyles.content}>
                <View style={FinancialStyles.header}>
                    <Text style={FinancialStyles.title}>Financial Overview</Text>
                    <Text style={FinancialStyles.subtitle}>Track your tour finances</Text>
                </View>

                <View style={FinancialStyles.card}>
                    <Text style={FinancialStyles.cardTitle}>Revenue</Text>
                    <View style={FinancialStyles.row}>
                        <View style={FinancialStyles.column}>
                            <Text style={FinancialStyles.label}>Total Revenue</Text>
                            <Text style={FinancialStyles.value}>$0.00</Text>
                        </View>
                        <View style={FinancialStyles.column}>
                            <Text style={FinancialStyles.label}>Average per Tour</Text>
                            <Text style={FinancialStyles.value}>$0.00</Text>
                        </View>
                    </View>
                </View>

                <View style={FinancialStyles.card}>
                    <Text style={FinancialStyles.cardTitle}>Expenses</Text>
                    <View style={FinancialStyles.row}>
                        <View style={FinancialStyles.column}>
                            <Text style={FinancialStyles.label}>Total Expenses</Text>
                            <Text style={FinancialStyles.value}>$0.00</Text>
                        </View>
                        <View style={FinancialStyles.column}>
                            <Text style={FinancialStyles.label}>Average per Tour</Text>
                            <Text style={FinancialStyles.value}>$0.00</Text>
                        </View>
                    </View>
                </View>

                <View style={FinancialStyles.card}>
                    <Text style={FinancialStyles.cardTitle}>Net Income</Text>
                    <View style={FinancialStyles.row}>
                        <View style={FinancialStyles.column}>
                            <Text style={FinancialStyles.label}>Total Net Income</Text>
                            <Text style={FinancialStyles.total}>$0.00</Text>
                        </View>
                        <View style={FinancialStyles.column}>
                            <Text style={FinancialStyles.label}>Average per Tour</Text>
                            <Text style={FinancialStyles.total}>$0.00</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}; 