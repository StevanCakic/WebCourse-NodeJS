console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
// Yargs
const yargs = require("yargs");

const notes = require("./notes");

// console.log(yargs.argv);

const argv = yargs.argv;
const command = argv._[0];

console.log("Command: ", command);

console.log(argv);

if (command === "add") {
    const note = notes.addNote(argv.title, argv.body);
    if(!note){
        console.log("Note already exists.");
    }
} else if (command === "list") {
    notes.getAll();
} else if (command === "read") {
    notes.getNote(argv.title);
} else if (command === "remove") {
    notes.removeNote(argv.title);
} else {
    console.log("Command not found");
}