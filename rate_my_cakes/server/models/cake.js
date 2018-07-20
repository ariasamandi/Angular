const mongoose = require('mongoose');
const CakeSchema = mongoose.Schema({
    name: {type: String, minlength: [3, "Name must be longer than 3 characters"]},
    img: String 
})
module.exports = mongoose.model('Cake', CakeSchema);