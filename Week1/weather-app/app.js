const request = require("request");

const yargs = require("yargs");

const geocode = require("./geocode/geocode");

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});

