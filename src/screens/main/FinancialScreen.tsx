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
import { ProfitLossCard } from '../components/financial/ProfitLossCard';
import { ExpenseTracker } from '../components/financial/ExpenseTracker';
import { SettlementSummary } from '../components/financial/SettlementSummary';
import { TaxCategoryFilter } from '../components/financial/TaxCategoryFilter';
import { Colors } from '../../styles/theme';
import { CommonStyles } from '../../styles/CommonStyles';
import { Header } from '../../components/common/Header';
import { FinancialStyles } from '../../styles/FinancialStyles';

// Types
interface Expense {
    id: string;
    date: string;
    venue: string;
    category: string;
    description: string;
    amount: number;
    currency: string;
    taxCategory: 'business' | 'meals' | 'travel' | 'equipment' | 'other';
    receipt?: string;
    paidBy: string;
}

interface Settlement {
    id: string;
    date: string;
    venue: string;
    guarantee: number;
    ticketSales: number;
    merchandise: number;
    expenses: number;
    netProfit: number;
    paymentStatus: 'pending' | 'received' | 'partial';
}

interface DailyFinancial {
    date: string;
    totalIncome: number;
    totalExpenses: number;
    netProfit: number;
    settlements: Settlement[];
    expenses: Expense[];
}

const FinancialScreen: React.FC = () => {
    const [financialData, setFinancialData] = useState<DailyFinancial[]>([]);
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
    });
    const [filterCategory, setFilterCategory] = useState<string>('all');
    const [showAddExpense, setShowAddExpense] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [newExpense, setNewExpense] = useState({
        description: '',
        amount: '',
        category: 'other',
        taxCategory: 'business' as const,
    });

    const taxCategories = [
        { id: 'all', label: 'All Categories', color: Colors.primary },
        { id: 'business', label: 'Business', color: Colors.status.success },
        { id: 'meals', label: 'Meals', color: Colors.status.warning },
        { id: 'travel', label: 'Travel', color: Colors.status.info },
        { id: 'equipment', label: 'Equipment', color: Colors.status.error },
        { id: 'other', label: 'Other', color: Colors.text.secondary },
    ];

    useEffect(() => {
        loadFinancialData();
    }, [selectedDateRange, filterCategory]);

    const loadFinancialData = async () => {
        try {
            // Mock data - in real app, this would be API calls
            const mockData: DailyFinancial[] = [
                {
                    date: '2024-01-15',
                    totalIncome: 8500,
                    totalExpenses: 2300,
                    netProfit: 6200,
                    settlements: [
                        {
                            id: '1',
                            date: '2024-01-15',
                            venue: 'The Fillmore',
                            guarantee: 5000,
                            ticketSales: 3000,
                            merchandise: 500,
                            expenses: 1200,
                            netProfit: 7300,
                            paymentStatus: 'received'
                        }
                    ],
                    expenses: [
                        {
                            id: '1',
                            date: '2024-01-15',
                            venue: 'The Fillmore',
                            category: 'Fuel',
                            description: 'Gas for tour bus',
                            amount: 180,
                            currency: 'USD',
                            taxCategory: 'travel',
                            paidBy: 'Tour Manager'
                        },
                        {
                            id: '2',
                            date: '2024-01-15',
                            venue: 'The Fillmore',
                            category: 'Meals',
                            description: 'Crew dinner',
                            amount: 320,
                            currency: 'USD',
                            taxCategory: 'meals',
                            paidBy: 'Band Leader'
                        }
                    ]
                },
                {
                    date: '2024-01-14',
                    totalIncome: 6200,
                    totalExpenses: 1800,
                    netProfit: 4400,
                    settlements: [
                        {
                            id: '2',
                            date: '2024-01-14',
                            venue: 'Bottom Lounge',
                            guarantee: 4000,
                            ticketSales: 1800,
                            merchandise: 400,
                            expenses: 900,
                            netProfit: 5300,
                            paymentStatus: 'pending'
                        }
                    ],
                    expenses: [
                        {
                            id: '3',
                            date: '2024-01-14',
                            venue: 'Bottom Lounge',
                            category: 'Hotel',
                            description: 'Crew accommodation',
                            amount: 450,
                            currency: 'USD',
                            taxCategory: 'travel',
                            paidBy: 'Tour Manager'
                        }
                    ]
                }
            ];

            const filtered = mockData.filter(day => {
                const dayDate = new Date(day.date);
                const startDate = new Date(selectedDateRange.startDate);
                const endDate = new Date(selectedDateRange.endDate);
                return dayDate >= startDate && dayDate <= endDate;
            });

            setFinancialData(filtered);
        } catch (error) {
            Alert.alert('Error', 'Failed to load financial data');
        }
    };

    const getTotalStats = () => {
        const totals = financialData.reduce(
            (acc, day) => ({
                income: acc.income + day.totalIncome,
                expenses: acc.expenses + day.totalExpenses,
                profit: acc.profit + day.netProfit,
            }),
            { income: 0, expenses: 0, profit: 0 }
        );
        return totals;
    };

    const getFilteredExpenses = () => {
        const allExpenses = financialData.flatMap(day => day.expenses);
        if (filterCategory === 'all') return allExpenses;
        return allExpenses.filter(expense => expense.taxCategory === filterCategory);
    };

    const handleAddExpense = () => {
        if (!newExpense.description || !newExpense.amount) {
            Alert.alert('Error', 'Please fill in all required fields');
            return;
        }

        const expense: Expense = {
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            venue: 'Current Location',
            category: newExpense.category,
            description: newExpense.description,
            amount: parseFloat(newExpense.amount),
            currency: 'USD',
            taxCategory: newExpense.taxCategory,
            paidBy: 'Current User'
        };

        // Add expense to current day's data
        const today = new Date().toISOString().split('T')[0];
        const updatedData = financialData.map(day => {
            if (day.date === today) {
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
        setNewExpense({ description: '', amount: '', category: 'other', taxCategory: 'business' });
        setShowAddExpense(false);
    };

    const renderExpenseItem = ({ item }: { item: Expense }) => (
        <View style={FinancialStyles.expenseItem}>
            <View style={FinancialStyles.expenseHeader}>
                <Text style={FinancialStyles.expenseDescription}>{item.description}</Text>
                <Text style={[FinancialStyles.expenseAmount, { color: Colors.status.error }]}>
                    -${item.amount.toFixed(2)}
                </Text>
            </View>
            <View style={FinancialStyles.expenseDetails}>
                <Text style={FinancialStyles.expenseDate}>{item.date} • {item.venue}</Text>
                <View style={[FinancialStyles.categoryBadge, {
                    backgroundColor: taxCategories.find(cat => cat.id === item.taxCategory)?.color + '20'
                }]}>
                    <Text style={[FinancialStyles.categoryText, {
                        color: taxCategories.find(cat => cat.id === item.taxCategory)?.color
                    }]}>
                        {taxCategories.find(cat => cat.id === item.taxCategory)?.label}
                    </Text>
                </View>
            </View>
        </View>
    );

    const totals = getTotalStats();
    const filteredExpenses = getFilteredExpenses();

    return (
        <SafeAreaView style={FinancialStyles.container}>
            <Header title="Financial Overview" />

            {/* Summary Cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={FinancialStyles.summaryRow}>
                <View style={[FinancialStyles.summaryCard, { backgroundColor: Colors.status.success }]}>
                    <Ionicons name="trending-up" size={24} color={Colors.text.primary} />
                    <Text style={FinancialStyles.summaryAmount}>${totals.income.toLocaleString()}</Text>
                    <Text style={FinancialStyles.summaryLabel}>Total Income</Text>
                </View>
                <View style={[FinancialStyles.summaryCard, { backgroundColor: Colors.status.error }]}>
                    <Ionicons name="trending-down" size={24} color={Colors.text.primary} />
                    <Text style={FinancialStyles.summaryAmount}>${totals.expenses.toLocaleString()}</Text>
                    <Text style={FinancialStyles.summaryLabel}>Total Expenses</Text>
                </View>
                <View style={[FinancialStyles.summaryCard, {
                    backgroundColor: totals.profit >= 0 ? '#2ecc71' : '#e74c3c'
                }]}>
                    <MaterialIcons name="account-balance-wallet" size={24} color="#fff" />
                    <Text style={FinancialStyles.summaryAmount}>${totals.profit.toLocaleString()}</Text>
                    <Text style={FinancialStyles.summaryLabel}>Net Profit</Text>
                </View>
            </ScrollView>

            {/* Tax Category Filter */}
            <TaxCategoryFilter
                categories={taxCategories}
                selectedCategory={filterCategory}
                onSelectCategory={setFilterCategory}
            />

            {/* Main Content */}
            <ScrollView style={FinancialStyles.mainContent}>
                {/* Daily Breakdown */}
                {financialData.map((day, index) => (
                    <ProfitLossCard
                        key={day.date}
                        date={day.date}
                        income={day.totalIncome}
                        expenses={day.totalExpenses}
                        profit={day.netProfit}
                        settlements={day.settlements}
                    />
                ))}

                {/* Recent Expenses */}
                <View style={FinancialStyles.expensesSection}>
                    <View style={FinancialStyles.expensesHeader}>
                        <Text style={FinancialStyles.sectionTitle}>Recent Expenses</Text>
                        <TouchableOpacity
                            style={FinancialStyles.addButton}
                            onPress={() => setShowAddExpense(true)}
                        >
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={filteredExpenses.slice(0, 10)}
                        renderItem={renderExpenseItem}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>

            {/* Add Expense Modal */}
            <Modal
                visible={showAddExpense}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={FinancialStyles.modalContainer}>
                    <View style={FinancialStyles.modalHeader}>
                        <TouchableOpacity onPress={() => setShowAddExpense(false)}>
                            <Ionicons name="close" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={FinancialStyles.modalTitle}>Add Expense</Text>
                        <TouchableOpacity onPress={handleAddExpense}>
                            <Text style={FinancialStyles.saveButton}>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={FinancialStyles.modalContent}>
                        <View style={FinancialStyles.inputGroup}>
                            <Text style={FinancialStyles.inputLabel}>Description</Text>
                            <TextInput
                                style={FinancialStyles.textInput}
                                value={newExpense.description}
                                onChangeText={(text) => setNewExpense({ ...newExpense, description: text })}
                                placeholder="Enter expense description"
                            />
                        </View>

                        <View style={FinancialStyles.inputGroup}>
                            <Text style={FinancialStyles.inputLabel}>Amount</Text>
                            <TextInput
                                style={FinancialStyles.textInput}
                                value={newExpense.amount}
                                onChangeText={(text) => setNewExpense({ ...newExpense, amount: text })}
                                placeholder="0.00"
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={FinancialStyles.inputGroup}>
                            <Text style={FinancialStyles.inputLabel}>Tax Category</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {taxCategories.slice(1).map((category) => (
                                    <TouchableOpacity
                                        key={category.id}
                                        style={[
                                            FinancialStyles.categoryButton,
                                            {
                                                backgroundColor: newExpense.taxCategory === category.id
                                                    ? category.color
                                                    : category.color + '20'
                                            }
                                        ]}
                                        onPress={() => setNewExpense({ ...newExpense, taxCategory: category.id as any })}
                                    >
                                        <Text style={[
                                            FinancialStyles.categoryButtonText,
                                            { color: category.color }
                                        ]}>
                                            {category.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>

            {/* Calendar Modal */}
            <Modal
                visible={showCalendar}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={FinancialStyles.modalContainer}>
                    <View style={FinancialStyles.modalHeader}>
                        <TouchableOpacity onPress={() => setShowCalendar(false)}>
                            <Ionicons name="close" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={FinancialStyles.modalTitle}>Select Date Range</Text>
                        <TouchableOpacity onPress={() => setShowCalendar(false)}>
                            <Text style={FinancialStyles.saveButton}>Done</Text>
                        </TouchableOpacity>
                    </View>

                    <Calendar
                        markingType={'period'}
                        markedDates={{
                            [selectedDateRange.startDate]: {
                                startingDay: true,
                                color: '#3498db',
                                textColor: 'white'
                            },
                            [selectedDateRange.endDate]: {
                                endingDay: true,
                                color: '#3498db',
                                textColor: 'white'
                            }
                        }}
                        onDayPress={(day) => {
                            // Simple date range selection logic
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
                    />
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    );
};

export default FinancialScreen;