import React from 'react'
import {useDispatch} from 'react-redux'
import {itemIncremented} from '../cart/cartSlice'
import {productAdded} from '../cart/cartSlice'

export const IncrementedButton = ({product,cartItem,excerpt}) => {
    const dispatch = useDispatch()

    const onIncrementClicked = () => {
        if (cartItem){
        dispatch(itemIncremented(cartItem))
        } else {
            dispatch(
                productAdded({
                    ...product,
                    cartQty: 1,
                    cartTotal: product.price
                })
            )
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