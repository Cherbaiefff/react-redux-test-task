import { configureStore } from '@reduxjs/toolkit';
import userCart from './user-cart';
import { productsApi } from '../services/products-service';

const store = configureStore({
    reducer: {
        products: productsApi.reducer,
        userCart: userCart.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
