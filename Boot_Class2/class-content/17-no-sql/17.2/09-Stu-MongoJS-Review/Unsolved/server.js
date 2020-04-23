// Your assignment is to define the routes below. Good luck!

const express = require('express');
const mongojs = require('mongojs');

const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const databaseUrl = 'warmup';
const collections = [ 'book' ];

const db = mongojs(databaseUrl, collections);
db.on('error', (error) => {
	console.log('Database Error:', error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Post a book to the mongoose database
app.post('/submit', ({ body }, res) => {
	// Save the request body as an object called book

	// If we want the object to have a boolean value of false,
	// we have to do it here, because the ajax post will convert it
	// to a string instead of a boolean
	const book = body;

	book.read = false;

	db.book.save({ book }, (err, data) => {
		if (err) throw err;
		res.send(data);
	});
});

// Find all book marked as read
app.get('/read', (req, res) => {
	db.books.find({ read: true }, (err, data) => {
		if (err) throw err;
		res.send(data);
	});
});

// Find all book marked as unread

app.get('/unread', (req, res) => {
	db.books.find({ read: false }, (err, data) => {
		if (err) throw err;
		res.send(data);
	});
});

// Mark a book as having been read

// Remember: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))

app.put('/markread/:id', (req, res) => {
	db.books.update({ _id: mongojs.ObjectID(req.params.id) }, { $set: { read: true } }, (err, data) => {
		if (err) throw err;
		res.send(data);
	});
});

// Mark a book as having been not read

// Remember: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))
app.put('/markunread/:id', (req, res) => {
	db.books.update({ _id: mongojs.ObjectID(req.params.id) }, { $set: { read: false } }, (err, data) => {
		if (err) throw err;
		res.send(data);
	});
});

// Listen on port 3000
app.listen(3000, () => {
	console.log('App running on port 3000!');
});
