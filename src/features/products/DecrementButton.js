import React from 'react'
import {useDispatch} from 'react-redux'
import {itemDecremented} from '../cart/cartSlice'
import {itemRemoved} from '../cart/cartSlice'

export const DecrementedButton = ({cartItem,excerpt}) => {
    const dispatch = useDispatch()

    // const cartItems = useSelector(state => 
    //     state.cart)
    const onDecrementClicked = () => {
        if (cartItem) {
            if (cartItem.cartQty>1){
            dispatch(itemDecremented(cartItem))
            } else if (cartItem.cartQty ===1) {
                dispatch(itemRemoved(cartItem))
            } 
    }
    }
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