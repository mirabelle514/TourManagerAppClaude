import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { CommonStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';

interface VenueInfoProps {
    venue: {
        name: string;
        address: string;
        capacity: number;
        contactPerson: string;
        contactPhone: string;
        contactEmail?: string;
        backline: string[];
        wifi: { network: string; password: string };
        greenRoom: string;
        catering: string;
        accommodation: string;
        parkingInfo?: string;
        loadingDock?: string;
        restrictions?: string[];
        amenities?: string[];
        technicalSpecs?: {
            stage: string;
            sound: string;
            lighting: string;
        };
    };
}

export const VenueInfo: React.FC<VenueInfoProps> = ({ venue }) => {
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

    const toggleSection = (section: string) => {
        const newExpanded = new Set(expandedSections);
        if (newExpanded.has(section)) {
            newExpanded.delete(section);
        } else {
            newExpanded.add(section);
        }
        setExpandedSections(newExpanded);
    };

    const handleCall = (phone: string) => {
        const phoneUrl = `tel:${phone}`;
        Linking.canOpenURL(phoneUrl)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(phoneUrl);
                } else {
                    Alert.alert('Error', 'Phone calls are not supported on this device');
                }
            })
            .catch(() => {
                Alert.alert('Error', 'Failed to make phone call');
            });
    };

    const handleEmail = (email: string) => {
        const emailUrl = `mailto:${email}`;
        Linking.openURL(emailUrl).catch(() => {
            Alert.alert('Error', 'Failed to open email client');
        });
    };

    const renderExpandableSection = (
        title: string,
        sectionKey: string,
        content: React.ReactNode,
        icon: string,
        iconFamily: 'ionicons' | 'material' | 'fontawesome5' = 'ionicons'
    ) => {
        const isExpanded = expandedSections.has(sectionKey);

        return (
            <View style={{ marginBottom: 16 }}>
                <TouchableOpacity
                    onPress={() => toggleSection(sectionKey)}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        backgroundColor: Colors.background.secondary,
                        borderRadius: 8,
                    }}
                    activeOpacity={0.7}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        {iconFamily === 'material' ? (
                            <MaterialIcons name={icon as any} size={20} color={Colors.primary} />
                        ) : iconFamily === 'fontawesome5' ? (
                            <FontAwesome5 name={icon as any} size={16} color={Colors.primary} />
                        ) : (
                            <Ionicons name={icon as any} size={20} color={Colors.primary} />
                        )}
                        <Text style={[CommonStyles.cardSubtitle, { marginLeft: 12, marginBottom: 0, fontSize: 16, fontWeight: '600' }]}>
                            {title}
                        </Text>
                    </View>
                    <Ionicons
                        name={isExpanded ? "chevron-up-outline" : "chevron-down-outline"}
                        size={20}
                        color={Colors.text.secondary}
                    />
                </TouchableOpacity>

                {isExpanded && (
                    <View style={{
                        marginTop: 8,
                        padding: 16,
                        backgroundColor: Colors.background.primary,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: Colors.border.light
                    }}>
                        {content}
                    </View>
                )}
            </View>
        );
    };

    return (
        <View style={CommonStyles.card}>
            <Text style={CommonStyles.cardTitle}>Venue Information</Text>

            {/* Basic Info */}
            <View style={{ marginBottom: 20 }}>
                <Text style={[CommonStyles.headerContent, { fontSize: 20, fontWeight: 'bold' }]}>
                    {venue.name}
                </Text>
                <Text style={[CommonStyles.address, { marginTop: 4 }]}>
                    {venue.address}
                </Text>
                <Text style={[CommonStyles.cardSubtitle, { marginTop: 8 }]}>
                    Capacity: {venue.capacity.toLocaleString()} people
                </Text>
            </View>

            {/* Contact Section */}
            {renderExpandableSection(
                'Contact Information',
                'contact',
                <View>
                    <View style={CommonStyles.contactRow}>
                        <Text style={CommonStyles.contactName}>{venue.contactPerson}</Text>
                        <TouchableOpacity onPress={() => handleCall(venue.contactPhone)}>
                            <Text style={[CommonStyles.phoneText, { color: Colors.primary }]}>
                                {venue.contactPhone}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {venue.contactEmail && (
                        <TouchableOpacity onPress={() => handleEmail(venue.contactEmail!)}>
                            <Text style={[CommonStyles.emailText, { color: Colors.primary, marginTop: 8 }]}>
                                {venue.contactEmail}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>,
                'person-outline'
            )}

            {/* Technical Details */}
            {renderExpandableSection(
                'Technical & Backline',
                'technical',
                <View>
                    <Text style={CommonStyles.techLabel}>Available Backline:</Text>
                    {venue.backline.map((item, index) => (
                        <Text key={index} style={[CommonStyles.techItem, { marginLeft: 16 }]}>
                            • {item}
                        </Text>
                    ))}

                    {venue.technicalSpecs && (
                        <View style={{ marginTop: 16 }}>
                            <Text style={CommonStyles.techLabel}>Technical Specifications:</Text>
                            <Text style={CommonStyles.techItem}>Stage: {venue.technicalSpecs.stage}</Text>
                            <Text style={CommonStyles.techItem}>Sound: {venue.technicalSpecs.sound}</Text>
                            <Text style={CommonStyles.techItem}>Lighting: {venue.technicalSpecs.lighting}</Text>
                        </View>
                    )}
                </View>,
                'settings-outline'
            )}

            {/* WiFi & Connectivity */}
            {renderExpandableSection(
                'WiFi & Connectivity',
                'wifi',
                <View style={CommonStyles.wifiInfo}>
                    <Text style={CommonStyles.techValue}>Network: {venue.wifi.network}</Text>
                    <Text style={[CommonStyles.wifiPassword, { color: Colors.text.secondary }]}>
                        Password: {venue.wifi.password}
                    </Text>
                </View>,
                'wifi-outline'
            )}

            {/* Hospitality */}
            {renderExpandableSection(
                'Hospitality & Amenities',
                'hospitality',
                <View>
                    <View style={{ marginBottom: 12 }}>
                        <Text style={CommonStyles.techLabel}>Green Room:</Text>
                        <Text style={CommonStyles.hospitalityItem}>{venue.greenRoom}</Text>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={CommonStyles.techLabel}>Catering:</Text>
                        <Text style={CommonStyles.hospitalityItem}>{venue.catering}</Text>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={CommonStyles.techLabel}>Accommodation:</Text>
                        <Text style={CommonStyles.hospitalityItem}>{venue.accommodation}</Text>
                    </View>

                    {venue.amenities && venue.amenities.length > 0 && (
                        <View>
                            <Text style={CommonStyles.techLabel}>Additional Amenities:</Text>
                            {venue.amenities.map((amenity, index) => (
                                <Text key={index} style={[CommonStyles.hospitalityItem, { marginLeft: 16 }]}>
                                    • {amenity}
                                </Text>
                            ))}
                        </View>
                    )}
                </View>,
                'restaurant-outline'
            )}

            {/* Logistics */}
            {(venue.parkingInfo || venue.loadingDock) && renderExpandableSection(
                'Logistics & Access',
                'logistics',
                <View>
                    {venue.parkingInfo && (
                        <View style={{ marginBottom: 12 }}>
                            <Text style={CommonStyles.techLabel}>Parking:</Text>
                            <Text style={CommonStyles.logisticsItem}>{venue.parkingInfo}</Text>
                        </View>
                    )}

                    {venue.loadingDock && (
                        <View style={{ marginBottom: 12 }}>
                            <Text style={CommonStyles.techLabel}>Loading Dock:</Text>
                            <Text style={CommonStyles.logisticsItem}>{venue.loadingDock}</Text>
                        </View>
                    )}
                </View>,
                'car-outline'
            )}

            {/* Restrictions */}
            {venue.restrictions && venue.restrictions.length > 0 && renderExpandableSection(
                'Restrictions & Policies',
                'restrictions',
                <View>
                    {venue.restrictions.map((restriction, index) => (
                        <Text key={index} style={[CommonStyles.logisticsItem, { marginLeft: 16, color: Colors.status.warning }]}>
                            ⚠️ {restriction}
                        </Text>
                    ))}
                </View>,
                'warning-outline'
            )}
        </View>
    );
};