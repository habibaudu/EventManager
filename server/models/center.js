module.exports = (sequelize, DataTypes) => {
  const Centers = sequelize.define('Centers', {

    centerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },

    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Image cannot be null, enter true or false!'
        },
      }
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'isAvailable cannot be null'
        }
      }
    }
  });
  Centers.associate = (models) => {
    Centers.hasMany(models.Events, {
      foreignKey: 'centerId',
      as: 'events'
    });
  };
  return Centers;
};

