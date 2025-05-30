import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles/CommonStyles';
import { Colors, Typography, Spacing } from '../../styles/theme/index';
import { FinancialStyles } from '../../styles/FinancialStyles';

export interface Expense {
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

export interface ExpenseTrackerProps {
    expenses: Expense[];
    onDeleteExpense: (id: string) => void;
    onAddExpense?: (expense: Expense) => void;
}

export const ExpenseTracker: React.FC<ExpenseTrackerProps> = ({
    expenses,
    onDeleteExpense,
    onAddExpense,
}) => {
    const [showAddForm, setShowAddForm] = React.useState(false);
    const [newExpense, setNewExpense] = React.useState({
        description: '',
        amount: '',
        category: '',
        taxCategory: 'business' as const,
        venue: '',
        paidBy: ''
    });

    const handleAddExpense = () => {
        if (!newExpense.description || !newExpense.amount) return;

        onAddExpense?.({
            date: new Date().toISOString().split('T')[0],
            description: newExpense.description,
            amount: parseFloat(newExpense.amount),
            category: newExpense.category,
            taxCategory: newExpense.taxCategory,
            venue: newExpense.venue,
            currency: 'USD',
            paidBy: newExpense.paidBy
        });

        setNewExpense({
            description: '',
            amount: '',
            category: '',
            taxCategory: 'business',
            venue: '',
            paidBy: ''
        });
        setShowAddForm(false);
    };

    return (
        <View style={CommonStyles.card}>
            <View style={CommonStyles.cardHeader}>
                <Text style={CommonStyles.cardTitle}>Expenses</Text>
                <TouchableOpacity
                    style={FinancialStyles.addButton}
                    onPress={() => setShowAddForm(true)}
                >
                    <Ionicons name="add" size={24} color={Colors.text.primary} />
                </TouchableOpacity>
            </View>

            {showAddForm && (
                <View style={CommonStyles.form}>
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Description"
                        value={newExpense.description}
                        onChangeText={(text) => setNewExpense({ ...newExpense, description: text })}
                    />
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Amount"
                        value={newExpense.amount}
                        onChangeText={(text) => setNewExpense({ ...newExpense, amount: text })}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Category"
                        value={newExpense.category}
                        onChangeText={(text) => setNewExpense({ ...newExpense, category: text })}
                    />
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Venue"
                        value={newExpense.venue}
                        onChangeText={(text) => setNewExpense({ ...newExpense, venue: text })}
                    />
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Paid By"
                        value={newExpense.paidBy}
                        onChangeText={(text) => setNewExpense({ ...newExpense, paidBy: text })}
                    />
                    <View style={CommonStyles.buttonRow}>
                        <TouchableOpacity
                            style={[CommonStyles.button, CommonStyles.cancelButton]}
                            onPress={() => setShowAddForm(false)}
                        >
                            <Text style={CommonStyles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[CommonStyles.button, CommonStyles.saveButton]}
                            onPress={handleAddExpense}
                        >
                            <Text style={CommonStyles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {expenses.map((expense) => (
                <View key={expense.id} style={FinancialStyles.expenseItem}>
                    <View style={FinancialStyles.expenseHeader}>
                        <Text style={FinancialStyles.expenseDescription}>{expense.description}</Text>
                        <Text style={[FinancialStyles.expenseAmount, { color: Colors.status.error }]}>
                            -${expense.amount.toFixed(2)}
                        </Text>
                    </View>
                    <View style={FinancialStyles.expenseDetails}>
                        <Text style={FinancialStyles.expenseDate}>{expense.date} • {expense.venue}</Text>
                        <View style={[FinancialStyles.categoryBadge, {
                            backgroundColor: getTaxCategoryColor(expense.taxCategory) + '20'
                        }]}>
                            <Text style={[FinancialStyles.categoryText, {
                                color: getTaxCategoryColor(expense.taxCategory)
                            }]}>
                                {expense.taxCategory.charAt(0).toUpperCase() + expense.taxCategory.slice(1)}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={FinancialStyles.deleteButton}
                        onPress={() => onDeleteExpense(expense.id)}
                    >
                        <Ionicons name="trash-outline" size={20} color={Colors.status.error} />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const getTaxCategoryColor = (category: string) => {
    switch (category) {
        case 'business':
            return Colors.status.success;
        case 'meals':
            return Colors.status.warning;
        case 'travel':
            return Colors.status.info;
        case 'equipment':
            return Colors.status.error;
        default:
            return Colors.text.secondary;
    }
};
