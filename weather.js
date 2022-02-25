const axios = require('axios');
const chalk = require('chalk');

config = {}
config.token = process.env.OPENWEATHERTOKEN;
var urlRoot = "https://api.openweathermap.org/data/2.5";

function getDefaultOptions(endpoint, method)
{
	var options = {
		url: urlRoot + endpoint + `&appid=${config.token}`,
		method: method,
		headers: {
			"User-Agent": "CSC510-WEATHERBOT-WORKSHOP",
			"content-type": "application/json",
		}
	};
	return options;
}

function getWeather()
{
    var latitude = "35.794238297241435"
    var longitude = "-78.69940445049596"
    var units = "metric"   // Alternatives:   "imperial"
    let options = getDefaultOptions(`/weather?lat=${latitude}&lon=${longitude}&units=${units}`, "GET");

    return new Promise(function(resolve,reject)
    {
		axios(options)
			.then(function (response) {
        data = response.data

        for (element in response){
          if (response.hasOwnProperty(element)){  // Filter out prototypes' (parents') properties
            console.log(element)
          }
        }
        console.log('headers: ' + JSON.stringify(response.headers));
        console.log('data: ' + JSON.stringify(data));
        var w = data.weather[0].description + " and feels like " + data.main.feels_like;
        resolve(w);
			})
			.catch(function (error) {
				console.log(chalk.red(error));
				reject(error);
				return; // Terminate execution.
		});
  });
}
exports.getWeather = getWeather;

// (async () => {
//     let w = await getWeather();
//     console.log(w);
// })();
