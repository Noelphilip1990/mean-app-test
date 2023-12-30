const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const dbUrl = "mongodb://localhost:27017";
const app = express();

const client = new MongoClient(dbUrl);




// code exection

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('local');
    const collection = db.collection('testlist');
    const findResult = await collection.find({}).toArray();
    return findResult;
  }

app.use(cors());

app.get('/', (req, res) => {
        main()
        .then((result => {
            console.log(result[0].data);
            res.send(result[0].data);
        }))
        .catch(console.error)
        .finally(() => client.close());

        
});


app.listen(3000, () => {

});