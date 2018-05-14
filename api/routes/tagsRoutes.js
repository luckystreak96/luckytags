'use strict';
module.exports = function(app) {
  var tagsList = require('../controllers/tagsController');

  // tags Routes
  app.route('/tags')
    .get(tagsList.list_all_tags)
    .post(tagsList.create_a_tag);


  app.route('/tags/:name')
    .get(tagsList.read_a_tag)
    .put(tagsList.update_a_tag)
    .delete(tagsList.delete_a_tag);
};