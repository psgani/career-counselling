const connectToMongo = require('./db');

connectToMongo();

var express = require('express');
var cors = require('cors')
var app = express()
 
app.use(cors())

app.use(express.json())

const port = 5000;

app.use('/api/auth',require('./routes/auth'))

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})