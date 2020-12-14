'use strict';

require('@code-fellows/supergoose');
const { server } = require('../src/server.js');
const supertest = require('supertest');
const Tree = require('../src/models/tree-db-model.js');
const tree = new Tree ();
const mockRequest = supertest(server);


describe('tree routes', () => {
  it ('.get/tree request should respond with a 200', () => {
    return mockRequest
      .get('/tree')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('.get/tree/1 should respond with a 200', () => {
    return mockRequest
      .post('/tree?name=name')
      .get('/tree/1')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('.post/tree?name=name should respond with a 200', () => {
    return mockRequest
      .post('/tree?name=name')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('.put/tree/1?name=test should respond with a 200', () => {
    return mockRequest
      .post('/tree?name=name')
      .put('/tree/1?name=test')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('delete/tree/1 should respond with a 200', () => {
    return mockRequest
      .post('/tree?name=name')
      .delete('/tree/1')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })
})