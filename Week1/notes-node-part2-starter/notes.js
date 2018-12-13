console.log("Starting notes.js");
const fs = require("fs");

function fetchNotes(fileName = "notes.json") {
    try {
        const allNotes = fs.readFileSync(fileName);
        return JSON.parse(allNotes);
    } catch (e) {
        return [];
    }
}

function saveNotes(notes, fileName = "notes.json") {
    fs.writeFileSync(fileName, notes);
}

function addNote(title, body) {
    let notes = fetchNotes();
    const note = {
        title, body
    };
    notes.push(note);
    saveNotes(JSON.stringify(notes));
}

function getAll() {
    console.log("Get all notes");
}

function getNote(title) {
    console.log("Get note", title);
}

function removeNote(title) {
    console.log("Remove note", title);
    // SAMI, na casu !
    // fetch notes
    // filter notes, removing the one with title argument
    // save notes
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}