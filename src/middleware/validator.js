'use strict';

function validator(req, res, next) { //function checks to see if user entered a valid name query
  let nameCheck = req.query.name;
  if(nameCheck){ //if the query type "name" exists continue
    next();
  } else {
    next('No valid name provided'); //if query type name does not exist send back error 500
  }
}

module.exports = validator; //exports to server.js