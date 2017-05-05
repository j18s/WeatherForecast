var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var base_url = "http://localhost:3000";
var server = supertest.agent(base_url);

// UNIT test begin

describe("Unit tests", function () {
    // #1 should return home page
    it("should return home page", function (done) {
        server
            .get("/")
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                //res.body.error.should.equal(false);
                done();
            });
    });

    // #2 check config file exists
    it("check config file exists", function (done) {
        let fs = require("fs");
        let filePath = './config/config.json';
        let contents = fs.readFileSync(filePath);
        let jsonContent = JSON.parse(contents);
        contents.toString().length.should.greaterThan(0);
        done();
    });
    //   it("check config file exists", function () {

});
