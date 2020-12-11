'use strict';

function notFoundHandler(req, res, next) { //returns a 404 error and message
  res.status(404).send('resource not found');
}

module.exports = notFoundHandler; //exports to server.js