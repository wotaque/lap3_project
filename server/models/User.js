const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;