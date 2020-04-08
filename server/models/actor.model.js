const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ActorSchema = new Schema({
    name: {type: String, required: true, max: 100},
  	movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
});

// Export the model
module.exports = mongoose.model('Actor', ActorSchema);