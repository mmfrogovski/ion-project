const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    quantity: {
        type: String,
        required: false,
    },
    icon: {
        type: String,
        required: false
    },
    href: {
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('products', postSchema);
