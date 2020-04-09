const { Actor } = require('../models');

const ActorsController = {
  async index(req, res) {
    Actor.find(function (err, actor) {
      if (err) return console.log(err);
      res.send(actor);
    })
  },

  async create(req, res) {
    let actor = new Actor({ name: req.body.name });

    actor.save(function (err) {
      if (err) {
        return console.log(err);
      }
      res.send(actor);
    })
  },

  async show(req, res) {
    Actor.findById(req.params.id, function (err, actor) {
      if (err) return console.log(err);
      res.send(actor);
    })
  },

  async update(req, res) {
    Actor.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, actor) {
      if (err) return console.log(err);
      res.send(actor);
    });
  },

  async delete(req, res) {
    Actor.findByIdAndRemove(req.params.id, function (err) {
      if (err) return console.log(err);
      res.send('Deleted successfully!');
    })
  }
}

module.exports = ActorsController;