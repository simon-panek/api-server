'use strict';

const mongoose = require ('mongoose');

//schema

const foodSchema = mongoose.Schema({
  name: { type: String, required: false },
  // calories: {type: Number, required: false},
  // type: {type: String, uppercase: true, enum: ['Fruit', 'VEGETABLE', 'PROTEIN', 'CARB', 'SWEET']}
});

//export as a model
const foodDbModel = mongoose.model('food', foodSchema);

module.exports = foodDbModel; //export to server.js