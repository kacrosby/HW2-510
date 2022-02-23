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


    it("ensures that hears() returns turn", function() {
        // CREATE TEST OBJECT
        msg = {"data": {"post": JSON.stringify({"message": "Did someone say weather?"})}};
        assert(bot.hears(msg, "weather"))
    });

    it("ensures that hears() returns false when not matched", function() {
        // CREATE TEST OBJECT
        msg = {"data": {"post": JSON.stringify({"message": "this is a test message"})}};
        let returnValue = bot.hears(msg, "boop")
    });

    it("ensures that hears() returns false when not matched", function() {
        // THIS TEST LOOKS FUNCTIONAL, BUT IT IS BROKEN -- FIX IT
        // CREATE TEST OBJECT
        msg = {"broadcast": {"channel-id": 42 }};
        let returnValue = bot.parseMessage(msg)
    });

    // ADD YOUR TESTS HERE

});




