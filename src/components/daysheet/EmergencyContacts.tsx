import React from 'react';
import { View, Text, TouchableOpacity, Modal, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DaySheetStyles } from '../../styles/DaySheetStyles';
import { Colors } from '../../styles/theme/color';

interface EmergencyContact {
    name: string;
    role: string;
    phone: string;
}

interface EmergencyContactsProps {
    contacts: EmergencyContact[];
    onClose: () => void;
}

export const EmergencyContacts: React.FC<EmergencyContactsProps> = ({ contacts, onClose }) => {
    const handleCall = (phone: string, name: string) => {
        Alert.alert(
            'Call Emergency Contact',
            `Do you want to call ${name}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Call',
                    onPress: () => {
                        const phoneUrl = `tel:${phone}`;
                        Linking.canOpenURL(phoneUrl)
                            .then((supported) => {
                                if (supported) {
                                    Linking.openURL(phoneUrl);
                                } else {
                                    Alert.alert('Error', 'Phone calls are not supported on this device');
                                }
                            })
                            .catch(() => {
                                Alert.alert('Error', 'Failed to make phone call');
                            });
                    },
                    style: 'default',
                },
            ]
        );
    };

    return (
        <Modal
            visible={true}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={DaySheetStyles.emergencyModal}>
                <View style={DaySheetStyles.emergencyModalContent}>
                    <View style={DaySheetStyles.emergencyModalHeader}>
                        <Text style={DaySheetStyles.emergencyModalTitle}>
                            Emergency Contacts
                        </Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons
                                name="close-outline"
                                size={24}
                                color={Colors.text.secondary}
                            />
                        </TouchableOpacity>
                    </View>

                    {contacts.map((contact, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                DaySheetStyles.emergencyContactItem,
                                index === contacts.length - 1 && DaySheetStyles.emergencyContactItemLast
                            ]}
                            onPress={() => handleCall(contact.phone, contact.name)}
                            activeOpacity={0.7}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={DaySheetStyles.emergencyContactName}>
                                        {contact.name}
                                    </Text>
                                    <Text style={DaySheetStyles.emergencyContactRole}>
                                        {contact.role}
                                    </Text>
                                    <Text style={DaySheetStyles.emergencyContactPhone}>
                                        {contact.phone}
                                    </Text>
                                </View>
                                <Ionicons
                                    name="call-outline"
                                    size={20}
                                    color={Colors.primary}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}

                    <View style={{ marginTop: 16, paddingTop: 16, borderTopWidth: 1, borderTopColor: Colors.border.light }}>
                        <Text style={{
                            fontSize: 12,
                            color: Colors.text.secondary,
                            textAlign: 'center',
                            fontStyle: 'italic'
                        }}>
                            Tap any contact to call immediately
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};