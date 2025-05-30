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

export interface TourState {
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

const initialState: TourState = {
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

const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        setTours: (state: TourState, action: PayloadAction<Tour[]>) => {
            state.tours = action.payload;
            state.loading = false;
            state.error = null;
        },
        setSelectedTour: (state: TourState, action: PayloadAction<Tour | null>) => {
            state.selectedTour = action.payload;
        },
        setLoading: (state: TourState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: TourState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateFilters: (state: TourState, action: PayloadAction<Partial<TourState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        updateTourAvailability: (state: TourState, action: PayloadAction<{ tourId: string; spots: number }>) => {
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
} = tourSlice.actions;

export default tourSlice.reducer;
