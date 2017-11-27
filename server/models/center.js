module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    centerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Facilities: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Available', 'Not Available'),
      defaultValue: 'active'
    },

  });

  Center.associate = models =>
    Center.hasMany(models.Events, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE',
    });

  return Center;
};
