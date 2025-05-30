import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Tour {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: number;
    maxGroupSize: number;
    location: string;
    startDate: string;
    endDate: string;
    images: string[];
    availableSpots: number;
}

export interface ToursState {
    tours: Tour[];
    selectedTour: Tour | null;
    loading: boolean;
    error: string | null;
    filters: {
        location: string;
        priceRange: [number, number];
        dateRange: [string, string];
    };
}

const initialState: ToursState = {
    tours: [],
    selectedTour: null,
    loading: false,
    error: null,
    filters: {
        location: '',
        priceRange: [0, 1000],
        dateRange: ['', ''],
    },
};

const toursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {
        setTours: (state: ToursState, action: PayloadAction<Tour[]>) => {
            state.tours = action.payload;
            state.loading = false;
            state.error = null;
        },
        setSelectedTour: (state: ToursState, action: PayloadAction<Tour | null>) => {
            state.selectedTour = action.payload;
        },
        setLoading: (state: ToursState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: ToursState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateFilters: (state: ToursState, action: PayloadAction<Partial<ToursState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        updateTourAvailability: (state: ToursState, action: PayloadAction<{ tourId: string; spots: number }>) => {
            const tour = state.tours.find(t => t.id === action.payload.tourId);
            if (tour) {
                tour.availableSpots = action.payload.spots;
            }
        },
    },
});

export const {
    setTours,
    setSelectedTour,
    setLoading,
    setError,
    updateFilters,
    updateTourAvailability,
} = toursSlice.actions;

export default toursSlice.reducer; 