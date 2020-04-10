const express = require('express');
const app = express();
const GenresController = require('../controllers/genres.controller');

// view
app.get('/', GenresController.index);

// create
app.post('/', GenresController.create);

// show
app.get('/:id', GenresController.show);

// update
app.put('/:id', GenresController.update);

// delete
app.delete('/:id', GenresController.delete);

module.exports = app;
