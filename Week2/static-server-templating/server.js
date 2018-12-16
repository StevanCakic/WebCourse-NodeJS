const fs = require("fs");

const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

// Odkomentarisati kad stignemo do ovog dijela
/*
app.use((req,res, next) => {
    // Sta ako ne pozovemo next()
    const now = (new Date()).toUTCString();
    const log = `${now}:${req.method},${req.url}`;
    fs.appendFile("server.log",log + "\n", (err) => {
        if(err){
            console.log("Unable to open server.log file");
        }
    })
    next();
})

// Nekad ne zelimo da pozovemo next()
// Nista nakon ovog se nece izvrsiti

app.use((req,res, next) => {
    res.render("maintenance.hbs");
})
*/

// I samo umjesto currentYear, koristimo getCurrentYear
// template engine prvo gleda u registar helpera ima li promjenljive sa zadatim imenom
// nakon toga gleda da li je kroz render proslijedjena promjenljiva

/*
hbs.registerHelper("getCurrentYear", () => {
    return (new Date()).getFullYear();
})*/

// 
hbs.registerHelper("screamIt", (text) => {
    console.log(text);
    return text.toUpperCase();
})

app.get("/", (req, res) => {
    res.render("home.hbs", {
        pageTitle: "Home Page",
        welcomeMessage: "Welcome to my webpage",
        currentYear: (new Date()).getFullYear()
    });
})

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        pageTitle: "About Page",
        currentYear: (new Date()).getFullYear()
    });
})

app.get("/help", (req, res) => {
    res.render("help.hbs", {
        pageTitle: "Help Page",
        currentYear: (new Date()).getFullYear()
    });
})

app.get("/bad", (req, res) => {
    res.send({
        error: "Bad request"
    })
})

// za heroku
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});