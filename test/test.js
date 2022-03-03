var chai   = require('chai');
var assert = chai.assert,
    expect = chai.expect;

process.env.NODE_ENV = 'test'
var bot = require('../index');

// Turn off logging
console.log = function(){};

describe("WeatherBot Tests", function(){

    this.timeout(5000);
    it("ensures that hears() returns false on empty input", function() {
        // CREATE TEST OBJECT
        msg = {"data": {"sender_name": ""}};
        let returnValue = bot.hears(msg, "")
        assert(returnValue === false);
    });
    it("ensures that hears() returns true", function() {
        
        msg = {"data": {"post": JSON.stringify({"message": "boop"})}};
        returnValue = bot.hears(msg, "boop")
        assert(returnValue ===  true);
    });

    it("ensures that hears() returns false when not matched", function() {
       
        msg = {"data": {"post": JSON.stringify({"message": "this is a test message"})}};
        returnValue = bot.hears(msg, "boop")
        assert(returnValue ===  false);
    });
    
     it("ensures that bot can parse message and returns success", async function() {
        let result = bot.parseMessage();
        assert(result, true)
    });


});



