'use strict';

require('dotenv').config;
const mongoose = require9('mongoose');
const FoodCollection = require('../models/food-collection');
const food = new FoodCollection();


const model = require('./tree-model'); //import foodModel

class FoodCollection { //create class

  constructor(){ //set the key value pairs
    this.model = model;
  }

  get(_id) { //create a method called get to retrieve one or all records
    if(_id) {
      return this.model.findOne({_id});
    } else {
      return this.model.find({});
    }
  }

  create (record) { //create a method to create a new record
    let newRecord = new this.model (record);
    return newRecord.save();
  }

  update(_id, record) { //create a method to update a record
    return this.model.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) { //create a method to delete a record
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = FoodCollection; //export to server.js