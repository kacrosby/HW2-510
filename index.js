const Client = require('mattermost-client');

const weather = require('./weather');

let host = "chat.robotcodelab.com"
let group = "CSC510-S22"
let bot_name = "weather-bot";
let client = new Client(host, group, {});

async function main()
{
    let request = await client.tokenLogin(process.env.BOTTOKEN);
    
    client.on('message', function(msg)
    {
        console.log(msg);
        if( hears(msg, "weather") )
        {
            parseMessage(msg);            
        }
    });

}

function hears(msg, text)
{
    if( msg.data.sender_name == bot_name) return false;
    if( msg.data.post )
    {
        let post = JSON.parse(msg.data.post);
        if( post.message.indexOf(text) >= 0)
        {
            return true;
        }
    }
    return false;
}

async function parseMessage(msg)
{
    let channel = msg.broadcast.channel_id;
    let w = await weather.getWeather().catch( 
        err => client.postMessage("Weather service is down. Sorry!", channel) );
    if( w )
    {
        let returnValue =  client.postMessage(w, channel);
        return returnValue
    }
}

(async () => 
{
    if (process.env.NODE_ENV != 'test') {
        await main();
    }
})()


module.exports.hears = hears;
module.exports.parseMessage = parseMessage;
module.exports.main = main;
