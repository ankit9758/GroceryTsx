

import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './AddressSlice';
import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {  persistReducer } from 'redux-persist';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['address'], // Add other reducers that need to be persisted
};

const rootReducer = combineReducers({
  address: addressReducer,
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