const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// http://localhost:5000/api/product  (GET)
router.get('/', async (req, res, next) => {
    const products = await Product.find({});
    res.status(200).json(products);
});


// http://localhost:5000/api/product/name  (GET)
router.get('/:name', async (req, res, next) => {
    const product = await Product.find({name: req.params.name});
    res.status(200).json(product);
});


// http://localhost:5000/api/product  (POST)
router.get('/', async (req, res, next) => {
    const productData = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        icon: req.body.icon,
        href: req.body.href,
        image: req.body.image
    };

    const product = new Product(productData);

    await product.save();

    res.status(201).json(product);

});


// http://localhost:5000/api/product/id  (DELETE)
router.get('/:id', async (req, res, next) => {
    await Product.remove({_id: req.params.id});
    res.status(200).json({
        message: 'Удален'
    });
});


module.exports = router;
