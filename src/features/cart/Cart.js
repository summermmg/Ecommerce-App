import React from 'react'
import {useSelector} from 'react-redux'
import {IncrementedButton} from '../products/IncrementButton'
import {DecrementedButton} from '../products/DecrementButton'

export const Cart = () => {
    const cart = useSelector(state => state.cart.products)
    const cartQty = useSelector(state => state.cart.totalQty)
    const cartTotal = useSelector(state => state.cart.totalAmt) 

    const renderedCartItems = cart.map(product => (

        <tr>
            <th scope="row" class="py-0"><img width="70px" height="70px" src={product.imgSrc} alt="blush" /></th>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td><DecrementedButton cartItem={product} excerpt/>{product.cartQty} 
            <IncrementedButton cartItem={product} excerpt/>
            </td>
            <td>${product.cartTotal}</td>
        </tr>
    ))

    return (
    <div class="bg-light pb-3 text-center">
        <div class="my-1 py-3">
            <h2 class="text-secondary">My Basket</h2>
            <p class="lead text-secondary">Items in basket ({cartQty})</p>
         </div>
        <div class="bg-secondary shadow-sm mx-auto cartItems">
        <table class="text-light table table-striped ">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            </tr>
        </thead>

        <tbody>
        {renderedCartItems}
        <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td>Total Price:</td>
            <td>${cartTotal}</td>
        </tr>
        </tbody>
        </table>
        </div>
     </div>
    )
}

