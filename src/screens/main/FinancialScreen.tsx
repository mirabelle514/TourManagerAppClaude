import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
    Modal,
    FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

// Component imports
import {
    ProfitLossCard,
    BudgetProgress,
    ExpenseForm,
    ExpenseFormData,
    ExpenseTracker,
    FinancialChart,
    IncomeTracker,
    PaymentStatus,
    SettlementSummary,
    TaxCategoryFilter,
    TaxCategory,
    TaxReport,
    ReceiptCamera
} from '../../components/financial';
import { RevenueCharts } from '../../components/financial/RevenueCharts';

import { Colors } from '../../styles/theme/color';
import { Header } from '../../components/common/Header';
import { FinancialStyles } from '../../styles/FinancialStyles';

interface Settlement {
    id: string;
    date: string;
    venue: string;
    guarantee: number;
    ticketSales: number;
    merchandise: number;
    expenses: number;
    netProfit: number;
    paymentStatus: 'pending' | 'paid' | 'overdue';
}

interface Expense {
    id: string;
    date: string;
    venue: string;
    category: string;
    description: string;
    amount: number;
    currency: string;
    taxCategory: TaxCategory;
    paidBy: string;
}

interface FinancialDay {
    date: string;
    totalIncome: number;
    totalExpenses: number;
    netProfit: number;
    expenses: Expense[];
    settlements: Settlement[];
}

