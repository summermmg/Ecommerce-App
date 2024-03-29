import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {LikeButton} from '../product/LikeButton'
import {fetchProducts} from './productsSlice'


export const ProductsList = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const productsStatus = useSelector(state => state.products.status)
    const error = useSelector(state => state.products.error)

    useEffect(() => {
      if (productsStatus === 'idle') {
        dispatch(fetchProducts())
      }
    }, [productsStatus,dispatch])
 

    let content
    if (productsStatus === 'loading') {
      content = <div className="loader">Loading</div> 
    } else if (productsStatus === 'succeeded') {
      content = products.map(product => (
        <div key={product.id} class="card product-container shadow-sm">
           <img class="card-img-top" width="100%" height="55%" src={product.imgSrc} alt="blush" />
   
           <div class="card-body">
              <h5 class="fw-normal">{product.type}</h5>
               <h5 class="card-title pricing-card-title">{product.name}</h5>
               <ul class="list-unstyled">
                <li>${product.price}</li>
                <li>{product.description}</li>
              </ul>
             <div class="d-flex justify-content-between align-items-center">
               <div class="btn-group">
                 <Link to={`/products/${product.id}`} type="button" class="btn btn-sm btn-outline-secondary">View Product Detail</Link>
                 <LikeButton type="button" class="btn btn-sm btn-outline-secondary" product={product} />
               </div>
             </div>
           </div>
         </div>
       ))
    } else if (productsStatus === 'failed') {
      content = <div>{error}</div>
    }

    return (
        <section class='text-dark'>
            <h2 class="my-5">Products</h2>
            <div class="products-container">
            {content}
            </div>
        </section>
    )
}