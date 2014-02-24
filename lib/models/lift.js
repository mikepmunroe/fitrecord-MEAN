'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LiftSchema = new Schema({
  date: { type: Date, default: Date.now },
  type: String,
  repScheme: Number,
  load: Number,
  notes: String
});

mongoose.model('Lift', LiftSchema);
