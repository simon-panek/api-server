'use strict';

module.exports = (req, res, next) => { //logs the method and path of each incoming request, exports to server.js
  console.log (`METHOD: ${req.method}, PATH: ${req.path}`);
  next();
}