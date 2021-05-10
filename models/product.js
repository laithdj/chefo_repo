const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);