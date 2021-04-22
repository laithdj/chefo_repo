let mongoose = require('mongoose');

let instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    courses: {
        type: String,
        default: null
    },
    rating: {
        type: Number,
        default: null
    },
    created_at: {
        type: Number, default: Date.now
    }
});

module.exports = mongoose.model('instructor', instructorSchema);