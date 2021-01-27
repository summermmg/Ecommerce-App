import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {LikeButton} from './LikeButton'


export const ProductsList = () => {
    const products = useSelector(state => state.products)

    const renderedProducts = products.map(product => (

     
      <div class="card product-container shadow-sm">
        <img class="card-img-top" width="100%" height="55%" src={product.imgSrc} alt="blush" />

        <div class="card-body">
           <h5 class="fw-normal">{product.type}</h5>
            <h5 class="card-title pricing-card-title">{product.name}</h5>
            <ul class="list-unstyled">
             <li>${product.price}</li>
             <li>{product.description}</li>
           </ul>
           {/* <Link to={`/products/${product.id}`} className="btn btn-lg btn-primary">View Product Detail</Link> */}
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <Link to={`/products/${product.id}`} type="button" class="btn btn-sm btn-outline-secondary">View Product Detail</Link>
              <LikeButton type="button" class="btn btn-sm btn-outline-secondary" product={product} />
            </div>
            {/* <small class="text-muted">9 mins</small> */}
          </div>
        </div>
      </div>

      // <div class="card mb-4 shadow-sm product-container">
      //   <div class="card-header">
      //     <h4 class="my-0 fw-normal">{product.type}</h4>
      //   </div>
      //   <div class="card-body">
      //     <h1 class="card-title pricing-card-title">{product.name}</h1>
      //     <ul class="list-unstyled mt-3 mb-4">
      //       <li>${product.price}</li>
      //       <li>{product.description}</li>
      //     </ul>
      //     <Link to={`/products/${product.id}`} className="btn btn-lg btn-primary">View Product Detail</Link>
      //   </div>
      // </div>

    ))

    return (
        <section class='text-dark'>
            <h2 class="my-5">Products</h2>
            {/* <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5"> */}
            <div class="products-container">
            {renderedProducts}
            </div>
        </section>
    )
}