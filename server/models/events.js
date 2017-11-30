module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventDate: {
      type: DataTypes.STRING,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM,
      values: ['NotAvailable', 'Available'],
      default: 'Available'
    }
  });
  Events.associate = (models) => {
    Events.belongsTo(models.Center, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    });
  };
  return Events;
};
