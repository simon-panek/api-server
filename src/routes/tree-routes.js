'use strict'; 

const express = require('express');
// const Food = require ('../models/food-model.js');
const TreeSchema = require ('../models/tree-db-model');
const TreeCollection = require ('../models/item-collection.js');
const tree = new TreeCollection(TreeSchema);
const validator = require('../middleware/validator.js'); //import validator

const router = express.Router();

//Routes

router.get('/tree', getTree);
router.get('/tree/:id', getOneTree);
router.post('/tree', validator, createTree);
router.put('/tree/:id', validator, updateTree);
router.delete('/tree/:id', deleteTree);

//Route Handlers

async function getTree (req, res) { //gets all items from db
  console.log('Gathered all items');
  res.status(200).json(await tree.get());
}

async function getOneTree (req, res) { //gets one item from db by id
  const id = req.params.id;
  console.log('Retrieved one item ', id);
  res.status(200).json(await tree.get(id));
}

async function createTree (req, res) { //creates an item and stores to db
  const obj= req.body;
  console.log('Created a new item', req.body);
  res.status(200).json(await tree.create(obj));
}

async function updateTree (req, res) { //updates an item by id and stores to db
  const id = req.params.id;
  const obj = req.body;
  console.log('Updated record');
  res.status(200).json(await tree.update(id, obj));
}

async function deleteTree (req, res) { //deletes and item by id
  const id = req.params.id;
  console.log('Item deleted')
  res.status(200).json(await tree.delete(id));
}

module.exports = router;