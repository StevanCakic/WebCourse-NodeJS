const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/baza");
};

const school = new mongoose.Schema({

    openSince: Number,
    students: Number,
    isGreat: Boolean,
    staff: [{ type: String }],
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "district"
    },
    name: {
        type: String,
        unique: false
    }
});

// middleware
// primjeri "save", "validate", "findOne", etc. 
// Skoro sve funckije koje mozete pozvati nad modelom
// mozete ih pozvati i kao middleware
school.pre("save", () => {
    console.log('before save');
})

// slicno i sa post. opet napomena za koriscenje arrow funkcija u ovom slucaju
school.post("save", () => {
    console.log("after save")
})

// kako zna NodeJS da je ovo asinhroni middleware i zna da treba da saceka da se zavrsi
// dok krene da se izvrsava sledeci

// asinhorni middleware, pominjali smo ovo ali u drugom formatu
school.post("findOne", (doc, next) => {
    setTimeout(() => {
        console.log("called at least 1000ms after calling findOne on school instance");
        next();
    }, 1000);

})

school.post("findOne", () => {
    console.log("calling second middleware for findOne");

})

// this kao callback za get? arrow funkcija u ovom slucaju ?
school.virtual("staffCount")
    .get(function () {
        // Calling getter of staffCount virtual
        return this.staff.length
    });


// Ovaj redosled bitan, izuciti kardinalnost
// ukratko district ima vecu kardinalnost od name i zato je on postavljen kao prvi key
// Definicija za kartidanlost:
// The number of distinct values in a table column, 
// relative to the number of rows in the table !
// Property koji ima vecu kardinalnost ima vecu specificnost
school.index({
    district: 1,
    name: 1
}, { unique: true })

const School = mongoose.model("school", school);

connect()
    .then(async connection => {
        const mySchool = await School.create({
            name: "My School",
            staff: ["v", "a", "c"]
        })
        console.log(mySchool);
        console.log(mySchool.staffCount);
        const createdSchool = await School.findOne({
            name: "My School"
        })
        console.log(createdSchool);
    })
    .catch(e => console.error(e));
