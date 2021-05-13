let mongoose = require('mongoose');

let instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    students: {
        type: Number,
        default: null
    },
    revenue: {
        type: Number,
        default: null
    },
    created_at: {
        type: Number, default: Date.now
    }
});

module.exports = mongoose.model('instructor', instructorSchema);


