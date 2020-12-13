'use strict';

require('dotenv').config();// bring in dotenv
const server = require('./src/server.js'); //import server

const mongoose = require('mongoose')

const options = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGOOSE_URI, options);

server.start(process.env.PORT); //start server on PORT supplied by the .env or heroku