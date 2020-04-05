const Movie = require('../models/movie.model');

exports.movie_create = function (req, res) {
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
        res.send('Movie Created successfully')
    })
};