const express = require('express')
const mongoose = require('mongoose')


const app = express();
app.use(express.json())
// var port = process.env.PORT;
var port=3000;

app.listen(port||8000 ,()=>{
    console.log(`App listening on port ${port}`)
})