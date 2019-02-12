const spacesController = require('../controllers').spaces;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Spaces API!',
  }));
  app.post('/api/spaces/create', spacesController.create);
  app.get('/api/spaces', spacesController.list);
};
