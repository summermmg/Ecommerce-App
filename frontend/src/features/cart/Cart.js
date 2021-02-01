import React from 'react'
import {useSelector} from 'react-redux'
import {IncrementedButton} from '../product/IncrementButton'
import {DecrementedButton} from '../product/DecrementButton'


export const Cart = () => {
    // const dispatch = useDispatch()
    const cartStatus = useSelector(state => state.cart.status)
    // useEffect(() => {
    //     if (cartStatus === 'idle') {
    //       dispatch(fetchCart())
    //     }
    //   }, [cartStatus,dispatch])

    const cart = useSelector(state => state.cart.cart)
    const error = useSelector(state => state.cart.error)
  
    let content
    if (cartStatus === 'loading') {
        content = <tr className="loader"><td>Loading</td></tr> 
    } else if (cartStatus === 'succeeded') {
        content = cart.products.map(product => (
            <tr key={product.id}>
                <th scope="row" class="py-0"><img width="70px" height="70px" src={product.imgSrc} alt="blush" /></th>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td><DecrementedButton productId={product.id} cart={cart} cartItem={product} excerpt/>{product.cartQty} 
                <IncrementedButton productId = {product.id} cart = {cart} cartItem={product} excerpt/>
                </td>
                <td>${product.cartTotal}</td>
            </tr>
        ))
    } else if (cartStatus === 'failed') {
        content = <tr><td>{error}</td></tr> 
    } 

    return (
    <div class="bg-light pb-3 text-center">
        <div class="my-1 py-3">
            <h2 class="text-secondary">My Basket</h2>
            <p class="lead text-secondary">Items in basket ({cart.totalQty})</p>
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
        {content}
        <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td>Total Price:</td>
            <td>${cart.totalAmt}</td>
        </tr>
        </tbody>
        </table>
        </div>
     </div>
    )
}

