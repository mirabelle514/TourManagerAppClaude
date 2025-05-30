import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';
import { CommonStyles } from '../../../styles';
import { Colors } from '../../../styles/theme/color';

interface Contact {
    id: string;
    name: string;
    phoneNumbers?: { number: string; label: string }[];
    emails?: { email: string; label: string }[];
    category: 'band' | 'crew' | 'venue' | 'promoter' | 'emergency';
    role?: string;
    notes?: string;
    isEmergencyContact?: boolean;
}

interface Step3ContactsProps {
    data: {
        contacts: Contact[];
    };
    onUpdate: (data: { contacts: Contact[] }) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Step3Contacts({ data, onUpdate, onNext, onPrev }: Step3ContactsProps) {
    const [contacts, setContacts] = useState<Contact[]>(data.contacts || []);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showAddContact, setShowAddContact] = useState(false);
    const [newContact, setNewContact] = useState<Partial<Contact>>({
        category: 'band',
        isEmergencyContact: false,
    });

    const importFromPhone = async () => {
        try {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [
                        Contacts.Fields.Name,
                        Contacts.Fields.PhoneNumbers,
                        Contacts.Fields.Emails,
                    ],
                });

                const importedContacts: Contact[] = data.map((contact: Contacts.Contact) => ({
                    id: contact.id || Math.random().toString(),
                    name: contact.name || 'Unknown',
                    phoneNumbers: contact.phoneNumbers?.map(phone => ({
                        number: phone.number,
                        label: phone.label || 'mobile'
                    })),
                    emails: contact.emails?.map(email => ({
                        email: email.email,
                        label: email.label || 'work'
                    })),
                    category: 'band',
                    isEmergencyContact: false,
                }));

                setContacts(prev => [...prev, ...importedContacts]);
                onUpdate({ contacts: [...contacts, ...importedContacts] });
                Alert.alert('Success', `Imported ${importedContacts.length} contacts`);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to access contacts');
        }
    };

    const addContact = () => {
        if (!newContact.name) {
            Alert.alert('Error', 'Please enter a name');
            return;
        }

        const contact: Contact = {
            id: Math.random().toString(),
            name: newContact.name,
            category: newContact.category || 'band',
            role: newContact.role,
            notes: newContact.notes,
            isEmergencyContact: newContact.isEmergencyContact,
            phoneNumbers: newContact.phoneNumbers,
            emails: newContact.emails,
        };

        setContacts(prev => [...prev, contact]);
        onUpdate({ contacts: [...contacts, contact] });
        setShowAddContact(false);
        setNewContact({ category: 'band', isEmergencyContact: false });
    };

    const deleteContact = (id: string) => {
        Alert.alert(
            'Delete Contact',
            'Are you sure you want to delete this contact?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        const updatedContacts = contacts.filter(c => c.id !== id);
                        setContacts(updatedContacts);
                        onUpdate({ contacts: updatedContacts });
                    },
                },
            ]
        );
    };

    const filteredContacts = contacts.filter(contact => {
        const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || contact.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <ScrollView style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <View style={CommonStyles.header}>
                    <Ionicons name="people" size={64} color={Colors.accent.primary.main} />
                    <Text style={CommonStyles.title}>Contacts & Team</Text>
                    <Text style={CommonStyles.subtitle}>
                        Import or manually add your band, crew, and venue contacts
                    </Text>
                </View>

                {/* Search and Filter */}
                <View style={CommonStyles.searchContainer}>
                    <TextInput
                        style={CommonStyles.searchInput}
                        placeholder="Search contacts..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity
                        style={CommonStyles.filterButton}
                        onPress={() => setShowAddContact(true)}
                    >
                        <Ionicons name="add" size={24} color={Colors.accent.primary.main} />
                    </TouchableOpacity>
                </View>

                {/* Category Filter */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={CommonStyles.categoryFilter}>
                    {['all', 'band', 'crew', 'venue', 'promoter', 'emergency'].map(category => (
                        <TouchableOpacity
                            key={category}
                            style={[
                                CommonStyles.categoryButton,
                                selectedCategory === category && CommonStyles.selectedCategoryButton,
                            ]}
                            onPress={() => setSelectedCategory(category)}
                        >
                            <Text
                                style={[
                                    CommonStyles.categoryButtonText,
                                    selectedCategory === category && CommonStyles.selectedCategoryButtonText,
                                ]}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Contact List */}
                <FlatList
                    data={filteredContacts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={CommonStyles.contactCard}>
                            <View style={CommonStyles.contactHeader}>
                                <Text style={CommonStyles.contactName}>{item.name}</Text>
                                <TouchableOpacity onPress={() => deleteContact(item.id)}>
                                    <Ionicons name="trash-outline" size={24} color={Colors.error.main} />
                                </TouchableOpacity>
                            </View>
                            {item.role && (
                                <Text style={CommonStyles.contactRole}>{item.role}</Text>
                            )}
                            {item.phoneNumbers?.map((phone, index) => (
                                <Text key={index} style={CommonStyles.contactDetail}>
                                    {phone.label}: {phone.number}
                                </Text>
                            ))}
                            {item.isEmergencyContact && (
                                <View style={CommonStyles.emergencyBadge}>
                                    <Text style={CommonStyles.emergencyBadgeText}>Emergency Contact</Text>
                                </View>
                            )}
                        </View>
                    )}
                />

                {/* Import Buttons */}
                <View style={CommonStyles.buttonContainer}>
                    <TouchableOpacity style={CommonStyles.primaryButton} onPress={importFromPhone}>
                        <Ionicons name="phone-portrait" size={24} color={Colors.text.primary} />
                        <Text style={CommonStyles.primaryButtonText}>Import from Phone Contacts</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={CommonStyles.secondaryButton} onPress={onNext}>
                        <Text style={CommonStyles.secondaryButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Add Contact Modal */}
            {showAddContact && (
                <View style={CommonStyles.modalOverlay}>
                    <View style={CommonStyles.modalContent}>
                        <Text style={CommonStyles.modalTitle}>Add New Contact</Text>
                        <TextInput
                            style={CommonStyles.input}
                            placeholder="Name"
                            value={newContact.name}
                            onChangeText={name => setNewContact(prev => ({ ...prev, name }))}
                        />
                        <TextInput
                            style={CommonStyles.input}
                            placeholder="Role"
                            value={newContact.role}
                            onChangeText={role => setNewContact(prev => ({ ...prev, role }))}
                        />
                        <TextInput
                            style={CommonStyles.input}
                            placeholder="Notes"
                            value={newContact.notes}
                            onChangeText={notes => setNewContact(prev => ({ ...prev, notes }))}
                            multiline
                        />
                        <View style={CommonStyles.modalButtons}>
                            <TouchableOpacity
                                style={CommonStyles.secondaryButton}
                                onPress={() => setShowAddContact(false)}
                            >
                                <Text style={CommonStyles.secondaryButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={CommonStyles.primaryButton} onPress={addContact}>
                                <Text style={CommonStyles.primaryButtonText}>Add Contact</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}
