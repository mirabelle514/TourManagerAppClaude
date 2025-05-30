import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Booking {
    id: string;
    tourId: string;
    userId: string;
    numberOfPeople: number;
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    bookingDate: string;
    specialRequests?: string;
}

export interface BookingsState {
    bookings: Booking[];
    selectedBooking: Booking | null;
    loading: boolean;
    error: string | null;
}

const initialState: BookingsState = {
    bookings: [],
    selectedBooking: null,
    loading: false,
    error: null,
};

const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        setBookings: (state: BookingsState, action: PayloadAction<Booking[]>) => {
            state.bookings = action.payload;
            state.loading = false;
            state.error = null;
        },
        addBooking: (state: BookingsState, action: PayloadAction<Booking>) => {
            state.bookings.push(action.payload);
        },
        updateBookingStatus: (
            state: BookingsState,
            action: PayloadAction<{ bookingId: string; status: Booking['status'] }>
        ) => {
            const booking = state.bookings.find(b => b.id === action.payload.bookingId);
            if (booking) {
                booking.status = action.payload.status;
            }
        },
        setSelectedBooking: (state: BookingsState, action: PayloadAction<Booking | null>) => {
            state.selectedBooking = action.payload;
        },
        setLoading: (state: BookingsState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: BookingsState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        cancelBooking: (state: BookingsState, action: PayloadAction<string>) => {
            const booking = state.bookings.find(b => b.id === action.payload);
            if (booking) {
                booking.status = 'cancelled';
            }
        },
    },
});

export const {
    setBookings,
    addBooking,
    updateBookingStatus,
    setSelectedBooking,
    setLoading,
    setError,
    cancelBooking,
} = bookingsSlice.actions;

export default bookingsSlice.reducer; 