// Kreiranje servera, samo uvod

/*
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
*/
// Importovanje modula iz root foldera

const my_module = require("./my_module");

const current_date = my_module.myDateTime();

console.log(current_date);
console.log(my_module.age);

// Importovanje modula iz drugog foldera

const calculator = require("./my_modules/calculator");

console.log(calculator);

console.log(calculator.add(1,2));