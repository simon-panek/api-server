'use strict'; 

const express = require('express');
const Food = require ('../models/tree-model.js');
const food = new Food();

const router = express.Router();

//Routes

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

//Route Handlers

function getFood (req, res) {
  const allFood = food.get();
  res.status(200).json(allFood);
}

function getOneFood (req, res) {
  const id = parseInt(req.params.id);
  const oneFood = food.get(id);
  res.status(200).json(oneFood);
}

function createFood (req, res) {
  const obj= req.body;
  const newTree = food.create(obj);
  res.status(200).json(allFood);
}

function updateFood (req, res) {
  const id = req.params.id;
  const obj = req.body;
  const updatedFood = food.update(id, obj);
  res.status(200).send('It was updated ');
}

function deleteFood (req, res) {
  const id = req.params.id;
  const deleteTwoFood = food.delete(id);
  res.status(200).send('Chopped down tree');
}

module.exports = router;