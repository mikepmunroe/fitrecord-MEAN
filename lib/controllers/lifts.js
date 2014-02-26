'use strict';

var mongoose = require('mongoose'),
    Lift = mongoose.model('Lift');

exports.lift = function(req, res, next, id) {
  Lift.findById(id, function(err, lift) {
    if (err) return next(err);
    if (!lift) return next(new Error('Failed to load lift ' + id));
    req.lift = lift;
    next();
  });
};

exports.query = function(req, res) {
  Lift.find().sort('date').exec(function(err, lifts) {
    if (err) return res.json(500, err);
    res.json(lifts);
  });
};

exports.show = function(req, res) {
  res.json(req.lift);
};

exports.create = function(req, res) {
  var lift = new Lift(req.body);

  lift.save(function(err) {
    if (err) return res.json(500, err);
    res.json(lift);
  });
};

exports.update = function(req, res) {
  var updatedLift = _.extend(req.lift, req.body);

  updatedLift.save(function(err) {
    if (err) return res.json(500, err);
    res.json(updatedLift);
  });
};

exports.remove = function(req, res) {
  var lift = req.lift;

  lift.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(lift);
  });
};