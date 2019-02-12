const spaces = require('../models').spaces;

module.exports = {
  create(req, res) {
    return spaces
      .create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
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
