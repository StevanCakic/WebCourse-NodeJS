console.log("Starting notes.js")

function addNote(title, body) {
    console.log("Adding note", title, body);
}

function getAll() {
    console.log("Get all notes");
}

function getNote(title) {
    console.log("Get note", title);
}

function removeNote(title) {
    console.log("Remove note", title);
}

// Testing purpose
module.exports.add = () => {
    console.log("addNote");
    return "New Note";
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}