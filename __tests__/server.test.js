'use strict'; 
const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it ('should respond with a 200', () => {
    return mockRequest
      .get('/test')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })
})

describe('web server', () => {
  it ('should respond with a 404', () => {
    return mockRequest
      .get('/broken')
      .then (results => {
        expect(results.status).toBe(404)
      })
  })
})

describe('web server', () => {
  it ('should respond with a 404', () => {
    return mockRequest
      .post('/test')
      .then (results => {
        expect(results.status).toBe(404)
      })
  })
})