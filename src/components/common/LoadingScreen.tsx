import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';

export default function LoadingScreen() {
    return (
        <View style={CommonStyles.container}>
            <Ionicons name="musical-notes" size={80} color={Colors.primary} />
            <Text style={CommonStyles.title}>Tour Manager</Text>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={CommonStyles.subtitle}>Loading your tour management app...</Text>
        </View>
    );
}