import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Transaction {
    id: string;
    type: 'income' | 'expense';
    amount: number;
    category: string;
    description: string;
    date: string;
    tourId?: string;
}

export interface FinancialState {
    transactions: Transaction[];
    balance: number;
    loading: boolean;
    error: string | null;
    filters: {
        dateRange: [string, string];
        type: 'all' | 'income' | 'expense';
        category: string;
    };
}

const initialState: FinancialState = {
    transactions: [],
    balance: 0,
    loading: false,
    error: null,
    filters: {
        dateRange: ['', ''],
        type: 'all',
        category: '',
    },
};

const financialSlice = createSlice({
    name: 'financial',
    initialState,
    reducers: {
        setTransactions: (state: FinancialState, action: PayloadAction<Transaction[]>) => {
            state.transactions = action.payload;
            state.balance = action.payload.reduce((acc, curr) => {
                return acc + (curr.type === 'income' ? curr.amount : -curr.amount);
            }, 0);
            state.loading = false;
            state.error = null;
        },
        addTransaction: (state: FinancialState, action: PayloadAction<Transaction>) => {
            state.transactions.push(action.payload);
            state.balance += action.payload.type === 'income'
                ? action.payload.amount
                : -action.payload.amount;
        },
        updateFilters: (state: FinancialState, action: PayloadAction<Partial<FinancialState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setLoading: (state: FinancialState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: FinancialState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setTransactions,
    addTransaction,
    updateFilters,
    setLoading,
    setError,
} = financialSlice.actions;

export default financialSlice.reducer;
