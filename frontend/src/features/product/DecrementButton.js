import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteProduct,updateProduct} from '../cart/cartSlice'

export const DecrementedButton = ({productId,cart,cartItem,excerpt}) => {
    const dispatch = useDispatch()

    const onDecrementClicked = () => {
        if (cartItem) {
            if (cartItem.cartQty>1){
            dispatch(updateProduct({
                productId: productId,
                cartQty: cartItem.cartQty-1,
                cartTotal:cartItem.cartTotal-cartItem.price,
                totalQty:cart.totalQty-1,
                totalAmt: cart.totalAmt-cartItem.price 
            }))
            } else if (cartItem.cartQty ===1) {
                dispatch(deleteProduct({
                        productId: productId
                }))
            } 
    }}
    if (excerpt) {
        return(
            <button type="button" class="btn btn-light mx-1" onClick={onDecrementClicked}>-</button>
        )
    } else {
        return (
            <button type="button" class="btn btn-secondary mx-1" onClick={onDecrementClicked}>-</button>
        )
    }
}