const express = require('express');
const router = express.Router();

const movie_controller = require('../controllers/movie.controller');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
