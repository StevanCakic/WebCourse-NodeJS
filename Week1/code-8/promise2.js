const request = require("request");

function geocodeAddress(address) {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBclVRrc8KvXbAWNYjLYOV_CA3k0YR9XP4`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect to Google servers.")
            } else if (body.status === "ZERO_RESULTS") {
                reject("Unable to find that address")
            } else if (body.status === "OK") {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        })
    })

}

geocodeAddress("Donja Gorica").then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch(error => {
    console.log(error);
})