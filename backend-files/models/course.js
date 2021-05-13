let mongoose = require('mongoose');

let VideoItems = new mongoose.Schema({ name: String , src: String , type:String });
let courseSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    instructor: {
        type: String,
        default: null
    },
    instructorId: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: null
    },
    category : {
        type: String,
        default: null
    },
    courseCategory : {
        type: [String],
        default: null
    },
    courseVids : {
        type: [VideoItems],
        default: null
    },
    image : {
        type: String,
        default: null
    },
    students : {
        type: String,
        default: null
    },
    rating : {
        type: String,
        default: null
    },
    created_at: {
        type: Number, default: Date.now
    }
});

module.exports = mongoose.model('course', courseSchema);