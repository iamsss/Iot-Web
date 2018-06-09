const expect = require('expect');
const request = require('supertest');
const { app } = require('./../server');
const { User } = require('./../models/user');

/* In expect upgrade tobeExist is similar to tobetruthy
 and tonotbeexist is tobe falsy */

 // Just to clear data
beforeEach(populateUsers);

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        done();
    });

});
