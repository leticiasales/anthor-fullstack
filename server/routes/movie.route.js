const express = require('express');
const app = express();
const movie_controller = require('../controllers/movie.controller');

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// view
app.get('/', movie_controller.movie_list);

// create
app.post('/', movie_controller.movie_create);

// show
app.get('/:id', movie_controller.movie_details);

// update
app.put('/:id', movie_controller.movie_update);

// delete
app.delete('/:id', movie_controller.movie_delete);


module.exports = app;
