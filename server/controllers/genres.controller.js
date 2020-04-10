const { Genre } = require('../models');

const GenresController = {
  async index(req, res) {
    Genre.find(function (err, genre) {
      if (err) return console.log(err);
      res.send(genre);
    })
  },

  async create(req, res) {
    let genre = new Genre({ name: req.body.name });

    genre.save(function (err) {
      if (err) {
        return console.log(err);
      }
      res.send(genre);
    })
  },

  async show(req, res) {
    Genre.findById(req.params.id, function (err, genre) {
      if (err) return console.log(err);
      res.send(genre);
    })
  },

  async update(req, res) {
    Genre.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, genre) {
      if (err) return console.log(err);
      res.send(genre);
    });
  },

  async delete(req, res) {
    Genre.findByIdAndRemove(req.params.id, function (err) {
      if (err) return console.log(err);
      res.send('Deleted successfully!');
    })
  }
}

module.exports = GenresController;