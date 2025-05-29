import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { NavigationProp, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.content}>
                <Text style={styles.title}>Tour Manager</Text>
                <Text style={styles.subtitle}>Sign in to your account</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#666"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity
                    style={[styles.loginButton, loading && styles.loginButtonDisabled]}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    <Text style={styles.loginButtonText}>
                        {loading ? 'Signing In...' : 'Sign In'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.forgotPasswordButton}
                    onPress={handleForgotPassword}
                >
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Development/Demo Helper */}
                {__DEV__ && (
                    <View style={styles.devHelper}>
                        <Text style={styles.devHelperText}>Demo: Use any email with @ and password 6+ chars</Text>
                    </View>
                )}
            </View>
        </KeyboardAvoidingView>
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
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginBottom: 32,
    },
    inputContainer: {
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#16213e',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        color: '#fff',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#0f3460',
    },
    loginButton: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginBottom: 16,
    },
    loginButtonDisabled: {
        backgroundColor: '#555',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    forgotPasswordButton: {
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#007AFF',
        fontSize: 14,
    },
    devHelper: {
        marginTop: 32,
        padding: 12,
        backgroundColor: '#333',
        borderRadius: 8,
    },
    devHelperText: {
        color: '#888',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default LoginScreen;