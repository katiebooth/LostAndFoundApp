const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', function(req,res){
    res.json({Message :"Hello world"})
})

app.listen(9000, function () {
    console.log('App running on port 9000');
  });

