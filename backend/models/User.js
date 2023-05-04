const mongoose = require('mongoose');

// const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter a name']
    },

    email: {
        type: String,
        required: [true, 'pls enter email'],
        unique: [true, 'email already exists']

    },

    password: {
        type: String,
        required: [true, 'pls select password']
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('User', userSchema);