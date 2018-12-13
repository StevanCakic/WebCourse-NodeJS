console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
// Yargs
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
const command = process.argv[2];
// const command = argv._[0]; // isto kao prethodna linija ali sada koristimo yargs

console.log("Command: ", command);
console.log("Process argv: ", process.argv);
// console.log("Yargs: ", argv); // Uncomment kad dodjemo na yargs

if (command === "add") {
    console.log("Adding new note");
    // notes.addNote(argv.title, argv.body); // Uncomment kad dodjemo na yargs
} else if (command === "list") {
    console.log("Listing all notes");
    // notes.getAll(); // Uncomment kad dodjemo na yargs
} else if (command === "read") {
    console.log("Fetching note")
    // notes.getNote(argv.title); // Uncomment kad dodjemo na yargs
} else if (command === "remove") {
    console.log("Removing note");
    // notes.removeNote(argv.title); // Uncomment kad dodjemo na yargs
} else {
    console.log("Command not found");
}