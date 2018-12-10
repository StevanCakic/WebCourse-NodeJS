console.log("Starting app.js");

// Dio prvi - Built-in moduli 
/*
const fs = require("fs");
const os = require("os");

const user = os.userInfo();

fs.appendFile("greetings.txt", `Hello ${user.username}!`, err => {
    if(err) {
        console.log("Unable to write to file");
    }
});
*/
// Dio drugi - Nasi moduli

/*
const notes = require("./notes");
const res = notes.addNote();
console.log(res);

console.log(notes.append("abc", "efg"));
*/

// Dio treci - 3rd party moduli
/*
const _ = require("lodash");
console.log(_.isString(true))
console.log(_.isString("abc"));
const arrayOfUniqElements = _.uniq([1, 2, 3, 1, 2, "A", "B", "A", true, true, false]);
console.log(arrayOfUniqElements);*/
