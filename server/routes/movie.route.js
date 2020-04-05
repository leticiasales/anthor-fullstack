const express = require('express');
const router = express.Router();

const movie_controller = require('../controllers/movie.controller');

router.post('/create', movie_controller.movie_create);

module.exports = router;
