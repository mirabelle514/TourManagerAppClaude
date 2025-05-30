import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Header } from '../../components/common/Header';
import { CommonStyles } from '../../styles/CommonStyles';

export default function ScheduleScreen() {
    return (
        <SafeAreaView style={CommonStyles.container}>
            <Header title="Schedule" />
            <View style={CommonStyles.content}>
                {/* Schedule content will go here */}
            </View>
        </SafeAreaView>
    );
}
