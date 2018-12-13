const request = require("request");

// First version
/*
function getWeather() {
    request({
        url: "https://api.darksky.net/forecast/ef7341ed01cdb128f0ff6a4940322a06/42.42261380000001,19.2088168",
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body.currently.temperature);
        } else {
            console.log("Unable to fetch weather");
        }
    })
}*/

// Second version
// Refactored
function getWeather(lat, lng, cb) {
    request({
        url: `https://api.darksky.net/forecast/ef7341ed01cdb128f0ff6a4940322a06/${lat},${lng}?units=auto`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            cb(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            cb("Unable to fetch weather.");
        }
    })
}

// Third version
// Version with Promises

module.exports = {
    getWeather
}
