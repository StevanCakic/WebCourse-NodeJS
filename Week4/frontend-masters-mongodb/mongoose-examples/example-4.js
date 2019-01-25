const mongoose = require("mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");
const { urlencoded, json } = require("body-parser");
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        minlength: 10
    }
});

const Note = mongoose.model("note", noteSchema);

app.use(morgan("dev"));
app.use(urlencoded({extended: true}));
app.use(json());

app.get("/note", async(req, res) => {
    const notes = await Note.find({}).exec();
    res.status(200).json(notes);
})

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/baza");
};

connect()
  .then(async connection => {})
  .catch(e => console.error(e));
