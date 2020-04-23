// Requiring necessary npm packages
const express = require('express');
const mongojs = require('mongonjs');

require('dotenv').config();

// Creating express app
const app = express();

//Configuring middleware needed for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Setting up port and getting database
const PORT = process.env.PORT || 3000;
const databaseUrl = 'databaseName';
const collections = [ 'collectionName' ];

const db = mongojs(databaseUrl, collections);

//Starting database
db.on('error', (error) => console.log('Database Error:', error));

//Starting server to listen
app.listen(3000, () => console.log('App running on port 3000!'));
