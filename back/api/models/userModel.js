'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModelSchema = new Schema({
    name: {
        type: String,
        required: 'please enter the user name'
    },
    email: {
        type: String,
        required: 'email required'
    },
    password: {
        type: String,
        required: 'password required'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    favoriteArtists: []
});

module.exports = mongoose.model('UserModel', UserModelSchema);
