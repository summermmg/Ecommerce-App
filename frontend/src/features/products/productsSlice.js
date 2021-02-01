import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    status: 'idle',
    error:null,
}

//fetchProducts is a thunk that can dispatch pending, fulfilled or rejected action type.
//createAsyncThunk accepts three parameters: a string action type value, a payloadCreator 
//callback, and an options object.
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('/api/products')
    const data = response.data
    return data
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchProducts.pending]: (state,action) => {
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state,action) => {
            state.status = 'succeeded'
            state.products = state.products.concat(action.payload)
        },
        [fetchProducts.failed] : (state,action) => {
            state.status = 'failed'
            state.error = action.error
        }
    } 
})

export default productsSlice.reducer