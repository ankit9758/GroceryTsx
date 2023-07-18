

import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './slices/AddressSlice';
import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { persistReducer } from 'redux-persist';
import { UserDataSlice } from './slices/UserDataSlice'; // Import the UserDataSlice



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['address'], // Add other reducers that need to be persisted
};

const rootReducer = combineReducers({
  address: addressReducer,
  userData: UserDataSlice.reducer, // Add the UserDataSlice reducer as 'userData'
  // Add other reducers here
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;