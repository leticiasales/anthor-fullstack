const Movie = require('../models/movie.model');

exports.movie_list = (req, res, next) => {
    Movie.find(function (err, movie) {
        if (err) return next(err);
        res.send(movie);
    })
};

exports.movie_create = function (req, res) {
    console.log(req.body)
    console.log('teste lelelleelel')
    let movie = new Movie(
        {
            title: req.body.title,
            release_date: req.body.release_date,
            summarized_plot: req.body.summarized_plot,
            trailer: req.body.trailer,
        }
    );

    movie.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send(movie);
    })
};

exports.movie_details = function (req, res) {
    Movie.findById(req.params.id, function (err, movie) {
        if (err) return next(err);
        res.send(movie);
    })
};

exports.movie_update = function (req, res) {
    Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, movie) {
        if (err) return next(err);
        res.send('Movie udpated.');
    });
};

exports.movie_delete = function (req, res) {
    Movie.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};