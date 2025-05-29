import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
    Modal,
    FlatList,
    Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// Component imports
import { GuestListCard } from '../components/guestlist/GuestListCard';
import { CapacityTracker } from '../components/guestlist/CapacityTracker';
import { VIPManager } from '../components/guestlist/VIPManager';
import { CheckInStatus } from '../components/guestlist/CheckInStatus';

// Types
interface Guest {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    tier: 'general' | 'vip' | 'family' | 'industry' | 'press';
    plusOnes: number;
    totalGuests: number;
    checkedIn: boolean;
    checkInTime?: string;
    addedBy: string;
    addedDate: string;
    notes?: string;
    requiresID: boolean;
    venue: string;
    showDate: string;
}

interface VenueInfo {
    name: string;
    capacity: number;
    date: string;
    guestListLimit: number;
    currentTicketsSold: number;
}

const GuestListScreen: React.FC = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    const [venueInfo, setVenueInfo] = useState<VenueInfo | null>(null);
    const [filterTier, setFilterTier] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddGuest, setShowAddGuest] = useState(false);
    const [showCheckIn, setShowCheckIn] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
    const [filteredGuests, setFilteredGuests] = useState<Guest[]>([]);

    const [newGuest, setNewGuest] = useState({
        name: '',
        email: '',
        phone: '',
        tier: 'general' as const,
        plusOnes: 0,
        requiresID: false,
        notes: '',
    });

    const tiers = [
        { id: 'all', label: 'All Guests', color: '#3498db', icon: 'people' },
        { id: 'general', label: 'General', color: '#95a5a6', icon: 'person' },
        { id: 'vip', label: 'VIP', color: '#f39c12', icon: 'star' },
        { id: 'family', label: 'Family', color: '#e74c3c', icon: 'heart' },
        { id: 'industry', label: 'Industry', color: '#9b59b6', icon: 'briefcase' },
        { id: 'press', label: 'Press', color: '#2ecc71', icon: 'camera' },
    ];

    useEffect(() => {
        loadGuestListData();
    }, []);

    useEffect(() => {
        filterGuests();
    }, [guests, filterTier, searchQuery]);

    const loadGuestListData = async () => {
        try {
            // Mock data - in real app, this would be API calls
            const mockVenueInfo: VenueInfo = {
                name: 'The Fillmore',
                capacity: 1150,
                date: '2024-01-15',
                guestListLimit: 100,
                currentTicketsSold: 892,
            };

            const mockGuests: Guest[] = [
                {
                    id: '1',
                    name: 'Sarah Johnson',
                    email: 'sarah.j@email.com',
                    phone: '+1-555-0123',
                    tier: 'vip',
                    plusOnes: 2,
                    totalGuests: 3,
                    checkedIn: true,
                    checkInTime: '19:15',
                    addedBy: 'Tour Manager',
                    addedDate: '2024-01-10',
                    requiresID: true,
                    venue: 'The Fillmore',
                    showDate: '2024-01-15',
                },
                {
                    id: '2',
                    name: 'Mike Chen',
                    email: 'mike.chen@email.com',
                    tier: 'industry',
                    plusOnes: 1,
                    totalGuests: 2,
                    checkedIn: false,
                    addedBy: 'Band Leader',
                    addedDate: '2024-01-12',
                    requiresID: false,
                    venue: 'The Fillmore',
                    showDate: '2024-01-15',
                    notes: 'Music journalist from Rolling Stone',
                },
                {
                    id: '3',
                    name: 'Emma Wilson',
                    tier: 'family',
                    plusOnes: 0,
                    totalGuests: 1,
                    checkedIn: false,
                    addedBy: 'Band Member',
                    addedDate: '2024-01-08',
                    requiresID: false,
                    venue: 'The Fillmore',
                    showDate: '2024-01-15',
                },
                {
                    id: '4',
                    name: 'David Kim',
                    email: 'david.k@email.com',
                    phone: '+1-555-0456',
                    tier: 'general',
                    plusOnes: 3,
                    totalGuests: 4,
                    checkedIn: false,
                    addedBy: 'Tour Manager',
                    addedDate: '2024-01-13',
                    requiresID: true,
                    venue: 'The Fillmore',
                    showDate: '2024-01-15',
                },
                {
                    id: '5',
                    name: 'Alex Rodriguez',
                    email: 'alex.r@email.com',
                    tier: 'press',
                    plusOnes: 1,
                    totalGuests: 2,
                    checkedIn: true,
                    checkInTime: '18:45',
                    addedBy: 'Publicist',
                    addedDate: '2024-01-14',
                    requiresID: true,
                    venue: 'The Fillmore',
                    showDate: '2024-01-15',
                    notes: 'Photographer - needs photo pass',
                },
            ];

            setVenueInfo(mockVenueInfo);
            setGuests(mockGuests);
        } catch (error) {
            Alert.alert('Error', 'Failed to load guest list data');
        }
    };

    const filterGuests = () => {
        let filtered = guests;

        // Filter by tier
        if (filterTier !== 'all') {
            filtered = filtered.filter(guest => guest.tier === filterTier);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            filtered = filtered.filter(guest =>
                guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (guest.email && guest.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (guest.phone && guest.phone.includes(searchQuery))
            );
        }

        setFilteredGuests(filtered);
    };

    const getGuestListStats = () => {
        const totalGuests = guests.reduce((sum, guest) => sum + guest.totalGuests, 0);
        const checkedInGuests = guests.filter(guest => guest.checkedIn).length;
        const checkedInTotal = guests
            .filter(guest => guest.checkedIn)
            .reduce((sum, guest) => sum + guest.totalGuests, 0);

        const tierCounts = tiers.slice(1).map(tier => ({
            ...tier,
            count: guests.filter(guest => guest.tier === tier.id).length,
        }));

        return { totalGuests, checkedInGuests, checkedInTotal, tierCounts };
    };

    const handleAddGuest = () => {
        if (!newGuest.name) {
            Alert.alert('Error', 'Please enter a guest name');
            return;
        }

        if (!venueInfo) {
            Alert.alert('Error', 'Venue information not loaded');
            return;
        }

        const currentTotal = guests.reduce((sum, guest) => sum + guest.totalGuests, 0);
        const newTotal = currentTotal + newGuest.plusOnes + 1;

        if (newTotal > venueInfo.guestListLimit) {
            Alert.alert(
                'Guest List Full',
                `Adding this guest would exceed the limit of ${venueInfo.guestListLimit} guests.`
            );
            return;
        }

        const guest: Guest = {
            id: Date.now().toString(),
            name: newGuest.name,
            email: newGuest.email || undefined,
            phone: newGuest.phone || undefined,
            tier: newGuest.tier,
            plusOnes: newGuest.plusOnes,
            totalGuests: newGuest.plusOnes + 1,
            checkedIn: false,
            addedBy: 'Current User',
            addedDate: new Date().toISOString().split('T')[0],
            requiresID: newGuest.requiresID,
            notes: newGuest.notes || undefined,
            venue: venueInfo.name,
            showDate: venueInfo.date,
        };

        setGuests([...guests, guest]);
        setNewGuest({
            name: '',
            email: '',
            phone: '',
            tier: 'general',
            plusOnes: 0,
            requiresID: false,
            notes: '',
        });
        setShowAddGuest(false);
    };

    const handleCheckIn = (guestId: string) => {
        const updatedGuests = guests.map(guest => {
            if (guest.id === guestId) {
                return {
                    ...guest,
                    checkedIn: !guest.checkedIn,
                    checkInTime: !guest.checkedIn ?
                        new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) :
                        undefined,
                };
            }
            return guest;
        });
        setGuests(updatedGuests);
    };

    const handleRemoveGuest = (guestId: string) => {
        Alert.alert(
            'Remove Guest',
            'Are you sure you want to remove this guest from the list?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: () => {
                        setGuests(guests.filter(guest => guest.id !== guestId));
                    },
                },
            ]
        );
    };

    const getTierIcon = (tier: string) => {
        const tierInfo = tiers.find(t => t.id === tier);
        return tierInfo?.icon || 'person';
    };

    const getTierColor = (tier: string) => {
        const tierInfo = tiers.find(t => t.id === tier);
        return tierInfo?.color || '#95a5a6';
    };

    const renderGuestItem = ({ item }: { item: Guest }) => (
        <TouchableOpacity
            style={styles.guestCard}
            onPress={() => setSelectedGuest(item)}
        >
            <View style={styles.guestHeader}>
                <View style={styles.guestInfo}>
                    <View style={[styles.tierIndicator, { backgroundColor: getTierColor(item.tier) }]}>
                        <Ionicons name={getTierIcon(item.tier) as any} size={16} color="#fff" />
                    </View>
                    <View style={styles.guestDetails}>
                        <Text style={styles.guestName}>{item.name}</Text>
                        <Text style={styles.guestTier}>
                            {tiers.find(t => t.id === item.tier)?.label} • {item.totalGuests} guest{item.totalGuests > 1 ? 's' : ''}
                        </Text>
                        {item.email && <Text style={styles.guestContact}>📧 {item.email}</Text>}
                        {item.phone && <Text style={styles.guestContact}>📞 {item.phone}</Text>}
                    </View>
                </View>
                <View style={styles.guestActions}>
                    <TouchableOpacity
                        style={[styles.checkInButton, {
                            backgroundColor: item.checkedIn ? '#2ecc71' : '#95a5a6'
                        }]}
                        onPress={() => handleCheckIn(item.id)}
                    >
                        <Ionicons
                            name={item.checkedIn ? "checkmark-circle" : "radio-button-off"}
                            size={20}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {item.checkedIn && item.checkInTime && (
                <View style={styles.checkInInfo}>
                    <Text style={styles.checkInText}>✅ Checked in at {item.checkInTime}</Text>
                </View>
            )}

            {item.notes && (
                <View style={styles.notesSection}>
                    <Text style={styles.notesText}>📝 {item.notes}</Text>
                </View>
            )}

            {item.requiresID && (
                <View style={styles.idRequiredBadge}>
                    <Ionicons name="id-card" size={12} color="#e74c3c" />
                    <Text style={styles.idRequiredText}>ID Required</Text>
                </View>
            )}
        </TouchableOpacity>
    );

    const stats = getGuestListStats();

    if (!venueInfo) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Loading Guest List...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Guest List</Text>
                    <Text style={styles.headerSubtitle}>
                        {venueInfo.name} • {new Date(venueInfo.date).toLocaleDateString()}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setShowAddGuest(true)}
                >
                    <Ionicons name="person-add" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Capacity Overview */}
            <View style={styles.capacityCard}>
                <View style={styles.capacityHeader}>
                    <Text style={styles.capacityTitle}>Venue Capacity</Text>
                    <Text style={styles.capacityNumbers}>
                        {stats.totalGuests + venueInfo.currentTicketsSold} / {venueInfo.capacity}
                    </Text>
                </View>
                <View style={styles.capacityBreakdown}>
                    <View style={styles.capacityItem}>
                        <Text style={styles.capacityLabel}>Tickets Sold</Text>
                        <Text style={styles.capacityValue}>{venueInfo.currentTicketsSold}</Text>
                    </View>
                    <View style={styles.capacityItem}>
                        <Text style={styles.capacityLabel}>Guest List</Text>
                        <Text style={[styles.capacityValue, {
                            color: stats.totalGuests > venueInfo.guestListLimit ? '#e74c3c' : '#2ecc71'
                        }]}>
                            {stats.totalGuests} / {venueInfo.guestListLimit}
                        </Text>
                    </View>
                    <View style={styles.capacityItem}>
                        <Text style={styles.capacityLabel}>Checked In</Text>
                        <Text style={styles.capacityValue}>{stats.checkedInTotal}</Text>
                    </View>
                </View>
            </View>

            {/* Guest List Stats */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsRow}>
                {stats.tierCounts.map((tier) => (
                    <View key={tier.id} style={[styles.statCard, { backgroundColor: tier.color }]}>
                        <Ionicons name={tier.icon as any} size={20} color="#fff" />
                        <Text style={styles.statAmount}>{tier.count}</Text>
                        <Text style={styles.statLabel}>{tier.label}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Search and Filter */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#666" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search guests..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchQuery('')}>
                        <Ionicons name="close-circle" size={20} color="#666" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Tier Filter */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
                {tiers.map((tier) => (
                    <TouchableOpacity
                        key={tier.id}
                        style={[
                            styles.filterButton,
                            {
                                backgroundColor: filterTier === tier.id
                                    ? tier.color
                                    : tier.color + '20'
                            }
                        ]}
                        onPress={() => setFilterTier(tier.id)}
                    >
                        <Ionicons
                            name={tier.icon as any}
                            size={16}
                            color={filterTier === tier.id ? '#fff' : tier.color}
                        />
                        <Text style={[
                            styles.filterButtonText,
                            { color: filterTier === tier.id ? '#fff' : tier.color }
                        ]}>
                            {tier.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Guest List */}
            <FlatList
                data={filteredGuests}
                renderItem={renderGuestItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.guestList}
                showsVerticalScrollIndicator={false}
            />

            {/* Add Guest Modal */}
            <Modal
                visible={showAddGuest}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setShowAddGuest(false)}>
                            <Ionicons name="close" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Add Guest</Text>
                        <TouchableOpacity onPress={handleAddGuest}>
                            <Text style={styles.saveButton}>Add</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.modalContent}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Name *</Text>
                            <TextInput
                                style={styles.textInput}
                                value={newGuest.name}
                                onChangeText={(text) => setNewGuest({ ...newGuest, name: text })}
                                placeholder="Enter guest name"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Email</Text>
                            <TextInput
                                style={styles.textInput}
                                value={newGuest.email}
                                onChangeText={(text) => setNewGuest({ ...newGuest, email: text })}
                                placeholder="guest@example.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Phone</Text>
                            <TextInput
                                style={styles.textInput}
                                value={newGuest.phone}
                                onChangeText={(text) => setNewGuest({ ...newGuest, phone: text })}
                                placeholder="+1-555-0123"
                                keyboardType="phone-pad"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Guest Tier</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {tiers.slice(1).map((tier) => (
                                    <TouchableOpacity
                                        key={tier.id}
                                        style={[
                                            styles.tierButton,
                                            {
                                                backgroundColor: newGuest.tier === tier.id
                                                    ? tier.color
                                                    : tier.color + '20'
                                            }
                                        ]}
                                        onPress={() => setNewGuest({ ...newGuest, tier: tier.id as any })}
                                    >
                                        <Ionicons
                                            name={tier.icon as any}
                                            size={16}
                                            color={newGuest.tier === tier.id ? '#fff' : tier.color}
                                        />
                                        <Text style={[
                                            styles.tierButtonText,
                                            { color: newGuest.tier === tier.id ? '#fff' : tier.color }
                                        ]}>
                                            {tier.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Plus Ones</Text>
                            <View style={styles.plusOneContainer}>
                                <TouchableOpacity
                                    style={styles.plusOneButton}
                                    onPress={() => setNewGuest({
                                        ...newGuest,
                                        plusOnes: Math.max(0, newGuest.plusOnes - 1)
                                    })}
                                >
                                    <Ionicons name="remove" size={20} color="#666" />
                                </TouchableOpacity>
                                <Text style={styles.plusOneValue}>{newGuest.plusOnes}</Text>
                                <TouchableOpacity
                                    style={styles.plusOneButton}
                                    onPress={() => setNewGuest({
                                        ...newGuest,
                                        plusOnes: Math.min(10, newGuest.plusOnes + 1)
                                    })}
                                >
                                    <Ionicons name="add" size={20} color="#666" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.totalGuestsText}>
                                Total: {newGuest.plusOnes + 1} guest{newGuest.plusOnes + 1 > 1 ? 's' : ''}
                            </Text>
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.switchRow}>
                                <Text style={styles.inputLabel}>Requires ID</Text>
                                <Switch
                                    value={newGuest.requiresID}
                                    onValueChange={(value) => setNewGuest({ ...newGuest, requiresID: value })}
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Notes</Text>
                            <TextInput
                                style={[styles.textInput, styles.textArea]}
                                value={newGuest.notes}
                                onChangeText={(text) => setNewGuest({ ...newGuest, notes: text })}
                                placeholder="Any special notes or requirements..."
                                multiline
                                numberOfLines={3}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Modal>

            {/* Guest Detail Modal */}
            <Modal
                visible={selectedGuest !== null}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setSelectedGuest(null)}>
                            <Ionicons name="close" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Guest Details</Text>
                        <TouchableOpacity
                            onPress={() => selectedGuest && handleRemoveGuest(selectedGuest.id)}
                        >
                            <Ionicons name="trash" size={24} color="#e74c3c" />
                        </TouchableOpacity>
                    </View>

                    {selectedGuest && (
                        <ScrollView style={styles.modalContent}>
                            <View style={styles.guestDetailCard}>
                                <View style={styles.guestDetailHeader}>
                                    <View style={[styles.tierIndicator, { backgroundColor: getTierColor(selectedGuest.tier) }]}>
                                        <Ionicons name={getTierIcon(selectedGuest.tier) as any} size={24} color="#fff" />
                                    </View>
                                    <View style={styles.guestDetailInfo}>
                                        <Text style={styles.guestDetailName}>{selectedGuest.name}</Text>
                                        <Text style={styles.guestDetailTier}>
                                            {tiers.find(t => t.id === selectedGuest.tier)?.label}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        style={[styles.checkInButton, {
                                            backgroundColor: selectedGuest.checkedIn ? '#2ecc71' : '#95a5a6'
                                        }]}
                                        onPress={() => handleCheckIn(selectedGuest.id)}
                                    >
                                        <Ionicons
                                            name={selectedGuest.checkedIn ? "checkmark-circle" : "radio-button-off"}
                                            size={24}
                                            color="#fff"
                                        />
                                        <Text style={styles.checkInButtonText}>
                                            {selectedGuest.checkedIn ? 'Checked In' : 'Check In'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.detailSection}>
                                <Text style={styles.sectionTitle}>Guest Information</Text>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Total Guests:</Text>
                                    <Text style={styles.detailValue}>{selectedGuest.totalGuests}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Plus Ones:</Text>
                                    <Text style={styles.detailValue}>{selectedGuest.plusOnes}</Text>
                                </View>
                                {selectedGuest.email && (
                                    <View style={styles.detailRow}>
                                        <Text style={styles.detailLabel}>Email:</Text>
                                        <Text style={styles.detailValue}>{selectedGuest.email}</Text>
                                    </View>
                                )}
                                {selectedGuest.phone && (
                                    <View style={styles.detailRow}>
                                        <Text style={styles.detailLabel}>Phone:</Text>
                                        <Text style={styles.detailValue}>{selectedGuest.phone}</Text>
                                    </View>
                                )}
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Requires ID:</Text>
                                    <Text style={styles.detailValue}>
                                        {selectedGuest.requiresID ? 'Yes' : 'No'}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.detailSection}>
                                <Text style={styles.sectionTitle}>Check-In Status</Text>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Status:</Text>
                                    <Text style={[
                                        styles.detailValue,
                                        { color: selectedGuest.checkedIn ? '#2ecc71' : '#e74c3c' }
                                    ]}>
                                        {selectedGuest.checkedIn ? 'Checked In' : 'Not Checked In'}
                                    </Text>
                                </View>
                                {selectedGuest.checkedIn && selectedGuest.checkInTime && (
                                    <View style={styles.detailRow}>
                                        <Text style={styles.detailLabel}>Check-In Time:</Text>
                                        <Text style={styles.detailValue}>{selectedGuest.checkInTime}</Text>
                                    </View>
                                )}
                            </View>

                            <View style={styles.detailSection}>
                                <Text style={styles.sectionTitle}>Added By</Text>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Added By:</Text>
                                    <Text style={styles.detailValue}>{selectedGuest.addedBy}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Date Added:</Text>
                                    <Text style={styles.detailValue}>
                                        {new Date(selectedGuest.addedDate).toLocaleDateString()}
                                    </Text>
                                </View>
                            </View>

                            {selectedGuest.notes && (
                                <View style={styles.detailSection}>
                                    <Text style={styles.sectionTitle}>Notes</Text>
                                    <Text style={styles.notesText}>{selectedGuest.notes}</Text>
                                </View>
                            )}
                        </ScrollView>
                    )}
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        color: '#666',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    addButton: {
        backgroundColor: '#3498db',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    capacityCard: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    capacityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    capacityTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    capacityNumbers: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3498db',
    },
    capacityBreakdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    capacityItem: {
        alignItems: 'center',
    },
    capacityLabel: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    capacityValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    statsRow: {
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    statCard: {
        width: 80,
        padding: 12,
        borderRadius: 12,
        marginRight: 12,
        alignItems: 'center',
    },
    statAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 4,
    },
    statLabel: {
        fontSize: 10,
        color: '#fff',
        opacity: 0.9,
        marginTop: 2,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
    },
    filterRow: {
        paddingHorizontal: 15,
        paddingBottom: 15,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
    },
    filterButtonText: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 4,
    },
    guestList: {
        padding: 15,
    },
    guestCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    guestHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    guestInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    tierIndicator: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    guestDetails: {
        flex: 1,
    },
    guestName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    guestTier: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    guestContact: {
        fontSize: 12,
        color: '#999',
        marginTop: 1,
    },
    guestActions: {
        marginLeft: 10,
    },
    checkInButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
    },
    checkInButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 4,
    },
    checkInInfo: {
        backgroundColor: '#e8f5e8',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginTop: 8,
    },
    checkInText: {
        fontSize: 12,
        color: '#2ecc71',
        fontWeight: '500',
    },
    notesSection: {
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginTop: 8,
    },
    notesText: {
        fontSize: 12,
        color: '#666',
        fontStyle: 'italic',
    },
    idRequiredBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffe6e6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        marginTop: 8,
        alignSelf: 'flex-start',
    },
    idRequiredText: {
        fontSize: 12,
        color: '#e74c3c',
        marginLeft: 4,
        fontWeight: '500',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    saveButton: {
        fontSize: 16,
        color: '#3498db',
        fontWeight: '600',
    },
    modalContent: {
        padding: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#f8f9fa',
    },
    textArea: {
        minHeight: 80,
        textAlignVertical: 'top',
    },
    tierButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
    },
    tierButtonText: {
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 4,
    },
    plusOneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 8,
    },
    plusOneButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    plusOneValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 20,
    },
    totalGuestsText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 8,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    guestDetailCard: {
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
    },
    guestDetailHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    guestDetailInfo: {
        flex: 1,
        marginLeft: 12,
    },
    guestDetailName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    guestDetailTier: {
        fontSize: 16,
        color: '#666',
        marginTop: 2,
    },
    detailSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    detailLabel: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    detailValue: {
        fontSize: 14,
        color: '#333',
    },
});

export default GuestListScreen;