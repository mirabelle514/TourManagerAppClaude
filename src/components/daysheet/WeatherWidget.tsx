import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DaySheetStyles } from '../../styles/DaySheetStyles';
import { Colors } from '../../styles/theme/color';

interface WeatherData {
    current: number;
    condition: string;
    forecast: { time: string; temp: number; condition: string }[];
}

interface WeatherWidgetProps {
    weather: WeatherData;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
    const getWeatherIcon = (condition: string) => {
        const lowerCondition = condition.toLowerCase();
        if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
            return 'sunny-outline';
        } else if (lowerCondition.includes('cloud')) {
            return 'partly-sunny-outline';
        } else if (lowerCondition.includes('rain')) {
            return 'rainy-outline';
        } else if (lowerCondition.includes('snow')) {
            return 'snow-outline';
        } else if (lowerCondition.includes('storm')) {
            return 'thunderstorm-outline';
        }
        return 'partly-sunny-outline';
    };

    return (
        <View style={DaySheetStyles.weatherWidget}>
            <View style={DaySheetStyles.weatherHeader}>
                <View style={DaySheetStyles.weatherCurrent}>
                    <Ionicons
                        name={getWeatherIcon(weather.condition)}
                        size={32}
                        color={Colors.primary}
                    />
                    <Text style={DaySheetStyles.weatherTemp}>
                        {weather.current}°C
                    </Text>
                    <Text style={DaySheetStyles.weatherCondition}>
                        {weather.condition}
                    </Text>
                </View>
            </View>

            {weather.forecast && weather.forecast.length > 0 && (
                <View style={DaySheetStyles.weatherForecast}>
                    {weather.forecast.map((item, index) => (
                        <View key={index} style={DaySheetStyles.forecastItem}>
                            <Text style={DaySheetStyles.forecastTime}>
                                {item.time}
                            </Text>
                            <Ionicons
                                name={getWeatherIcon(item.condition)}
                                size={20}
                                color={Colors.text.secondary}
                            />
                            <Text style={DaySheetStyles.forecastTemp}>
                                {item.temp}°
                            </Text>
                            <Text style={DaySheetStyles.forecastCondition}>
                                {item.condition}
                            </Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};