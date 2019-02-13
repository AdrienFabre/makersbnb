const Space = require('../models/space')

module.exports = {

  create(req, res) {
    return Space
      .create({
        name: req.body.name, 
        description: req.body.description, 
        price: req.body.price,
      })
     .then(Space => res.send(Space))
  },

  list(res) {
   return Space
     .findAll()
     .then(spaces => res.send(spaces))
  },
}; 


    
