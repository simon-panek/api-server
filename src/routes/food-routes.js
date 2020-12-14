'use strict'; 

const express = require('express');
// const Food = require ('../models/food-model.js');
const FoodSchema = require ('../models/food-db-model');
const FoodCollection = require ('../models/item-collection.js');
const food = new FoodCollection(FoodSchema);
const validator = require('../middleware/validator.js'); //import validator

const router = express.Router();

//Routes

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', validator, createFood);
router.put('/food/:id', validator, updateFood);
router.delete('/food/:id', deleteFood);

//Route Handlers

async function getFood (req, res) { //gets all items from db
  console.log('Gathered all items');
  res.status(200).json(await food.get());
}

async function getOneFood (req, res) { //gets one item from db by id
  const id = req.params.id;
  console.log('Retrieved one item ', id);
  res.status(200).json(await food.get(id));
}

async function createFood (req, res) { //creates an item and stores to db
  const obj= req.body;
  console.log('Created a new item', req.body);
  res.status(200).json(await food.create(obj));
}

async function updateFood (req, res) { //updates an item by id and stores to db
  const id = req.params.id;
  const obj = req.body;
  console.log('Updated record');
  res.status(200).json(await food.update(id, obj));
}

async function deleteFood (req, res) { //deletes and item by id
  const id = req.params.id;
  console.log('Item deleted')
  res.status(200).json(await food.delete(id));
}

module.exports = router;