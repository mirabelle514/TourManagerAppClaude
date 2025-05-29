import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';

interface LocationInfoProps {
    venueName: string;
    address: string;
    distance?: string;
    driveTime?: string;
    coordinates?: {
        latitude: number;
        longitude: number;
    };
}

export const LocationInfo: React.FC<LocationInfoProps> = ({
    venueName,
    address,
    distance,
    driveTime,
    coordinates
}) => {
    const handleDirections = () => {
        let mapsUrl: string;

        if (coordinates) {
            mapsUrl = `maps://app?daddr=${coordinates.latitude},${coordinates.longitude}`;
        } else {
            mapsUrl = `maps://app?daddr=${encodeURIComponent(address)}`;
        }

        const googleMapsUrl = coordinates
            ? `https://maps.google.com/maps?daddr=${coordinates.latitude},${coordinates.longitude}`
            : `https://maps.google.com/maps?daddr=${encodeURIComponent(address)}`;

        Linking.canOpenURL(mapsUrl)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(mapsUrl);
                } else {
                    Linking.openURL(googleMapsUrl);
                }
            })
            .catch(() => {
                Linking.openURL(googleMapsUrl);
            });
    };

    const handleShareLocation = () => {
        const shareText = `${venueName}\n${address}`;

        // You can implement share functionality here
        Alert.alert(
            'Share Location',
            'Location copied to clipboard',
            [{ text: 'OK', style: 'default' }]
        );
    };

    return (
        <View style={CommonStyles.card}>
            <Text style={CommonStyles.cardTitle}>Location</Text>

            <View style={{ marginBottom: 16 }}>
                <Text style={CommonStyles.headerContent}>{venueName}</Text>
                <View style={CommonStyles.addressContainer}>
                    <Ionicons name="location-outline" size={16} color={Colors.text.secondary} />
                    <Text style={[CommonStyles.address, { color: Colors.text.secondary }]}>
                        {address}
                    </Text>
                </View>
            </View>

            {(distance || driveTime) && (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    backgroundColor: Colors.background.secondary,
                    borderRadius: 8
                }}>
                    {distance && (
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Ionicons name="car-outline" size={20} color={Colors.primary} />
                            <Text style={[CommonStyles.distance, { marginTop: 4, fontWeight: '600' }]}>
                                {distance}
                            </Text>
                            <Text style={{ fontSize: 12, color: Colors.text.secondary }}>
                                Distance
                            </Text>
                        </View>
                    )}
                    {driveTime && (
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Ionicons name="time-outline" size={20} color={Colors.primary} />
                            <Text style={[CommonStyles.distance, { marginTop: 4, fontWeight: '600' }]}>
                                {driveTime}
                            </Text>
                            <Text style={{ fontSize: 12, color: Colors.text.secondary }}>
                                Drive Time
                            </Text>
                        </View>
                    )}
                </View>
            )}

            <View style={{ flexDirection: 'row', gap: 12 }}>
                <TouchableOpacity
                    style={[
                        CommonStyles.primaryButton,
                        { flex: 1, backgroundColor: Colors.primary }
                    ]}
                    onPress={handleDirections}
                    activeOpacity={0.7}
                >
                    <Ionicons name="navigate-outline" size={20} color={Colors.text.inverse} />
                    <Text style={[CommonStyles.primaryButtonText, { color: Colors.text.inverse, marginLeft: 8 }]}>
                        Directions
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        CommonStyles.secondaryButton,
                        {
                            flex: 1,
                            marginTop: 0,
                            borderColor: Colors.border.light,
                            backgroundColor: Colors.background.secondary
                        }
                    ]}
                    onPress={handleShareLocation}
                    activeOpacity={0.7}
                >
                    <Ionicons name="share-outline" size={20} color={Colors.text.primary} />
                    <Text style={[CommonStyles.secondaryButtonText, { marginLeft: 8 }]}>
                        Share
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};