console.log("Starting notes.js")

module.exports.addNote = () => {
    console.log("addNote");
    return "New Note";
}

module.exports.append = (a, b) => {
    return a + b;
}