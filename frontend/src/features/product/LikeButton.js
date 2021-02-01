import React from 'react'
import {useDispatch} from 'react-redux'
import {likeProduct} from '../products/productsSlice'

export const LikeButton = ({product}) => {
    const dispatch = useDispatch()

    const onLikeClicked = () => {
        dispatch(likeProduct({
            productId: product.id}))
    }
    return (
        <button
         type="button"
         class="btn btn-sm btn-outline-secondary"
         onClick={onLikeClicked}>Like <span class="text-primary">{product.like}</span></button>
    )

}