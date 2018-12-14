const express = require("express");

const app = express();

// console.log(app);

app.get("/", (req, res) => {
    // console.log(req);
    // console.log(res);
    // res.send("Hello from Server");
    // res.send("<h1>Hello express</h1>");
    // moze li da vrati oboje
    res.send({
        name: "Name",
        likes: [
            "Hobby 1",
            "Hobby 2"
        ]
    })
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

app.get("/bad", (req, res) => {
    res.send({
        error: "Bad request"
    })
})

app.listen(3000);