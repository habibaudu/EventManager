module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false
    },

  });

  Events.associate = models =>
    Events.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

  return Events;
};
