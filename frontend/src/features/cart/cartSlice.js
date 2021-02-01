import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    cart: {},
    status: 'idle',
    error:null,
}

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    const response = await axios.get('/api/cart')
    const data = response.data
    return data
})

export const addProduct = createAsyncThunk('cart/addProduct',
     async (product) => {
         const response = await axios.post('/api/cart',product)
         return response.data
     }
)

export const updateProduct = createAsyncThunk('cart/updateProduct',
      async (newCart) => {
        const response = await axios.put(`/api/cart`,newCart)
        return response.data
      }  
)

export const deleteProduct = createAsyncThunk('cart/deleteProduct',
      async (productIdObj) => {
          const response = await axios.delete(`/api/cart`,{data:productIdObj})
          return response.data
      }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCart.pending]: (state,action) => {
            state.status = 'loading'
        },
        [fetchCart.fulfilled]: (state,action) => {
            state.status = 'succeeded'
            state.cart = action.payload
        },
        [fetchCart.failed] : (state,action) => {
            state.status = 'failed'
            state.error = action.error
        },
        [addProduct.fulfilled]: (state,action) => {
            state.cart = action.payload
        },
        [updateProduct.fulfilled]: (state,action) => {
            state.cart = action.payload.cart
        },
        [deleteProduct.fulfilled]: (state,action) => {
            state.cart = action.payload.cart
        }
    }
})

export default cartSlice.reducer