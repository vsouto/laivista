'use strict';
module.exports = function(app) {
  const live = require('../controllers/liveController');
  app.route('/live')
    .get(live.listAll)
    .post(live.create);
  app.route('/live/:liveId')
    .get(live.read)
    .put(live.update)
    .delete(live.delete);
  app.route('/seed/live').get(live.seed)
};
