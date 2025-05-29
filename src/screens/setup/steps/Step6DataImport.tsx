import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../../styles';

export default function Step6DataImport({ data, onUpdate, onNext, onPrev }: any) {
    return (
        <ScrollView style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <View style={CommonStyles.header}>
                    <Ionicons name="cloud-upload" size={64} color="#4CAF50" />
                    <Text style={CommonStyles.title}>Import Tour Data</Text>
                    <Text style={CommonStyles.subtitle}>Import existing tour information or start fresh</Text>
                </View>

                <TouchableOpacity style={CommonStyles.importOption}>
                    <Ionicons name="logo-google" size={32} color="#4CAF50" />
                    <View style={CommonStyles.optionContent}>
                        <Text style={CommonStyles.optionTitle}>Google Sheets Import</Text>
                        <Text style={CommonStyles.optionDesc}>Import tour dates, venues, and contacts from Google Sheets</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={CommonStyles.importOption}>
                    <Ionicons name="document-text" size={32} color="#4CAF50" />
                    <View style={CommonStyles.optionContent}>
                        <Text style={CommonStyles.optionTitle}>Manual Entry</Text>
                        <Text style={CommonStyles.optionDesc}>Add tour information manually as you go</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={CommonStyles.skipButton} onPress={onNext}>
                    <Text style={CommonStyles.skipButtonText}>Skip - Set Up Later</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
