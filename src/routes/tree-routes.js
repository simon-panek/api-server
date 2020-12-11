'use strict'; 

const express = require('express'); //bring in express
const Tree = require ('../models/tree-model.js'); //bring in Tree model
const tree = new Tree(); //instantiate new tree

const router = express.Router(); //instantiate router

//Routes

router.get('/tree', getTree); //route to get all items
router.get('/tree/:id', getOneTree); //to get one item by id
router.post('/tree', createTree); //route to create an item
router.put('/tree/:id', updateTree); //route to update an item by id
router.delete('/tree/:id', deleteTree); //route to delete an item by id

//Route Handlers

function getTree (req, res) { //get all items from db
  const allTree = tree.get();
  res.status(200).json(allTree);
}

function getOneTree (req, res) { //get one item from db by id
  const id = parseInt(req.params.id);
  const oneTree = tree.get(id);
  res.status(200).json(oneTree);
}

function createTree (req, res) { //create item in db
  const obj= req.body;
  const newTree = tree.create(obj);
  res.status(200).send('New item added.');
}

function updateTree (req, res) { //update item in db
  const id = req.params.id;
  const obj = req.body;
  const updatedTree = tree.update(id, obj);
  res.status(200).send('It was updated ');
}

function deleteTree (req, res) { //delete item from db
  const id = req.params.id;
  const deleteTwoTree = tree.delete(id);
  res.status(200).send('Chopped down tree');
}

module.exports = router; //export to server.js