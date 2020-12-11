'use strict';

function serverError (err, req, res, next) { //returns a 500 server error and the error object
  res.status(500).send(err);
}

module.exports = serverError; //exports to server.js