const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/baza");
};

const student = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true
    },
    lastName: String,
    grade: Number,
    info: {
      school: {
        type: String
      }
    },
    favFoods: [{ type: String }],

  },
  { timestamps: true }
);

// Kreiranje kolekcije, ako je nema
// mongoose convert student -> students
const Student = mongoose.model("student", student);

connect()
  .then(async connection => {
    const student = await Student.create({
      firstName: "Tim",
      lastName: "Cook",
      grade: 10
    });
    const found = await Student.find({ firstName: "Tim" });
    const findAll = await Student.find({});
    const foundById = await Student.findById("adadaadadadad");
    const updated = await Student.findByIdAndUpdate("dadadadad", {});
    console.dir(student);
  })
  .catch(e => console.error(e));
