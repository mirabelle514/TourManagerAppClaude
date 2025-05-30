import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WeatherData {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    location: string;
    forecast: {
        date: string;
        temperature: number;
        condition: string;
    }[];
}

export interface WeatherState {
    current: WeatherData | null;
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    current: null,
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherData: (state: WeatherState, action: PayloadAction<WeatherData>) => {
            state.current = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state: WeatherState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: WeatherState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearWeatherData: (state: WeatherState) => {
            state.current = null;
            state.error = null;
        },
    },
});

export const {
    setWeatherData,
    setLoading,
    setError,
    clearWeatherData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
