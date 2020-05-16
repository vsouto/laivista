'use strict';

const mongoose = require('mongoose'),
  Live = mongoose.model('Live'),
  Artist = mongoose.model('Artist');


exports.listAll = function(req, res) {
    Live.find({}, function(err, lives) {

    })
  .populate("Artist")
  .then(function(live) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(live);
  })
};

exports.create = function(req, res) {
    //var new_live = new Live(req.body);

    Live.create(req.body, function(err, live) {
        if (err)
            res.send(err);
        res.json(live);
    })
};

exports.read = async function(req, res) {

    // TODO: id?
    let live = await Live.findOne().populate('Artist');

    res.json(live);

    /*Live.findById(req.params.liveId, function(err, live) {
        if (err)
            res.send(err);
        res.json(live);
    });*/
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
    const artistsOptions = ['5eb6a7fd3ad47431102fb2b7', '5eb6a81f3ad47431102fb2b8', '5ea339dd36eb0a36142b3893']

    for(let i=0; i<= 10; i++) {
        var new_live = new Live({
            //_id: mongoose.Types.ObjectId(),
            title: faker.name.findName(),
            artist: faker.random.arrayElement(artistsOptions),
            link: faker.random.url,
            categories: faker.random.arrayElement(categoriesOptions),
            tags: faker.random.arrayElement(tagsOptions),
            highlight: faker.random.boolean(),
            beneficent: faker.random.boolean(),
            international: faker.random.boolean(),
            eventDate: faker.date.future(),
            status: faker.random.arrayElement(statusOptions),
        });
        new_live.submit(function(err, live) {

            // TODO: agregate the errors
            /*if (err)
                res.send(err);*/
            //res.json(live);
        });
    }

    res.json('success');


};
