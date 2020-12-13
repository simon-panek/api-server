'use strict'; 

const express = require('express');
// const Food = require ('../models/food-model.js');
const FoodSchema = require ('../models/food-db-model');
const FoodCollection = require ('../models/food-collection.js');
const food = new FoodCollection(FoodSchema);

const router = express.Router();

//Routes

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

//Route Handlers


async function getFood (req, res) {
  console.log('inside getFood');
  console.log('Gathered all items');
  res.status(200).json(await food.get());
}

async function getOneFood (req, res) {
  console.log(req.params.id);
  const id = req.params.id;
  console.log('Retrieved one item ', id);
  res.status(200).json(await food.get(id));
}

async function createFood (req, res) {
  const obj= req.body;
  // const newTree = await food.create(obj);
  console.log('Created a new item', req.body);
  res.status(200).json(await food.create(obj));
  console.log('after create method run')
}

async function updateFood (req, res) {
  const id = req.params.id;
  const obj = req.body;
  console.log('Updated record');
  res.status(200).json(await food.update(id, obj));
}

async function deleteFood (req, res) {
  const id = req.params.id;
  console.log('Item deleted')
  res.status(200).json(await food.delete(id));
}


module.exports = router;