const mongoose = require('mongoose');

var usersregister = new mongoose.Schema({
    first_name: {
        type : String,
        required: true
    },
    second_name: {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type : String,
        required: true
    },
})

const users = mongoose.model('users', usersregister);

module.exports = users;