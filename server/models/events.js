module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dates: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },

  });

  Events.associate = models =>
    Events.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

  return Events;
};
