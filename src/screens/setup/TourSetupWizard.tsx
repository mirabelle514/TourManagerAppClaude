import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

// Setup Step Components (we'll create these next)
import Step1AdminUser from './steps/Step1AdminUser';
import Step2TourDetails from './steps/Step2TourDetails';
import Step3Contacts from './steps/Step3Contacts';
import Step4Merchandise from './steps/Step4Merchandise';
import Step5Branding from './steps/Step5Branding';
import Step6DataImport from './steps/Step6DataImport';
import Step7UserInvites from './steps/Step7UserInvites';

interface TourSetupWizardProps {
    navigation: any;
}

export default function TourSetupWizard({ navigation }: TourSetupWizardProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [setupData, setSetupData] = useState({
        adminUser: {},
        tourDetails: {},
        contacts: [],
        merchandise: {},
        branding: {},
        dataImport: {},
        userInvites: [],
    });

    const totalSteps = 7;

    const updateSetupData = (stepKey: string, data: any) => {
        setSetupData(prev => ({
            ...prev,
            [stepKey]: data,
        }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        } else {
            completeTourSetup();
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const completeTourSetup = async () => {
        try {
            // Save tour setup data
            await AsyncStorage.setItem('tourSetupData', JSON.stringify(setupData));
            await AsyncStorage.setItem('tourSetupComplete', 'true');

            Alert.alert(
                '🎉 Tour Setup Complete!',
                'Your tour management app is ready to use. Welcome to Tour Manager!',
                [
                    {
                        text: 'Enter App',
                        onPress: () => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'MainApp' }],
                            });
                        },
                    },
                ]
            );
        } catch (error) {
            Alert.alert('Error', 'Failed to save tour setup. Please try again.');
        }
    };

    const renderCurrentStep = () => {
        const stepProps = {
            data: setupData,
            onUpdate: updateSetupData,
            onNext: nextStep,
            onPrev: prevStep,
        };

        switch (currentStep) {
            case 1:
                return <Step1AdminUser {...stepProps} />;
            case 2:
                return <Step2TourDetails {...stepProps} />;
            case 3:
                return <Step3Contacts {...stepProps} />;
            case 4:
                return <Step4Merchandise {...stepProps} />;
            case 5:
                return <Step5Branding {...stepProps} />;
            case 6:
                return <Step6DataImport {...stepProps} />;
            case 7:
                return <Step7UserInvites {...stepProps} />;
            default:
                return <Step1AdminUser {...stepProps} />;
        }
    };

    const getStepTitle = () => {
        const titles = [
            'Admin User Setup',
            'Tour Details',
            'Contacts & Team',
            'Merchandise Settings',
            'App Branding',
            'Data Import',
            'User Invitations',
        ];
        return titles[currentStep - 1];
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header with Progress */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    {currentStep > 1 && (
                        <TouchableOpacity style={styles.backButton} onPress={prevStep}>
                            <Ionicons name="chevron-back" size={24} color="#ffffff" />
                        </TouchableOpacity>
                    )}
                    <View style={styles.headerCenter}>
                        <Text style={styles.stepCounter}>
                            Step {currentStep} of {totalSteps}
                        </Text>
                        <Text style={styles.stepTitle}>{getStepTitle()}</Text>
                    </View>
                    <View style={styles.headerRight} />
                </View>

                {/* Progress Bar */}
                <View style={styles.progressContainer}>
                    <View style={styles.progressTrack}>
                        <View
                            style={[
                                styles.progressFill,
                                { width: `${(currentStep / totalSteps) * 100}%` }
                            ]}
                        />
                    </View>
                    <Text style={styles.progressText}>
                        {Math.round((currentStep / totalSteps) * 100)}% Complete
                    </Text>
                </View>
            </View>

            {/* Current Step Content */}
            <View style={styles.content}>
                {renderCurrentStep()}
            </View>

            {/* Navigation Footer */}
            <View style={styles.footer}>
                <View style={styles.navigationButtons}>
                    <TouchableOpacity
                        style={[styles.navButton, styles.secondaryButton]}
                        onPress={prevStep}
                        disabled={currentStep === 1}
                    >
                        <Text style={[
                            styles.navButtonText,
                            styles.secondaryButtonText,
                            currentStep === 1 && styles.disabledButtonText
                        ]}>
                            Previous
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.navButton, styles.primaryButton]}
                        onPress={nextStep}
                    >
                        <Text style={[styles.navButtonText, styles.primaryButtonText]}>
                            {currentStep === totalSteps ? 'Complete Setup' : 'Next'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
    },
    headerRight: {
        width: 40,
    },
    stepCounter: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '600',
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 4,
    },
    progressContainer: {
        alignItems: 'center',
    },
    progressTrack: {
        width: '100%',
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 2,
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#4CAF50',
        borderRadius: 2,
    },
    progressText: {
        fontSize: 12,
        color: '#b0b0b0',
    },
    content: {
        flex: 1,
    },
    footer: {
        backgroundColor: '#151515',
        padding: 20,
    },
    navigationButtons: {
        flexDirection: 'row',
        gap: 16,
    },
    navButton: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
    },
    primaryButton: {
        backgroundColor: '#4CAF50',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#333',
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    primaryButtonText: {
        color: '#ffffff',
    },
    secondaryButtonText: {
        color: '#ffffff',
    },
    disabledButtonText: {
        color: '#666',
    },
});