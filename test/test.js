/* global describe, it, required */
const should = require('should');
const mongoose = require('mongoose');

const db =  mongoose.createConnection('mongodb://localhost/inkub8_test');
const schemas = require('../index.js')(db);

describe("Initialised schemas - ", function() {
    it('allows you to access models on db object', function() {
        (db.model('Product') != null).should.equal(true);
    });
});
