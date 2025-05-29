import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { CommonStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';

interface ScheduleItem {
    time: string;
    event: string;
    description?: string;
    icon?: string;
    iconFamily?: 'ionicons' | 'material' | 'fontawesome5';
    isCompleted?: boolean;
    isActive?: boolean;
}

interface ScheduleOverviewProps {
    scheduleItems: ScheduleItem[];
    currentTime?: string;
}

export const ScheduleOverview: React.FC<ScheduleOverviewProps> = ({
    scheduleItems,
    currentTime
}) => {
    const getTimeStatus = (scheduleTime: string): 'upcoming' | 'active' | 'completed' => {
        if (!currentTime) return 'upcoming';

        const current = new Date(`2000-01-01 ${currentTime}`);
        const scheduled = new Date(`2000-01-01 ${scheduleTime}`);

        if (current < scheduled) return 'upcoming';
        if (current.getTime() === scheduled.getTime()) return 'active';
        return 'completed';
    };

    const renderIcon = (item: ScheduleItem) => {
        const status = getTimeStatus(item.time);
        let iconColor = Colors.text.secondary;

        if (status === 'active') iconColor = Colors.primary;
        if (status === 'completed') iconColor = Colors.status.success;

        if (item.icon) {
            if (item.iconFamily === 'material') {
                return <MaterialIcons name={item.icon as any} size={20} color={iconColor} />;
            } else if (item.iconFamily === 'fontawesome5') {
                return <FontAwesome5 name={item.icon as any} size={16} color={iconColor} />;
            } else {
                return <Ionicons name={item.icon as any} size={20} color={iconColor} />;
            }
        }

        // Default icons based on event type
        if (item.event.toLowerCase().includes('load')) {
            return <Ionicons name="car-outline" size={20} color={iconColor} />;
        } else if (item.event.toLowerCase().includes('sound')) {
            return <MaterialIcons name="music-note" size={20} color={iconColor} />;
        } else if (item.event.toLowerCase().includes('door')) {
            return <Ionicons name="people-outline" size={20} color={iconColor} />;
        } else if (item.event.toLowerCase().includes('set') || item.event.toLowerCase().includes('show')) {
            return <FontAwesome5 name="guitar" size={16} color={iconColor} />;
        }

        return <Ionicons name="time-outline" size={20} color={iconColor} />;
    };

    const getItemStyle = (item: ScheduleItem) => {
        const status = getTimeStatus(item.time);
        const baseStyle = CommonStyles.scheduleItem;

        if (status === 'active') {
            return [
                baseStyle,
                {
                    backgroundColor: Colors.primary + '10',
                    borderRadius: 8,
                    marginVertical: 2,
                    paddingHorizontal: 12
                }
            ];
        }

        if (status === 'completed') {
            return [
                baseStyle,
                {
                    opacity: 0.6,
                    backgroundColor: Colors.status.success + '05',
                    borderRadius: 8,
                    marginVertical: 2,
                    paddingHorizontal: 12
                }
            ];
        }

        return baseStyle;
    };

    const getTimeStyle = (item: ScheduleItem) => {
        const status = getTimeStatus(item.time);

        if (status === 'active') {
            return { color: Colors.primary, fontWeight: 'bold' as const };
        }

        if (status === 'completed') {
            return { color: Colors.status.success, fontWeight: '600' as const };
        }

        return { color: Colors.text.primary, fontWeight: 'bold' as const };
    };

    return (
        <View style={CommonStyles.card}>
            <Text style={CommonStyles.cardTitle}>Today's Schedule</Text>

            {scheduleItems.map((item, index) => (
                <View
                    key={index}
                    style={getItemStyle(item)}
                >
                    <View style={CommonStyles.scheduleIcon}>
                        {renderIcon(item)}
                    </View>

                    <View style={CommonStyles.scheduleTime}>
                        <Text style={[
                            CommonStyles.timeText,
                            getTimeStyle(item)
                        ]}>
                            {item.time}
                        </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={[
                            CommonStyles.scheduleText,
                            getTimeStatus(item.time) === 'completed' && { opacity: 0.7 }
                        ]}>
                            {item.event}
                        </Text>
                        {item.description && (
                            <Text style={[
                                CommonStyles.scheduleDescription,
                                { fontSize: 12, color: Colors.text.secondary, marginTop: 2 }
                            ]}>
                                {item.description}
                            </Text>
                        )}
                    </View>

                    {getTimeStatus(item.time) === 'completed' && (
                        <Ionicons
                            name="checkmark-circle"
                            size={20}
                            color={Colors.status.success}
                        />
                    )}

                    {getTimeStatus(item.time) === 'active' && (
                        <View style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: Colors.primary,
                            marginLeft: 8
                        }} />
                    )}
                </View>
            ))}

            {currentTime && (
                <View style={{
                    marginTop: 12,
                    paddingTop: 12,
                    borderTopWidth: 1,
                    borderTopColor: Colors.border.light,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: Colors.text.secondary
                    }}>
                        Current Time: {currentTime}
                    </Text>
                </View>
            )}
        </View>
    );
};