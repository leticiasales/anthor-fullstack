const express = require('express');
const app = express();
const ActorsController = require('../controllers/actors.controller');

// view
app.get('/', ActorsController.index);

// create
app.post('/', ActorsController.create);

// show
app.get('/:id', ActorsController.show);

// update
app.put('/:id', ActorsController.update);

// delete
app.delete('/:id', ActorsController.delete);

module.exports = app;
