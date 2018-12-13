const request = require("request");

function geocodeAddress(address, cb) {
    const encodedAddress = encodeURIComponent(address); // moze i a

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBclVRrc8KvXbAWNYjLYOV_CA3k0YR9XP4`,
        json: true // saljemo zahtjev i u request headeru dodajemo accept:application/json
    }, (error, response, body) => {
        /*
        console.log("RESPONSE");
        console.log(JSON.stringify(response, undefined, 2));*/

        /*
        console.log("BODY");
        console.log(JSON.stringify(body, undefined, 2));
        console.log("ERROR");
        console.log(JSON.stringify(error, undefined, 2));*/

        if (error) {
            cb("Unable to connect to Google servers.")
            // console.log("Unable to connect to Google servers.")
        } else if (body.status === "ZERO_RESULTS") {
            cb("Unable to find that address")
            // console.log("Unable to find that address");
        } else if (body.status === "OK") {
            cb(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            /*
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);*/
        }
    })
}

module.exports = {
    geocodeAddress
}