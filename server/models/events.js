module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Centers',
        key: 'id',
        as: 'centerId'
      }
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },

    eventDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Date cannot be null!'
        },
        is: {
          args: /(\d{2}(-\d{2}){2})/,
          msg: 'Fill in Date format yy-mm-dd'
        }
      }
    }
  });
  Events.associate = (models) => {
    Events.belongsTo(models.Centers, {
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
