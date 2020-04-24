'use strict';

const mongoose = require('mongoose'),
  Artist = mongoose.model('ArtistModel');

exports.listAll = function(req, res) {
    Artist.find({}, function(err, artist) {
        if (err)
            res.send(err);
        res.json(artist);
    });
};

exports.create = function(req, res) {
    var new_artist = new Artist(req.body);
    new_artist.save(function(err, artist) {
        if (err)
            res.send(err);
        res.json(artist);
    });
};

exports.read = function(req, res) {
    Artist.findById(req.params.artistId, function(err, artist) {
        if (err)
            res.send(err);
        res.json(artist);
    });
};

exports.update = function(req, res) {
    Artist.findOneAndUpdate({_id: req.params.artistId}, req.body, {new: true}, function(err, artist) {
        if (err)
            res.send(err);
        res.json(artist);
    });
};

exports.delete = function(req, res) {
    Artist.remove({
        _id: req.params.artistId
    }, function(err, artist) {
        if (err)
            res.send(err);
        res.json({ message: 'Artist successfully deleted' });
    });
};
