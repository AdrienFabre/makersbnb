const spaces = require('../models').spaces;

module.exports = {
  create(req, res) {
    return spaces
      .create({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
      })
      .then(spaces => res.status(201).send(spaces))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return spaces
      .all()
      .then(spaces => res.status(200).send(spaces))
      .catch(error => res.status(400).send(error));
  },
};
