const e = require('express');
const mongoose = require('mongoose');

const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 1 day
    }
});

module.exports = mongoose.model('blackListToken', blackListTokenSchema);