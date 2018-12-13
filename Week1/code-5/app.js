const obj = {
    name: "Ime"
};

const stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

const personString = '{"name": "Ime", "age": 25}';

const jsonObj = JSON.parse(personString);
console.log(typeof jsonObj);
console.log(jsonObj);

const fs = require("fs");

const originalNote = {
    title: "Naslov 1",
    body: "Sadrzaj za note"
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

const noteString = fs.readFileSync("notes.json");
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
