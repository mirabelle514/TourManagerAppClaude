import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../../styles';

export default function Step7UserInvites({ data, onUpdate, onNext, onPrev }: any) {
    const roles = [
        { name: 'Band Members', desc: 'Personal schedules, venue info, merchandise tracking', icon: 'musical-notes' },
        { name: 'Tour Manager', desc: 'Full tour coordination and management', icon: 'briefcase' },
        { name: 'Sound Engineer', desc: 'Technical specifications and venue contacts', icon: 'hardware-chip' },
        { name: 'Roadies', desc: 'Merchandise sales and equipment management', icon: 'construct' },
        { name: 'General Crew', desc: 'Basic schedules and communication', icon: 'people' },
    ];

    return (
        <ScrollView style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <View style={CommonStyles.header}>
                    <Ionicons name="person-add" size={64} color="#4CAF50" />
                    <Text style={CommonStyles.title}>Team Invitations</Text>
                    <Text style={CommonStyles.subtitle}>Invite your band and crew members with role-based access</Text>
                </View>

                <Text style={CommonStyles.sectionTitle}>Available User Roles</Text>
                {roles.map((role, index) => (
                    <View key={index} style={CommonStyles.roleCard}>
                        <Ionicons name={role.icon as any} size={24} color="#4CAF50" />
                        <View style={CommonStyles.roleContent}>
                            <Text style={CommonStyles.roleName}>{role.name}</Text>
                            <Text style={CommonStyles.roleDesc}>{role.desc}</Text>
                        </View>
                    </View>
                ))}

                <TouchableOpacity style={CommonStyles.inviteButton}>
                    <Ionicons name="mail" size={24} color="#ffffff" />
                    <Text style={CommonStyles.inviteButtonText}>Send Invitations Later</Text>
                </TouchableOpacity>

                <TouchableOpacity style={CommonStyles.completeButton} onPress={onNext}>
                    <Text style={CommonStyles.completeButtonText}>Complete Tour Setup</Text>
                    <Ionicons name="checkmark-circle" size={20} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}