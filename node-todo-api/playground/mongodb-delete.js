const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.", err);
    }

    console.log("Connect to MongoDB server.");

    // deleteMany
    db.collection("Todos")
        .deleteMany({ text: "Something to do" })
        .then(result => {
            console.log(result);
        });

    // deleteOne
    db.collection("Todos")
        .deleteOne({ text: "Create homework" })
        .then(result => {
            console.log(result);
        });

    // findOneAndDelete
    db.collection("Todos")
        .findOneAndDelete({ completed: false })
        .then(result => {
            console.log(result);
        });

    // Ukloniti sve duple dokumente (po name) pozivom metoda
    // .findMany()

    // Koristeci metod findOneAndDelete ukloniti 
    // usera na osnovu ObjectID-a

    db.close();

})

