import React from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CommonStyles } from '../styles/CommonStyles';
import { Colors } from '../styles/theme';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function MainAppScreen() {
    const navigation = useNavigation<NavigationProp>();

    const navigateToScreen = (screenName: keyof RootStackParamList) => {
        navigation.navigate(screenName);
    };

    return (
        <SafeAreaView style={CommonStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.background.header} />

            <View style={CommonStyles.header}>
                <Text style={CommonStyles.title}>Tour Manager</Text>
                <Text style={CommonStyles.subtitle}>Welcome back! Your tour is ready to manage.</Text>
            </View>

            <ScrollView style={CommonStyles.content}>
                <View style={CommonStyles.welcomeCard}>
                    <Ionicons name="checkmark-circle" size={48} color={Colors.accent.primary} />
                    <Text style={CommonStyles.welcomeTitle}>Setup Complete!</Text>
                    <Text style={CommonStyles.welcomeText}>
                        Your tour management app is now configured and ready to use.
                        All features are now available.
                    </Text>
                </View>

                <View style={CommonStyles.featuresGrid}>
                    <TouchableOpacity
                        style={CommonStyles.featureCard}
                        onPress={() => navigateToScreen('DaySheet')}
                    >
                        <Ionicons name="calendar" size={32} color={Colors.accent.primary} />
                        <Text style={CommonStyles.featureTitle}>Day Sheets</Text>
                        <Text style={CommonStyles.featureDesc}>Manage daily tour operations</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={CommonStyles.featureCard}
                        onPress={() => navigateToScreen('Financial')}
                    >
                        <Ionicons name="cash" size={32} color={Colors.accent.primary} />
                        <Text style={CommonStyles.featureTitle}>Financial</Text>
                        <Text style={CommonStyles.featureDesc}>Track expenses and profits</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={CommonStyles.featureCard}
                        onPress={() => navigateToScreen('Merchandise')}
                    >
                        <Ionicons name="storefront" size={32} color={Colors.accent.primary} />
                        <Text style={CommonStyles.featureTitle}>Merchandise</Text>
                        <Text style={CommonStyles.featureDesc}>Inventory and sales tracking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={CommonStyles.featureCard}
                        onPress={() => navigateToScreen('Team')}
                    >
                        <Ionicons name="people" size={32} color={Colors.accent.primary} />
                        <Text style={CommonStyles.featureTitle}>Team</Text>
                        <Text style={CommonStyles.featureDesc}>Crew communication hub</Text>
                    </TouchableOpacity>
                </View>

                <View style={CommonStyles.quickActions}>
                    <Text style={CommonStyles.sectionTitle}>Quick Actions</Text>

                    <TouchableOpacity
                        style={CommonStyles.actionButton}
                        onPress={() => navigateToScreen('Schedule')}
                    >
                        <Ionicons name="add-circle" size={24} color={Colors.text.primary} />
                        <Text style={CommonStyles.actionText}>Add Today's Show</Text>
                        <Ionicons name="chevron-forward" size={20} color={Colors.text.secondary} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={CommonStyles.actionButton}
                        onPress={() => navigateToScreen('Team')}
                    >
                        <Ionicons name="person-add" size={24} color={Colors.text.primary} />
                        <Text style={CommonStyles.actionText}>Invite Team Members</Text>
                        <Ionicons name="chevron-forward" size={20} color={Colors.text.secondary} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={CommonStyles.actionButton}
                        onPress={() => navigateToScreen('Settings')}
                    >
                        <Ionicons name="settings" size={24} color={Colors.text.primary} />
                        <Text style={CommonStyles.actionText}>Tour Settings</Text>
                        <Ionicons name="chevron-forward" size={20} color={Colors.text.secondary} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
