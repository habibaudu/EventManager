module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {

    centerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Capacity: {
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
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,

    }
  });
  Center.associate = (models) => {
    Center.hasMany(models.Events, {
      foreignKey: 'centerId',
      as: 'events'
    });
  };
  return Center;
};

