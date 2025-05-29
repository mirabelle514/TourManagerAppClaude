import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { NavigationProp, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BiometricSetupScreenProps {
    navigation: NavigationProp<any>;
}

const BiometricSetupScreen: React.FC<BiometricSetupScreenProps> = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleSkipBiometrics = async () => {
        try {
            // Mark biometric setup as completed (even if skipped)
            await AsyncStorage.setItem('biometricEnabled', 'skipped');

            // Check if tour setup is needed
            const tourSetup = await AsyncStorage.getItem('tourSetupComplete');

            if (!tourSetup) {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'TourSetup' }],
                    })
                );
            } else {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'MainApp' }],
                    })
                );
            }
        } catch (error) {
            console.error('Error skipping biometrics:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    const handleEnableBiometrics = async () => {
        setLoading(true);

        try {
            // Simulate biometric setup - replace with actual biometric library
            await new Promise(resolve => setTimeout(resolve, 1000));

            // For now, just mark as enabled
            await AsyncStorage.setItem('biometricEnabled', 'true');

            Alert.alert(
                'Success',
                'Biometric authentication enabled!',
                [
                    {
                        text: 'Continue',
                        onPress: async () => {
                            // Check if tour setup is needed
                            const tourSetup = await AsyncStorage.getItem('tourSetupComplete');

                            if (!tourSetup) {
                                navigation.dispatch(
                                    CommonActions.reset({
                                        index: 0,
                                        routes: [{ name: 'TourSetup' }],
                                    })
                                );
                            } else {
                                navigation.dispatch(
                                    CommonActions.reset({
                                        index: 0,
                                        routes: [{ name: 'MainApp' }],
                                    })
                                );
                            }
                        }
                    }
                ]
            );

        } catch (error) {
            console.error('Biometric setup error:', error);
            Alert.alert('Error', 'Failed to enable biometric authentication. You can skip this step for now.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Enable Biometric Login</Text>
                <Text style={styles.subtitle}>
                    Use your fingerprint or face to securely access the app
                </Text>

                <TouchableOpacity
                    style={[styles.enableButton, loading && styles.buttonDisabled]}
                    onPress={handleEnableBiometrics}
                    disabled={loading}
                >
                    <Text style={styles.enableButtonText}>
                        {loading ? 'Setting up...' : 'Enable Biometrics'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.skipButton}
                    onPress={handleSkipBiometrics}
                    disabled={loading}
                >
                    <Text style={styles.skipButtonText}>Skip for Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginBottom: 48,
        lineHeight: 22,
    },
    enableButton: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonDisabled: {
        backgroundColor: '#555',
    },
    enableButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    skipButton: {
        alignItems: 'center',
        padding: 16,
    },
    skipButtonText: {
        color: '#888',
        fontSize: 14,
    },
});

export default BiometricSetupScreen;