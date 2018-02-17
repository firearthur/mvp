const express = require('express');
const app = express();
const db = require('../db/database');
const path = require('path');
const bodyParser = require('body-parser');
const {router} = require('./router'); //deconstructing magic!


app.use(express.static(path.join(__dirname, '../client/static'))); //serving static assests

app.use(bodyParser.json()); //check
app.use(bodyParser.urlencoded({extended:true})); //those
app.use('/', router); 


// app.get('/', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));