const express = require('express')
const {json} = require('express')
const router = express.Router()
const {data} = require('../data')  

//Get cart object from the endpoint
router.get('/',(req,res) => {
    res.json(data.cart);
})


//Add a new product to the cart(if selected product doesn't exist in the products of cart api)
//req.body is data in product api 
router.post('/', (req,res) => {
    const newProduct = {
        ...req.body,
        cartQty:1,
        cartTotal: req.body.price
    }
    data.cart.products.push(newProduct)
    data.cart.totalQty += newProduct.cartQty
    data.cart.totalAmt += newProduct.cartTotal
    res.json(data.cart)
})

//Update cart (increment&decrement)
//req.body contains new {cartQty,cartTotal,totalQty,totalAmt} for the product with the id
router.put('/', (req,res) => {
        const updProduct = req.body
        data.cart.products.map(product => {
            if (product.id === updProduct.productId) {
                product.cartQty = updProduct.cartQty
                product.cartTotal = updProduct.cartTotal
                data.cart.totalQty = updProduct.totalQty
                data.cart.totalAmt = updProduct.totalAmt
                res.json( {msg: `Product with id: ${updProduct.productId} updated`, product: product, cart: data.cart})
            }
        })
})


//delete a product from the cart products (if the product exists in cart && cartQty is 1)
router.delete('/', (req,res) => {
        const updProduct = req.body
        const found = data.cart.products.find(
            product => product.id === updProduct.productId
        )

        if (found) {
            data.cart.totalQty -= found.cartQty
            data.cart.totalAmt -= found.cartTotal
            data.cart.products = data.cart.products.filter(product => product.id !== updProduct.productId) 
            res.json({
                msg: 'product deleted',
                cart: data.cart
            })
        } else {
            res.status(400).json({msg: `No product with the id of ${updProduct.productId} in cart`})
        }
    
    
})

module.exports = router 