const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
    
})

module.exports = mongoose.model('User', userSchema);