express = require('express')
app = express()

app.get('/', function(req,res){
    res.send("Hello world")
})

app.listen(9000, function () {
    console.log('App running on port 9000');
  });

