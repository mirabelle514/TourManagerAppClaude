// Store exports
export { store } from './store';
export type { RootState, AppDispatch } from './store';

// Auth exports
export { setCredentials, setLoading, setError, logout } from './slices/authSlice';
export type { User, AuthState } from './slices/authSlice';

// Tours exports
export {
    setTours,
    setSelectedTour,
    updateFilters,
    updateTourAvailability,
} from './slices/toursSlice';
export type { Tour, ToursState } from './slices/toursSlice';

// Bookings exports
export {
    setBookings,
    addBooking,
    updateBookingStatus,
    setSelectedBooking,
    cancelBooking,
} from './slices/bookingsSlice';
export type { Booking, BookingsState } from './slices/bookingsSlice';
