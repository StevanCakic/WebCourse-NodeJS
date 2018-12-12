const request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=Podgorica&key=AIzaSyBclVRrc8KvXbAWNYjLYOV_CA3k0YR9XP4",
    json: true // saljemo zahtjev i u request headeru dodajemo accept:application/json
}, (error, response, body) => {
    console.log("RESPONSE");
    console.log(JSON.stringify(response, undefined, 2));
    /*
    console.log("BODY");
    console.log(JSON.stringify(body, undefined, 2));
    console.log("ERROR");
    console.log(JSON.stringify(error, undefined, 2));*/

    /*
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);*/
})