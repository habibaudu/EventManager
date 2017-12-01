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
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
      centerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Centers',
          key: 'id',
          as: 'centerId',
        },
      }
    }
  });
  Events.associate = (models) => {
    Events.belongsTo(models.Center, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    });
  };
  Events.associate = (models) => {
    Events.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Events;
};
