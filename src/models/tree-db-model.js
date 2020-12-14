'use strict';

const mongoose = require ('mongoose');

//schema

const treeSchema = mongoose.Schema({
  name: { type: String, required: false },
});

//export as a model
const treeDbModel = mongoose.model('tree', treeSchema);

module.exports = treeDbModel; //export to server.js