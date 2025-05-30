import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../styles/theme/color';
import { TaxCategory } from './TaxCategoryFilter';

export interface ExpenseFormData {
    description: string;
    amount: string;
    category: string;
    taxCategory: TaxCategory;
    venue: string;
    paidBy: string;
}

export interface ExpenseFormProps {
    onSave: (values: ExpenseFormData) => void;
    onCancel: () => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSave, onCancel }) => {
    const [formData, setFormData] = React.useState<ExpenseFormData>({
        description: '',
        amount: '',
        category: '',
        taxCategory: 'business',
        venue: '',
        paidBy: '',
    });

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={formData.description}
                onChangeText={(text) => setFormData({ ...formData, description: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Amount"
                value={formData.amount}
                onChangeText={(text) => setFormData({ ...formData, amount: text })}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Category"
                value={formData.category}
                onChangeText={(text) => setFormData({ ...formData, category: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Venue"
                value={formData.venue}
                onChangeText={(text) => setFormData({ ...formData, venue: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Paid By"
                value={formData.paidBy}
                onChangeText={(text) => setFormData({ ...formData, paidBy: text })}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        color: Colors.text.primary,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
    },
    cancelButton: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: Colors.error.main,
    },
    saveButton: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: Colors.accent.primary.main,
    },
    buttonText: {
        color: Colors.text.primary,
        fontSize: 16,
        fontWeight: 'bold',
    },
});