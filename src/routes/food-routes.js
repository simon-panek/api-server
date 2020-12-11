'use strict'; 

const express = require('express');
// const Food = require ('../models/food-model.js');
const FoodSchema = require ('../models/food-db-model');
const FoodCollection = require ('../models/food-collection.js');
const food = new FoodCollection(FoodSchema);

const router = express.Router();

const mongoose = require('mongoose');

const options = {userNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGOOSE_URI, options);

//Routes

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

//Route Handlers


async function getFood (req, res) {
  console.log('inside getFood');
  //const allFood = await food.get();
  //console.log('Gathered all items', allFood);
  res.status(200).json(await food.get());
}

async function getOneFood (req, res) {
  const id = parseInt(req.params.id);
  const oneFood =  await food.get(id);
  console.log('Retrieved one item', oneFood);
  // res.status(200).json(oneFood);
}

async function createFood (req, res) {
  const obj= req.body;
  // const newTree = await food.create(obj);
  console.log('Created a new item', req.body);
  res.status(200).json(await food.create(obj));
}

async function updateFood (req, res) {
  const id = req.params.id;
  const obj = req.body;
  const updatedFood = await food.update(id, obj);
  console.log('Updated record: ', updatedFood);
  // res.status(200).send('It was updated ');
}

async function deleteFood (req, res) {
  const id = req.params.id;
  const deletedFood = await food.delete(id);
  console.log('Item deleted: ', deletedFood)
  // res.status(200).send('Chopped down tree');
}

mongoose.disconnect();

module.exports = router;