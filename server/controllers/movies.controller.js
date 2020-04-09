const { Movie } = require('../models');

const MoviesController = {
  async index(req, res) {
    Movie.find().populate('actors').populate('genre').exec(function (err, movie) {
      if (err) return console.log(err);
      res.send(movie);
    })
  },

  async create(req, res) {
    let movie = new Movie(
      {
        title: req.body.title,
        release_date: req.body.release_date,
        summarized_plot: req.body.summarized_plot,
        trailer: req.body.trailer,
        actors: req.body.actors,
        genre: req.body.genre
      }
    );

    movie.save(function (err) {
      if (err) {
        return console.log(err);
      }
      res.send(movie);
    })
  },

  async show(req, res) {
    Movie.findById(req.params.id).populate('actors').populate('genre').exec(function (err, movie) {
      if (err) return console.log(err);
      res.send(movie);
    })
  },

  async update(req, res) {
    Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, movie) {
      if (err) return console.log(err);
      res.send(movie);
    });
  },

  async delete(req, res) {
    Movie.findByIdAndUpdate(req.params.id, { actors: [] }, function (err, movie) {
      if (err) return console.log(err)
      else {
        Movie.findByIdAndRemove(req.params.id, function (err) {
          if (err) return console.log(err);
          res.send('Deleted successfully!');
        })
      }
    })
  }
}

module.exports = MoviesController;