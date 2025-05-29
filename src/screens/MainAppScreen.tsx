import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MainAppScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

            <View style={styles.header}>
                <Text style={styles.title}>Tour Manager</Text>
                <Text style={styles.subtitle}>Welcome back! Your tour is ready to manage.</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.welcomeCard}>
                    <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
                    <Text style={styles.welcomeTitle}>Setup Complete!</Text>
                    <Text style={styles.welcomeText}>
                        Your tour management app is now configured and ready to use.
                        All features are now available.
                    </Text>
                </View>

                <View style={styles.featuresGrid}>
                    <TouchableOpacity style={styles.featureCard}>
                        <Ionicons name="calendar" size={32} color="#4CAF50" />
                        <Text style={styles.featureTitle}>Day Sheets</Text>
                        <Text style={styles.featureDesc}>Manage daily tour operations</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.featureCard}>
                        <Ionicons name="cash" size={32} color="#4CAF50" />
                        <Text style={styles.featureTitle}>Financial</Text>
                        <Text style={styles.featureDesc}>Track expenses and profits</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.featureCard}>
                        <Ionicons name="storefront" size={32} color="#4CAF50" />
                        <Text style={styles.featureTitle}>Merchandise</Text>
                        <Text style={styles.featureDesc}>Inventory and sales tracking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.featureCard}>
                        <Ionicons name="people" size={32} color="#4CAF50" />
                        <Text style={styles.featureTitle}>Team</Text>
                        <Text style={styles.featureDesc}>Crew communication hub</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.quickActions}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="add-circle" size={24} color="#ffffff" />
                        <Text style={styles.actionText}>Add Today's Show</Text>
                        <Ionicons name="chevron-forward" size={20} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="person-add" size={24} color="#ffffff" />
                        <Text style={styles.actionText}>Invite Team Members</Text>
                        <Ionicons name="chevron-forward" size={20} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="settings" size={24} color="#ffffff" />
                        <Text style={styles.actionText}>Tour Settings</Text>
                        <Ionicons name="chevron-forward" size={20} color="#666" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    header: {
        backgroundColor: '#1a1a2e',
        paddingHorizontal: 20,
        paddingVertical: 24,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#cccccc',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    welcomeCard: {
        backgroundColor: '#1a1a1a',
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#333',
    },
    welcomeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 16,
        marginBottom: 12,
    },
    welcomeText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        lineHeight: 24,
    },
    featuresGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    featureCard: {
        width: '48%',
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#333',
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        marginTop: 12,
        marginBottom: 4,
    },
    featureDesc: {
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
    },
    quickActions: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 16,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#333',
    },
    actionText: {
        fontSize: 16,
        color: '#ffffff',
        flex: 1,
        marginLeft: 12,
    },
});