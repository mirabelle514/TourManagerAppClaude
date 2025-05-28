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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      <View style={styles.header}>
        <Text style={styles.title}>Tour Manager</Text>
        <Text style={styles.subtitle}>Professional Tour Management</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome to Tour Manager</Text>
          <Text style={styles.welcomeText}>
            Your comprehensive solution for managing band tours, schedules,
            finances, and team communication.
          </Text>
        </View>

        <View style={styles.featuresGrid}>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>📅</Text>
            <Text style={styles.featureTitle}>Day Sheets</Text>
            <Text style={styles.featureDesc}>Manage daily tour operations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>💰</Text>
            <Text style={styles.featureTitle}>Financial</Text>
            <Text style={styles.featureDesc}>Track expenses and profits</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>📦</Text>
            <Text style={styles.featureTitle}>Merchandise</Text>
            <Text style={styles.featureDesc}>Inventory and sales tracking</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>👥</Text>
            <Text style={styles.featureTitle}>Team</Text>
            <Text style={styles.featureDesc}>Crew communication hub</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.setupButton}>
          <Text style={styles.setupButtonText}>Start Tour Setup</Text>
        </TouchableOpacity>
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
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#b0b0b0',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeCard: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#b0b0b0',
    lineHeight: 24,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: '#1a1a1a',
    width: '48%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 5,
  },
  featureDesc: {
    fontSize: 12,
    color: '#b0b0b0',
    textAlign: 'center',
  },
  setupButton: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  setupButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
});