const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const User = require('./userModel.js');
const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userdb', { useNewUrlParser: true });

app.post('/submit', ({ body }, res) => {
	User.create(body)
		.then((dbUser) => {
			res.json(dbUser);
		})
		.catch((err) => {
			res.json(err);
		});
});

var array = [
	{
		username: 'test2',
		password: 'test4321',
		email: 'test2@test.com'
	},
	{
		username: 'test3',
		password: 'test4321',
		email: 'test3@test.com'
	},
	{
		username: 'test4',
		password: 'test7890',
		email: 'test4@test.com'
	},
	{
		username: 'test5',
		password: 'test0987',
		email: 'test5@test.com'
	},
	{
		username: 'test6',
		password: 'test5678',
		email: 'test6@test.com'
	}
];
Model.insertMany(array)
	.then((dbExample) => {
		console.log(dbExample);
	})
	.catch(({ message }) => console.log(message));

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
