import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../../styles';
import { Colors } from '../../../styles/theme/color';
import { FormStyles } from '../../../styles/components/forms';
import { CommonStyles as InfoCard } from '../../../styles/components/common';

interface Step2TourDetailsProps {
    data: any;
    onUpdate: (key: string, data: any) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Step2TourDetails({ data, onUpdate, onNext, onPrev }: Step2TourDetailsProps) {
    const [tourData, setTourData] = useState({
        tourName: data.tourDetails?.tourName || '',
        bandName: data.tourDetails?.bandName || '',
        startDate: data.tourDetails?.startDate || '',
        endDate: data.tourDetails?.endDate || '',
        description: data.tourDetails?.description || '',
        genre: data.tourDetails?.genre || '',
        expectedVenues: data.tourDetails?.expectedVenues || '',
    });

    const handleUpdate = (field: string, value: string) => {
        const updated = { ...tourData, [field]: value };
        setTourData(updated);
        onUpdate('tourDetails', updated);
    };

    const isValid = tourData.tourName.trim() && tourData.bandName.trim();

    return (
        <ScrollView style={CommonStyles.container} showsVerticalScrollIndicator={false}>
            <View style={CommonStyles.content}>
                <View style={CommonStyles.header}>
                    <Ionicons name="musical-notes" size={64} color={Colors.accent.primary} />
                    <Text style={CommonStyles.title}>Tour Details</Text>
                    <Text style={CommonStyles.subtitle}>
                        Configure your tour information and basic settings
                    </Text>
                </View>

                <View style={FormStyles.formSection}>
                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Tour Name *</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={tourData.tourName}
                            onChangeText={(value) => handleUpdate('tourName', value)}
                            placeholder="World Domination Tour 2024"
                            placeholderTextColor={Colors.text.secondary}
                        />
                    </View>

                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Band/Artist Name *</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={tourData.bandName}
                            onChangeText={(value) => handleUpdate('bandName', value)}
                            placeholder="The Electric Storms"
                            placeholderTextColor={Colors.text.secondary}
                        />
                    </View>

                    <View style={CommonStyles.row}>
                        <View style={FormStyles.halfInput}>
                            <Text style={FormStyles.label}>Start Date</Text>
                            <TextInput
                                style={FormStyles.input}
                                value={tourData.startDate}
                                onChangeText={(value) => handleUpdate('startDate', value)}
                                placeholder="MM/DD/YYYY"
                                placeholderTextColor={Colors.text.secondary}
                            />
                        </View>
                        <View style={FormStyles.halfInput}>
                            <Text style={FormStyles.label}>End Date</Text>
                            <TextInput
                                style={FormStyles.input}
                                value={tourData.endDate}
                                onChangeText={(value) => handleUpdate('endDate', value)}
                                placeholder="MM/DD/YYYY"
                                placeholderTextColor={Colors.text.secondary}
                            />
                        </View>
                    </View>

                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Genre/Style</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={tourData.genre}
                            onChangeText={(value) => handleUpdate('genre', value)}
                            placeholder="Rock, Pop, Electronic, etc."
                            placeholderTextColor={Colors.text.secondary}
                        />
                    </View>

                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Expected Number of Venues</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={tourData.expectedVenues}
                            onChangeText={(value) => handleUpdate('expectedVenues', value)}
                            placeholder="25"
                            placeholderTextColor={Colors.text.secondary}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Tour Description</Text>
                        <TextInput
                            style={[FormStyles.input, FormStyles.textArea]}
                            value={tourData.description}
                            onChangeText={(value) => handleUpdate('description', value)}
                            placeholder="Brief description of the tour, special notes, or important information..."
                            placeholderTextColor={Colors.text.secondary}
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                        />
                    </View>
                </View>

                <View style={InfoCard.infoCard}>
                    <Ionicons name="information-circle" size={24} color={Colors.accent.primary} />
                    <View style={InfoCard.infoCardContent}>
                        <Text style={InfoCard.infoCardTitle}>Tour Configuration</Text>
                        <Text style={InfoCard.infoCardText}>
                            This information will be used throughout the app to customize your experience.
                            You can always modify these details later in the settings.
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={[CommonStyles.continueButton, !isValid && CommonStyles.continueButtonDisabled]}
                    onPress={onNext}
                    disabled={!isValid}
                >
                    <Text style={CommonStyles.continueButtonText}>Continue to Contacts</Text>
                    <Ionicons name="arrow-forward" size={20} color={Colors.text.primary} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}