const FinancialScreen: React.FC = () => {
    const [financialData, setFinancialData] = useState<FinancialDay[]>([]);
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0]
    });
    const [showAddExpense, setShowAddExpense] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [filterCategory, setFilterCategory] = useState<string>('all');

    useEffect(() => {
        loadFinancialData();
    }, []);

    const loadFinancialData = async () => {
        try {
            // Mock data - in real app, this would be API calls
            const mockData: FinancialDay[] = [
                {
                    date: '2024-01-15',
                    totalIncome: 5000,
                    totalExpenses: 2000,
                    netProfit: 3000,
                    expenses: [],
                    settlements: []
                },
                // Add more mock data as needed
            ];
            setFinancialData(mockData);
        } catch (error) {
            console.error('Error loading financial data:', error);
            Alert.alert('Error', 'Failed to load financial data');
        }
    };

    const getTotalStats = () => {
        return financialData.reduce((acc, day) => ({
            income: acc.income + day.totalIncome,
            expenses: acc.expenses + day.totalExpenses,
            profit: acc.profit + day.netProfit
        }), { income: 0, expenses: 0, profit: 0 });
    };

    const getFilteredExpenses = () => {
        return financialData.flatMap((day: FinancialDay) => day.expenses)
            .filter(expense => filterCategory === 'all' || expense.taxCategory === filterCategory);
    };

    const handleAddExpense = (values: ExpenseFormData) => {
        const expense: Expense = {
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            venue: values.venue,
            category: values.category,
            description: values.description,
            amount: parseFloat(values.amount),
            currency: 'USD',
            taxCategory: values.taxCategory as TaxCategory,
            paidBy: values.paidBy
        };
        const updatedData = financialData.map((day: FinancialDay) => {
            if (day.date === expense.date) {
                return {
                    ...day,
                    expenses: [...day.expenses, expense],
                    totalExpenses: day.totalExpenses + expense.amount,
                    netProfit: day.netProfit - expense.amount,
                };
            }
            return day;
        });
        setFinancialData(updatedData);
        setShowAddExpense(false);
    };

    return (
        <SafeAreaView style={FinancialStyles.container}>
            <Header title="Financial Overview" />
            <ScrollView style={FinancialStyles.scrollView}>
                {/* Date Range Selector */}
                <View style={FinancialStyles.dateRangeContainer}>
                    <TouchableOpacity
                        style={FinancialStyles.dateButton}
                        onPress={() => setShowCalendar(true)}
                    >
                        <Ionicons name="calendar" size={24} color={Colors.text.primary} />
                        <Text style={FinancialStyles.dateButtonText}>
                            {selectedDateRange.startDate} - {selectedDateRange.endDate}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Revenue Charts */}
                <RevenueCharts financialData={financialData} />

                {/* Summary Cards */}
                <View style={FinancialStyles.summaryContainer}>
                    <ProfitLossCard
                        income={getTotalStats().income}
                        expenses={getTotalStats().expenses}
                        profit={getTotalStats().profit}
                    />
                    <BudgetProgress
                        current={getTotalStats().expenses}
                        target={getTotalStats().income}
                        label="Budget vs Expenses"
                    />
                </View>

                {/* Tax Category Filter */}
                <TaxCategoryFilter
                    categories={['business', 'meals', 'travel', 'equipment'] as TaxCategory[]}
                    selectedCategory={filterCategory}
                    onSelectCategory={setFilterCategory}
                />

                {/* Expense List */}
                <ExpenseTracker
                    expenses={getFilteredExpenses()}
                    onDeleteExpense={(id) => {
                        const updatedData = financialData.map((day: FinancialDay) => {
                            const expense = day.expenses.find(e => e.id === id);
                            if (expense) {
                                return {
                                    ...day,
                                    expenses: day.expenses.filter(e => e.id !== id),
                                    totalExpenses: day.totalExpenses - expense.amount,
                                    netProfit: day.netProfit + expense.amount,
                                };
                            }
                            return day;
                        });
                        setFinancialData(updatedData);
                    }}
                />

                {/* Add Expense Button */}
                <TouchableOpacity
                    style={FinancialStyles.addButton}
                    onPress={() => setShowAddExpense(true)}
                >
                    <Ionicons name="add" size={24} color={Colors.text.primary} />
                </TouchableOpacity>

                {/* Add Expense Modal */}
                <Modal
                    visible={showAddExpense}
                    animationType="slide"
                    transparent={true}
                >
                    <View style={FinancialStyles.modalContainer}>
                        <View style={FinancialStyles.modalContent}>
                            <View style={FinancialStyles.modalHeader}>
                                <Text style={FinancialStyles.modalTitle}>Add Expense</Text>
                                <TouchableOpacity
                                    onPress={() => setShowAddExpense(false)}
                                    style={FinancialStyles.closeButton}
                                >
                                    <Ionicons name="close" size={24} color={Colors.text.primary} />
                                </TouchableOpacity>
                            </View>

                            <ExpenseForm
                                onSave={handleAddExpense}
                                onCancel={() => setShowAddExpense(false)}
                            />
                        </View>
                    </View>
                </Modal>

                {/* Calendar Modal */}
                <Modal
                    visible={showCalendar}
                    animationType="slide"
                    transparent={true}
                >
                    <View style={FinancialStyles.modalContainer}>
                        <View style={FinancialStyles.modalContent}>
                            <View style={FinancialStyles.modalHeader}>
                                <Text style={FinancialStyles.modalTitle}>Select Date Range</Text>
                                <TouchableOpacity
                                    onPress={() => setShowCalendar(false)}
                                    style={FinancialStyles.closeButton}
                                >
                                    <Ionicons name="close" size={24} color={Colors.text.primary} />
                                </TouchableOpacity>
                            </View>

                            <Calendar
                                onDayPress={(day: { dateString: string }) => {
                                    if (!selectedDateRange.startDate ||
                                        (selectedDateRange.startDate && selectedDateRange.endDate)) {
                                        setSelectedDateRange({
                                            startDate: day.dateString,
                                            endDate: day.dateString
                                        });
                                    } else if (day.dateString > selectedDateRange.startDate) {
                                        setSelectedDateRange({
                                            ...selectedDateRange,
                                            endDate: day.dateString
                                        });
                                    } else {
                                        setSelectedDateRange({
                                            startDate: day.dateString,
                                            endDate: selectedDateRange.startDate
                                        });
                                    }
                                }}
                                markedDates={{
                                    [selectedDateRange.startDate]: { selected: true, startingDay: true },
                                    [selectedDateRange.endDate]: { selected: true, endingDay: true },
                                }}
                                markingType="period"
                            />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FinancialScreen;