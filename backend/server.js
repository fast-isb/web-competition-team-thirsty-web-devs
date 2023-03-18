const express = require('express')
const mongoose = require('mongoose');
const { orgRouter } = require('./Routes/OrganizationRoutes');
const { studentRouter } = require('./Routes/StudentRouter');
require("dotenv").config();


const app = express();
app.use(express.json())

app.use('/org',orgRouter);
app.use('/student',studentRouter);

var port = process.env.PORT;
var uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri,() => {
    console.log('Connected');
});

app.listen(port||8000 ,()=>{
    console.log(`App listening on port ${port}`)
})