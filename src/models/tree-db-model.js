'use strict';

const mongoose = require ('mongoose');

//schema

const treeSchema = mongoose.Schema({
  name: { type: String, required: true },
  calories: {type: Number, required: true},
  type: {type: String, uppercase: true, enum: ['Evergreen', 'Deciduous', 'Palm', 'Fruit', 'Nut']}
});

//export as a model
const treeDbModel = mongoose.model('tree', treeSchema);

module.exports = treeDbModel; //export to server.js