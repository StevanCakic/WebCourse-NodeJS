const yargs = require("yargs");
const axios = require("axios");

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

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBclVRrc8KvXbAWNYjLYOV_CA3k0YR9XP4`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === "ZERO_RESULTS") {
        throw new Error("Unable to find that address.");
    }
    const { lat, lng } = response.data.results[0].geometry.location;
    const weatherURL = `https://api.darksky.net/forecast/ef7341ed01cdb128f0ff6a4940322a06/${lat},${lng}?units=auto`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL)
}).then((response) => {
    const { temperature, apparentTemperature } = response.data.currently
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((error) => {
    if (error.code === "ENOTFOUND") {
        console.log("Unable to connect to API servers.");
    } else {
        console.log(error.message);
    }
});