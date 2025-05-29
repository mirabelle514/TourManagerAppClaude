import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles, FormStyles } from '../../../styles';
import { Colors } from '../../../styles/theme/color';

interface Step1AdminUserProps {
    data: any;
    onUpdate: (key: string, data: any) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Step1AdminUser({ data, onUpdate, onNext, onPrev }: Step1AdminUserProps) {
    const [adminData, setAdminData] = useState({
        name: data.adminUser?.name || '',
        email: data.adminUser?.email || '',
        phone: data.adminUser?.phone || '',
        role: data.adminUser?.role || 'Tour Manager',
        company: data.adminUser?.company || '',
    });

    const handleUpdate = (field: string, value: string) => {
        const updated = { ...adminData, [field]: value };
        setAdminData(updated);
        onUpdate('adminUser', updated);
    };

    const isValid = adminData.name.trim() && adminData.email.trim() && adminData.phone.trim();

    return (
        <ScrollView style={CommonStyles.container} showsVerticalScrollIndicator={false}>
            <View style={CommonStyles.content}>
                <View style={CommonStyles.header}>
                    <Ionicons name="person-circle" size={64} color={Colors.accent.primary} />
                    <Text style={CommonStyles.title}>Admin User Setup</Text>
                    <Text style={CommonStyles.subtitle}>
                        Set up your admin account with full access to all Tour Manager features
                    </Text>
                </View>

                <View style={FormStyles.formSection}>
                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Full Name *</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={adminData.name}
                            onChangeText={(value) => handleUpdate('name', value)}
                            placeholder="John Smith"
                            placeholderTextColor={Colors.text.secondary}
                        />
                    </View>

                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Email Address *</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={adminData.email}
                            onChangeText={(value) => handleUpdate('email', value)}
                            placeholder="john@tourmanager.com"
                            placeholderTextColor={Colors.text.secondary}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Phone Number *</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={adminData.phone}
                            onChangeText={(value) => handleUpdate('phone', value)}
                            placeholder="+1 (555) 123-4567"
                            placeholderTextColor={Colors.text.secondary}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Role/Title</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={adminData.role}
                            onChangeText={(value) => handleUpdate('role', value)}
                            placeholder="Tour Manager"
                            placeholderTextColor={Colors.text.secondary}
                        />
                    </View>

                    <View style={FormStyles.inputGroup}>
                        <Text style={FormStyles.label}>Company/Band Name</Text>
                        <TextInput
                            style={FormStyles.input}
                            value={adminData.company}
                            onChangeText={(value) => handleUpdate('company', value)}
                            placeholder="Lightning Records"
                            placeholderTextColor={Colors.text.secondary}
                        />
                    </View>
                </View>

                <View style={CommonStyles.permissionsCard}>
                    <Text style={CommonStyles.permissionsTitle}>Admin Permissions</Text>
                    <View style={CommonStyles.permissionsList}>
                        <View style={CommonStyles.permissionItem}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.accent.primary} />
                            <Text style={CommonStyles.permissionText}>Full system access</Text>
                        </View>
                        <View style={CommonStyles.permissionItem}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.accent.primary} />
                            <Text style={CommonStyles.permissionText}>User management & invitations</Text>
                        </View>
                        <View style={CommonStyles.permissionItem}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.accent.primary} />
                            <Text style={CommonStyles.permissionText}>Financial oversight & reporting</Text>
                        </View>
                        <View style={CommonStyles.permissionItem}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.accent.primary} />
                            <Text style={CommonStyles.permissionText}>Tour configuration & settings</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={[CommonStyles.continueButton, !isValid && CommonStyles.continueButtonDisabled]}
                    onPress={onNext}
                    disabled={!isValid}
                >
                    <Text style={CommonStyles.continueButtonText}>Continue to Tour Details</Text>
                    <Ionicons name="arrow-forward" size={20} color={Colors.text.primary} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
