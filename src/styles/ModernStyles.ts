import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from './theme/color';

const { width: screenWidth } = Dimensions.get('window');

export const ModernStyles = StyleSheet.create({
    // Container
    container: {
        flex: 1,
        backgroundColor: '#F2F2F7', // Light gray background
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#F2F2F7',
        borderBottomWidth: 0.5,
        borderBottomColor: '#C6C6C8',
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        flex: 1,
    },
    headerButton: {
        padding: 8,
        borderRadius: 8,
    },

    // Content
    content: {
        flex: 1,
        padding: 16,
    },

    // Cards
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cardHeader: {
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C6C6C8',
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000',
    },
    cardContent: {
        padding: 16,
    },

    // List Items
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.5,
        borderBottomColor: '#C6C6C8',
    },
    listItemContent: {
        flex: 1,
        marginLeft: 12,
    },
    listItemTitle: {
        fontSize: 17,
        color: '#000',
    },
    listItemSubtitle: {
        fontSize: 15,
        color: '#8E8E93',
        marginTop: 2,
    },
    listItemIcon: {
        width: 24,
        height: 24,
        tintColor: '#007AFF', // Primary blue
    },

    // Buttons
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600',
    },
    secondaryButton: {
        backgroundColor: '#F2F2F7',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryButtonText: {
        color: '#007AFF',
        fontSize: 17,
        fontWeight: '600',
    },

    // Form Elements
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 12,
        fontSize: 17,
        color: '#000',
        borderWidth: 0.5,
        borderColor: '#C6C6C8',
    },
    label: {
        fontSize: 15,
        color: '#8E8E93',
        marginBottom: 8,
    },

    // Tab Bar
    tabBar: {
        backgroundColor: '#F2F2F7',
        borderTopWidth: 0.5,
        borderTopColor: '#C6C6C8',
        paddingBottom: 20,
        paddingTop: 8,
    },
    tabBarLabel: {
        fontSize: 10,
        fontWeight: '500',
    },

    // Status Bar
    statusBar: {
        backgroundColor: '#F2F2F7',
    },
}); 