'use strict';

var mongoose = require('mongoose'),
    Lift = mongoose.model('Lift');

exports.index = function(req, res) {
  return Lift.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};