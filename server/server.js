const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;
const server = express();

server.use(cors());
server.use(express.json());

const userRoutes = require('./controllers/users');

server.use('/', userRoutes);
server.get('/', (req, res) => res.send('Hello Tatiana!'))

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.log(err)
);

module.exports = server;