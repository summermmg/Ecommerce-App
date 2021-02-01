import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    product: [],
    status: 'idle',
    error:null,
}

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (id) => {
    const response = await axios.get(`/api/products/${id}`)
    const data = response.data
    return data
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchProduct.pending]: (state,action) => {
            state.status = 'loading'
        },
        [fetchProduct.fulfilled]: (state,action) => {
            state.status = 'succeeded'
            state.product = action.payload
        },
        [fetchProduct.failed] : (state,action) => {
            state.status = 'failed'
            state.error = action.error
        },
    } 
})

export default productSlice.reducer