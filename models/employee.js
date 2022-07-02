const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

    first_name: {type: String, trim: true, minlength: 1, maxlength: 30, required: true},
    last_name: {type: String, trim: true, minlength: 1, maxlength: 30, required: true},
    email: {type: String, trim: true, lowercase: true, required: true},
    password: {type: String, required: true},

})

module.exports = new mongoose.model("Employee", employeeSchema);