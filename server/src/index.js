const DATABASE_URL = require('../config.server').DATABASE_URL

const Sequelize = require('sequelize')
const sequelize = new Sequelize(DATABASE_URL)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection Established')
  })
  .catch(err => {
    console.log('Unable to Connect')
  })
