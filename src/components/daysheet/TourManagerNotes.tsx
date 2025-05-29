import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DaySheetStyles } from '../../styles/DaySheetStyles';
import { Colors } from '../../styles/theme/color';

interface TourManagerNotesProps {
    notes: string;
}

export const TourManagerNotes: React.FC<TourManagerNotesProps> = ({ notes }) => {
    if (!notes || notes.trim() === '') {
        return (
            <View style={DaySheetStyles.notesCard}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons
                        name="document-text-outline"
                        size={20}
                        color={Colors.status.warning}
                        style={DaySheetStyles.notesTitleIcon}
                    />
                    <Text style={DaySheetStyles.notesTitle}>Tour Manager Notes</Text>
                </View>
                <Text style={[DaySheetStyles.notesText, { fontStyle: 'italic', color: Colors.text.secondary }]}>
                    No special notes for this venue.
                </Text>
            </View>
        );
    }

    return (
        <View style={DaySheetStyles.notesCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons
                    name="warning-outline"
                    size={20}
                    color={Colors.status.warning}
                    style={DaySheetStyles.notesTitleIcon}
                />
                <Text style={DaySheetStyles.notesTitle}>Important Notes</Text>
            </View>
            <Text style={DaySheetStyles.notesText}>
                {notes}
            </Text>
        </View>
    );
};