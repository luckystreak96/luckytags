'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TagsSchema = new Schema({
  name: String,
  data: [{
      tags: String,
      text: String
  }]
});

module.exports = mongoose.model('Tags', TagsSchema);