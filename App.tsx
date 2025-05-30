import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

// Screens
import LoginScreen from './src/screens/auth/LoginScreen';
import BiometricSetupScreen from './src/screens/auth/BiometricSetupScreen';
import TourSetupWizard from './src/screens/setup/TourSetupWizard';
import MainAppScreen from './src/screens/MainAppScreen';
import LoadingScreen from './src/components/common/LoadingScreen';

// Main App Screens
import DaySheetScreen from './src/screens/main/DaySheetScreen';
import FinancialScreen from './src/screens/main/FinancialScreen';
import MerchandiseScreen from './src/screens/main/MerchandiseScreen';
import TeamScreen from './src/screens/main/TeamScreen';
import ScheduleScreen from './src/screens/main/ScheduleScreen';
import SettingsScreen from './src/screens/main/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tourSetupComplete, setTourSetupComplete] = useState(false);
  const [biometricSetupComplete, setBiometricSetupComplete] = useState(false);

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      // Check if user is authenticated
      const authToken = await AsyncStorage.getItem('authToken');
      const biometricEnabled = await AsyncStorage.getItem('biometricEnabled');
      const tourSetup = await AsyncStorage.getItem('tourSetupComplete');

      setIsAuthenticated(!!authToken);
      setBiometricSetupComplete(!!biometricEnabled);
      setTourSetupComplete(!!tourSetup);
    } catch (error) {
      console.error('Error checking app state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#1a1a2e" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false, // Prevent going back during setup
        }}
        initialRouteName={
          !isAuthenticated
            ? "Login"
            : !biometricSetupComplete
              ? "BiometricSetup"
              : !tourSetupComplete
                ? "TourSetup"
                : "MainApp"
        }
      >
        {/* Authentication Flow */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ gestureEnabled: false }}
        />

        {/* Biometric Setup Flow */}
        <Stack.Screen
          name="BiometricSetup"
          component={BiometricSetupScreen}
          options={{ gestureEnabled: false }}
        />

        {/* Tour Setup Flow */}
        <Stack.Screen
          name="TourSetup"
          component={TourSetupWizard}
          options={{ gestureEnabled: false }}
        />

        {/* Main App */}
        <Stack.Screen
          name="MainApp"
          component={MainAppScreen}
          options={{ gestureEnabled: true }}
        />

        {/* Feature Screens */}
        <Stack.Screen
          name="DaySheet"
          component={DaySheetScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Financial"
          component={FinancialScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Merchandise"
          component={MerchandiseScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Team"
          component={TeamScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ gestureEnabled: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}