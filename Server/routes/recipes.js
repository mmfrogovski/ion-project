const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipes');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, DELETE");
    next();
});

// http://localhost:5000/api/recipes  (GET)
router.get('/', async (req, res) => {
    const recipes = await Recipe.find({});
    res.status(200).json(recipes);
});


// http://localhost:5000/api/recipe/name  (GET)
router.get('/:name', async (req, res) => {
    const recipe = await Recipe.find({name: req.params.name});
    res.status(200).json(recipe);
});


module.exports = router;
