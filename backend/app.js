const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;