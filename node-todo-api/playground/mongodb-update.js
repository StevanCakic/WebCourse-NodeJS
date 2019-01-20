const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.", err);
    }

    console.log("Connect to MongoDB server.");

    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5c448bb31ac65f9317905e26")
    }, {
            $set: {
                completed: true
            }
        }, {
            // vrace azuirani dokument,
            // default je true, vrace originalni dokument
            returnOriginal: false
        })
        .then(result => {
            console.log(result)
        })

    // Azurirati ime korisnika na neko koje vi zadate
    // povecati vrijednost age za 1
    // pogledati dokumentaciju
    
    db.close();

})

