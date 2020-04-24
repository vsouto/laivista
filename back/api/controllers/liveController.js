'use strict';

const mongoose = require('mongoose'),
  Live = mongoose.model('LiveModel');

exports.listAll = function(req, res) {
    Live.find({}, function(err, live) {
        if (err)
            res.send(err);
        res.json(live);
    });
};

exports.create = function(req, res) {
    var new_live = new Live(req.body);
    new_live.save(function(err, live) {
        if (err)
            res.send(err);
        res.json(live);
    });
};

exports.read = function(req, res) {
    Live.findById(req.params.liveId, function(err, live) {
        if (err)
            res.send(err);
        res.json(live);
    });
};

exports.update = function(req, res) {
    Live.findOneAndUpdate({_id: req.params.liveId}, req.body, {new: true}, function(err, live) {
        if (err)
            res.send(err);
        res.json(live);
    });
};

exports.delete = function(req, res) {
    Live.remove({
        _id: req.params.liveId
    }, function(err, live) {
        if (err)
            res.send(err);
        res.json({ message: 'Live successfully deleted' });
    });
};
