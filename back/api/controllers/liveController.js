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


exports.seed = function(req, res) {
    var faker = require('faker');

    //const statusOptions = require('../models/liveModel')
    const statusOptions = ['pending', 'active', 'archived']
    const categoriesOptions = ['sertanejo', 'mpb', 'rock', 'games', 'fitness']
    const tagsOptions = ['samba', 'araketu', 'hot', 'nudes', 'kids']

    for(let i=0; i<= 10; i++) {
        var new_live = new Live({
            //_id: mongoose.Types.ObjectId(),
            title: faker.name.findName(),
            artist_id: faker.random.number(),
            link: faker.random.url,
            categories: faker.random.arrayElement(categoriesOptions),
            tags: faker.random.arrayElement(tagsOptions),
            highlight: faker.random.boolean(),
            beneficent: faker.random.boolean(),
            international: faker.random.boolean(),
            eventDate: faker.date.future(),
            status: faker.random.arrayElement(statusOptions),
        });
        new_live.save(function(err, live) {

            // TODO: agregate the errors
            if (err)
                res.send(err);
            //res.json(live);
        });
    }

    res.json('success');


};
