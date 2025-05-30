import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/theme/color';

interface SuccessMessageProps {
    message: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="checkmark-circle" size={48} color={Colors.accent.primary.main} />
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    message: {
        marginTop: 10,
        fontSize: 16,
        color: Colors.text.primary,
        textAlign: 'center',
    },
}); 