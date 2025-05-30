import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './persistConfig';
import authReducer from './slices/authSlice';
import tourReducer from './slices/tourSlice';
import userReducer from './slices/userSlice';
import weatherReducer from './slices/weatherSlice';
import financialReducer from './slices/financialSlice';
import merchandiseReducer from './slices/merchandiseSlice';
import teamReducer from './slices/teamSlice';
import guestListReducer from './slices/guestListSlice';
import communicationReducer from './slices/communicationSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
