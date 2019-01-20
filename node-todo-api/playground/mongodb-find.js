const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.", err);
    }

    console.log("Connected to MongoDB server");

    // Fetch all documents from Todos collection
    db.collection("Todos").find().toArray().then(todos => {
        console.log("All Todos:");
        console.log(JSON.stringify(todos, undefined, 2));
    }).catch(err => {
        console.log("Unable to fetch todos", err)
    });

    // Fetch specific documents from Todos collection
    db.collection("Todos").find({ completed: false }).toArray().then(todos => {
        console.log("Not completed Todos:");
        console.log(JSON.stringify(todos, undefined, 2));
    }).catch(err => {
        console.log("Unable to fetch todos", err)
    });

    // Fetch by ObjectID
    db.collection("Todos").find({ 
        _id: new ObjectID("5c4480c808f64a18a42d9404") })
        .toArray()
        .then(todos => {
        console.log("Specified document by ID:");
        console.log(JSON.stringify(todos, undefined, 2));
    }).catch(err => {
        console.log("Unable to fetch todos", err)
    });

    // Count Todos
    db.collection("Todos").find()
        .count()
        .then(count => {
        console.log(`Todos count: ${count}`);
        
    }).catch(err => {
        console.log("Unable to count todos", err)
    });

    // Napisati query koji vrace broj user-a 
    // za zadatu vrijednost name propery-a user dokumenta

    // Kako da vratite sve usere koji zadovoljavaju
    // prethodni uslov

    db.close();

})

