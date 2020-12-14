'use strict';

const loggerMiddleware = require('../src/middleware/logger.js');

describe ('logger middleware', () => { //sets up the logger test
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); //spy on the next method
  
  beforeEach(() => {
    //attach to console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach (() => {
    //put the console back
    consoleSpy.mockRestore();
  });
  
  it ('properly logs some output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })
})