const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
  title: {type: String, required: true, max: 100},
  release_date: {type: Date, required: true},
  summarized_plot: {type: String, required: true, max: 300},
  trailer: {type: String, required: true, max: 100},
  genre: {type: mongoose.Schema.Types.ObjectId, ref: 'Genre'},
  actors: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }
  ]
});

// Export the model
module.exports = mongoose.model('Movie', MovieSchema);