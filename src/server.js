'use strict'; 

require('dotenv').config();


const express = require('express'); //bring in express
const app = express(); //initialize express

const mongoose = require('mongoose');

//middleware

const logger = require('./middleware/logger.js'); //import logger
const notFoundHandler = require ('./error-handlers/404.js'); //import notFoundHandler
const serverError = require ('./error-handlers/500.js'); //import server
const treeRoutes = require ('./routes/tree-routes.js');  //import treeRoutes
const foodRoutes = require ('./routes/food-routes.js'); //import foodRoutes
const MONGOOSE_URI = process.env.MONGOOSE_URI;
const PORT = process.env.PORT;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('I am connected');
});
const options = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(process.env.MONGOOSE_URI, options);

// const TreeDbModel = require('./models/tree-db-model');
// const tree = new TreeDbModel();
// const cors = require ('cors');

// 


// require('./models/food-db-model.js');
// require('./models/tree-db-model.js');


// app.use(require('./routes/food-routes.js'));
// app.use(require('./routes/tree-routes.js'));
// app.use(cors());

//custom middleware
app.use(express.json()); //req.body json formatter
app.use(logger); //logger middleware
app.use(treeRoutes); //treeRoute module
app.use(foodRoutes); //foodRoute module

app.get('/test', (req, res) => { //test route
  res.status(200).send('Surprisingly, this thing works!');
})

app.use('*', notFoundHandler); //catchall 404 error middleware
app.use(serverError); //catchall 500 serverError

module.exports = { //exporting server start to index.js and tests
  server: app, 
  start: port => {
    if(!port) { throw new Error ('Port is lost in the woods...');}
    app.listen(port, () => {
      console.log (`The port ${port} be working.`);
    })
  }
}