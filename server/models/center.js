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

    status: {
      type: DataTypes.ENUM('Available', 'UnAvailable'),
      defaultValue: 'Available'
    },
  });
  Center.associate = (models) => {
    Center.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Center;
};

