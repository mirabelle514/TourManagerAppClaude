import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/theme';
import { CommonStyles } from '../../styles/CommonStyles';

export interface ExpenseFormValues {
    description: string;
    amount: string;
    category: string;
    taxCategory: 'business' | 'meals' | 'travel' | 'equipment' | 'other';
    venue: string;
    paidBy: string;
}

interface ExpenseFormProps {
    initialValues?: ExpenseFormValues;
    onSave: (values: ExpenseFormValues) => void;
    onCancel: () => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ initialValues, onSave, onCancel }) => {
    const [values, setValues] = useState<ExpenseFormValues>(
        initialValues || {
            description: '',
            amount: '',
            category: '',
            taxCategory: 'business',
            venue: '',
            paidBy: ''
        }
    );

    const taxCategories = [
        { id: 'business', label: 'Business', color: Colors.status.success },
        { id: 'meals', label: 'Meals', color: Colors.status.warning },
        { id: 'travel', label: 'Travel', color: Colors.status.info },
        { id: 'equipment', label: 'Equipment', color: Colors.status.error },
        { id: 'other', label: 'Other', color: Colors.text.secondary },
    ];

    return (
        <View style={CommonStyles.card}>
            <Text style={CommonStyles.cardTitle}>Expense Details</Text>
            <TextInput
                style={CommonStyles.input}
                placeholder="Description"
                value={values.description}
                onChangeText={text => setValues({ ...values, description: text })}
            />
            <TextInput
                style={CommonStyles.input}
                placeholder="Amount"
                value={values.amount}
                onChangeText={text => setValues({ ...values, amount: text })}
                keyboardType="numeric"
            />
            <TextInput
                style={CommonStyles.input}
                placeholder="Category"
                value={values.category}
                onChangeText={text => setValues({ ...values, category: text })}
            />
            <TextInput
                style={CommonStyles.input}
                placeholder="Venue"
                value={values.venue}
                onChangeText={text => setValues({ ...values, venue: text })}
            />
            <TextInput
                style={CommonStyles.input}
                placeholder="Paid By"
                value={values.paidBy}
                onChangeText={text => setValues({ ...values, paidBy: text })}
            />
            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                {taxCategories.map(cat => (
                    <TouchableOpacity
                        key={cat.id}
                        style={{
                            backgroundColor: values.taxCategory === cat.id ? cat.color : cat.color + '20',
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderRadius: 12,
                            marginRight: 8,
                        }}
                        onPress={() => setValues({ ...values, taxCategory: cat.id as any })}
                    >
                        <Text style={{ color: values.taxCategory === cat.id ? '#fff' : cat.color, fontWeight: '600', fontSize: 13 }}>{cat.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={CommonStyles.buttonRow}>
                <TouchableOpacity style={[CommonStyles.button, CommonStyles.cancelButton]} onPress={onCancel}>
                    <Text style={CommonStyles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[CommonStyles.button, CommonStyles.saveButton]} onPress={() => onSave(values)}>
                    <Text style={CommonStyles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};