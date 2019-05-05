const express = require('express');
const router = express.Router();
const Product = require('../models/products-to-buy');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, DELETE");
    next();
});

// http://localhost:5000/api/buy-products (GET)
router.get('/', async (req, res, next) => {
    const products = await Product.find({});
    res.status(200).json(products);
});


// http://localhost:5000/api/buy-products/name  (GET)
router.get('/:name', async (req, res) => {
    const product = await Product.find({name: req.params.name});
    res.status(200).json(product);
});


// http://localhost:5000/api/buy-products  (POST)
router.post('/', async (req, res) => {

    const productData = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    };


    const product = new Product({
        name: productData.name,
        description: productData.description,
        image: productData.image
    });



    await product.save();
    res.status(201).json(product);

});


// http://localhost:5000/api/buy-products/name  (DELETE)
router.delete('/:name', async (req, res) => {
    await Product.remove({name: req.params.name});
    res.status(200).json({
        message: 'Удален'
    });
});


module.exports = router;
