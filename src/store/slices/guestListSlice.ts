import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Guest {
    id: string;
    name: string;
    email: string;
    phone: string;
    tourId: string;
    status: 'confirmed' | 'pending' | 'cancelled';
    specialRequirements?: string;
    checkInStatus: 'checked_in' | 'not_checked_in';
    paymentStatus: 'paid' | 'pending' | 'refunded';
}

export interface GuestListState {
    guests: Guest[];
    selectedGuest: Guest | null;
    loading: boolean;
    error: string | null;
    filters: {
        tourId: string;
        status: Guest['status'] | 'all';
        checkInStatus: Guest['checkInStatus'] | 'all';
        paymentStatus: Guest['paymentStatus'] | 'all';
    };
}

const initialState: GuestListState = {
    guests: [],
    selectedGuest: null,
    loading: false,
    error: null,
    filters: {
        tourId: '',
        status: 'all',
        checkInStatus: 'all',
        paymentStatus: 'all',
    },
};

const guestListSlice = createSlice({
    name: 'guestList',
    initialState,
    reducers: {
        setGuests: (state: GuestListState, action: PayloadAction<Guest[]>) => {
            state.guests = action.payload;
            state.loading = false;
            state.error = null;
        },
        addGuest: (state: GuestListState, action: PayloadAction<Guest>) => {
            state.guests.push(action.payload);
        },
        updateGuestStatus: (
            state: GuestListState,
            action: PayloadAction<{ id: string; status: Guest['status'] }>
        ) => {
            const guest = state.guests.find(g => g.id === action.payload.id);
            if (guest) {
                guest.status = action.payload.status;
            }
        },
        updateCheckInStatus: (
            state: GuestListState,
            action: PayloadAction<{ id: string; status: Guest['checkInStatus'] }>
        ) => {
            const guest = state.guests.find(g => g.id === action.payload.id);
            if (guest) {
                guest.checkInStatus = action.payload.status;
            }
        },
        updatePaymentStatus: (
            state: GuestListState,
            action: PayloadAction<{ id: string; status: Guest['paymentStatus'] }>
        ) => {
            const guest = state.guests.find(g => g.id === action.payload.id);
            if (guest) {
                guest.paymentStatus = action.payload.status;
            }
        },
        setSelectedGuest: (state: GuestListState, action: PayloadAction<Guest | null>) => {
            state.selectedGuest = action.payload;
        },
        updateFilters: (state: GuestListState, action: PayloadAction<Partial<GuestListState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setLoading: (state: GuestListState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: GuestListState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setGuests,
    addGuest,
    updateGuestStatus,
    updateCheckInStatus,
    updatePaymentStatus,
    setSelectedGuest,
    updateFilters,
    setLoading,
    setError,
} = guestListSlice.actions;

export default guestListSlice.reducer;
