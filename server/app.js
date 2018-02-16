const express = require('express');
const app = express();
const db = require('../db/database');

app.use(express.static('../static'));

// app.get('/', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));