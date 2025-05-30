import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MerchandiseItem {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image: string;
    tourId?: string;
}

export interface MerchandiseState {
    items: MerchandiseItem[];
    selectedItem: MerchandiseItem | null;
    loading: boolean;
    error: string | null;
    filters: {
        category: string;
        priceRange: [number, number];
        inStock: boolean;
    };
}

const initialState: MerchandiseState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
    filters: {
        category: '',
        priceRange: [0, 1000],
        inStock: true,
    },
};

const merchandiseSlice = createSlice({
    name: 'merchandise',
    initialState,
    reducers: {
        setItems: (state: MerchandiseState, action: PayloadAction<MerchandiseItem[]>) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        addItem: (state: MerchandiseState, action: PayloadAction<MerchandiseItem>) => {
            state.items.push(action.payload);
        },
        updateStock: (state: MerchandiseState, action: PayloadAction<{ id: string; quantity: number }>) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.stock += action.payload.quantity;
            }
        },
        setSelectedItem: (state: MerchandiseState, action: PayloadAction<MerchandiseItem | null>) => {
            state.selectedItem = action.payload;
        },
        updateFilters: (state: MerchandiseState, action: PayloadAction<Partial<MerchandiseState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setLoading: (state: MerchandiseState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: MerchandiseState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setItems,
    addItem,
    updateStock,
    setSelectedItem,
    updateFilters,
    setLoading,
    setError,
} = merchandiseSlice.actions;

export default merchandiseSlice.reducer;
