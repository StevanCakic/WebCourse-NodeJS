const fs = require("fs");

const express = require("express");
const app = express();

// Notice the call above to next().
// Calling this function invokes the next middleware function in the app.
// The next() function is not a part of the Node.js or Express API,
// but is the third argument that is passed to the middleware function.
// The next() function could be named anything, but by convention it is always named “next”.
// To avoid confusion, always use this convention
function myLogger(req, res, next) {
  console.log("LOGGED:");
  // console.log(next.toString());
  console.log("Method:" + req.method);
  console.log("URL:" + req.url);
  next();
  console.log("DONE");
  //console.log(next());
}

function requestTime(req, res, next) {
  console.log("request time:");
  // Ovo se cesto radi kad pravite logove na serveru i zelite da pratite vrijeme 
  // kada se desio odredjeni request
  // U njima se najcesce upisuje:
  // kakav je bio request (od kojih parametara je sastavljen)
  // da li se desila neka greska pri slanju request (npr. nisu poslati svi parametri)
  // da li se desio neki problem na serveru pri obradi requesta
  req.requestTime = (new Date()).toString();
  const log = `${req.requestTime}---->Method:${req.method};  URL:${req.url}`;
  fs.appendFile("server.log", log + "\n", (err) => {
    if(err){
      console.log("Unable to write into server.log file.");
    }
  });
  console.log(log);
  next();
}

// Ako pomjerimo dodavanje myLogger i requestTime funkcija ispod poziva 
app.use(myLogger);
app.use(requestTime);

app.get("/", (req, res) => {
  console.log(req.requestTime);
  res.send("Hello World!");
});

app.get("/help", (req, res) => {
  console.log(req.requestTime);
  res.send("Help Page");
});

app.listen(3000);
// Zasto se ne stigne do ovih funkcija?
/*
app.use(myLogger);
app.use(requestTime);*/