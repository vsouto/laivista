'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArtistModelSchema = new Schema({
    title: {
        type: String,
        required: 'please enter the artist title'
    },
    instagram: {
        type: String,
        required: 'instagram required'
    },
    youtube: String,
    site: String,
    image: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Artist', ArtistModelSchema);
