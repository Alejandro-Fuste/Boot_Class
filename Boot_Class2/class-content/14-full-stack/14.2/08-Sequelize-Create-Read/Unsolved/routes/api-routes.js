// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
	// GET route for getting all of the todos
	app.get('/api/todos', function(req, res) {
		// Write code here to retrieve all of the todos from the database and res.json them
		db.Todo.findAll({}).then((results) => res.json(results));
		// back to the user
	});

	// POST route for saving a new todo. We can create todo with the data in req.body
	app.post('/api/todos', function(req, res) {
		// Write code here to create a new todo and save it to the database
		const { text, complete } = req.body;
		// and then res.json back the new todo to the user
		db.Todo
			.create({
				text: text,
				complete: complete
			})
			.then(resultFunct);
	});

	// DELETE route for deleting todos. We can get the id of the todo to be deleted from
	// req.params.id
	app.delete('/api/todos/:id', function(req, res) {
		db.todo
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(resultFunct);
	});

	// PUT route for updating todos. We can get the updated todo data from req.body
	app.put('/api/todos/:id', (req, res) => {
		const { text, complete } = req.body;
		db.Todo
			.update(
				{
					text: text,
					complete: complete
				},
				{
					where: {
						id: req.params.id
					}
				}
			)
			.then(resultFunct);
	});
};
