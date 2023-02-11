import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const PRODUCTS_API = 'https://dummyjson.com/products';

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: PRODUCTS_API }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/`,
        }),
        getSpecificProduct: builder.query({
            query: (productName) => `/search?q=${productName}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetSpecificProductQuery,
    useLazyGetSpecificProductQuery,
} = productsApi;
