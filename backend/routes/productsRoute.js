const express = require('express')
const {json} = require('express')
const router = express.Router()
const {data} = require('../data')  


//Get all products from endpoint 
router.get('/',(req,res) => {
    // res.send(data.products);
    res.json(data.products)
})

//Get single product detail from endpoints 
router.get('/:id', (req,res) => {
    const found = data.products.find(
        product => product.id === req.params.id
    )
    if (found) {
        res.json(data.products.filter(product => product.id === req.params.id))
    } else {
        res.status(400).json({msg:'Product not found'})
    }
})

//Add likeButton feature
router.put('/', (req,res) => {
    const found = data.products.find(
        product => product.id === req.body.productId
    )
    if (found) {
        found.like+=1
        res.json({products: data.products,product:found})
    }
})

module.exports = router