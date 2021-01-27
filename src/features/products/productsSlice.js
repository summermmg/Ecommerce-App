import {createSlice, isAsyncThunkAction,} from '@reduxjs/toolkit'
import blushImg from './img/blush.jpg'
import foundationImg from './img/foundation.jpg'
import facewashImg from './img/face-cleanser.jpg'
import eyeshadowImg from './img/eyeshadow.jpg'
import tonerImg from './img/toner.jpg'
import moisturizerImg from './img/moisturizer.jpg'
import lipbalmImg from './img/lipbalm.jpg'

const initialState = [
    {
        id: '1',
        name: 'Foundation',
        price: 50,
        description: 'This is our best selling foundation!', 
        type: 'Makeup',
        like: 0,    
        imgSrc: foundationImg, 
    },
    {
        id: '2',
        name: 'Blush',
        price: 30,
        description: 'This is our best selling blush!', 
        type:'Makeup',
        like: 0,      
        imgSrc: blushImg,
    },
    {
        id: '3',
        name: 'Facial Cleanser',
        price: 70,
        description: 'This is our best selling facial cleanser!', 
        type:'Skincare',
        like: 0,    
        imgSrc:facewashImg,
    },
    {
        id: '4',
        name: 'Deep Sunrise Eyeshadow',
        price: 45,
        description: 'This is our best selling eyeshadow', 
        type:'Makeup',
        like: 0,    
        imgSrc:eyeshadowImg,
    },
    {
        id: '5',
        name: 'Hydrating Toner',
        price: 30,
        description: 'This is our best selling toner', 
        type:'Skincare',
        like: 2,    
        imgSrc:tonerImg,
    },
    {
        id: '6',
        name: 'Water Cream Moisturizer',
        price: 80,
        description: 'This is our best selling moisturizer', 
        type:'skincare',
        like: 0,    
        imgSrc:moisturizerImg,
    }, 
    {
        id:'7',
        name: 'Lip Glowy Balm',
        price: 30,
        description: 'This is our best selling lip balm', 
        type:'skincare',
        like: 3,    
        imgSrc:lipbalmImg,
    }
]

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productLiked:{
            reducer(state,action) {
                state.map(
                    product => {
                        if (product.id === action.payload.id) {
                            product.like++
                        }    
                    }) 
            },
            prepare(product) {
                return {
                    payload: product
                       }
            }
        }
    } 
})

export const {productLiked} = productsSlice.actions
export default productsSlice.reducer