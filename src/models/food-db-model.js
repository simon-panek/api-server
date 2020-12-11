'use strict';

const mongoose = require ('mongoose');

//schema

const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  calories: {type: Number, required: true},
  type: {type: String, uppercase: true, enum: ['Fruit', 'VEGETABLE', 'PROTEIN', 'CARB', 'SWEET']}
});

//export as a model
const foodDbModel = mongoose.model('food', foodSchema);

module.exports = foodDbModel; //export to server.js