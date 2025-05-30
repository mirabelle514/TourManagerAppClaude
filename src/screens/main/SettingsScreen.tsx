import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Header } from '../../components/common/Header';
import { CommonStyles } from '../../styles/CommonStyles';

export default function SettingsScreen() {
    return (
        <SafeAreaView style={CommonStyles.container}>
            <Header title="Tour Settings" />
            <View style={CommonStyles.content}>
                {/* Settings content will go here */}
            </View>
        </SafeAreaView>
    );
}
