'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LiveModelSchema = new Schema({
    title: {
        type: String,
        required: 'please enter the post title'
    },
    artist_id: {
        type: Number,
        required: 'artist required'
    },
    /**
     * When link is provided, overrides artist platform links with this special link:
     */
    link: {
        type: String,
        default: ''
    },
    categories: {
        type: [],
        required: 'category required'
    },
    tags: [],
    highlight: {
        type: Number,
        min: 0,
        max: 2 // max highlight
    },
    beneficent: {
        type: Boolean,
        default: false
    },
    international: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    eventDate: {
        type: Date,
        required: 'event date required'
    },
    status: {
        type: [{
          type: String,
          enum: ['pending', 'active', 'archived']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('LiveModel', LiveModelSchema);
