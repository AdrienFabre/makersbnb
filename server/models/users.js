/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
  );
  Users.associate = function (models) {
    Users.hasMany(models.spaces, {
      foreignKey: 'userId',
      as: 'spacesItems',
    });
  };
  return Users;
};
