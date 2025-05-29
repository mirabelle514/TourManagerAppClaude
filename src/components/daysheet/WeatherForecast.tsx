import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';

interface HourlyForecast {
    time: string;
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    chanceOfRain: number;
}

interface DailyForecast {
    date: string;
    dayName: string;
    high: number;
    low: number;
    condition: string;
    chanceOfRain: number;
    windSpeed: number;
}

interface WeatherForecastProps {
    current: {
        temp: number;
        condition: string;
        humidity: number;
        windSpeed: number;
        feelsLike: number;
    };
    hourly: HourlyForecast[];
    daily: DailyForecast[];
    alerts?: string[];
}

export const WeatherForecast: React.FC<WeatherForecastProps> = ({
    current,
    hourly,
    daily,
    alerts
}) => {
    const [selectedView, setSelectedView] = useState<'hourly' | 'daily'>('hourly');

    const getWeatherIcon = (condition: string, size: number = 24) => {
        const lowerCondition = condition.toLowerCase();
        let iconName = 'partly-sunny-outline';

        if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
            iconName = 'sunny-outline';
        } else if (lowerCondition.includes('cloud')) {
            iconName = 'partly-sunny-outline';
        } else if (lowerCondition.includes('rain')) {
            iconName = 'rainy-outline';
        } else if (lowerCondition.includes('snow')) {
            iconName = 'snow-outline';
        } else if (lowerCondition.includes('storm')) {
            iconName = 'thunderstorm-outline';
        }

        return <Ionicons name={iconName as any} size={size} color={Colors.primary} />;
    };

    const getConditionColor = (condition: string) => {
        const lowerCondition = condition.toLowerCase();
        if (lowerCondition.includes('rain') || lowerCondition.includes('storm')) {
            return Colors.status.warning;
        }
        if (lowerCondition.includes('snow')) {
            return Colors.status.info;
        }
        return Colors.text.primary;
    };

    const renderHourlyForecast = () => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 16 }}>
            {hourly.map((hour, index) => (
                <View key={index} style={{
                    alignItems: 'center',
                    marginRight: 16,
                    padding: 12,
                    backgroundColor: Colors.background.secondary,
                    borderRadius: 12,
                    minWidth: 80,
                }}>
                    <Text style={{ fontSize: 12, color: Colors.text.secondary, marginBottom: 8 }}>
                        {hour.time}
                    </Text>
                    {getWeatherIcon(hour.condition, 32)}
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.text.primary, marginVertical: 8 }}>
                        {hour.temp}°
                    </Text>
                    <Text style={{ fontSize: 10, color: getConditionColor(hour.condition), textAlign: 'center' }}>
                        {hour.condition}
                    </Text>
                    {hour.chanceOfRain > 0 && (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                            <Ionicons name="water-outline" size={12} color={Colors.status.info} />
                            <Text style={{ fontSize: 10, color: Colors.status.info, marginLeft: 2 }}>
                                {hour.chanceOfRain}%
                            </Text>
                        </View>
                    )}
                </View>
            ))}
        </ScrollView>
    );

    const renderDailyForecast = () => (
        <View style={{ marginTop: 16 }}>
            {daily.map((day, index) => (
                <View key={index} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    backgroundColor: Colors.background.secondary,
                    borderRadius: 8,
                    marginBottom: 8,
                }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.text.primary }}>
                            {day.dayName}
                        </Text>
                        <Text style={{ fontSize: 12, color: Colors.text.secondary }}>
                            {day.date}
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center', marginHorizontal: 16 }}>
                        {getWeatherIcon(day.condition, 28)}
                        <Text style={{ fontSize: 10, color: getConditionColor(day.condition), marginTop: 4 }}>
                            {day.condition}
                        </Text>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.text.primary }}>
                                {day.high}°
                            </Text>
                            <Text style={{ fontSize: 14, color: Colors.text.secondary, marginLeft: 4 }}>
                                {day.low}°
                            </Text>
                        </View>
                        {day.chanceOfRain > 0 && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Ionicons name="water-outline" size={12} color={Colors.status.info} />
                                <Text style={{ fontSize: 10, color: Colors.status.info, marginLeft: 2 }}>
                                    {day.chanceOfRain}%
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            ))}
        </View>
    );

    return (
        <View style={CommonStyles.card}>
            <Text style={CommonStyles.cardTitle}>Weather Forecast</Text>

            {/* Current Weather */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 16,
                paddingHorizontal: 16,
                backgroundColor: Colors.background.secondary,
                borderRadius: 12,
                marginBottom: 16,
            }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: Colors.primary }}>
                        {current.temp}°C
                    </Text>
                    <Text style={{ fontSize: 16, color: getConditionColor(current.condition) }}>
                        {current.condition}
                    </Text>
                    <Text style={{ fontSize: 12, color: Colors.text.secondary, marginTop: 4 }}>
                        Feels like {current.feelsLike}°C
                    </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    {getWeatherIcon(current.condition, 48)}
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                        <Ionicons name="water-outline" size={16} color={Colors.status.info} />
                        <Text style={{ fontSize: 12, color: Colors.text.secondary, marginLeft: 4 }}>
                            {current.humidity}%
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="leaf-outline" size={16} color={Colors.status.success} />
                        <Text style={{ fontSize: 12, color: Colors.text.secondary, marginLeft: 4 }}>
                            {current.windSpeed} km/h
                        </Text>
                    </View>
                </View>
            </View>

            {/* Weather Alerts */}
            {alerts && alerts.length > 0 && (
                <View style={{
                    backgroundColor: Colors.status.warning + '15',
                    borderLeftWidth: 4,
                    borderLeftColor: Colors.status.warning,
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 16,
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                        <Ionicons name="warning-outline" size={20} color={Colors.status.warning} />
                        <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.status.warning, marginLeft: 8 }}>
                            Weather Alerts
                        </Text>
                    </View>
                    {alerts.map((alert, index) => (
                        <Text key={index} style={{ fontSize: 12, color: Colors.text.primary, marginBottom: 4 }}>
                            • {alert}
                        </Text>
                    ))}
                </View>
            )}

            {/* Toggle Buttons */}
            <View style={{
                flexDirection: 'row',
                backgroundColor: Colors.background.secondary,
                borderRadius: 8,
                padding: 4,
                marginBottom: 8,
            }}>
                <TouchableOpacity
                    style={[
                        {
                            flex: 1,
                            paddingVertical: 8,
                            borderRadius: 6,
                            alignItems: 'center',
                        },
                        selectedView === 'hourly' && { backgroundColor: Colors.primary }
                    ]}
                    onPress={() => setSelectedView('hourly')}
                    activeOpacity={0.7}
                >
                    <Text style={[
                        { fontSize: 14, fontWeight: '600' },
                        selectedView === 'hourly'
                            ? { color: Colors.text.inverse }
                            : { color: Colors.text.secondary }
                    ]}>
                        Hourly
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        {
                            flex: 1,
                            paddingVertical: 8,
                            borderRadius: 6,
                            alignItems: 'center',
                        },
                        selectedView === 'daily' && { backgroundColor: Colors.primary }
                    ]}
                    onPress={() => setSelectedView('daily')}
                    activeOpacity={0.7}
                >
                    <Text style={[
                        { fontSize: 14, fontWeight: '600' },
                        selectedView === 'daily'
                            ? { color: Colors.text.inverse }
                            : { color: Colors.text.secondary }
                    ]}>
                        Daily
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Forecast Content */}
            {selectedView === 'hourly' ? renderHourlyForecast() : renderDailyForecast()}
        </View>
    );
};