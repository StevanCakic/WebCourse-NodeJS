console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
// Yargs
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
const command = argv._[0];

console.log("Command: ", command);

if (command === "add") {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created");
        notes.logNote(note);
    } else {
        console.log("Note title created");
    }

} else if (command === "list") {
    notes.getAll();
} else if (command === "read") {
    let note = notes.getNote(argv.title);
    if(note){
        console.log("Note found");
        notes.logNote(note);
    }else{
        console.log("Note not found");
    }
} else if (command === "remove") {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
} else {
    console.log("Command not found");
}