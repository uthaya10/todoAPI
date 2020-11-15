const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("Task", todoSchema);