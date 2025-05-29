import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    Alert,
    ScrollView,
    RefreshControl,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, useTheme } from '../../styles/theme';
import { useLocation } from '../../utils/hooks/useLocation';
import { usePermissions } from '../../utils/hooks/usePermissions';
import { formatDistance, formatTime, calculateDistance } from '../../utils/formatters';
import { Venue, ShowSchedule, TechnicalSpecs, Settlement } from '../../types/venue';
import { UserRole } from '../../types/user';
import { CommonStyles } from '../../styles/CommonStyles';

interface VenueCardProps {
    venue: Venue;
    schedule: ShowSchedule;
    technicalSpecs?: TechnicalSpecs;
    settlement?: Settlement;
    userRole: UserRole;
    onGuestListPress?: () => void;
    onNotesPress?: () => void;
    onSettlementPress?: () => void;
    onNavigatePress?: () => void;
    refreshing?: boolean;
    onRefresh?: () => void;
}

export const VenueCard: React.FC<VenueCardProps> = ({
    venue,
    schedule,
    technicalSpecs,
    settlement,
    userRole,
    onGuestListPress,
    onNotesPress,
    onSettlementPress,
    onNavigatePress,
    refreshing = false,
    onRefresh,
}) => {
    const theme = useTheme();
    const { currentLocation, getDistance } = useLocation();
    const { canAccessFinancials, canAccessTechnical, canManageGuestList } = usePermissions(userRole);

    const [distance, setDistance] = useState<string>('');
    const [countdownToLoadIn, setCountdownToLoadIn] = useState<string>('');

    // Calculate distance to venue
    useEffect(() => {
        if (currentLocation && venue.coordinates) {
            const dist = getDistance(
                currentLocation.latitude,
                currentLocation.longitude,
                venue.coordinates.latitude,
                venue.coordinates.longitude
            );
            setDistance(formatDistance(dist));
        }
    }, [currentLocation, venue.coordinates]);

    // Countdown timer to load-in
    useEffect(() => {
        const calculateCountdown = () => {
            const now = new Date();
            const loadInTime = new Date(schedule.loadIn);
            const timeDiff = loadInTime.getTime() - now.getTime();

            if (timeDiff > 0) {
                const hours = Math.floor(timeDiff / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                setCountdownToLoadIn(`${hours}h ${minutes}m`);
            } else {
                setCountdownToLoadIn('Load-In Started');
            }
        };

        calculateCountdown();
        const interval = setInterval(calculateCountdown, 60000); // Update every minute

        return () => clearInterval(interval);
    }, [schedule.loadIn]);

    const handlePhoneCall = (phoneNumber: string) => {
        Linking.openURL(`tel:${phoneNumber}`).catch(() => {
            Alert.alert('Error', 'Unable to make phone call');
        });
    };

    const handleNavigation = () => {
        if (venue.address) {
            const url = Platform.OS === 'ios'
                ? `http://maps.apple.com/?q=${encodeURIComponent(venue.address)}`
                : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`;

            Linking.openURL(url).catch(() => {
                Alert.alert('Error', 'Unable to open maps');
            });
        }
        onNavigatePress?.();
    };

    const getCapacityStatus = () => {
        if (!venue.ticketsSold || !venue.capacity) return null;

        const percentage = (venue.ticketsSold / venue.capacity) * 100;
        const color = percentage >= 90 ? Colors.status.success :
            percentage >= 70 ? Colors.status.warning :
                Colors.status.error;

        return { percentage: percentage.toFixed(1), color };
    };

    const capacityStatus = getCapacityStatus();

    return (
        <ScrollView
            style={[CommonStyles.container, { backgroundColor: theme.colors.surface }]}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {/* Venue Header */}
            <View style={[CommonStyles.header, { borderBottomColor: Colors.border.light }]}>
                <View style={CommonStyles.headerContent}>
                    <Text style={[CommonStyles.venueName, { color: theme.colors.primary }]}>
                        {venue.name}
                    </Text>
                    <TouchableOpacity onPress={handleNavigation} style={CommonStyles.addressContainer}>
                        <Icon name="location-on" size={16} color={Colors.text.secondary} />
                        <Text style={[CommonStyles.address, { color: Colors.text.secondary }]}>
                            {venue.address}
                        </Text>
                    </TouchableOpacity>
                    {distance && (
                        <Text style={[CommonStyles.distance, { color: Colors.accent.primary }]}>
                            {distance} away
                        </Text>
                    )}
                </View>

                {/* Quick Actions */}
                <View style={CommonStyles.quickActions}>
                    <TouchableOpacity
                        onPress={() => handlePhoneCall(venue.contactPhone)}
                        style={[CommonStyles.actionButton, { backgroundColor: theme.colors.primary }]}
                    >
                        <Icon name="phone" size={20} color={theme.colors.surface} />
                    </TouchableOpacity>

                    {canManageGuestList && (
                        <TouchableOpacity
                            onPress={onGuestListPress}
                            style={[CommonStyles.actionButton, { backgroundColor: theme.colors.secondary }]}
                        >
                            <Icon name="people" size={20} color={theme.colors.surface} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Capacity & Sales Status */}
            {capacityStatus && (
                <View style={[CommonStyles.section, { backgroundColor: Colors.background.primary }]}>
                    <View style={CommonStyles.capacityRow}>
                        <Text style={[CommonStyles.sectionTitle, { color: Colors.text.primary }]}>
                            Capacity Status
                        </Text>
                        <View style={CommonStyles.capacityStats}>
                            <Text style={[CommonStyles.capacityText, { color: Colors.text.primary }]}>
                                {venue.ticketsSold?.toLocaleString()} / {venue.capacity?.toLocaleString()}
                            </Text>
                            <Text style={[CommonStyles.percentageText, { color: capacityStatus.color }]}>
                                {capacityStatus.percentage}%
                            </Text>
                        </View>
                    </View>

                    {venue.venuePercentage && canAccessFinancials && (
                        <Text style={[CommonStyles.venuePercentage, { color: Colors.text.secondary }]}>
                            Venue takes {venue.venuePercentage}% of sales
                        </Text>
                    )}
                </View>
            )}

            {/* Schedule Section */}
            <View style={[CommonStyles.section, { backgroundColor: Colors.background.primary }]}>
                <Text style={[CommonStyles.sectionTitle, { color: Colors.text.primary }]}>
                    Today's Schedule
                </Text>

                <View style={CommonStyles.scheduleItem}>
                    <View style={CommonStyles.scheduleTime}>
                        <Text style={[CommonStyles.timeText, { color: theme.colors.primary }]}>
                            {formatTime(schedule.loadIn)}
                        </Text>
                        <Text style={[CommonStyles.countdown, { color: Colors.accent.primary }]}>
                            {countdownToLoadIn}
                        </Text>
                    </View>
                    <Text style={[CommonStyles.scheduleLabel, { color: Colors.text.primary }]}>
                        Load-In
                    </Text>
                </View>

                {schedule.soundcheck && (
                    <View style={CommonStyles.scheduleItem}>
                        <Text style={[CommonStyles.timeText, { color: Colors.text.primary }]}>
                            {formatTime(schedule.soundcheck)}
                        </Text>
                        <Text style={[CommonStyles.scheduleLabel, { color: Colors.text.primary }]}>
                            Soundcheck
                        </Text>
                    </View>
                )}

                <View style={CommonStyles.scheduleItem}>
                    <Text style={[CommonStyles.timeText, { color: Colors.text.primary }]}>
                        {formatTime(schedule.doors)}
                    </Text>
                    <Text style={[CommonStyles.scheduleLabel, { color: Colors.text.primary }]}>
                        Doors Open
                    </Text>
                </View>

                <View style={CommonStyles.scheduleItem}>
                    <Text style={[CommonStyles.timeText, { color: Colors.primary }]}>
                        {formatTime(schedule.showTime)}
                    </Text>
                    <Text style={[CommonStyles.scheduleLabel, { color: Colors.text.primary }]}>
                        Show Time
                    </Text>
                </View>
            </View>

            {/* Contact Information */}
            <View style={[CommonStyles.section, { backgroundColor: Colors.background.primary }]}>
                <Text style={[CommonStyles.sectionTitle, { color: Colors.text.primary }]}>
                    Venue Contact
                </Text>

                <View style={CommonStyles.contactRow}>
                    <Text style={[CommonStyles.contactName, { color: Colors.text.primary }]}>
                        {venue.contactName}
                    </Text>
                    <TouchableOpacity
                        onPress={() => handlePhoneCall(venue.contactPhone)}
                        style={CommonStyles.phoneButton}
                    >
                        <Text style={[CommonStyles.phoneText, { color: theme.colors.primary }]}>
                            {venue.contactPhone}
                        </Text>
                    </TouchableOpacity>
                </View>

                {venue.contactEmail && (
                    <TouchableOpacity
                        onPress={() => Linking.openURL(`mailto:${venue.contactEmail}`)}
                    >
                        <Text style={[CommonStyles.emailText, { color: Colors.text.secondary }]}>
                            {venue.contactEmail}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Technical Specs (if accessible) */}
            {technicalSpecs && canAccessTechnical && (
                <View style={[CommonStyles.section, { backgroundColor: Colors.background.primary }]}>
                    <Text style={[CommonStyles.sectionTitle, { color: Colors.text.primary }]}>
                        Technical Information
                    </Text>

                    {technicalSpecs.backlineAvailable && (
                        <Text style={[CommonStyles.techItem, { color: Colors.text.primary }]}>
                            • Backline: {technicalSpecs.backlineAvailable.join(', ')}
                        </Text>
                    )}

                    {technicalSpecs.wifiNetwork && (
                        <View style={CommonStyles.wifiInfo}>
                            <Text style={[CommonStyles.techItem, { color: Colors.text.primary }]}>
                                • WiFi: {technicalSpecs.wifiNetwork}
                            </Text>
                            {technicalSpecs.wifiPassword && (
                                <Text style={[CommonStyles.wifiPassword, { color: Colors.text.secondary }]}>
                                    Password: {technicalSpecs.wifiPassword}
                                </Text>
                            )}
                        </View>
                    )}

                    {technicalSpecs.powerRequirements && (
                        <Text style={[CommonStyles.techItem, { color: Colors.text.primary }]}>
                            • Power: {technicalSpecs.powerRequirements}
                        </Text>
                    )}
                </View>
            )}

            {/* Settlement Information (if accessible) */}
            {settlement && canAccessFinancials && (
                <View style={[CommonStyles.section, { backgroundColor: Colors.background.primary }]}>
                    <Text style={[CommonStyles.sectionTitle, { color: Colors.text.primary }]}>
                        Settlement Details
                    </Text>

                    <View style={CommonStyles.settlementRow}>
                        <Text style={[CommonStyles.settlementLabel, { color: Colors.text.primary }]}>
                            Contact:
                        </Text>
                        <TouchableOpacity
                            onPress={() => handlePhoneCall(settlement.contactPhone)}
                        >
                            <Text style={[CommonStyles.settlementValue, { color: theme.colors.primary }]}>
                                {settlement.contactName} ({settlement.contactPhone})
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={CommonStyles.settlementRow}>
                        <Text style={[CommonStyles.settlementLabel, { color: Colors.text.primary }]}>
                            Method:
                        </Text>
                        <Text style={[CommonStyles.settlementValue, { color: Colors.text.primary }]}>
                            {settlement.paymentMethod}
                        </Text>
                    </View>

                    {settlement.expectedTime && (
                        <View style={CommonStyles.settlementRow}>
                            <Text style={[CommonStyles.settlementLabel, { color: Colors.text.primary }]}>
                                Expected:
                            </Text>
                            <Text style={[CommonStyles.settlementValue, { color: Colors.text.primary }]}>
                                {formatTime(settlement.expectedTime)}
                            </Text>
                        </View>
                    )}

                    {onSettlementPress && (
                        <TouchableOpacity
                            onPress={onSettlementPress}
                            style={[CommonStyles.settlementButton, { backgroundColor: theme.colors.primary }]}
                        >
                            <Text style={[CommonStyles.settlementButtonText, { color: theme.colors.surface }]}>
                                View Settlement Details
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}

            {/* Logistics */}
            <View style={[CommonStyles.section, { backgroundColor: Colors.background.primary }]}>
                <Text style={[CommonStyles.sectionTitle, { color: Colors.text.primary }]}>
                    Load-In & Logistics
                </Text>

                {venue.loadInInstructions && (
                    <Text style={[CommonStyles.logisticsItem, { color: Colors.text.primary }]}>
                        • Load-In: {venue.loadInInstructions}
                    </Text>
                )}

                {venue.parkingInstructions && (
                    <Text style={[CommonStyles.logisticsItem, { color: Colors.text.primary }]}>
                        • Parking: {venue.parkingInstructions}
                    </Text>
                )}

                {venue.accessInstructions && (
                    <Text style={[CommonStyles.logisticsItem, { color: Colors.text.primary }]}>
                        • Access: {venue.accessInstructions}
                    </Text>
                )}
            </View>

            {/* Hospitality */}
            {venue.catering && (
                <View style={[CommonStyles.section, { backgroundColor: Colors.background.primary }]}>
                    <Text style={[CommonStyles.sectionTitle, { color: Colors.text.primary }]}>
                        Hospitality
                    </Text>

                    <Text style={[CommonStyles.hospitalityItem, { color: Colors.text.primary }]}>
                        • Catering: {venue.catering}
                    </Text>

                    {venue.buyoutAmount && canAccessFinancials && (
                        <Text style={[CommonStyles.hospitalityItem, { color: Colors.text.primary }]}>
                            • Buyout Available: ${venue.buyoutAmount}
                        </Text>
                    )}

                    {venue.greenRoomAmenities && (
                        <Text style={[CommonStyles.hospitalityItem, { color: Colors.text.primary }]}>
                            • Green Room: {venue.greenRoomAmenities.join(', ')}
                        </Text>
                    )}
                </View>
            )}

            {/* Travel Information */}
            {venue.nextVenue && (
                <View style={[CommonStyles.section, { backgroundColor: Colors.background.primary }]}>
                    <Text style={[CommonStyles.sectionTitle, { color: Colors.text.primary }]}>
                        Next Venue
                    </Text>

                    <Text style={[CommonStyles.travelItem, { color: Colors.text.primary }]}>
                        {venue.nextVenue.name}
                    </Text>
                    <Text style={[CommonStyles.travelItem, { color: Colors.text.secondary }]}>
                        {venue.nextVenue.distance} • {venue.nextVenue.driveTime}
                    </Text>
                    <Text style={[CommonStyles.travelItem, { color: Colors.accent.primary }]}>
                        Next Load-In: {formatTime(venue.nextVenue.loadInTime)}
                    </Text>
                </View>
            )}

            {/* Tour Manager Notes */}
            {onNotesPress && (
                <TouchableOpacity
                    onPress={onNotesPress}
                    style={[CommonStyles.notesButton, { borderColor: Colors.border.light }]}
                >
                    <Icon name="note-add" size={20} color={Colors.primary} />
                    <Text style={[CommonStyles.notesButtonText, { color: Colors.primary }]}>
                        Tour Manager Notes
                    </Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
};
