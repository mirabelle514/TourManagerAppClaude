import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { NavigationProp, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonStyles } from '../../styles/CommonStyles';
import { FormStyles } from '../../styles/FormStyles';
import { Colors } from '../../styles/theme';

interface LoginScreenProps {
    navigation: NavigationProp<any>;
    onAuthStateChange?: (authState: boolean) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, onAuthStateChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);

        try {
            // Simulate login API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock authentication - replace with your actual auth logic
            const loginSuccessful = email.includes('@') && password.length >= 6;

            if (loginSuccessful) {
                // Store auth token
                await AsyncStorage.setItem('authToken', 'mock-jwt-token');

                // Update auth state in parent component
                if (onAuthStateChange) {
                    onAuthStateChange(true);
                }

                // Check if biometric setup is needed
                const biometricEnabled = await AsyncStorage.getItem('biometricEnabled');

                if (!biometricEnabled) {
                    // Navigate to biometric setup
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'BiometricSetup' }],
                        })
                    );
                } else {
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

            } else {
                Alert.alert('Error', 'Invalid email or password');
            }
        } catch (error) {
            Alert.alert('Error', 'Login failed. Please try again.');
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <KeyboardAvoidingView
            style={CommonStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={CommonStyles.content}>
                <Text style={CommonStyles.title}>Tour Manager</Text>
                <Text style={CommonStyles.subtitle}>Sign in to your account</Text>

                <View style={FormStyles.inputContainer}>
                    <TextInput
                        style={FormStyles.input}
                        placeholder="Email"
                        placeholderTextColor={Colors.text.secondary}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TextInput
                        style={FormStyles.input}
                        placeholder="Password"
                        placeholderTextColor={Colors.text.secondary}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity
                    style={[CommonStyles.primaryButton, loading && CommonStyles.disabledButton]}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    <Text style={CommonStyles.primaryButtonText}>
                        {loading ? 'Signing In...' : 'Sign In'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={CommonStyles.secondaryButton}
                    onPress={handleForgotPassword}
                >
                    <Text style={CommonStyles.secondaryButtonText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Development/Demo Helper */}
                {__DEV__ && (
                    <View style={CommonStyles.devHelper}>
                        <Text style={CommonStyles.devHelperText}>Demo: Use any email with @ and password 6+ chars</Text>
                    </View>
                )}
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;