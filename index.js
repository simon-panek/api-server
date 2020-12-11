'use strict';

require('dotenv').config();// bring in dotenv
const server = require('./src/server.js'); //import server

const mongoose = require('mongoose')

server.start(process.env.PORT); //start server on PORT supplied by the .env or heroku