import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

// Import all reducers
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

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['settings', 'user'], // Only persist these reducers
};

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['user', 'token'], // Only persist these fields
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    tour: tourReducer,
    user: userReducer,
    weather: weatherReducer,
    financial: financialReducer,
    merchandise: merchandiseReducer,
    team: teamReducer,
    guestList: guestListReducer,
    communication: communicationReducer,
    settings: settingsReducer,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>; 