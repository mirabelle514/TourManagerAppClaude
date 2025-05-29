import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';
import { CommonStyles } from '../../../styles';
import { Colors } from '../../../styles/theme/color';

export default function Step3Contacts({ data, onUpdate, onNext, onPrev }: any) {
    const [contacts, setContacts] = useState(data.contacts || []);

    const importFromPhone = async () => {
        try {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
                });
                Alert.alert('Import Contacts', `Found ${data.length} contacts available to import.`);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to access contacts');
        }
    };

    return (
        <ScrollView style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <View style={CommonStyles.header}>
                    <Ionicons name="people" size={64} color={Colors.accent.primary} />
                    <Text style={CommonStyles.title}>Contacts & Team</Text>
                    <Text style={CommonStyles.subtitle}>Import or manually add your band, crew, and venue contacts</Text>
                </View>

                <TouchableOpacity style={CommonStyles.primaryButton} onPress={importFromPhone}>
                    <Ionicons name="phone-portrait" size={24} color={Colors.text.primary} />
                    <Text style={CommonStyles.primaryButtonText}>Import from Phone Contacts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={CommonStyles.secondaryButton} onPress={onNext}>
                    <Ionicons name="add-circle" size={24} color={Colors.accent.primary} />
                    <Text style={CommonStyles.secondaryButtonText}>Add Manually Later</Text>
                </TouchableOpacity>

                <View style={CommonStyles.infoCard}>
                    <Text style={CommonStyles.infoCardTitle}>Contact Categories</Text>
                    <Text style={CommonStyles.infoCardText}>• Band Members{'\n'}• Crew & Technicians{'\n'}• Venue Managers{'\n'}• Promoters & Agents{'\n'}• Emergency Contacts</Text>
                </View>
            </View>
        </ScrollView>
    );
}
