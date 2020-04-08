const express = require('express');
const app = express();
const MoviesController = require('../controllers/movies.controller');

// view
app.get('/', MoviesController.index);

// create
app.post('/', MoviesController.create);

// show
app.get('/:id', MoviesController.show);

// update
app.put('/:id', MoviesController.update);

// delete
app.delete('/:id', MoviesController.delete);

module.exports = app;
