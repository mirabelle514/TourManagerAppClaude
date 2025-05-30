import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Header } from '../../components/common/Header';
import { CommonStyles } from '../../styles/CommonStyles';

export default function TeamScreen() {
    return (
        <SafeAreaView style={CommonStyles.container}>
            <Header title="Team Management" />
            <View style={CommonStyles.content}>
                {/* Team management content will go here */}
            </View>
        </SafeAreaView>
    );
}
