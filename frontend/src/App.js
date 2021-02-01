import React from 'react';
import {BrowserRouter,Switch,Route,Redirect,} from 'react-router-dom'
import {ProductsList} from './features/products/ProductsList'
import { SingleProductPage } from './features/product/SingleProductPage';
import {Navbar} from './app/Navbar'
import {Cart} from './features/cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Switch>
          <Route 
            exact
            path="/" render={
            () => (
              <React.Fragment>
                <div className="bd-container">
                <ProductsList />
                </div>
              </React.Fragment>
            )
          }/>

          <Route exact path="/products/:productId" component={SingleProductPage} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
