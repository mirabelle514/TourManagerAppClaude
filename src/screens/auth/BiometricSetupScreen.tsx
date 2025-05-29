import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { NavigationProp, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonStyles } from '../../styles/CommonStyles';

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
        <View style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <Text style={CommonStyles.title}>Enable Biometric Login</Text>
                <Text style={CommonStyles.subtitle}>
                    Use your fingerprint or face to securely access the app
                </Text>

                <TouchableOpacity
                    style={[CommonStyles.primaryButton, loading && CommonStyles.disabledButton]}
                    onPress={handleEnableBiometrics}
                    disabled={loading}
                >
                    <Text style={CommonStyles.primaryButtonText}>
                        {loading ? 'Setting up...' : 'Enable Biometrics'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={CommonStyles.secondaryButton}
                    onPress={handleSkipBiometrics}
                    disabled={loading}
                >
                    <Text style={CommonStyles.secondaryButtonText}>Skip for Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BiometricSetupScreen;