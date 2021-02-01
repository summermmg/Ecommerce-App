import React from 'react'
import {useDispatch} from 'react-redux'
import {addProduct} from '../cart/cartSlice'
import {updateProduct} from '../cart/cartSlice'

export const IncrementedButton = ({productId,product,cart,cartItem,excerpt}) => {
    const dispatch = useDispatch()

    const onIncrementClicked = () => {
        if (cartItem){
        dispatch(updateProduct(
            {
                productId: productId,
                cartQty: cartItem.cartQty+1,
                cartTotal:cartItem.cartTotal+cartItem.price,
                totalQty:cart.totalQty+1,
                totalAmt: cart.totalAmt+cartItem.price 
            }
        ))
        } else {
            dispatch(addProduct(product))
        }
    }
    if (excerpt) {
        return(
            <button type="button" class="btn btn-light mx-1" onClick={onIncrementClicked}>+</button>
        )
    } else {
        return (
            <button type="button" class="btn btn-secondary mx-1" onClick={onIncrementClicked}>+</button>
        )
    }
    
}