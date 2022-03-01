var chai   = require('chai');
var assert = chai.assert,
    expect = chai.expect;

process.env.NODE_ENV = 'test'
var bot = require('../index');

// Turn off logging
console.log = function(){};

describe("WeatherBot Tests", function() {

    this.timeout(5000);
    it("ensures that hears() returns false on empty input", function() {
        // CREATE TEST OBJECT
        msg = {"data": {"sender_name": ""}};
        let returnValue = bot.hears(msg, "")
        assert(returnValue === false);
    });


    it("ensures that hears() returns true", function() {
        msg = {"data"};
        let returnValue = bot.hears(msg)
        assert(returnValue === true);    });

    it("ensures that hears() returns false when not matched", function() {
        // THIS TEST PASSES, BUT IT IS BROKEN -- FIX IT
        // search for  "Praggnanandhaa" in https://github.ncsu.edu/CSC-510/Course/raw/main/Materials/Introduction-to-Testing.pdf
        // CREATE TEST OBJECT
        msg = {"data": {"post": JSON.stringify({"message": "this is a test message"})}};
        assert(bot.hears(msg, "boop"));
    });


});




