import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserProfile {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'manager' | 'staff';
    permissions: string[];
    preferences: {
        language: string;
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

export interface UserState {
    profile: UserProfile | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    profile: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProfile: (state: UserState, action: PayloadAction<UserProfile>) => {
            state.profile = action.payload;
            state.loading = false;
            state.error = null;
        },
        updatePreferences: (state: UserState, action: PayloadAction<Partial<UserProfile['preferences']>>) => {
            if (state.profile) {
                state.profile.preferences = { ...state.profile.preferences, ...action.payload };
            }
        },
        setLoading: (state: UserState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: UserState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearProfile: (state: UserState) => {
            state.profile = null;
            state.error = null;
        },
    },
});

export const {
    setProfile,
    updatePreferences,
    setLoading,
    setError,
    clearProfile,
} = userSlice.actions;

export default userSlice.reducer;
