'use strict';
module.exports = function(app) {
  const artist = require('../controllers/artistController');
  app.route('/artist')
    .get(artist.listAll)
    .post(artist.create);
  app.route('/artist/:artistId')
    .get(artist.read)
    .put(artist.update)
    .delete(artist.delete);
};
