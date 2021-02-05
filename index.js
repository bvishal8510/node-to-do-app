const express = require('express');
const app = express();
const db = require('./database');

const port = 3000;

db();


var corsOptions = {
    credentials: true,
    origin: true
    };











app.listen(port, (err)=>{
    if (err) console.log(err);
    else console.log(`Running on port ${port}`);
})