'use strict'
module.exports = (sequelize, DataTypes) => {
  const Space = sequelize.define(
    'Space',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      startDate: DataTypes.INTEGER,
      endDate: DataTypes.INTEGER
    },
    {}
  )
  Space.associate = function(models) {
    // associations can be defined here
  }
  return Space
}
