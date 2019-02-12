'use strict';
module.exports = (sequelize, DataTypes) => {
  const spaces = sequelize.define('spaces', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  spaces.associate = function(models) {
    // associations can be defined here
  };
  return spaces;
};