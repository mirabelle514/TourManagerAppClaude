import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles/CommonStyles';
import { Colors } from '../../styles/theme';

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
                'Tour Setup Complete!',
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
                return <Step3Contacts
                    {...stepProps}
                    onUpdate={(data) => updateSetupData('contacts', data.contacts)}
                />;
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
        <SafeAreaView style={CommonStyles.container}>
            {/* Header with Progress */}
            <View style={CommonStyles.header}>
                <View style={CommonStyles.header}>
                    {currentStep > 1 && (
                        <TouchableOpacity style={CommonStyles.backButton} onPress={prevStep}>
                            <Ionicons name="chevron-back" size={24} color={Colors.text.inverse} />
                        </TouchableOpacity>
                    )}
                    <View style={CommonStyles.headerCenter}>
                        <Text style={CommonStyles.stepCounter}>
                            Step {currentStep} of {totalSteps}
                        </Text>
                        <Text style={CommonStyles.stepTitle}>{getStepTitle()}</Text>
                    </View>
                    <View style={CommonStyles.headerRight} />
                </View>

                {/* Progress Bar */}
                <View style={CommonStyles.progressContainer}>
                    <View style={CommonStyles.progressTrack}>
                        <View
                            style={[
                                CommonStyles.progressFill,
                                { width: `${(currentStep / totalSteps) * 100}%` }
                            ]}
                        />
                    </View>
                    <Text style={CommonStyles.progressText}>
                        {Math.round((currentStep / totalSteps) * 100)}% Complete
                    </Text>
                </View>
            </View>

            {/* Current Step Content */}
            <View style={CommonStyles.content}>
                {renderCurrentStep()}
            </View>

            {/* Navigation Footer */}
            <View style={CommonStyles.footer}>
                <View style={CommonStyles.navigationButtons}>
                    <TouchableOpacity
                        style={[CommonStyles.navButton, CommonStyles.secondaryButton]}
                        onPress={prevStep}
                        disabled={currentStep === 1}
                    >
                        <Text style={[
                            CommonStyles.navButtonText,
                            CommonStyles.secondaryButtonText,
                            currentStep === 1 && CommonStyles.disabledButtonText
                        ]}>
                            Previous
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[CommonStyles.navButton, CommonStyles.primaryButton]}
                        onPress={nextStep}
                    >
                        <Text style={[CommonStyles.navButtonText, CommonStyles.primaryButtonText]}>
                            {currentStep === totalSteps ? 'Complete Setup' : 'Next'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
