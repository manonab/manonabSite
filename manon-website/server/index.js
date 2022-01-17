require('./config/db');
require('dotenv').config();

const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use(cors());

app.get('/', cors(), async(req,res) => {
    res.send('this is working')
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
});