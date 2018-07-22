const mongoose = require('mongoose');
const CakeSchema = mongoose.Schema({
    name: {type: String, minlength: [3, "Name must be longer than 3 characters"]},
    img: String,
    rating: [{
        rating: {type: Number, required: [true, "must enter rating"]},
        comment: {type: String, required: [true, "must have comment"]}
    }]
})
module.exports = mongoose.model('Cake', CakeSchema);