const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
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

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});