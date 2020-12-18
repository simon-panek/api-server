'use strict';

require('@code-fellows/supergoose');
const { server } = require('../src/server.js');
const supertest = require('supertest');
const Food = require('../src/models/food-db-model.js');
const food = new Food ();
const mockRequest = supertest(server);


describe('food routes', () => {
  it ('5. .get/food request should respond with a 200', () => {
    return mockRequest
      .get('/food')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('6. .get/food/1 should respond with a 200', () => {
    return mockRequest
      // .post('/food?name=name')
      .get('/food/5fdc5b832b7b1a04680e7861')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('7. .post/food?name=name should respond with a 200', () => {
    return mockRequest
      .post('/food?name=name')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('8. .put/food/1?name=test should respond with a 200', () => {
    return mockRequest
      // .post('/food?name=name')
      .put('/food/5fdc5b832b7b1a04680e7861?name=test')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('9. delete/food/1 should respond with a 200', () => {
    return mockRequest
      // .post('/food?name=name')
      .delete('/food/5fdc5b832b7b1a04680e7861')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })
})