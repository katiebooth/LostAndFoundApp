const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./create_router')

app.use(cors())
app.use(express.json())
MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client)=>{
        const db = client.db("lost_and_found")
        const foundItems = db.collection("found_items")
        const foundItemsRouter = createRouter(foundItems)
        app.use('/found',foundItemsRouter)
    })
    .catch(console.error())

    

app.listen(9000, function () {
    console.log('App running on port 9000');
  });

