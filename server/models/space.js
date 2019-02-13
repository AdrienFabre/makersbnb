const DATABASE_URL = require('../config.server').DATABASE_URL

const Sequelize = require('sequelize')
const sequelize = new Sequelize(DATABASE_URL)

module.exports = sequelize.define('space', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
})
