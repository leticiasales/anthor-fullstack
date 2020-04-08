const { Actor } = require('../models');

const ActorsController = {
  async index(req, res){
    Actor.find().populate('movies').exec(function (err, actor) {
        if (err) return console.log(err);
        res.send(actor);
    })
  },
  
  async show(req, res){
  	const actor = await Actor.findById(req.params.id).populate('movies');
  	res.send(actor);
  },

  async create(req, res) {
    let actor = new Actor(
        {
            name: req.body.name
        }
    );

    actor.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send(actor);
    })
  }
};

module.exports = ActorsController;