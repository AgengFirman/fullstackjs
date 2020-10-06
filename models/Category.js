const mongoose = require("mongooose");

const categorySchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Category', categorySchema)