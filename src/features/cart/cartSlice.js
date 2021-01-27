import {createSlice,} from '@reduxjs/toolkit'
import blushImg from '../products/img/blush.jpg'
import foundationImg from '../products/img/foundation.jpg'
import facewashImg from '../products/img/face-cleanser.jpg'
import eyeshadowImg from '../products/img/eyeshadow.jpg'
import tonerImg from '../products/img/toner.jpg'
import moisturizerImg from '../products/img/moisturizer.jpg'
import lipbalmImg from '../products/img/lipbalm.jpg'


const initialState = {
    products:[{
        id: '1',
        name: 'Foundation',
        price: 50,
        description: 'This is our best foundation', 
        type: 'Makeup',   
        like: 0, 
        cartQty: 1, 
        cartTotal:50,   
        imgSrc: foundationImg, 
    },
    {
        id: '2',
        name: 'Blush',
        price: 30,
        description: 'This is our best blush', 
        type:'Makeup',  
        like: 0,
        cartQty: 1, 
        cartTotal:30, 
        imgSrc: blushImg,
    }],
    totalQty:2,
    totalAmt:80,
}

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
                    }})
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
    }
})

export const {productAdded,itemIncremented,itemDecremented,itemRemoved} = cartSlice.actions 
export default cartSlice.reducer