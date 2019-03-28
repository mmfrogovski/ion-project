const express = require('express');
const path = require('path');
const productRouter = require('./routes/product');
const mongoose = require('mongoose');
const keys = require('./keys');

const port = process.env.PORT || 5000;
const clientPath = path.join(__dirname);

mongoose.connect(keys.mongoURI)
    .then(()=>console.log('MongoDB connected'))
    .catch(err => console.error(err));


const app = express();
app.use('/api/product', productRouter);
app.use(express.static(clientPath));

app.listen(port, () =>{
    console.log(`Server has been started on port ${port}`)
});
