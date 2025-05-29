import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from './theme/color';

const { width: screenWidth } = Dimensions.get('window');

export const GuestListStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loadingText: {
        fontSize: 18,
        color: Colors.text.secondary,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.background.primary,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },

    headerSubtitle: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginTop: 2,
    },

    addButton: {
        backgroundColor: Colors.primary,
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },

    capacityCard: {
        backgroundColor: Colors.background.primary,
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
        color: Colors.text.primary,
    },

    capacityNumbers: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
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
        color: Colors.text.secondary,
        marginBottom: 4,
    },

    capacityValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.text.primary,
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
        color: Colors.text.inverse,
        marginTop: 4,
    },

    statLabel: {
        fontSize: 10,
        color: Colors.text.inverse,
        opacity: 0.9,
        marginTop: 2,
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background.primary,
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
        color: Colors.text.primary,
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
        backgroundColor: Colors.background.primary,
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
        color: Colors.text.primary,
    },

    guestTier: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginTop: 2,
    },

    guestContact: {
        fontSize: 12,
        color: Colors.text.tertiary,
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
        color: Colors.text.inverse,
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 4,
    },

    checkInInfo: {
        backgroundColor: Colors.status.success + '20',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginTop: 8,
    },

    checkInText: {
        fontSize: 12,
        color: Colors.status.success,
        fontWeight: '500',
    },

    notesSection: {
        backgroundColor: Colors.background.secondary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginTop: 8,
    },

    notesText: {
        fontSize: 12,
        color: Colors.text.secondary,
        fontStyle: 'italic',
    },

    idRequiredBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.status.error + '20',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        marginTop: 8,
        alignSelf: 'flex-start',
    },

    idRequiredText: {
        fontSize: 12,
        color: Colors.status.error,
        marginLeft: 4,
        fontWeight: '500',
    },

    modalContainer: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    },

    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },

    saveButton: {
        fontSize: 16,
        color: Colors.primary,
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
        color: Colors.text.primary,
        marginBottom: 8,
    },

    textInput: {
        borderWidth: 1,
        borderColor: Colors.border.medium,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: Colors.background.secondary,
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
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
        padding: 8,
    },

    plusOneButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.background.primary,
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
        color: Colors.text.primary,
        marginHorizontal: 20,
    },

    totalGuestsText: {
        fontSize: 14,
        color: Colors.text.secondary,
        textAlign: 'center',
        marginTop: 8,
    },

    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    guestDetailCard: {
        backgroundColor: Colors.background.secondary,
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
        color: Colors.text.primary,
    },

    guestDetailTier: {
        fontSize: 16,
        color: Colors.text.secondary,
        marginTop: 2,
    },

    detailSection: {
        marginBottom: 20,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.primary,
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
        color: Colors.text.secondary,
        fontWeight: '500',
    },

    detailValue: {
        fontSize: 14,
        color: Colors.text.primary,
    },
});