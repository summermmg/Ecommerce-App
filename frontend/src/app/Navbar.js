import React from 'react'

import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux' 

export const Navbar = () => {
    const cartQty = useSelector(state => state.cart.cart.totalQty)

    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">LOGO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      <div class="collapse navbar-collapse" id="navbarsExample01">
            <Link class="text-light ml-5 mr-5 font-weight-bold h5" to="/">Home</Link>
            <Link class="text-light mr-auto font-weight-bold h5" to="/cart">Cart({cartQty})</Link>
            <form>
              <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
          </div>

      </nav>

        /* <nav>
            <section>
                <h1></h1>

                <div className="nav-links">
                    <Link to='/'>Home</Link> 
                </div>

            </section>
        </nav> */
    )
}