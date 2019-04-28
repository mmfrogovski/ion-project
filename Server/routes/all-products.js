const express = require('express');
const router = express.Router();
const Product = require('../models/AllProducts');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// http://localhost:5000/api/all-products  (GET)
router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
});


// http://localhost:5000/api/all-products/name  (GET)
router.get('/:name', async (req, res) => {
    const product = await Product.find({name: req.params.name});
    res.status(200).json(product);
});


// http://localhost:5000/api/all-products (POST)
router.post('/', async (req, res) => {
    const productData = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    };

    const product = new Product(productData);

    await product.save();

    res.status(201).json(product);

});


// http://localhost:5000/api/all-products/id  (DELETE)
router.delete('/:id', async (req, res) => {
    await Product.remove({_id: req.params.id});
    res.status(200).json({
        message: 'Удален'
    });
});


module.exports = router;
