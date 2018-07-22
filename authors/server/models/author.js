const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, "Name must be at least 3 characters"], required: [true, "Must have Name"]},
}, {timestamps: true})
module.exports = mongoose.model('Author', AuthorSchema);