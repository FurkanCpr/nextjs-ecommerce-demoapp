import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsSlice';
import authReducer from './reducers/authSlice'; // authReducer'ı ekliyoruz

export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer, // authReducer'ı ekliyoruz
    },
});

// RootState ve AppDispatch tiplerini oluşturuyoruz
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;