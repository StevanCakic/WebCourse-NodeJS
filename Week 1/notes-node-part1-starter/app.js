console.log("Starting app.js");

const fs = require("fs");

const notes = require("./notes");

const command = process.argv[2];

console.log(process.argv);

console.log("Command is: ", command);

if (command === "add") {
    notes.add();
} else if (command === "read") {
    notes.read();
} else if (command === "delete") {
    notes.remove();
} else if (command === "list") {
    notes.list();
} else {
    console.log("Invalid command");
}