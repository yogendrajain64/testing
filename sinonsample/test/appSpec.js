var request = require('supertest');
var expect = require('chai').expect;
var sinon = require('sinon');
var model = require('../model.js');
var modelStub = sinon.stub(model, 'find');
var app = require('../app.js');
var address = request("http://localhost:8080")

describe('Test my controller', function(){

  describe('Find items', function(){
    beforeEach(function(){
      modelStub.yields(null, [{'itemid': 1, 'itemname': 'goods'}]);
    });

    it('should attempt to find items', function(done){
      address
        .get('/controller')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){

          if (err) return done(err);
          expect(res.body[0].itemname).to.be.equal("goods");
          done();
        });
    });
  });

  describe('Find a item given the argument', function(){
      beforeEach(function(done){
        modelStub.withArgs({'itemid':4}).yields(null, [{'itemid': 4, 'itemname': 'Goods 45'}]);
        modelStub.withArgs({'itemid':5}).yields(null, [{'itemid': 5, 'itemname': 'Goods 55'}]);
        done();
      });

    it('should attempt to find items', function(done){
      address
        .get('/filter/5')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if (err) return done(err);
          // Enter your assertions here
          expect(res.body[0].itemname).to.be.equal("Goods 55");
          done();
        });
    });
  });
});
