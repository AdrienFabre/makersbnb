/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const spaces = sequelize.define(
    'spaces',
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      startDate: { type: DataTypes.INTEGER, allowNull: false },
      endDate: { type: DataTypes.INTEGER, allowNull: false },
    },
    {},
  );
  spaces.associate = function (models) {
    spaces.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return spaces;
};
