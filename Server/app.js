const express = require('express');
const path = require('path');
const productRouter = require('./routes/product');
const allProductsRouter = require('./routes/all-products');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
const keys = require('./keys');

const port = process.env.PORT || 5000;
const clientPath = path.join(__dirname);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(()=>console.log('MongoDB connected'))
    .catch(err => console.error(err));


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/product', productRouter);
app.use('/api/all-products', allProductsRouter);
app.use(express.static(clientPath));

app.listen(port, () =>{
    console.log(`Server has been started on port ${port}`)
});
