import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles/CommonStyles';
import { Colors } from '../../styles/theme';

interface Income {
    id: string;
    date: string;
    venue: string;
    category: string;
    description: string;
    amount: number;
    currency: string;
    paymentMethod: 'cash' | 'card' | 'transfer' | 'other';
    receivedBy: string;
}

interface IncomeTrackerProps {
    income: Income[];
    onAddIncome: (income: Omit<Income, 'id'>) => void;
    onDeleteIncome: (id: string) => void;
}

export const IncomeTracker: React.FC<IncomeTrackerProps> = ({
    income,
    onAddIncome,
    onDeleteIncome
}) => {
    const [showAddForm, setShowAddForm] = React.useState(false);
    const [newIncome, setNewIncome] = React.useState({
        description: '',
        amount: '',
        category: '',
        paymentMethod: 'cash' as const,
        venue: '',
        receivedBy: ''
    });

    const handleAddIncome = () => {
        if (!newIncome.description || !newIncome.amount) return;

        onAddIncome({
            date: new Date().toISOString().split('T')[0],
            description: newIncome.description,
            amount: parseFloat(newIncome.amount),
            category: newIncome.category,
            paymentMethod: newIncome.paymentMethod,
            venue: newIncome.venue,
            currency: 'USD',
            receivedBy: newIncome.receivedBy
        });

        setNewIncome({
            description: '',
            amount: '',
            category: '',
            paymentMethod: 'cash',
            venue: '',
            receivedBy: ''
        });
        setShowAddForm(false);
    };

    return (
        <View style={CommonStyles.card}>
            <View style={CommonStyles.cardHeader}>
                <Text style={CommonStyles.cardTitle}>Income</Text>
                <TouchableOpacity
                    style={CommonStyles.addButton}
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
                        value={newIncome.description}
                        onChangeText={(text) => setNewIncome({ ...newIncome, description: text })}
                    />
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Amount"
                        value={newIncome.amount}
                        onChangeText={(text) => setNewIncome({ ...newIncome, amount: text })}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Category"
                        value={newIncome.category}
                        onChangeText={(text) => setNewIncome({ ...newIncome, category: text })}
                    />
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Venue"
                        value={newIncome.venue}
                        onChangeText={(text) => setNewIncome({ ...newIncome, venue: text })}
                    />
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Received By"
                        value={newIncome.receivedBy}
                        onChangeText={(text) => setNewIncome({ ...newIncome, receivedBy: text })}
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
                            onPress={handleAddIncome}
                        >
                            <Text style={CommonStyles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {income.map((item) => (
                <View key={item.id} style={CommonStyles.incomeItem}>
                    <View style={CommonStyles.incomeHeader}>
                        <Text style={CommonStyles.incomeDescription}>{item.description}</Text>
                        <Text style={[CommonStyles.incomeAmount, { color: Colors.status.success }]}>
                            +${item.amount.toFixed(2)}
                        </Text>
                    </View>
                    <View style={CommonStyles.incomeDetails}>
                        <Text style={CommonStyles.incomeDate}>{item.date} • {item.venue}</Text>
                        <View style={[CommonStyles.categoryBadge, {
                            backgroundColor: getPaymentMethodColor(item.paymentMethod) + '20'
                        }]}>
                            <Text style={[CommonStyles.categoryText, {
                                color: getPaymentMethodColor(item.paymentMethod)
                            }]}>
                                {item.paymentMethod.charAt(0).toUpperCase() + item.paymentMethod.slice(1)}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={CommonStyles.deleteButton}
                        onPress={() => onDeleteIncome(item.id)}
                    >
                        <Ionicons name="trash-outline" size={20} color={Colors.status.error} />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const getPaymentMethodColor = (method: string) => {
    switch (method) {
        case 'cash':
            return Colors.status.success;
        case 'card':
            return Colors.status.info;
        case 'transfer':
            return Colors.status.warning;
        default:
            return Colors.text.secondary;
    }
}; 