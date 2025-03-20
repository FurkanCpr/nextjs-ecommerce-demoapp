import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
    _id: string;
    title: string;
    image: string;
    type: string;
    subProducts: Array<{
        _id: string;
        name: string;
        price: number;
    }>;
}

interface Packet {
    _id: string;
    title: string;
    image: string;
}

interface ProductsState {
    products: Product[];
    packets: Packet[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    packets: [],
    status: 'idle',
    error: null,
};

export const fetchProductsAndPackets = createAsyncThunk(
    'products/fetchProductsAndPackets',
    async (): Promise<{ products: Product[], packets: Packet[] }> => {
        const response = await axios.get<{ data: { products: Product[], packets: Packet[] } }>(
            'https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io/packets-and-products'
        );
        return response.data.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAndPackets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsAndPackets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload.products;
                state.packets = action.payload.packets;
            })
            .addCase(fetchProductsAndPackets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default productsSlice.reducer;
