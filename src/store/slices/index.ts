// Auth exports
export {
    setCredentials,
    logout,
} from './authSlice';
export type { User, AuthState } from './authSlice';

// Tour exports
export {
    setTours,
    setSelectedTour,
    updateTourAvailability,
} from './tourSlice';
export type { Tour, TourState } from './tourSlice';

// User exports
export {
    setProfile,
    updatePreferences,
    clearProfile,
} from './userSlice';
export type { UserProfile, UserState } from './userSlice';

// Weather exports
export {
    setWeatherData,
    clearWeatherData,
} from './weatherSlice';
export type { WeatherData, WeatherState } from './weatherSlice';

// Financial exports
export {
    setTransactions,
    addTransaction,
} from './financialSlice';
export type { Transaction, FinancialState } from './financialSlice';

// Merchandise exports
export {
    setItems,
    addItem,
    updateStock,
    setSelectedItem,
} from './merchandiseSlice';
export type { MerchandiseItem, MerchandiseState } from './merchandiseSlice';

// Team exports
export {
    setMembers,
    addMember,
    updateMemberStatus,
    assignTour,
    setSelectedMember,
} from './teamSlice';
export type { TeamMember, TeamState } from './teamSlice';

// Guest List exports
export {
    setGuests,
    addGuest,
    updateGuestStatus,
    updateCheckInStatus,
    updatePaymentStatus,
    setSelectedGuest,
} from './guestListSlice';
export type { Guest, GuestListState } from './guestListSlice';

// Communication exports
export {
    setMessages,
    addMessage,
    updateMessageStatus,
    markAllAsRead,
} from './communicationSlice';
export type { Message, CommunicationState } from './communicationSlice';

// Settings exports
export {
    setSettings,
    updateTheme,
    updateLanguage,
    updateNotificationSettings,
    updateDisplaySettings,
    updatePrivacySettings,
} from './settingsSlice';
export type { AppSettings, SettingsState } from './settingsSlice'; 