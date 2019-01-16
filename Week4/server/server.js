const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.get("/users", (req, res) => {
    res.send([
        {
            name: "Mike",
            age: 27
        },
        {
            name: "Andrew",
            age: 25
        },
        {
            name: "Jen",
            age: 20
        }
    ])
})

app.listen(3000);

module.exports.app = app;