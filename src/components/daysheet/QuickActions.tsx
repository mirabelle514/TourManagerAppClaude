import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { DaySheetStyles } from '../../styles/DaySheetStyles';
import { Colors } from '../../styles/theme/color';

interface QuickActionsProps {
    onAction: (action: string) => void;
}

interface ActionItem {
    id: string;
    title: string;
    icon: any;
    iconType: 'ionicons' | 'material';
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onAction }) => {
    const actions: ActionItem[] = [
        {
            id: 'directions',
            title: 'Get Directions',
            icon: 'map-outline',
            iconType: 'ionicons'
        },
        {
            id: 'call_venue',
            title: 'Call Venue',
            icon: 'call-outline',
            iconType: 'ionicons'
        },
        {
            id: 'guest_list',
            title: 'Guest List',
            icon: 'people-outline',
            iconType: 'ionicons'
        },
        {
            id: 'expenses',
            title: 'Track Expenses',
            icon: 'receipt-outline',
            iconType: 'ionicons'
        }
    ];

    const renderIcon = (action: ActionItem) => {
        const IconComponent = action.iconType === 'ionicons' ? Ionicons : MaterialIcons;
        return (
            <IconComponent
                name={action.icon}
                size={24}
                color={Colors.primary}
                style={DaySheetStyles.quickActionIcon}
            />
        );
    };

    return (
        <View style={DaySheetStyles.quickActionsCard}>
            <Text style={DaySheetStyles.quickActionsTitle}>Quick Actions</Text>
            <View style={DaySheetStyles.quickActionsGrid}>
                {actions.map((action) => (
                    <TouchableOpacity
                        key={action.id}
                        style={DaySheetStyles.quickActionButton}
                        onPress={() => onAction(action.id)}
                        activeOpacity={0.7}
                    >
                        <View style={DaySheetStyles.quickActionContent}>
                            {renderIcon(action)}
                            <Text style={DaySheetStyles.quickActionText}>
                                {action.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};