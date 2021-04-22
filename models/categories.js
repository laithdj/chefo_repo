let mongoose = require('mongoose');

let categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    created_at: {
        type: Number, default: Date.now
    }
});

module.exports = mongoose.model('categories', categoriesSchema);