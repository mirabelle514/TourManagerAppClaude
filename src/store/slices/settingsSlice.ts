import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppSettings {
    theme: 'light' | 'dark' | 'system';
    language: string;
    notifications: {
        email: boolean;
        push: boolean;
        sms: boolean;
    };
    display: {
        currency: string;
        dateFormat: string;
        timeFormat: '12h' | '24h';
    };
    privacy: {
        shareData: boolean;
        analytics: boolean;
    };
}

export interface SettingsState {
    settings: AppSettings;
    loading: boolean;
    error: string | null;
}

const initialState: SettingsState = {
    settings: {
        theme: 'system',
        language: 'en',
        notifications: {
            email: true,
            push: true,
            sms: false,
        },
        display: {
            currency: 'USD',
            dateFormat: 'MM/DD/YYYY',
            timeFormat: '12h',
        },
        privacy: {
            shareData: true,
            analytics: true,
        },
    },
    loading: false,
    error: null,
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSettings: (state: SettingsState, action: PayloadAction<AppSettings>) => {
            state.settings = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateTheme: (state: SettingsState, action: PayloadAction<AppSettings['theme']>) => {
            state.settings.theme = action.payload;
        },
        updateLanguage: (state: SettingsState, action: PayloadAction<string>) => {
            state.settings.language = action.payload;
        },
        updateNotificationSettings: (
            state: SettingsState,
            action: PayloadAction<Partial<AppSettings['notifications']>>
        ) => {
            state.settings.notifications = {
                ...state.settings.notifications,
                ...action.payload,
            };
        },
        updateDisplaySettings: (
            state: SettingsState,
            action: PayloadAction<Partial<AppSettings['display']>>
        ) => {
            state.settings.display = {
                ...state.settings.display,
                ...action.payload,
            };
        },
        updatePrivacySettings: (
            state: SettingsState,
            action: PayloadAction<Partial<AppSettings['privacy']>>
        ) => {
            state.settings.privacy = {
                ...state.settings.privacy,
                ...action.payload,
            };
        },
        setLoading: (state: SettingsState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: SettingsState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setSettings,
    updateTheme,
    updateLanguage,
    updateNotificationSettings,
    updateDisplaySettings,
    updatePrivacySettings,
    setLoading,
    setError,
} = settingsSlice.actions;

export default settingsSlice.reducer;
