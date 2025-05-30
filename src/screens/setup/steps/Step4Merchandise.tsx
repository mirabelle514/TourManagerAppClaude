import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles, FormStyles } from '../../../styles';
import { Colors } from '../../../styles/theme/color';

export default function Step4Merchandise({ data, onUpdate, onNext, onPrev }: any) {
    const [settings, setSettings] = useState({
        trackTShirts: true,
        trackRecords: true,
        trackDigital: false,
        autoReorder: true,
        threshold: 10,
    });

    const toggleSetting = (key: string) => {
        const updated = { ...settings, [key]: !settings[key as keyof typeof settings] };
        setSettings(updated);
        onUpdate('merchandise', updated);
    };

    return (
        <ScrollView style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <View style={CommonStyles.header}>
                    <Ionicons name="storefront" size={64} color={Colors.accent.primary.main} />
                    <Text style={CommonStyles.title}>Merchandise Settings</Text>
                    <Text style={CommonStyles.subtitle}>Configure inventory tracking and sales management</Text>
                </View>

                <View style={FormStyles.form}>
                    <Text style={FormStyles.label}>Track Merchandise</Text>

                    <TouchableOpacity style={CommonStyles.settingItem} onPress={() => toggleSetting('trackTShirts')}>
                        <View style={CommonStyles.settingLeft}>
                            <Ionicons name="shirt" size={24} color={Colors.text.primary} />
                            <Text style={CommonStyles.settingText}>T-Shirts & Apparel</Text>
                        </View>
                        <Ionicons
                            name={settings.trackTShirts ? "checkbox" : "square-outline"}
                            size={24}
                            color={settings.trackTShirts ? Colors.accent.primary.main : Colors.text.secondary}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={CommonStyles.settingItem} onPress={() => toggleSetting('trackRecords')}>
                        <View style={CommonStyles.settingLeft}>
                            <Ionicons name="disc" size={24} color={Colors.text.primary} />
                            <Text style={CommonStyles.settingText}>Records & Vinyl</Text>
                        </View>
                        <Ionicons
                            name={settings.trackRecords ? "checkbox" : "square-outline"}
                            size={24}
                            color={settings.trackRecords ? Colors.accent.primary.main : Colors.text.secondary}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={CommonStyles.settingItem} onPress={() => toggleSetting('trackDigital')}>
                        <View style={CommonStyles.settingLeft}>
                            <Ionicons name="cloud-download" size={24} color={Colors.text.primary} />
                            <Text style={CommonStyles.settingText}>Digital Downloads</Text>
                        </View>
                        <Ionicons
                            name={settings.trackDigital ? "checkbox" : "square-outline"}
                            size={24}
                            color={settings.trackDigital ? Colors.accent.primary.main : Colors.text.secondary}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={CommonStyles.continueButton} onPress={onNext}>
                    <Text style={CommonStyles.continueButtonText}>Continue to Branding</Text>
                    <Ionicons name="arrow-forward" size={20} color={Colors.text.primary} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}