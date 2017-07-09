const express = require('express');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Prosmise = global.Prosmise;

app.use(bodyPaser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//listen for requests
app.listen(process.env.port||4000,function(){
  console.log('now listening for request');
});
