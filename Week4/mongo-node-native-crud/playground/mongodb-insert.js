const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.", err);
    } 
    
    console.log("Connect to MongoDB server");

    db.collection("Todos").insertOne({
        text: "Something to do",
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log("Unable to insert todo", err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id);
        console.log(result.ops[0]._id.getTimestamp());
    })

    // Dodati novi dokument u kolekciju Users
    // Dokument: {name, age, location }
    
    db.close();

})

/*
const obj = new ObjectID();
console.log(obj);*/