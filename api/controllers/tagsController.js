'use strict';

var mongoose = require('mongoose'),
  Tags = mongoose.model('Tags');

exports.list_all_tags = function(req, res) {
  Tags.find({}, function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};




exports.create_a_tag = function(req, res) {
  var new_tag = new Tags(req.body);
  new_tag.save(function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};


exports.read_a_tag = function(req, res) {
  Tags.findById(req.params.tagid, function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};


// Used to add a new tag
exports.update_a_tag = function(req, res) {
  Tags.findOneAndUpdate({name: req.params.name}, {$push: req.body}, {new: true}, function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};


exports.delete_a_tag = function(req, res) {
  Tags.remove({
    _id: req.params.tagid
  }, function(err, tag) {
    if (err)
      res.send(err);
    res.json({ message: 'Tag successfully deleted' });
  });
};