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

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        productAdded:{
            reducer(state,action) {
                state.products.push(action.payload)
                state.totalQty+=action.payload.cartQty
                state.totalAmt+=action.payload.cartTotal
            },
            prepare(product) {
                return {
                    payload: product
                       }
            }
        },
        itemIncremented: {
            reducer(state,action) {
                state.products.map(product => {
                    if (product.id === action.payload.id) {
                        product.cartQty ++
                        product.cartTotal+=product.price   
                        state.totalQty++
                        state.totalAmt+=product.price
                    }
                    return state
                })
            },
            prepare(cartItem) {
                return {
                    payload: cartItem
                }
            }
        },
        itemDecremented: {
            reducer(state,action) {
                state.products.map(product => {
                    if (product.id === action.payload.id) {
                        product.cartQty --
                        product.cartTotal-=product.price   
                        state.totalQty--
                        state.totalAmt-=product.price
                    }
                    return state
                })
            },
            prepare(cartItem) {
                return {
                    payload: cartItem
                }
            }
        },
        itemRemoved: {
            reducer(state,action) {
                state.products = state.products.filter(product => 
                    product.id !== action.payload.id
                )
                state.totalQty-=action.payload.cartQty
                state.totalAmt-=action.payload.cartTotal
            },
            prepare(product) {
                return {
                    payload: product
                }
            }
        } 
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
        }
    } 
})

export const {productAdded,itemIncremented,itemDecremented,itemRemoved} = cartSlice.actions 
export default cartSlice.reducer