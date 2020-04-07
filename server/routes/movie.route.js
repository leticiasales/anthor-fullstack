const express = require('express');
const app = express();
const router = express.Router();

const movie_controller = require('../controllers/movie.controller');

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

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
