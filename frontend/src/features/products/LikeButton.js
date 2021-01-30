import React from 'react'
import {useDispatch} from 'react-redux'
import { productLiked } from './productsSlice'

export const LikeButton = ({product}) => {
    const dispatch = useDispatch()

    const onLikeClicked = () => {
        dispatch(productLiked(product))
    }
    return (
        <button
         type="button"
         class="btn btn-sm btn-outline-secondary"
         onClick={onLikeClicked}>Like <span class="text-primary">{product.like}</span></button>
    )

}