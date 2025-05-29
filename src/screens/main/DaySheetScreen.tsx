import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    RefreshControl,
    Alert,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { CommonStyles, FormStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';

import { VenueCard } from '../../components/daysheet/VenueCard';
import { WeatherWidget } from '../../components/daysheet/WeatherWidget';
import { CountdownTimer } from '../../components/daysheet/CountdownTimer';
import { QuickActions } from '../../components/daysheet/QuickActions';
import { TourManagerNotes } from '../../components/daysheet/TourManagerNotes';
import { EmergencyContacts } from '../../components/daysheet/EmergencyContacts';

// Types
interface Venue {
    id: string;
    name: string;
    address: string;
    capacity: number;
    contactName: string;
    contactPhone: string;
    loadInTime: string;
    soundcheckTime: string;
    doorsTime: string;
    setTimes: { band: string; time: string }[];
    backline: string[];
    wifi: { network: string; password: string };
    greenRoom: string;
    catering: string;
    accommodation: string;
    nextVenue: {
        name: string;
        distance: string;
        driveTime: string;
        loadInTime: string;
    };
    settlement: {
        handler: string;
        contact: string;
        expectedTime: string;
    };
    venueRevenue: number;
    ticketsSold: number;
    guestListCount: number;
}

interface DaySheetData {
    date: string;
    venue: Venue;
    weather: {
        current: number;
        condition: string;
        forecast: { time: string; temp: number; condition: string }[];
    };
    tourManagerNotes: string;
    emergencyContacts: { name: string; role: string; phone: string }[];
}

const DaySheetScreen: React.FC = () => {
    const [dayData, setDayData] = useState<DaySheetData | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showEmergencyContacts, setShowEmergencyContacts] = useState(false);

    useEffect(() => {
        loadDaySheetData();
    }, [selectedDate]);

    const loadDaySheetData = async () => {
        try {
            // This would be your API call or local storage retrieval
            // For now, using mock data
            const mockData: DaySheetData = {
                date: selectedDate.toISOString().split('T')[0],
                venue: {
                    id: '1',
                    name: 'The Fillmore',
                    address: '1805 Geary Blvd, San Francisco, CA 94115',
                    capacity: 1150,
                    contactName: 'Sarah Johnson',
                    contactPhone: '(415) 346-6000',
                    loadInTime: '14:00',
                    soundcheckTime: '17:00',
                    doorsTime: '19:00',
                    setTimes: [
                        { band: 'Opening Act', time: '20:00' },
                        { band: 'Main Act', time: '21:30' }
                    ],
                    backline: ['Drum Kit', 'Guitar Amps', 'Bass Amp', 'Piano'],
                    wifi: { network: 'FillmoreGuest', password: 'music2024' },
                    greenRoom: 'Located backstage left, stocked with water and snacks',
                    catering: '$300 meal buyout provided',
                    accommodation: 'Hotel Zephyr - 2 blocks away',
                    nextVenue: {
                        name: 'The Warfield',
                        distance: '380 miles',
                        driveTime: '6 hours 15 minutes',
                        loadInTime: '16:00'
                    },
                    settlement: {
                        handler: 'Mike Chen',
                        contact: '(415) 555-0123',
                        expectedTime: '23:30'
                    },
                    venueRevenue: 15,
                    ticketsSold: 892,
                    guestListCount: 23
                },
                weather: {
                    current: 18,
                    condition: 'Partly Cloudy',
                    forecast: [
                        { time: '18:00', temp: 16, condition: 'Clear' },
                        { time: '21:00', temp: 14, condition: 'Clear' },
                        { time: '00:00', temp: 12, condition: 'Clear' }
                    ]
                },
                tourManagerNotes: 'Load-in through back alley. Parking is limited street only. Sound curfew at 11 PM.',
                emergencyContacts: [
                    { name: 'Dr. Sarah Wilson', role: 'Tour Doctor', phone: '(555) 123-4567' },
                    { name: 'City Hospital', role: 'Emergency Room', phone: '(555) 911-0000' },
                    { name: 'Tour Security', role: 'Head of Security', phone: '(555) 333-7777' }
                ]
            };
            setDayData(mockData);
        } catch (error) {
            Alert.alert('Error', 'Failed to load day sheet data');
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await loadDaySheetData();
        setRefreshing(false);
    };

    const handleQuickAction = (action: string) => {
        switch (action) {
            case 'directions':
                // Open maps to venue
                break;
            case 'call_venue':
                // Make phone call
                break;
            case 'guest_list':
                // Navigate to guest list screen
                break;
            case 'expenses':
                // Navigate to expense tracking
                break;
            default:
                break;
        }
    };

    if (!dayData) {
        return (
            <SafeAreaView style={CommonStyles.container}>
                <View style={CommonStyles.loadingContainer}>
                    <Text style={CommonStyles.loadingText}>Loading Day Sheet...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={CommonStyles.container}>
            <ScrollView
                style={CommonStyles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {/* Header */}
                <View style={CommonStyles.header}>
                    <Text style={CommonStyles.headerTitle}>Day Sheet</Text>
                    <Text style={CommonStyles.headerDate}>
                        {new Date(dayData.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </Text>
                </View>

                {/* Weather Widget */}
                <WeatherWidget weather={dayData.weather} />

                {/* Main Venue Card */}
                <VenueCard
                    venue={dayData.venue}
                    schedule={{
                        loadIn: dayData.venue.loadInTime,
                        soundcheck: dayData.venue.soundcheckTime,
                        doors: dayData.venue.doorsTime,
                        showTime: dayData.venue.setTimes[1].time
                    }}
                    userRole="tour_manager"
                />

                {/* Countdown Timer to Load-in */}
                <CountdownTimer
                    targetTime={`${dayData.date} ${dayData.venue.loadInTime}`}
                    label="Load-in"
                />

                {/* Quick Actions */}
                <QuickActions onAction={handleQuickAction} />

                {/* Schedule Overview */}
                <View style={CommonStyles.card}>
                    <Text style={CommonStyles.cardTitle}>Today's Schedule</Text>
                    <View style={CommonStyles.scheduleItem}>
                        <Ionicons name="time-outline" size={20} color={Colors.text.secondary} />
                        <Text style={CommonStyles.scheduleText}>
                            Load-in: {dayData.venue.loadInTime}
                        </Text>
                    </View>
                    <View style={CommonStyles.scheduleItem}>
                        <MaterialIcons name="music-note" size={20} color={Colors.text.secondary} />
                        <Text style={CommonStyles.scheduleText}>
                            Soundcheck: {dayData.venue.soundcheckTime}
                        </Text>
                    </View>
                    <View style={CommonStyles.scheduleItem}>
                        <Ionicons name="people-outline" size={20} color={Colors.text.secondary} />
                        <Text style={CommonStyles.scheduleText}>
                            Doors: {dayData.venue.doorsTime}
                        </Text>
                    </View>
                    {dayData.venue.setTimes.map((set, index) => (
                        <View key={index} style={CommonStyles.scheduleItem}>
                            <FontAwesome5 name="guitar" size={16} color={Colors.text.secondary} />
                            <Text style={CommonStyles.scheduleText}>
                                {set.band}: {set.time}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* Tour Manager Notes */}
                <TourManagerNotes notes={dayData.tourManagerNotes} />

                {/* Technical Details */}
                <View style={CommonStyles.card}>
                    <Text style={CommonStyles.cardTitle}>Technical Details</Text>
                    <View style={CommonStyles.techDetail}>
                        <Text style={CommonStyles.techLabel}>Backline:</Text>
                        <Text style={CommonStyles.techValue}>
                            {dayData.venue.backline.join(', ')}
                        </Text>
                    </View>
                    <View style={CommonStyles.techDetail}>
                        <Text style={CommonStyles.techLabel}>WiFi:</Text>
                        <Text style={CommonStyles.techValue}>
                            {dayData.venue.wifi.network} / {dayData.venue.wifi.password}
                        </Text>
                    </View>
                    <View style={CommonStyles.techDetail}>
                        <Text style={CommonStyles.techLabel}>Green Room:</Text>
                        <Text style={CommonStyles.techValue}>{dayData.venue.greenRoom}</Text>
                    </View>
                </View>

                {/* Settlement Info */}
                <View style={CommonStyles.card}>
                    <Text style={CommonStyles.cardTitle}>Settlement</Text>
                    <View style={CommonStyles.settlementInfo}>
                        <Text style={CommonStyles.settlementLabel}>Handler:</Text>
                        <Text style={CommonStyles.settlementValue}>
                            {dayData.venue.settlement.handler}
                        </Text>
                    </View>
                    <View style={CommonStyles.settlementInfo}>
                        <Text style={CommonStyles.settlementLabel}>Contact:</Text>
                        <Text style={CommonStyles.settlementValue}>
                            {dayData.venue.settlement.contact}
                        </Text>
                    </View>
                    <View style={CommonStyles.settlementInfo}>
                        <Text style={CommonStyles.settlementLabel}>Expected Time:</Text>
                        <Text style={CommonStyles.settlementValue}>
                            {dayData.venue.settlement.expectedTime}
                        </Text>
                    </View>
                </View>

                {/* Next Venue Info */}
                <View style={CommonStyles.card}>
                    <Text style={CommonStyles.cardTitle}>Tomorrow's Travel</Text>
                    <View style={CommonStyles.travelInfo}>
                        <Text style={CommonStyles.travelLabel}>Distance:</Text>
                        <Text style={CommonStyles.travelValue}>
                            {dayData.venue.nextVenue.distance}
                        </Text>
                    </View>
                    <View style={CommonStyles.travelInfo}>
                        <Text style={CommonStyles.travelLabel}>Drive Time:</Text>
                        <Text style={CommonStyles.travelValue}>
                            {dayData.venue.nextVenue.driveTime}
                        </Text>
                    </View>
                    <View style={CommonStyles.travelInfo}>
                        <Text style={CommonStyles.travelLabel}>Departure:</Text>
                        <Text style={CommonStyles.travelValue}>
                            {dayData.venue.nextVenue.loadInTime}
                        </Text>
                    </View>
                </View>

                {/* Emergency Contacts Button */}
                <TouchableOpacity
                    style={CommonStyles.emergencyButton}
                    onPress={() => setShowEmergencyContacts(true)}
                >
                    <Ionicons name="warning-outline" size={24} color={Colors.text.primary} />
                    <Text style={CommonStyles.emergencyButtonText}>Emergency Contacts</Text>
                </TouchableOpacity>

                {/* Emergency Contacts Modal would go here */}
                {showEmergencyContacts && (
                    <EmergencyContacts
                        contacts={dayData.emergencyContacts}
                        onClose={() => setShowEmergencyContacts(false)}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
};
export default DaySheetScreen;