import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {productAdded} from '../cart/cartSlice'
import {IncrementedButton} from './IncrementButton'
import {DecrementedButton} from './DecrementButton'
import {LikeButton} from './LikeButton'


export const SingleProductPage = ({match}) => {

    const dispatch=useDispatch()
    const productId = match.params.productId
    const product = useSelector(state =>
             state.products.products.find(
                 product => product.id === productId
    ))
    
    const cartItem = useSelector(state =>
        state.cart.cart.products.find(
            product => product.id === productId
    ))

    const onAddCartClicked = () => {
        if (!cartItem) {
            dispatch(
                productAdded({
                    ...product,
                    cartQty: 1,
                    cartTotal: product.price
                })
        )} 
    }          

    return (
        <section>
            <div class="pt-5">
                <div class="d-flex bg-light flex-row" height="200">
                    <div>
                    <img src={product.imgSrc} width="400px" height="500" alt="Card cap" />
                    </div>
                    <div class="card-body py-5 align-self-center">
                        <h5 class="card-title">{product.type}</h5>
                        <h3 class="card-title">{product.name}</h3>
                        <p class="card-text">${product.price}</p>
                        <p class="card-text">{product.description}</p>
                        <div class="buttons d-flex flex-row mb-5">
                           <button type="button" class="btn btn-outline-secondary mr-3" onClick={onAddCartClicked}>Add to cart</button>
                           <DecrementedButton cartItem={cartItem}/>
                           <p>{cartItem? cartItem.cartQty:0}</p>
                           <IncrementedButton productId = {productId} product={product} cartItem={cartItem}/>
                        </div>
                        <LikeButton type="button" class="btn btn-sm btn-outline-secondary" product={product} />
                    </div>
                    <div>
                    
                    </div>
                </div>
            </div>
        </section>
    )            
}