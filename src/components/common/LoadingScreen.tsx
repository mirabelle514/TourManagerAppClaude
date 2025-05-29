import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <Ionicons name="musical-notes" size={80} color="#4CAF50" />
            <Text style={styles.title}>Tour Manager</Text>
            <ActivityIndicator size="large" color="#4CAF50" style={styles.spinner} />
            <Text style={styles.subtitle}>Loading your tour management app...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 16,
        marginBottom: 32,
    },
    spinner: {
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: '#b0b0b0',
        textAlign: 'center',
    },
});