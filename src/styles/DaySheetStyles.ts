// src/styles/DaySheetStyles.ts (For DaySheetScreen specific styles)
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from './theme/color';

const { width: screenWidth } = Dimensions.get('window');

export const DaySheetStyles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
    },

    scrollView: {
        flex: 1,
    },

    // Header Styles
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.background.primary,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.text.primary,
        marginBottom: 4,
    },

    headerDate: {
        fontSize: 16,
        color: Colors.text.secondary,
        textAlign: 'center',
    },

    // Weather Widget
    weatherWidget: {
        backgroundColor: Colors.background.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    weatherHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },

    weatherCurrent: {
        alignItems: 'center',
    },

    weatherTemp: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primary,
    },

    weatherCondition: {
        fontSize: 16,
        color: Colors.text.secondary,
        marginTop: 4,
    },

    weatherForecast: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
    },

    forecastItem: {
        alignItems: 'center',
        flex: 1,
    },

    forecastTime: {
        fontSize: 12,
        color: Colors.text.tertiary,
        marginBottom: 4,
    },

    forecastTemp: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
    },

    forecastCondition: {
        fontSize: 10,
        color: Colors.text.secondary,
        marginTop: 2,
    },

    // Venue Card
    venueCard: {
        backgroundColor: Colors.background.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    venueHeader: {
        marginBottom: 16,
    },

    venueName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.text.primary,
        marginBottom: 4,
    },

    venueAddress: {
        fontSize: 14,
        color: Colors.text.secondary,
        lineHeight: 20,
    },

    venueStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.border.light,
    },

    venueStat: {
        alignItems: 'center',
        flex: 1,
    },

    venueStatValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.primary,
        marginBottom: 4,
    },

    venueStatLabel: {
        fontSize: 12,
        color: Colors.text.secondary,
        textAlign: 'center',
    },

    venueContact: {
        marginTop: 12,
    },

    contactPerson: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 2,
    },

    contactPhone: {
        fontSize: 14,
        color: Colors.primary,
        textDecorationLine: 'underline',
    },

    // Countdown Timer
    countdownCard: {
        backgroundColor: Colors.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6,
    },

    countdownLabel: {
        fontSize: 16,
        color: Colors.text.inverse,
        marginBottom: 8,
        opacity: 0.9,
    },

    countdownTime: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.text.inverse,
        letterSpacing: 1,
    },

    countdownSubtext: {
        fontSize: 14,
        color: Colors.text.inverse,
        marginTop: 4,
        opacity: 0.8,
    },

    // Quick Actions
    quickActionsCard: {
        backgroundColor: Colors.background.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    quickActionsTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 16,
    },

    quickActionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -8,
    },

    quickActionButton: {
        width: '50%',
        paddingHorizontal: 8,
        marginBottom: 12,
    },

    quickActionContent: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        minHeight: 80,
        justifyContent: 'center',
    },

    quickActionIcon: {
        marginBottom: 8,
    },

    quickActionText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text.primary,
        textAlign: 'center',
    },

    // Schedule Card
    scheduleCard: {
        backgroundColor: Colors.background.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    scheduleTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 16,
    },

    scheduleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    scheduleItemLast: {
        borderBottomWidth: 0,
    },

    scheduleIcon: {
        marginRight: 12,
        width: 24,
        alignItems: 'center',
    },

    scheduleTime: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
        minWidth: 60,
        marginRight: 12,
    },

    scheduleText: {
        fontSize: 16,
        color: Colors.text.primary,
        fontWeight: '500',
        flex: 1,
    },

    scheduleDescription: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginTop: 2,
    },

    // Tour Manager Notes
    notesCard: {
        backgroundColor: Colors.background.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        borderLeftWidth: 4,
        borderLeftColor: Colors.status.warning,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    notesTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    notesTitleIcon: {
        marginRight: 8,
    },

    notesText: {
        fontSize: 16,
        color: Colors.text.primary,
        lineHeight: 24,
    },

    // Technical Details Card
    technicalCard: {
        backgroundColor: Colors.background.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    technicalTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 16,
    },

    techDetail: {
        marginBottom: 16,
    },

    techDetailLast: {
        marginBottom: 0,
    },

    techLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text.secondary,
        marginBottom: 4,
    },

    techValue: {
        fontSize: 16,
        color: Colors.text.primary,
        lineHeight: 22,
    },

    // Settlement Card
    settlementCard: {
        backgroundColor: Colors.background.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        borderLeftWidth: 4,
        borderLeftColor: Colors.financial.revenue,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    settlementTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 16,
    },

    settlementInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },

    settlementInfoLast: {
        marginBottom: 0,
    },

    settlementLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text.secondary,
    },

    settlementValue: {
        fontSize: 16,
        color: Colors.text.primary,
        fontWeight: '500',
    },

    settlementContact: {
        color: Colors.primary,
        textDecorationLine: 'underline',
    },

    // Travel Info Card
    travelCard: {
        backgroundColor: Colors.background.primary,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 20,
        borderLeftWidth: 4,
        borderLeftColor: Colors.tertiary,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    travelTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 16,
    },

    travelInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },

    travelInfoLast: {
        marginBottom: 0,
    },

    travelLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text.secondary,
    },

    travelValue: {
        fontSize: 16,
        color: Colors.text.primary,
        fontWeight: '500',
    },

    travelHighlight: {
        color: Colors.primary,
        fontWeight: 'bold',
    },

    // Emergency Button
    emergencyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.status.error,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 16,
        shadowColor: Colors.status.error,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },

    emergencyButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.inverse,
        marginLeft: 8,
    },

    // Emergency Contacts Modal
    emergencyModal: {
        flex: 1,
        backgroundColor: Colors.background.overlay,
        justifyContent: 'center',
        alignItems: 'center',
    },

    emergencyModalContent: {
        backgroundColor: Colors.background.primary,
        borderRadius: 16,
        padding: 24,
        margin: 20,
        maxWidth: '90%',
        minWidth: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },

    emergencyModalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    emergencyModalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },

    emergencyContactItem: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    emergencyContactItemLast: {
        borderBottomWidth: 0,
    },

    emergencyContactName: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 4,
    },

    emergencyContactRole: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 8,
    },

    emergencyContactPhone: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },

    // Loading States
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background.primary,
    },

    loadingText: {
        fontSize: 16,
        color: Colors.text.secondary,
        marginTop: 12,
    },

    // Venue Revenue Display
    venueRevenue: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.financial.revenue + '15',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginTop: 12,
    },

    venueRevenueText: {
        fontSize: 14,
        color: Colors.financial.revenue,
        fontWeight: '600',
        marginLeft: 6,
    },

    // Accommodation Info
    accommodationInfo: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
        padding: 12,
        marginTop: 8,
    },

    accommodationLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.text.secondary,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 4,
    },

    accommodationText: {
        fontSize: 14,
        color: Colors.text.primary,
    },

    // Catering Info
    cateringInfo: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
        padding: 12,
        marginTop: 8,
    },

    cateringLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.text.secondary,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 4,
    },

    cateringText: {
        fontSize: 14,
        color: Colors.text.primary,
    },
});