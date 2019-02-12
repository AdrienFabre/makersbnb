const users = require('../models').users;

module.exports = {
  create(req, res) {
    return users
      .create({
        username: req.body.username,
      })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return users
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
};
