const express = require("express");
const app = express();

// Notice the call above to next().
// Calling this function invokes the next middleware function in the app.
// The next() function is not a part of the Node.js or Express API,
// but is the third argument that is passed to the middleware function.
// The next() function could be named anything, but by convention it is always named “next”.
// To avoid confusion, always use this convention
function myLogger(req, res, next) {
  console.log("LOGGED");
  // console.log(next.toString());
  next();
  console.log("DONE");
  //console.log(next());
}

function requestTime(req, res, next) {
  console.log("request time");
  req.requestTime = Date.now();
  next();
}

// Ako pomjerimo dodavanje myLogger i requestTime funkcija ispod poziva 
app.use(myLogger);
app.use(requestTime);

app.get("/", (req, res) => {
  console.log(req.requestTime);
  res.send("Hello World!");
});

app.get("/ruta", (req, res) => {
  res.send("Ruta Page");
});

app.listen(3000);
// Zasto se ne stigne do ovih funkcija?
/*
app.use(myLogger);
app.use(requestTime);*/