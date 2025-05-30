import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles/CommonStyles';
import { Colors, Typography, Spacing } from '../../styles/theme/index';
import { FinancialStyles } from '../../styles/FinancialStyles';

interface TaxCategory {
    name: string;
    amount: number;
    percentage: number;
}

interface TaxReportProps {
    categories: TaxCategory[];
    totalAmount: number;
    onExport: () => void;
    onViewDetails: (category: string) => void;
}

export const TaxReport: React.FC<TaxReportProps> = ({
    categories,
    totalAmount,
    onExport,
    onViewDetails
}) => {
    return (
        <View style={CommonStyles.card}>
            <View style={CommonStyles.cardHeader}>
                <Text style={CommonStyles.cardTitle}>Tax Report</Text>
                <TouchableOpacity
                    style={CommonStyles.exportButton}
                    onPress={onExport}
                >
                    <Ionicons name="download-outline" size={24} color={Colors.text.primary} />
                </TouchableOpacity>
            </View>

            <View style={FinancialStyles.taxSummary}>
                <Text style={FinancialStyles.taxTotalLabel}>Total Taxable Amount</Text>
                <Text style={FinancialStyles.taxTotalValue}>${totalAmount.toFixed(2)}</Text>
            </View>

            <ScrollView style={FinancialStyles.taxCategories}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.name}
                        style={FinancialStyles.taxCategory}
                        onPress={() => onViewDetails(category.name)}
                    >
                        <View style={FinancialStyles.taxCategoryInfo}>
                            <Text style={FinancialStyles.taxCategoryName}>{category.name}</Text>
                            <Text style={FinancialStyles.taxCategoryAmount}>
                                ${category.amount.toFixed(2)}
                            </Text>
                        </View>
                        <View style={FinancialStyles.taxCategoryProgress}>
                            <View
                                style={[
                                    FinancialStyles.taxCategoryProgressBar,
                                    { width: `${category.percentage}%` }
                                ]}
                            />
                            <Text style={FinancialStyles.taxCategoryPercentage}>
                                {category.percentage}%
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={FinancialStyles.taxNotes}>
                <Text style={FinancialStyles.taxNoteTitle}>Important Notes:</Text>
                <Text style={FinancialStyles.taxNoteText}>
                    • All amounts are in USD and include applicable taxes
                </Text>
                <Text style={FinancialStyles.taxNoteText}>
                    • Business expenses are categorized for tax purposes
                </Text>
                <Text style={FinancialStyles.taxNoteText}>
                    • Export report for detailed breakdown
                </Text>
            </View>
        </View>
    );
}; 