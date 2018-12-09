console.log("Starting notes.js")

function addNote(title, body){
    console.log("Adding note", title, body);
}

function getAll(){
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