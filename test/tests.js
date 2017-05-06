var nock = require('nock');
var request = require('supertest')("http://localhost:3000");
var expect = require('chai').expect;
//used to read the JSON file
var fs = require("fs");

describe("Testing config file",function(){
    it("whether exists", function (done) {
        let contents = fs.readFileSync('./json/test.json');
        expect(contents.toString().length).to.be.above(0);
        done();
    });
})
describe("Testing API with a mocked backend", function () {
  it("responds with json file response", function (done) {
    //read the json file
    var contents = fs.readFileSync('./json/forecast.json');
    //parse the contents and assign to a variable
    var jsonContent = JSON.parse(contents);

    nock("http://localhost:3000")
      .get('/weatherForecast')
      .reply(200, jsonContent);

    request
      .get('/weatherForecast')
      .expect(200)
      .end(function (err, res) {
        expect(res.body.status).to.equal(200);
        //expect(res.body.result.postcode).to.equal("SW1A 1AA")
        done();
      });
  })
});