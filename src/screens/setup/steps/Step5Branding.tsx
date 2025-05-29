import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../../styles';

export default function Step5Branding({ data, onUpdate, onNext, onPrev }: any) {
    const [selectedTheme, setSelectedTheme] = useState('dark');

    const themes = [
        { id: 'dark', name: 'Dark Blue', primary: '#1a1a2e', icon: 'moon' },
        { id: 'red', name: 'Rock Red', primary: '#b71c1c', icon: 'flame' },
        { id: 'purple', name: 'Stage Purple', primary: '#4a148c', icon: 'star' },
        { id: 'green', name: 'Forest Green', primary: '#1b5e20', icon: 'leaf' },
    ];

    return (
        <ScrollView style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <View style={CommonStyles.header}>
                    <Ionicons name="color-palette" size={64} color="#4CAF50" />
                    <Text style={CommonStyles.title}>App Branding</Text>
                    <Text style={CommonStyles.subtitle}>Customize the look and feel of your Tour Manager app</Text>
                </View>

                <Text style={CommonStyles.sectionTitle}>Choose Color Theme</Text>
                <View style={CommonStyles.themeGrid}>
                    {themes.map((theme) => (
                        <TouchableOpacity
                            key={theme.id}
                            style={[
                                CommonStyles.themeOption,
                                { backgroundColor: theme.primary },
                                selectedTheme === theme.id && CommonStyles.selectedTheme
                            ]}
                            onPress={() => {
                                setSelectedTheme(theme.id);
                                onUpdate('branding', { theme: theme.id, primary: theme.primary });
                            }}
                        >
                            <Ionicons name={theme.icon as any} size={32} color="#ffffff" />
                            <Text style={CommonStyles.themeName}>{theme.name}</Text>
                            {selectedTheme === theme.id && (
                                <Ionicons name="checkmark-circle" size={24} color="#ffffff" style={CommonStyles.checkmark} />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={CommonStyles.continueButton} onPress={onNext}>
                    <Text style={CommonStyles.continueButtonText}>Continue to Data Import</Text>
                    <Ionicons name="arrow-forward" size={20} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
