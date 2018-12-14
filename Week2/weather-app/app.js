const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const addressCommand = {
    demand: true,
    alias: "address",
    describe: "Address to fetch weather for",
    string: true //parse adress value to string
}

const argv = yargs
    .options({
        a: addressCommand
    })
    .help()
    .alias("help", "h")
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        // console.log(JSON.stringify(results, undefined, 2));
        // pozvati ovdje getWeather tako sto uzmemo iz results lat i lng 
        // Nakon challenga
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}.\nIt feels like ${weatherResults.apparentTemperature}.`);
            }
        })
    }
});

/*
//Challenge, arguments: lat, lng, callback isto kao i geocodeAddress
weather.getWeather(42.42261380000001, 19.2088168, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});*/




