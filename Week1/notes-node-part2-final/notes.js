const fs = require("fs");

function fetchNotes() {
    // sta ako nema fajla notes-data.json
    try {
        const notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

function saveNotes(notes) {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

// Kako da setujemo default vrijednosti parametara
function addNote(title, body) {
    let notes = []; // after refactoring
    // mozemo da pozovemo fetchNotes funkciju i obrisemo try/catch dio!
    const note = {
        title,
        body
    };

    notes = fetchNotes();

    // kraci zapis ?
    // title mora da bude unique
    const duplicateNotes = notes.filter(note => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes); //after refactoring
        return note
    }
}

function getAll() {
    return fetchNotes();
}

function getNote(title) {
    let notes = fetchNotes();
    const filteredNotes = notes.filter(note => {
        return note.title === title;
    });
    return filteredNotes[0];
}

function removeNote(title) {
    let notes = fetchNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    return filteredNotes < notes;
}

function logNote(note) {
    console.log("-----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}