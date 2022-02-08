#!/usr/bin/env node

const mongoose = require('mongoose');

const example = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Username', example);

// An example MongoDB Schema to store a Username as a String.