module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventDate: {
      type: DataTypes.STRING,
      allowNull: false
    },

    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM,
      values: ['NotAvailable', 'Available'],
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
