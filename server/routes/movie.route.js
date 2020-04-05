const express = require('express');
const router = express.Router();

const movie_controller = require('../controllers/movie.controller');

// view
router.get('/', movie_controller.movie_list);

// create
router.post('/', movie_controller.movie_create);

// show
router.get('/:id', movie_controller.movie_details);

// update
router.put('/:id', movie_controller.movie_update);

// delete
router.delete('/:id', movie_controller.movie_delete);


module.exports = router;
