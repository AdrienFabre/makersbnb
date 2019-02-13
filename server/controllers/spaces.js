const Space = require('../models/space')

module.exports = {
  create(req, res) {
    return Space.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    }).then(Space => res.send(Space))
  },

  list(res) {
    return Space.findAll().then(spaces => res.send(spaces))
  },

  update(req, res) {
    return Space.update(
      {
        name: req.params.name || Space.name,
        description: req.params.description,
        price: req.params.price
      },
      {
        where: {
          id: req.params.id
        },
        returning: true
      }
    ).then(Space => res.send(Space))
  }
}
