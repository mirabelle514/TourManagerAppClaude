// src/styles/MerchandiseStyles.ts (For MerchandiseScreen specific styles)
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from './theme/color';

const { width: screenWidth } = Dimensions.get('window');

export const MerchandiseStyles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
    },

    // Header
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

    headerActions: {
        flexDirection: 'row',
        gap: 12,
    },

    headerButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.background.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Stats Row
    statsRow: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    statCard: {
        width: 140,
        padding: 15,
        borderRadius: 12,
        marginRight: 15,
        alignItems: 'center',
    },

    statAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.inverse,
        marginTop: 8,
    },

    statLabel: {
        fontSize: 12,
        color: Colors.text.inverse,
        opacity: 0.9,
        marginTop: 4,
    },

    // Tab Navigation
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.background.primary,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    tab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },

    activeTab: {
        borderBottomColor: Colors.primary,
    },

    tabLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 6,
    },

    // Tab Content
    tabContent: {
        flex: 1,
    },

    salesContent: {
        padding: 16,
    },

    analyticsContent: {
        padding: 16,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text.primary,
        marginBottom: 16,
        paddingHorizontal: 4,
    },

    // Sales Items
    saleItem: {
        backgroundColor: Colors.background.primary,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    saleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    saleItemName: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        flex: 1,
    },

    saleTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.financial.revenue,
    },

    saleDetails: {
        marginBottom: 4,
    },

    saleInfo: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 2,
    },

    saleVenue: {
        fontSize: 12,
        color: Colors.text.tertiary,
    },

    saleSoldBy: {
        fontSize: 12,
        color: Colors.text.tertiary,
        fontStyle: 'italic',
    },

    // Chart Styles
    chartCard: {
        backgroundColor: Colors.background.primary,
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    chartTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 16,
        textAlign: 'center',
    },

    // Modal Styles
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

    // Item Selector
    itemSelector: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 12,
        padding: 16,
        marginRight: 12,
        minWidth: 160,
        alignItems: 'center',
    },

    selectedItemSelector: {
        backgroundColor: Colors.primary,
    },

    itemSelectorIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },

    itemSelectorText: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 4,
    },

    itemSelectorPrice: {
        fontSize: 12,
        textAlign: 'center',
    },

    // Quantity Controls
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background.secondary,
        borderRadius: 8,
        padding: 8,
    },

    quantityButton: {
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

    quantityInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.primary,
        textAlign: 'center',
        minWidth: 50,
        marginHorizontal: 20,
    },

    // Size and Color Buttons
    sizeButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: Colors.background.secondary,
        marginRight: 8,
    },

    selectedSizeButton: {
        backgroundColor: Colors.primary,
    },

    sizeButtonText: {
        fontSize: 14,
        fontWeight: '600',
    },

    colorButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: Colors.background.secondary,
        marginRight: 8,
    },

    selectedColorButton: {
        backgroundColor: Colors.primary,
    },

    colorButtonText: {
        fontSize: 14,
        fontWeight: '600',
    },

    // Sale Preview
    salePreview: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 12,
        padding: 16,
        marginTop: 8,
    },

    salePreviewTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 12,
    },

    salePreviewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    salePreviewLabel: {
        fontSize: 14,
        color: Colors.text.secondary,
    },

    salePreviewValue: {
        fontSize: 14,
        color: Colors.text.primary,
        fontWeight: '500',
    },

    salePreviewTotal: {
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
        marginTop: 4,
    },

    salePreviewTotalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
    },

    salePreviewTotalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.financial.revenue,
    },

    // Adjustment Preview
    adjustmentPreview: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 12,
        padding: 16,
        marginTop: 8,
    },

    adjustmentPreviewTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
        marginBottom: 12,
    },

    adjustmentPreviewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    adjustmentPreviewLabel: {
        fontSize: 14,
        color: Colors.text.secondary,
    },

    adjustmentPreviewValue: {
        fontSize: 14,
        fontWeight: '500',
    },

    adjustmentPreviewTotal: {
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
        marginTop: 4,
    },

    adjustmentPreviewTotalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text.primary,
    },

    adjustmentPreviewTotalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },

    // Item Detail Modal
    itemDetailCard: {
        backgroundColor: Colors.background.secondary,
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
    },

    itemDetailHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    itemDetailIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },

    itemDetailInfo: {
        flex: 1,
    },

    itemDetailName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text.primary,
        marginBottom: 4,
    },

    itemDetailCategory: {
        fontSize: 14,
        color: Colors.text.secondary,
        marginBottom: 4,
    },

    itemDetailPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
    },

    itemDescription: {
        fontSize: 14,
        color: Colors.text.secondary,
        lineHeight: 20,
    },

    // Detail Sections
    detailSection: {
        marginBottom: 24,
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
        fontWeight: '500',
    },

    // Size and Color Lists
    sizesList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    sizeChip: {
        backgroundColor: Colors.background.secondary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },

    sizeChipText: {
        fontSize: 12,
        color: Colors.text.primary,
        fontWeight: '500',
    },

    colorsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    colorChip: {
        backgroundColor: Colors.background.secondary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },

    colorChipText: {
        fontSize: 12,
        color: Colors.text.primary,
        fontWeight: '500',
    },

    // Recent Sales
    recentSaleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },

    recentSaleDate: {
        fontSize: 12,
        color: Colors.text.tertiary,
        flex: 1,
    },

    recentSaleVenue: {
        fontSize: 12,
        color: Colors.text.secondary,
        flex: 2,
    },

    recentSaleQuantity: {
        fontSize: 12,
        color: Colors.text.secondary,
        textAlign: 'center',
        flex: 1,
    },

    recentSaleTotal: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.financial.revenue,
        textAlign: 'right',
        flex: 1,
    },
});